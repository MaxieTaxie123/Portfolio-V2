import { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import CheckBox from "./CheckBox";
import ProjectCollection from "./ProjectCollection";
import { ScrollDownAnim } from "./ScrollDownAnim";
import AboutMe from "./AboutMe";

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
    getInitialReducedMotion,
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
              <image
                href="/image/Logo2nd.png"
                x="10"
                y="10"
                width="80"
                height="80"
              />
            </g>
            <text
              fill="white"
              fontSize="8"
              fontWeight="600"
              textAnchor="middle"
              style={{ letterSpacing: "0.24em" }}
            >
              <textPath href="#circlePathReverse" startOffset="25%" dy="1.5">
                MAX VAN HAANDEL
              </textPath>
            </text>
            <text
              fill="white"
              fontSize="8"
              fontWeight="600"
              textAnchor="middle"
              style={{ letterSpacing: "0.24em" }}
            >
              <textPath href="#circlePath" startOffset="25%" dy="-2">
                PORTFOLIO
              </textPath>
            </text>
          </svg>
        </div>
        <ScrollDownAnim />
      </div>
      {/* Project Section */}
      <div className="relative z-10" id="Projects">
        <h1 className="flex items-center justify-center bg-neutral-700 text-5xl font-bold">
          Projects
        </h1>
        <ProjectCollection>
          <div className="grid gap-4 md:grid-cols-2 md:items-stretch">
            <div className="min-w-0">
              <h2 className="text-2xl font-semibold">Pokéclash</h2>
              <p className="m-2 text-white/70">
                For a side project of mine, I decided to make my own pokemon
                game. The idea for this game came from that I played a game
                called 'PokéRogue' (Really fun game, totally play it.). In this
                game you play a 1v1 pokemon battle where the goal is to have the
                most HP at the end of your turn. The one with the most HP wins
                and if that is the player, he/she gets to move on. At the moment
                it is in an inactive state due to different priorities, and the
                fact that this is heavily copyrighted but I'm looking to resume
                work on this. Play the game here:{" "}
                <a
                  href="https://i505017.hera.fontysict.net/Pok%C3%A9Clash/"
                  className="underline"
                >
                  Pokéclash
                </a>
                .
              </p>
            </div>
            <div className="h-full w-full overflow-hidden rounded-lg">
              <img
                src="/image/PokéClash.png"
                alt="Pokéclash gameplay screenshot"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:items-stretch">
            <div className="min-w-0 md:order-2">
              <h2 className="text-2xl font-semibold">
                Cyber Crime: The Academy
              </h2>
              <p className="mt-2 text-white/70">
                During my internship at Headtilt, I contributed to Cyber Crime
                The Academy—a modular micro-/e-learning platform designed to
                help employees build cyber awareness over the course of a year.
                The product combines short learning tasks with interactive
                minigames and gamification elements (such as progress tracking
                and achievements) to make cybersecurity topics like phishing and
                social engineering engaging and practical. My role focused on
                the design, prototyping, and playtesting of minigame concepts,
                plus documenting design decisions and test insights to support
                further development by the team. Because this work was completed
                in a professional, commercial environment, I can’t share full
                details, internal documentation, or source code due to
                confidentiality agreements. You can play the games here:
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>
                  <a
                    href="https://i505017.hera.fontysict.net/Phantom_Build/#/truth"
                    className="underline"
                  >
                    Truth Finder
                  </a>
                </li>
                <li>
                  <a
                    href="https://i505017.hera.fontysict.net/Phantom_Build/#/deepfake"
                    className="underline"
                  >
                    Deepfake Detector
                  </a>
                </li>
                <li>
                  <a
                    href="https://i505017.hera.fontysict.net/Phantom_Build/#/phishing"
                    className="underline"
                  >
                    Phishing Detective
                  </a>
                </li>
              </ul>
            </div>
            <div className="h-full w-full overflow-hidden rounded-lg md:order-1">
              <img
                src="/image/PhishingDetective.png"
                alt="Phishing Detective interface screenshot"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:items-stretch">
            <div className="min-w-0">
              <h2 className="text-2xl font-semibold">Fontys Sports</h2>
              <p className="mt-2 text-white/70">
                Together with a small group of people, I worked on developing
                Fontys Sports. This is a minigame compilation based on WII
                Sports, but this is made for the Meta Quest 3 and it contains
                different sports then those that are included in the original
                WII Sports (Resorts). It is also aimed to be a parody of WII
                Sports. The minigames that are present are as followed:
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>Minigolf</li>
                <li>Table Tennis</li>
                <li>Penalty Shooting</li>
                <li>Feet-Saber</li>
              </ul>
              <p>
                The minigames I've worked on are Table Tennis and Feet-Saber.
                For Table Tennis, I worked on collision detection, score
                handling and level design. These all were interesting challenges
                to work on, especially the collision detection. Feet-Saber is a
                Beat-Saber knockoff where instead of 2 controllers, you have 2
                extra controllers strapped to your feet. So, you have to use
                your whole body to play the game. For Feet-Saber, I worked on
                the level design and the visual design of the game. I also
                worked on the development of a custom shader for the sabers to
                give them a unique look and I also worked on making music based
                decoration. The game is currently in an inactive state due to
                different priorities and half the team has already graduated.
              </p>
            </div>
            <div className="h-full w-full overflow-hidden rounded-lg">
              <img
                src="/image/FontysSports.png"
                alt="Fontys Sports table tennis arena screenshot"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:items-stretch">
            <div className="min-w-0 md:order-2">
              <h2 className="text-2xl font-semibold">KistSurfers</h2>
              <p>
                KistSurfers is a Unity-based educational game developed for De
                OntdekFabriek. The game was designed to teach children about the
                factory’s history, showcasing both its original heritage and its
                modern-day location through interactive gameplay.
              </p>

              <p>
                I joined this as a "brownfield" project, which involved updating
                and improving an existing game. Our team focused on refactoring
                old code to make it more efficient, designing new levels, and
                building a smooth system for transitioning between different
                game stages.
              </p>

              <ul>
                <li>
                  Realistic Swing Physics: I developed a custom physics system
                  for the player’s carriage. I created a natural "swinging" feel
                  that makes the movement more immersive for the players. The
                  problem with this was that during testing the swinging motion
                  caused some motion sickness, and to fix this I added some
                  limitations on how far the carriage can swing while still
                  keeping the original feel.
                </li>
                <li>
                  Bug Fixing & Polishing: I spent significant time identifying
                  and resolving technical glitches. This included fixing
                  collision errors and ensuring the level-transfer system worked
                  seamlessly without crashing.
                </li>
              </ul>
            </div>
            <div className="h-full w-full overflow-hidden rounded-lg md:order-1">
              <img
                src="/image/KistSurfers.png"
                alt="KistSurfers project preview"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:items-stretch">
            <div className="min-w-0">
              <h2 className="text-2xl font-semibold">HandChat</h2>
              <div className="mt-2 space-y-4 text-white/70">
                <p>
                  This exploratory project was developed to push the boundaries
                  of natural user interfaces within Virtual Reality. By
                  leveraging the Meta Interaction SDK{" "}
                  in Unity, I focused on removing the barrier of physical
                  controllers to create a more intuitive way for players to
                  communicate with digital entities.
                </p>

                <p>
                  The core objective of this project was to develop a{" "}
                  gesture-driven chatbot. Unlike traditional AI
                  interactions that rely on text or voice, this system
                  interprets the user&apos;s intent through skeletal hand tracking.
                  This involved deep-diving into gesture detection algorithms
                  and mapping complex hand poses to specific communicative
                  triggers.
                </p>

                <h3 className="text-xl font-semibold text-white">
                  Technical Implementation & Features
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Dynamic Interaction Logic: I built a
                    prototype system that translates physical actions into
                    social cues. The AI is currently programmed to recognize
                    and respond to:
                    <ul className="ml-5 list-disc list-inside">
                      <li>
                        Social Greetings: Waving or gesturing
                        to initiate a conversation.
                      </li>
                      <li>
                        Mini-Games: A fully functional{" "}
                        <em>Rock, Paper, Scissors</em> module that tests the
                        system&apos;s latency and recognition accuracy.
                      </li>
                      <li>
                        Expressive Feedback: The ability for
                        the chatbot to recognize and react to various informal
                        or &quot;cheeky&quot; hand signals, adding a layer of
                        personality and reactive realism to the NPC.
                      </li>
                    </ul>
                  </li>
                  <li>
                    State Management: I implemented a logic
                    handler that ensures the chatbot remains in sync with the
                    player&apos;s movements, preventing &quot;false positives&quot; and
                    ensuring the interaction feels fluid and intentional.
                  </li>
                </ul>
              </div>
            </div>
            <div className="h-full w-full overflow-hidden rounded-lg">
              <img
                src="/image/HandChat.gif"
                alt="HandChat hand gesture recognition demo"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Heijmans Scanning Game</h2>
            <p className="mt-2 text-white/70">Coming soon.</p>
          </div>
        </ProjectCollection>
      </div>
      <div className="relative z-10" id="About">
        <AboutMe
          name="Max van Haandel"
          study="ICT at Fontys University of Applied Sciences"
          resumeUrl="/docs/CV_Max-3.pdf"
        />
      </div>
    </div>
  );
}
