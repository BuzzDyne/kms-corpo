import React from "react";
import "style.css";
import "tailwindcss/lib/css/preflight.css";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import plaqueBrass from "images/kms/kuningan.jpg";
import plaqueWBox from "images/kms/PlaqueWithbox.jpg";
import plaqueTokped from "images/kms/PlaqueTokped.jpg";
import plaquePen from "images/kms/PlaqueWithPen.jpg";

import crsytalIceberg from "images/kms/KRISTAL ICEBERG 2.jpg";
import crystalGold from "images/kms/KRISTAL AWARD 1.jpg";
import crystalCircle from "images/kms/CIRCLE WOOD 3.jpg";
import crystalWood from "images/kms/SQUARE WOOD 2.jpg";

import otherImage1 from "images/kms/other/1.jpg";
import otherImage2 from "images/kms/other/2.jpg";
import otherImage3 from "images/kms/other/3.jpg";
import otherImage4 from "images/kms/other/4.jpg";
import otherImage5 from "images/kms/other/5.jpg";
import otherImage6 from "images/kms/other/6.jpg";
import otherImage7 from "images/kms/other/7.jpg";
import otherImage8 from "images/kms/other/8.jpg";

import packageImage1 from "images/kms/Package/1.jpg";
import packageImage2 from "images/kms/Package/2.jpg";
import packageImage3 from "images/kms/Package/3.jpg";
import packageImage4 from "images/kms/Package/4.jpg";
import packageImage5 from "images/kms/Package/5.jpg";
import packageImage6 from "images/kms/Package/6.jpg";
import packageImage7 from "images/kms/Package/7.jpg";

import Hero from "components/hero/BackgroundAsImage";
import Footer from "components/footers/MiniCenteredFooter";
import AboutUs from "components/features/TwoColWithTwoFeaturesAndButtons";
import Products from "components/cards/TabCardGrid";
import Stat from "components/features/ThreeColCenteredStatsPrimaryBackground";
import Testi from "components/testimonials/TwoColumnWithImage";
import Logo from "components/features/LogoSlider";
import Ceo from "components/features/TwoColSingleFeatureWithStats2";
import Contact from "components/forms/SimpleContactUs";

const tabs = {
  Plaque: [
    {
      imageSrc: plaqueWBox,
      title: "Acrylic Plaque with Box",
    },
    {
      imageSrc: plaqueTokped,
      title: "Acrylic Plaque with Custom Cutting",
    },
    {
      imageSrc: plaquePen,
      title: "Acryclic Plaque with Pen Holder",
    },
    {
      imageSrc: crsytalIceberg,
      title: "Crystal Iceberg Plaque",
    },
    {
      imageSrc: crystalGold,
      title: "Crystal Plaque with Golden Base",
    },
    {
      imageSrc: plaqueBrass,
      title: "Brass Plaque",
    },
    {
      imageSrc: crystalCircle,
      title: "Crystal Plaque with Circular Wooden Frame",
    },
    {
      imageSrc: crystalWood,
      title: "Crystal Plaque with Wooden base",
    },
  ],
  Package: [
    {
      imageSrc: packageImage1,
      title: "Book Hampers",
      content: "Book, Tumbler, Pen",
    },
    {
      imageSrc: packageImage2,
      title: "eMoney Hampers",
      content: "Tumbler, eMoney, Business Card Holder, Flashdisk",
    },
    {
      imageSrc: packageImage3,
      title: "Seminar Kita (A)",
      content:
        "Canvas Totebag, A6 Notebook, LED Tumbler, Cutlery Set, Keychain",
    },
    {
      imageSrc: packageImage4,
      title: "Seminar Kita (B)",
      content:
        "Canvas Totebag, A6 Notebook, Business Card Holder, Pen, Keychain",
    },
    {
      imageSrc: packageImage5,
      title: "Seminar Kita (C)",
      content:
        "Canvas Totebag, RFID Safe Card Holder, Umbrella, LED Tumbler, Keychain",
    },
    {
      imageSrc: packageImage6,
      title: "Seminar Kita (D)",
      content:
        "Canvas Totebag, Pocket Hand Sanitizer, Cutlery Set, LED Tumbler, Keychain",
    },
    {
      imageSrc: packageImage7,
      title: "Seminar Kita (E)",
      content:
        "Canvas Totebag, Business Card Holder, Flashdisk, LED Tumbler, Keychain",
    },
  ],
  Others: [
    {
      imageSrc: otherImage1,
      title: "Custom Engraved LED Tumbler",
    },
    {
      imageSrc: otherImage2,
      title: "Custom Engraved Tumbler",
    },
    {
      imageSrc: otherImage3,
      title: "Custom Engraved Corkcicle",
    },
    {
      imageSrc: otherImage4,
      title: "Custom Flazz ID Card",
    },
    {
      imageSrc: otherImage5,
      title: "Acrylic Door Sign",
    },
    {
      imageSrc: otherImage6,
      title: "Acrylic Keychain",
    },
    {
      imageSrc: otherImage7,
      title: "Acrylic Medal",
    },
    {
      imageSrc: otherImage8,
      title: "Brass Medal",
    },
  ],
};

const stat = {
  subheading: "",
  heading: "Over 9000 Projects Completed",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  stats: [
    {
      key: "Clients",
      value: "2500+",
    },
    {
      key: "Revenues",
      value: "$100M+",
    },
    {
      key: "Employees",
      value: "150+",
    },
  ],
};

function App() {
  return (
    <AnimationRevealPage disabled>
      <Hero />
      <AboutUs />
      <Products tabs={tabs} />
      <Stat
        heading={stat.heading}
        subheading={stat.subheading}
        description={stat.description}
        stats={stat.stats}
      />
      <Testi />
      <Logo />
      <Ceo />
      <Contact />

      <Footer />
    </AnimationRevealPage>
  );
}

export default App;
