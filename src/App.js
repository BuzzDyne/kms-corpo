import React, { useRef, useState } from "react";
import "style.css";
import "tailwindcss/lib/css/preflight.css";
import AnimationRevealPage from "helpers/AnimationRevealPage";

import Hero from "components/hero/BackgroundAsImage";
import Footer from "components/footers/MiniCenteredFooter";
import AboutUs from "components/features/TwoColWithTwoFeaturesAndButtons";
import Products from "components/cards/TabCardGrid";
import Stat from "components/features/ThreeColCenteredStatsPrimaryBackground";
import Testi from "components/testimonials/TwoColumnWithImage";
import Logo from "components/features/LogoSlider";
import Ceo from "components/features/TwoColSingleFeatureWithStats2";
import ContactInfo from "components/features/ThreeColSimple";
import Contact from "components/forms/SimpleContactUs";
import { LanguageProvider } from "context/LanguageContext";

function App() {
  const aboutUsRef = useRef(null);
  const productsRef = useRef(null);
  const testiRef = useRef(null);
  const contactRef = useRef(null);
  const [animationDisabled, setAnimationDisabled] = useState(false);

  const scrollToSection = (ref) => {
    console.log(`Inside Scroll to Section ${ref}`);
    setAnimationDisabled(true);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAboutUs = () => scrollToSection(aboutUsRef);
  const scrollToProducts = () => scrollToSection(productsRef);
  const scrollToTesti = () => scrollToSection(testiRef);
  const scrollToContact = () => scrollToSection(contactRef);

  return (
    <LanguageProvider>
      <AnimationRevealPage disabled={animationDisabled}>
        {/* <button
          style={{ height: "100px" }}
          onClick={() => scrollToSection(productsRef)}
        >
          asd
        </button> */}
        <Hero
          scrollToAboutUs={scrollToAboutUs}
          scrollToProducts={scrollToProducts}
          scrollToTesti={scrollToTesti}
          scrollToContact={scrollToContact}
        />
        <AboutUs refProp={aboutUsRef} />
        <Products refProp={productsRef} />
        <Stat />
        <Testi refProp={testiRef} />
        <Logo />
        <Ceo />
        <ContactInfo refProp={contactRef} />
        <Contact />

        <Footer
          scrollToAboutUs={scrollToAboutUs}
          scrollToProducts={scrollToProducts}
          scrollToTesti={scrollToTesti}
          scrollToContact={scrollToContact}
        />
      </AnimationRevealPage>
    </LanguageProvider>
  );
}

export default App;
