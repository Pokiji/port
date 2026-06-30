type HeroProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

export default function Hero({
  eyebrow = "SYSTEM_001 / PERSONAL SITE",
  title = "Building interfaces, robots, and autonomous systems.",
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}: HeroProps) {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-4xl ">
        <p className="font-mono text-sm uppercase tracking-label text-accent">
          {eyebrow}
        </p>

        <h1 className="text-hero leading-none tracking-tight text-ink">
          {title}
        </h1>

        <p className="max-w-2xl text-body text-steel">
          {subtitle}
        </p>

        <div className="grid gap-4 pt-8 md:grid-cols-3">
          <div className="border border-hairline p-6">
            <p className="font-mono text-label text-accent">CTRL_001</p>
            <h2 className="mt-4 text-card">Control Systems</h2>
            <p className="mt-3 text-caption text-steel">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="border border-hairline p-6">
            <p className="font-mono text-label text-accent">WEB_002</p>
            <h2 className="mt-4 text-card">Web Interfaces</h2>
            <p className="mt-3 text-caption text-steel">
              Integer nec odio. Praesent libero. Sed cursus ante dapibus.
            </p>
          </div>

          <div className="border border-hairline p-6">
            <p className="font-mono text-label text-accent">AUTO_003</p>
            <h2 className="mt-4 text-card">Autonomy</h2>
            <p className="mt-3 text-caption text-steel">
              Duis sagittis ipsum. Praesent mauris fusce nec tellus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}