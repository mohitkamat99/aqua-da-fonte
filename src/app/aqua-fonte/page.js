"use client";
import dynamic from "next/dynamic";

const LandingPage = dynamic(() =>
  import("../../components/component/landingpage").then(
    (mod) => mod.landingPage
  )
);

export default function Hero() {
  return (
    <div>
      <LandingPage />
    </div>
  );
}
