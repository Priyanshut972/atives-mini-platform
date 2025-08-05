import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/jobs", label: "Jobs" },
    { path: "/explore", label: "Explore" },
    { path: "/profile", label: "Profile" },
    { path: "/onboarding", label: "Onboarding" },
  ];

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "12px 24px",
        backgroundColor: "#f8f9fa",
        borderBottom: "1px solid #ddd",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          style={{
            textDecoration: "none",
            fontWeight: location.pathname === link.path ? "bold" : "normal",
            color: location.pathname === link.path ? "#007bff" : "#333",
          }}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
