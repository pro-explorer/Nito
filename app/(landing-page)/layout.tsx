import { Footer } from "@/components/footer";
import { LandingPageHeader } from "@/components/landing-page-header";
import { stackServerApp } from "@/stack";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingPageHeader
        items={[
          { title: "Home", href: "/" },
          { title: "Features", href: "/#features" },
          { title: "Pricing", href: "/#pricing" },
        ]}
      />
      <main className="flex-1">{props.children}</main>
      <Footer
        builtBy="Nito"
        builtByLink="https://www.nito.com/"
        githubLink="https://github.com/nito" // Replace with actual GitHub if applicable
        twitterLink="https://twitter.com/nito" // Replace with actual Twitter link if applicable
        linkedinLink="https://linkedin.com/company/nito" // Replace with actual LinkedIn link if applicable
      />
    </div>
  );
}
