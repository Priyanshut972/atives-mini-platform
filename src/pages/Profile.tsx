import React, { useState } from "react";

const Profile: React.FC = () => {
  const [tab, setTab] = useState<"Posts" | "Projects" | "Saved">("Posts");

  const renderContent = () => {
    switch (tab) {
      case "Posts":
        return <p>Showing recent posts...</p>;
      case "Projects":
        return <p>Showing portfolio projects...</p>;
      case "Saved":
        return <p>Showing saved items...</p>;
      default:
        return null;
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Creator Profile</h2>
      <p>Username: creative_user</p>
      <p>Followers: 123</p>

      <div style={{ marginTop: "20px" }}>
        {["Posts", "Projects", "Saved"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t as any)}
            style={{
              marginRight: "10px",
              padding: "8px 16px",
              backgroundColor: tab === t ? "#007bff" : "#f1f1f1",
              color: tab === t ? "#fff" : "#000",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>{renderContent()}</div>
    </div>
  );
};

export default Profile;
