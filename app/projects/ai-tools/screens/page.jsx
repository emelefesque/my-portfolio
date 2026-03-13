import Image from "next/image";

export default function AdsScreens() {
  return (
    <div className="section">
      <h1>Screens</h1>
      <Image
        src="/images/ads-screen.png"
        alt="Screenshot of Ads interface"
        width={800}
        height={500}
      />
    </div>
  );
}
