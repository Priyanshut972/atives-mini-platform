import React from "react";

type CardProps = {
  title: string;
  subtitle?: string;
  image?: string;
  description?: string;
  footer?: string;
};

const Card: React.FC<CardProps> = ({ title, subtitle, image, description, footer }) => {
  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        padding: "16px",
        maxWidth: "400px",
        margin: "12px auto",
        boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
        backgroundColor: "#fff",
      }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "12px",
          }}
        />
      )}

      <h3 style={{ margin: "0 0 8px" }}>{title}</h3>

      {subtitle && <h4 style={{ margin: "0 0 12px", color: "#555" }}>{subtitle}</h4>}

      {description && <p style={{ fontSize: "14px", color: "#444" }}>{description}</p>}

      {footer && <div style={{ marginTop: "12px", fontSize: "12px", color: "#888" }}>{footer}</div>}
    </div>
  );
};

export default Card;
