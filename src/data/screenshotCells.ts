import type { ScreenshotCell } from "../ScreenshotGrid";
import screenshotBioengineering from "../images/Solutions images/Bioengineering.jpg";
import screenshotEngineeringMain from "../images/Solutions images/Eng Main Site.jpg";
import screenshotIcme from "../images/Solutions images/ICME.jpg";
import screenshotMechanicalEngineering from "../images/Solutions images/Mechanical Eng.jpg";
import screenshotChemh from "../images/Stanford Sites images/Chemh 1.png";
import screenshotCSharp from "../images/Stanford Sites images/C-Sharp.jpg";
import screenshotResearchHub from "../images/Stanford Sites images/Research Hub.jpg";
import screenshotTechResources from "../images/Stanford Sites images/Tech Resources.jpg";

export const stanfordSitesCells: ScreenshotCell[] = [
  { id: "c1", src: screenshotChemh.src, alt: "Chem h" },
  { id: "c2", src: screenshotResearchHub.src, alt: "" },
  { id: "c3", src: screenshotCSharp.src, alt: "" },
  { id: "c4", src: screenshotTechResources.src, alt: "" },
];

export const solutionsCells: ScreenshotCell[] = [
  { id: "c1", src: screenshotEngineeringMain.src, alt: "" },
  { id: "c2", src: screenshotIcme.src, alt: "" },
  { id: "c3", src: screenshotBioengineering.src, alt: "" },
  { id: "c4", src: screenshotMechanicalEngineering.src, alt: "" },
];
