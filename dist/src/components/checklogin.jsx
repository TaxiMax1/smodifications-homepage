import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

const CheckLogin = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userId = localStorage.getItem("user_id");

        if (userId) {
            const fetchUser = async () => {
                const { data, error } = await supabase
                    .from("users")
                    .select("*")
                    .eq("id", userId)
                    .single();

                if (error) {
                    console.error("❌ Error fetching user:", error);
                    localStorage.removeItem("user_id"); 
                    setUser(null);
                } else {
                    setUser(data);
                }
            };

            fetchUser();
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user_id"); 
        setUser(null);
        window.location.reload(); 
    };

    return { user, handleLogout };
};

export default CheckLogin;