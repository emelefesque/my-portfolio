import Link from "next/link";

export default function ProjectCard({ title, href }) {
  return (
    <Link href={href}>
      <div className="card">
        <h2>{title}</h2>
        <p style={{ opacity: 0.8 }}>View case study →</p>
      </div>
    </Link>
  );
}
