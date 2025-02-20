import React, { useState, useEffect } from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import CheckLogin from "../components/checklogin";
import { supabase } from "../components/supabaseClient";

const ProfilePage = () => {
  const { user, handleLogout } = CheckLogin();

  const [activeSection, setActiveSection] = useState("profile");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [editing, setEditing] = useState(false);

  const [isDiscordConnected, setIsDiscordConnected] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
        const { data: { user: freshUser } } = await supabase.auth.getUser();      
      if (freshUser) {
        const connected = freshUser?.app_metadata?.providers?.includes("discord");
        setIsDiscordConnected(!!connected);
      }
    };
  
    fetchUser();
  }, []);  

  useEffect(() => {
    const fetchCustomUser = async () => {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', user.id)
        .single();
      
      if (!error && data) {
        setIsDiscordConnected(!!data.discord_id);
      }
    };
  
    fetchCustomUser();
  }, [user]);
  

  useEffect(() => {
    if (user) {
      setUsername(user.username || "");
      setEmail(user.email || "");
    }
  }, [user]);

  const updateUserData = async (updates) => {
    try {
      const { data, error } = await supabase
        .from("users")
        .update(updates, { returning: "minimal" })
        .eq("id", user.id)
        .maybeSingle();

      if (error) {
        console.error("❌ Error updating user data:", error);
        return null;
      }

      console.log("✅ User data updated successfully:", data);
      return data;
    } catch (err) {
      console.error("❌ Catch error updating user data:", err);
      return null;
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const startEditing = () => {
    setEditing(true);
  };

  const cancelEditing = () => {
    if (activeSection === "profile") {
      setUsername(user.username || "");
    } else {
      setEmail(user.email || "");
      setPassword("");
    }
    setEditing(false);
  };

  const saveChanges = async () => {
    if (activeSection === "profile") {
      console.log("Gemmer brugernavn:", username);
      await updateUserData({ username });
    } else if (activeSection === "privacy") {
      console.log("Gemmer email:", email);
      console.log("Gemmer password:", password);
      await updateUserData({ email, password });
    }

    setEditing(false);
  };

  const handleConnectDiscord = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "discord",
        options: {
          redirectTo: window.location.origin + "/smodifications-homepage/profile",
        },
      });
      if (error) {
        console.error("Fejl ved Discord OAuth:", error);
      } else {
        console.log("Bruger redirected til Discord-login:", data);
      }
    } catch (err) {
      console.error("Catch-fejl ved Discord OAuth:", err);
    }
  };

  if (!user) {
    return (
      <div className="auth-container">
        <h2>Loading data...</h2>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="dashboard-wrapper">
        <aside className="menu-panel">
          <h2 className="menu-title">Settings</h2>
          <div className="bar-divider"></div>
          <nav className="menu-options">
            <div
              className={`menu-item ${
                activeSection === "profile" ? "active" : ""
              }`}
              onClick={() => setActiveSection("profile")}
            >
              Profile
            </div>
            <div
              className={`menu-item ${
                activeSection === "privacy" ? "active" : ""
              }`}
              onClick={() => setActiveSection("privacy")}
            >
              Privacy
            </div>
            <div
              className={`menu-item ${
                activeSection === "connections" ? "active" : ""
              }`}
              onClick={() => setActiveSection("connections")}
            >
              Connections
            </div>
            <button onClick={handleLogout} className="menu-logout">
              Logout
            </button>
          </nav>
        </aside>

        <main className="profile-section">
          {activeSection === "profile" && (
            <div className="profile-card">
              <h1 className="profile-title">Profile Settings</h1>
              <div className="bar-divider2"></div>

              {!editing ? (
                <>
                  <div className="username-changep">
                    Brugernavn: {username}
                  </div>
                  <button onClick={startEditing}>Rediger</button>
                </>
              ) : (
                <>
                  <label>
                    Nyt brugernavn:
                    <input
                      type="text"
                      value={username}
                      onChange={handleUsernameChange}
                    />
                  </label>
                  <div style={{ marginTop: "1rem" }}>
                    <button onClick={saveChanges}>Gem</button>
                    <button
                      onClick={cancelEditing}
                      style={{ marginLeft: "0.5rem" }}
                    >
                      Annullér
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {activeSection === "privacy" && (
            <div className="privacy-section">
              <div className="profile-card">
                <h1 className="profile-title">Privacy Settings</h1>
                <div className="bar-divider2"></div>

                {!editing ? (
                  <>
                    <div className="username-changep">Email: {email}</div>
                    <div className="username-changep">Password: ******</div>
                    <button onClick={startEditing}>Rediger</button>
                  </>
                ) : (
                  <>
                    <label>
                      Ny email:
                      <input
                        type="text"
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </label>
                    <label style={{ marginTop: "1rem" }}>
                      Nyt password:
                      <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </label>
                    <div style={{ marginTop: "1rem" }}>
                      <button onClick={saveChanges}>Gem</button>
                      <button
                        onClick={cancelEditing}
                        style={{ marginLeft: "0.5rem" }}
                      >
                        Annullér
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

        {activeSection === "connections" && (
            <div className="connections-section">
            <div className="profile-card">
                <h1 className="profile-title">Connections Settings</h1>
                <div className="bar-divider2"></div>

                {isDiscordConnected ? (
                <p>Discord er forbundet!</p>
                ) : (
                <button onClick={handleConnectDiscord}>
                    Connect Discord
                </button>
                )}
            </div>
            </div>
        )}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;