import { SiteHeader } from "./components/SiteHeader";
import { IntroLede } from "./components/IntroLede";
import { MomentumSection } from "./components/MomentumSection";
import { TalkingPointsSection } from "./components/TalkingPointsSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { ClientLogosSection } from "./components/ClientLogosSection";
import { EngineeringSection } from "./components/EngineeringSection";
import { FooterLocal } from "./components/FooterLocal";
import { FooterGlobal } from "./components/FooterGlobal";

export default function App() {
  return (
    <div className="min-h-screen">
      {/* <SiteHeader /> */}
      <IntroLede />
      <MomentumSection />
      <TalkingPointsSection />
      <PortfolioSection />
      <ClientLogosSection />
      {/* <EngineeringSection />
      <FooterLocal />
      <FooterGlobal /> */}
    </div>
  );
}