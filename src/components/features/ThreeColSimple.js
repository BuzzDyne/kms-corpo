import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";
import { useLanguage } from "context/LanguageContext.js";
import TC from "textContent.js";
import waIcon from "images/kms/icons/whatsappsvg.svg";
import emailIcon from "images/kms/icons/email.svg";

const Heading = tw(SectionHeading)`w-full`;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto`;
const ThreeColumnContainer = styled.div`
  ${tw`mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;
const Column = styled.div`
  ${tw`lg:w-1/3 max-w-xs`}
`;

const Card = styled.a`
  ${tw`flex flex-col items-center text-center h-full mx-2 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `}
  .imageContainer {
    ${tw`text-center rounded-full p-4 bg-gray-100`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .title {
    ${tw`mt-4 font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-4 text-sm font-medium text-secondary-300`}
  }

  .link {
    ${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-300 leading-none hocus:text-primary-900 transition duration-300`}
    .icon {
      ${tw`ml-2 w-4`}
    }
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-40`}
`;

const cards = [
  {
    imageSrc: emailIcon,
    title: "team@ptkreasimilenialsentosa.id",
  },
  {
    imageSrc: waIcon,
    title: "0821-7933-7360",
  },
];

export default (props) => {
  /*
   * This componets accepts a prop - `cards` which is an array of object denoting the cards. Each object in the cards array can have the following keys (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  4) url - the url that the card should goto on click
   */
  const { language, toggleLanguage } = useLanguage();

  const openWhatsappChat = () => {
    const waLink = `https://api.whatsapp.com/send?phone=6282179337360&text=Halo,%20PT%20Kreasi%20Milenial%20Sentosa.%20Saya%20mau%20bertanya%20soal%20produk%20anda`;
    window.open(waLink, "_blank");
  };

  const openEmailIntent = () => {
    const subject = encodeURIComponent(
      "Pertanyaan Soal PT Kreasi Milenial Sentosa"
    );
    const body = encodeURIComponent(
      "Halo, PT Kreasi Milenial Sentosa. Saya mau bertanya soal produk anda"
    );
    const email = encodeURIComponent("team@ptkreasimilenialsentosa.id");

    const emailUrl = `mailto:${email}?subject=${subject}&body=${body}`;

    window.open(emailUrl, "_blank");
  };

  const handleCardClick = (index) => {
    switch (index) {
      case 0:
        openEmailIntent();
        break;
      case 1:
        openWhatsappChat();
        break;
      default:
        openWhatsappChat();
        break;
    }
  };

  return (
    <Container ref={props.refProp}>
      <ContentWithPaddingXl>
        {/* <Subheading>{subheading}</Subheading> */}
        <Heading>{TC.contactInfoHeading[language]}</Heading>
        <Description>{TC.contactInfoDesc[language]}</Description>
        <ThreeColumnContainer>
          {cards.map((card, i) => (
            <Column key={i}>
              <Card href={card.url} onClick={() => handleCardClick(i)}>
                <span className="imageContainer">
                  <img src={card.imageSrc} alt="" />
                </span>
                <span className="title">{card.title}</span>
                <p className="description">{card.description}</p>
                {/* <span className="link">
                  <span>Learn More</span>
                  <ArrowRightIcon className="icon" />
                </span> */}
              </Card>
            </Column>
          ))}
        </ThreeColumnContainer>
      </ContentWithPaddingXl>
      <DecoratorBlob />
    </Container>
  );
};
