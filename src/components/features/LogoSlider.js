import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import {
  Container as ContainerBase,
  ContentWithPaddingLg,
  ContentWithPaddingXl,
} from "components/misc/Layouts";
import { SectionDescription } from "components/misc/Typography";
import Slider from "react-infinite-logo-slider";

import logo1 from "images/kms/logoCompany/logo1.webp";
import logo2 from "images/kms/logoCompany/logo2.webp";
import logo3 from "images/kms/logoCompany/logo3.webp";
import logo4 from "images/kms/logoCompany/logo4.webp";
import logo5 from "images/kms/logoCompany/logo5.webp";
import logo6 from "images/kms/logoCompany/logo6.webp";
import logo7 from "images/kms/logoCompany/logo7.webp";
import logo8 from "images/kms/logoCompany/logo8.webp";

import { useLanguage } from "context/LanguageContext.js";
import TC from "textContent.js";

const Container = tw(
  ContainerBase
)`my-8 lg:my-10 bg-primary-900 text-gray-100 -mx-8 px-8`;
const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)`sm:text-3xl md:text-4xl lg:text-5xl`;
const Subheading = tw(SubheadingBase)`text-gray-100 text-center`;
const Description = tw(
  SectionDescription
)`text-gray-400 text-center mx-auto max-w-screen-md`;

const StatsContainer = tw.div`mt-8 flex flex-col sm:flex-row items-center justify-center flex-wrap max-w-screen-md justify-between mx-auto`;
const Stat = tw.div`flex flex-col text-center p-4 tracking-wide`;
const StatKey = tw.div`text-xl font-medium`;
const StatValue = tw.div`text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-black`;

export default () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {TC.statObj[language].subheading && (
            <Subheading>{TC.statObj[language].subheading}</Subheading>
          )}
          <Heading>{TC.statObj[language].heading}</Heading>
          {TC.statObj[language].description && (
            <Description>{TC.statObj[language].description}</Description>
          )}
        </HeadingContainer>
        <Slider
          width="150px"
          duration={30}
          pauseOnHover={true}
          blurBorders={false}
        >
          <Slider.Slide>
            <img src={logo1} alt="logo1" className="w-36" />
          </Slider.Slide>
          <Slider.Slide>
            <img src={logo2} alt="logo2" className="w-36" />
          </Slider.Slide>
          <Slider.Slide>
            <img src={logo8} alt="logo8" className="w-36" />
          </Slider.Slide>
          <Slider.Slide>
            <img src={logo6} alt="logo6" className="w-36" />
          </Slider.Slide>
          <Slider.Slide>
            <img src={logo4} alt="logo4" className="w-36" />
          </Slider.Slide>
          <Slider.Slide>
            <img src={logo5} alt="logo5" className="w-36" />
          </Slider.Slide>
          <Slider.Slide>
            <img src={logo7} alt="logo7" className="w-36" />
          </Slider.Slide>
          <Slider.Slide>
            <img src={logo3} alt="logo3" className="w-36" />
          </Slider.Slide>
        </Slider>
      </ContentWithPaddingXl>
    </Container>
  );
};
