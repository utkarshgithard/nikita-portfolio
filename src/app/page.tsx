import {
  Contact,
  Hero,
  PortfolioFooter,
  PortfolioHeader,
  Projects,
  Skills,
} from "@/components/portfolio";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <PortfolioHeader />
      <main id="main-content">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <PortfolioFooter />
    </>
  );
}
