import React from "react";
import { Link } from "react-router-dom"; // For navigation (optional if you're using React Router)

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <h1 style={styles.logo}>MyApp</h1>
        <ul style={styles.navLinks}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.navLink}>Home</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/about" style={styles.navLink}>About</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/services" style={styles.navLink}>Services</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/contact" style={styles.navLink}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#333",
    padding: "1rem 0",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  logo: {
    color: "#fff",
    fontSize: "24px",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  navLinks: {
    listStyleType: "none",
    display: "flex",
    gap: "1rem",
    margin: 0,
    padding: 0,
  },
  navItem: {},
  navLink: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "16px",
    transition: "color 0.3s",
  },
};

export default Navbar;
