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

export default ({
  subheading = "",
  heading = "Our Happy Customers",
  description = " ",
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <Slider
          width="200px"
          duration={10}
          pauseOnHover={true}
          blurBorders={false}
        >
          <Slider.Slide>
            <img
              src="https://placehold.co/200/84DCC6/292F36"
              alt="any"
              className="w-36"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="https://placehold.co/200/2B59C3/C9A690"
              alt="any2"
              className="w-36"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="https://placehold.co/400/D36582/31343C"
              alt="any3"
              className="w-36"
            />
          </Slider.Slide>
        </Slider>
      </ContentWithPaddingXl>
    </Container>
  );
};
