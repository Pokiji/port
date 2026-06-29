type HeroProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryText?: string;
  primaryLink?: string;
  secondaryText?: string;
  secondaryLink?: string;
};

export default function Hero({
  eyebrow = "Personal Portfolio",
  title = "Hi, I'm Jam.",
  subtitle = "I build robotics software, control systems, and clean web projects.",
  primaryText = "View Projects",
  primaryLink = "#projects",
  secondaryText = "Contact Me",
  secondaryLink = "#contact",
}: HeroProps) {
  return (
    <section className="min-h-screen flex items-center bg-neutral-950 text-white px-6">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm uppercase tracking-widest text-blue-400">
          {eyebrow}
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-neutral-400 md:text-xl">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={primaryLink}
            className="rounded-xl bg-blue-500 px-6 py-3 font-medium text-white hover:bg-blue-600"
          >
            {primaryText}
          </a>

          <a
            href={secondaryLink}
            className="rounded-xl border border-white/15 px-6 py-3 font-medium text-white hover:bg-white/10"
          >
            {secondaryText}
          </a>
        </div>
      </div>
    </section>
  );
}