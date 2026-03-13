import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div className="section">
      <div
        className="gradient-accent"
        style={{
          borderRadius: "var(--radius)",
          padding: "3rem 2rem",
          color: "#fff",
          marginBottom: "2rem",
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
          Hi, I’m Megan.
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: 600 }}>
          A designer focused on product systems, usability, and clean interfaces.
        </p>
      </div>

      <h2>Case Studies</h2>
      <ProjectCard title="Ads" href="/projects/ads" />
      <ProjectCard title="GDPR" href="/projects/gdpr" />
      <ProjectCard title="Internal AI Tools" href="/projects/ai-tools" />
      <ProjectCard title="Icon Library" href="/projects/icon-library" />
      <ProjectCard title="Placeholder A" href="/projects/placeholder-a" />
      <ProjectCard title="Placeholder B" href="/projects/placeholder-b" />
      <ProjectCard title="Placeholder C" href="/projects/placeholder-c" />
    </div>
  );
}
