import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import heroBg from "images/kms/mesin.jpg";
import { useLanguage } from "context/LanguageContext.js";
import TC from "textContent.js";

import Header, {
  NavLink,
  NavLinks,
  PrimaryLink,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("${heroBg}");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-primary-500 text-gray-100 font-bold rounded shadow transition duration-300 hocus:bg-gray-100 hocus:text-primary-500 focus:shadow-outline`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default (props) => {
  const { language, toggleLanguage } = useLanguage();

  const navLinks = [
    <NavLinks key={1}>
      <NavLink onClick={props.scrollToAboutUs}>{TC.aboutUs[language]}</NavLink>
      <NavLink onClick={props.scrollToProducts}>{TC.products[language]}</NavLink>
      <NavLink onClick={props.scrollToTesti}>{TC.testimonials[language]}</NavLink>
      <NavLink onClick={props.scrollToContact}>{TC.contactUs[language]}</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink onClick={toggleLanguage}>English / Indonesian</PrimaryLink>
    </NavLinks>,
  ];


  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn>
            {/* <Notification>Feel free to directly!</Notification> */}
            <Heading>
              <span>{TC.heroHeader1[language]}</span>
              <br />
              <SlantedBackground>{TC.heroHeader2[language]}</SlantedBackground>
            </Heading>
            <PrimaryAction onClick={props.scrollToProducts}>{TC.heroBtn[language]}</PrimaryAction>
          </LeftColumn>
          {/* <RightColumn>
            <StyledResponsiveVideoEmbed
              url="//player.vimeo.com/video/374265101?title=0&portrait=0&byline=0&autoplay=0&responsive=1"
              background="transparent"
            />
          </RightColumn> */}
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
