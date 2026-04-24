import { SiteHeader } from "./components/SiteHeader";
import { IntroLede } from "./components/IntroLede";
import { MomentumSection } from "./components/MomentumSection";
import { TalkingPointsSection } from "./components/TalkingPointsSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { ClientLogosSection } from "./components/ClientLogosSection";

export default function App() {
  return (
    <div className="min-h-screen">
      <IntroLede />
      <MomentumSection />
      <TalkingPointsSection />
      <PortfolioSection />
      <ClientLogosSection />
    </div>
  );
}
