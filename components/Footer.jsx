export default function Footer() {
  return (
    <footer
      style={{
        padding: "2rem var(--space-md)",
        textAlign: "center",
        borderTop: "1px solid #ddd",
        marginTop: "2rem",
        fontSize: "0.9rem",
        color: "#777",
      }}
    >
      © {new Date().getFullYear()} Your Name — Built with Next.js and Vercel
    </footer>
  );
}
