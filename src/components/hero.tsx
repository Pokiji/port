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
    <section className="px-6 pt-3">
      <div className="CTA flex flex-col">
        <div className=" text-caption text-blue-400 font-mono text-label pl-1">C:\Users\Alex</div>
        <div className="text-hero font-mono font-light">Rebuild,<br />  Redesign, Focus </div>
        <div className="text-caption text-steel-dim">Doing things I couldn't before</div>
      </div>
    </section>
  );
}