require('dotenv').config();
const express = require('express');
const Stripe = require('stripe');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.post('/create-checkout-session', express.json(), async (req, res) => {
    try {
        const { product, user } = req.body;

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: product.name,
                        },
                        unit_amount: Math.round(parseFloat(product.price.replace('€', '')) * 100),
                    },
                    quantity: 1,
                },
            ],
            metadata: { username: user.username },
            mode: 'payment',
            success_url: `${process.env.CLIENT_URL}/#/success`,
            cancel_url: `${process.env.CLIENT_URL}/#/cancel`,
        });

        res.json({ url: session.url });

        const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;
        await axios.post(discordWebhookUrl, {
            content: `**New Purchase Alert!**\n\n**User:** ${user.username}\n**Product:** ${product.name}\n**Price:** ${product.price}\n*Purchase Successful!*`,
        });

    } catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));