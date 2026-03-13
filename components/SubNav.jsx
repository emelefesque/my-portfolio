import Link from "next/link";

export default function Subnav({ base }) {
  return (
    <nav style={{ marginBottom: "1.5rem", fontSize: "0.95rem" }}>
      <Link href={`${base}/overview`}>Overview</Link> •{" "}
      <Link href={`${base}/process`}>Process</Link> •{" "}
      <Link href={`${base}/screens`}>Screens</Link> •{" "}
      <Link href={`${base}/impact`}>Impact</Link>
    </nav>
  );
}
