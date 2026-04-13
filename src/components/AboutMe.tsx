type AboutMeProps = {
  name: string;
  study: string;
  resumeUrl: string;
};

export default function AboutMe({ name, study, resumeUrl }: AboutMeProps) {
  const isPdfResume = resumeUrl.toLowerCase().endsWith(".pdf");

  return (
    <section
      id="About"
      className="mt-auto flex justify-center bg-neutral-900 px-4 py-16 sm:px-6 md:px-10 lg:px-14 my-4"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="rounded-2xl border border-white/15 bg-neutral-800/70 p-8 text-center shadow-xl backdrop-blur-sm md:p-10 flex flex-col items-center justify-center">
        <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-white text-center sm:text-5xl">
          About Me
        </h1>

        <img
          src="./image/max.JPG"
          alt="Max Van Haandel"
          className="mx-auto mb-8 block size-96 object-cover shadow-2xl sm:size-72"
        />

        <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-neutral-300 sm:text-lg">
          I am <span className="font-semibold text-white">{name}</span>, a student of <span className="font-semibold text-white">{study}</span>. I like turning ideas into
          interactive products that balance strong design with practical
          implementation. My focus is on making experiences that feel clear,
          engaging, and meaningful for the people using them.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              View Resume
            </a>
            {isPdfResume ? (
              <a
                href={resumeUrl}
                download
                className="inline-flex items-center rounded-md border border-white/20 px-5 py-3 font-semibold text-white/90 transition hover:border-white/50 hover:text-white"
              >
                Download PDF
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
