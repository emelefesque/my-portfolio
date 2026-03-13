export default function Contact() {
  return (
    <div className="section">
      <h1>Contact</h1>
      <p>Reach out if you’d like to collaborate or chat about design, AI, or systems thinking.</p>

      <div
        className="card"
        style={{
          textAlign: "center",
          padding: "2rem",
          lineHeight: 1.6,
        }}
      >
        <strong>Email:</strong>{" "}
        <a href="mailto:your.email@domain.com">your.email@domain.com</a>
        <br />
        <strong>LinkedIn:</strong>{" "}
        <a href="[linkedin.com](https://linkedin.com/in/yourprofile)" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/yourprofile
        </a>
        <br />
        <strong>GitHub:</strong>{" "}
        <a href="[github.com](https://github.com/yourhandle)" target="_blank" rel="noopener noreferrer">
          github.com/yourhandle
        </a>
      </div>
    </div>
  );
}
