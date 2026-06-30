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
    <section className="min-h-screen flex items-center px-6">
    
    </section>
  );
}