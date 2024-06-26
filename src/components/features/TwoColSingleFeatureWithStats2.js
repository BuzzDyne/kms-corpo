import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import StatsIllustrationSrc from "images/stats-illustration.svg";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import ceoImage from "images/kms/ceo.webp";
import { useLanguage } from "context/LanguageContext.js";
import TC from "textContent.js";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const CustomerInfo = tw.div`text-center md:text-left mt-4 md:mt-4`;
const CustomerName = tw.h5`font-bold text-lg lg:text-xl xl:text-2xl text-primary-500`;
const CustomerTitle = tw.p`font-medium text-sm`;

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

const DecoratorBlob = styled(SvgDotPattern)((props) => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
]);

export default () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Container>
      <TwoColumn css={tw`md:items-center`}>
        <ImageColumn css={tw`mb-10`}>
          <img src={ceoImage} alt="" />
        </ImageColumn>
        <TextColumn textOnLeft={true}>
          <TextContent>
            {TC.ceoObj[language].subheading && (
              <Subheading>{TC.ceoObj[language].subheading}</Subheading>
            )}
            <Heading>{TC.ceoObj[language].heading}</Heading>
            <Description>{TC.ceoObj[language].description}</Description>
            <CustomerInfo>
              <CustomerName>Ivan Leonardo</CustomerName>
              <CustomerTitle>
                Founder of PT Kreasi Milenial Sentosa
              </CustomerTitle>
            </CustomerInfo>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
