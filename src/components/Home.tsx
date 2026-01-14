import { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import CheckBox from "./CheckBox";
import ProjectCollection from "./ProjectCollection";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const getInitialReducedMotion = () => {
    try {
      const saved = localStorage.getItem("reducedMotion");
      if (saved !== null) return saved === "true";
    } catch (e) {
      // ignore storage access errors
      void e;
    }
    return (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  };
  const [reducedMotion, setReducedMotion] = useState<boolean>(
    getInitialReducedMotion
  );

  useEffect(() => {
    try {
      localStorage.setItem("reducedMotion", String(reducedMotion));
    } catch (e) {
      // ignore storage access errors
      void e;
    }
  }, [reducedMotion]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (reducedMotion) {
      v.autoplay = false;
      v.pause();
    } else {
      v.autoplay = true;
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    }
  }, [reducedMotion]);

  return (
    <div className="min-h-screen bg-black text-white" id="Home">
      <Sidebar />
      {/* Splash section occupies the first viewport */}
      <div className="min-h-screen relative">
        {/* Reduced motion toggle */}
        <div className="fixed bottom-4 right-4 z-100">
          <CheckBox
            id="reducedMotionToggle"
            label="Reduced Motion"
            checked={reducedMotion}
            onChange={(checked) => setReducedMotion(checked)}
          />
        </div>

        {/* Background video fills splash container */}
        <video
          ref={videoRef}
          autoPlay={!reducedMotion}
          muted
          loop
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-50 blur-xs"
        >
          <source src="/video/Pokeclash-Teaser.mp4" type="video/mp4" />
        </video>

        {/* Center logo locked to splash middle */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[40vh] h-[40vh] origin-center -rotate-90"
          >
            <defs>
              <path
                id="circlePath"
                d="
                  M 45,2
                  a 48,48 0 1,1 0,96
                  a 48,48 0 1,1 0,-96
                "
              />
              <path
                id="circlePathReverse"
                d="
                  M 50,2
                  a 48,48 0 1,0 0,96
                  a 48,48 0 1,0 0,-96
                "
              />
            </defs>
            {/* Center logo inside the circle; counter-rotate to keep upright */}
            <g transform="rotate(90 50 50)">
              <image href="/image/Logo2nd.png" x="10" y="10" width="80" height="80" />
            </g>
            <text fill="white" fontSize="8" fontWeight="600" textAnchor="middle" style={{ letterSpacing: "0.24em" }}>
              <textPath href="#circlePathReverse" startOffset="25%" dy="1.5">MAX VAN HAANDEL</textPath>
            </text>
            <text fill="white" fontSize="8" fontWeight="600" textAnchor="middle" style={{ letterSpacing: "0.24em" }}>
              <textPath href="#circlePath" startOffset="25%" dy="-2">PORTFOLIO</textPath>
            </text>
          </svg>
        </div>
      </div>

      {/* Project Section */}
      <div className="relative z-10" id="Projects">
        <h1 className="flex items-center justify-center bg-neutral-700 text-5xl font-bold">Projects</h1>
        <ProjectCollection>
          <div>
            <h2 className="text-2xl font-semibold">Pokéclash</h2>
            <p className="mt-2 text-white/70">Coming soon.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Cyber Crime: The Academy</h2>
            <p className="mt-2 text-white/70">Coming soon.</p>
          </div>
          <div> 
            <h2 className="text-2xl font-semibold">Fontys Sports</h2>
            <p className="mt-2 text-white/70">Coming soon.</p>
          </div>
        </ProjectCollection>
      </div>
    </div>
  );
}
