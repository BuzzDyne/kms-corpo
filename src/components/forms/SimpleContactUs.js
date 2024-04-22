import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { useLanguage } from "context/LanguageContext.js";
import TC from "textContent.js";
import { RotatingLines } from "react-loader-spinner";
import { useForm, ValidationError } from "@formspree/react";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const LoadingSpinner = () => {
  return (
    <div tw="absolute inset-0 flex items-center justify-center">
      <RotatingLines
        strokeColor="white"
        strokeWidth="2"
        animationDuration="0.25"
        width="40"
      />
      <div>Loading...</div>
    </div>
  );
};

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-semibold`}
  }
  input,
  textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const SuccessMsg = tw.div`absolute inset-0 flex items-center justify-center p-10`;
const FailedMsg = tw.div`absolute inset-0 flex items-center justify-center p-10`;
const ValidationMsg = tw.div`bg-red-500 text-white p-2 mt-4 rounded-md font-bold`;
const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input`border-b border-white border-t-0 border-l-0 border-r-0`;
const TextArea = tw.textarea`h-24 sm:h-full resize-none border-b border-white border-t-0 border-l-0 border-r-0`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 border-0 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`;

export default () => {
  const { language, toggleLanguage } = useLanguage();
  const [name, setName] = useState("");
  const [emailPhone, setEmailPhone] = useState("");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const [validationMsg, setValidationMsg] = useState("");
  // All fields are required
  // Message must be longer than 5 characters

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const emailPhoneHandler = (e) => {
    setEmailPhone(e.target.value);
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidationMsg("");

    // Validation
    if (!name || !emailPhone || !message) {
      setValidationMsg(TC.formObj[language].validation1);
      return;
    }

    if (name.length < 3 || emailPhone.length < 3 || message.length < 3) {
      setValidationMsg(TC.formObj[language].validation2);
      return;
    }

    // Begin Form Submit
    setIsLoading(true);

    const formData = new FormData(e.target);
    try {
      const response = await fetch("https://formspree.io/f/xjvnjyrj", {
        method: "POST",
        body: JSON.stringify({ name, emailPhone, message }),
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        setIsSuccess(true);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Content>
        <FormContainer>
          {!isLoading && !isSuccess && !isError && (
            <div tw="mx-auto max-w-4xl">
              <h3>{TC.formObj[language].subheading}</h3>
              <h2>{TC.formObj[language].heading}</h2>

              <form onSubmit={handleSubmit}>
                <TwoColumn>
                  <Column>
                    <InputContainer>
                      <Label>{TC.formObj[language].name}</Label>
                      <Input
                        type="text"
                        onChange={nameHandler}
                        value={name}
                        placeholder="E.g. John Doe"
                      />
                    </InputContainer>
                    <InputContainer>
                      <Label>{TC.formObj[language].contact}</Label>
                      <Input
                        type="text"
                        onChange={emailPhoneHandler}
                        value={emailPhone}
                        placeholder="E.g. john@mail.com"
                      />
                    </InputContainer>
                  </Column>
                  <Column>
                    <InputContainer tw="flex-1">
                      <Label>{TC.formObj[language].msg}</Label>
                      <TextArea
                        onChange={messageHandler}
                        value={message}
                        placeholder="Bagaimana cara memesan ya?"
                      />
                    </InputContainer>
                  </Column>
                </TwoColumn>

                <SubmitButton type="submit">Submit</SubmitButton>
              </form>
              {validationMsg && <ValidationMsg>{validationMsg}</ValidationMsg>}
            </div>
          )}

          {/* Conditionally render loading spinner */}
          {isLoading && <LoadingSpinner />}

          {/* Conditionally render success message */}
          {isSuccess && <SuccessMsg>{TC.formObj[language].success}</SuccessMsg>}

          {/* Conditionally render error message */}
          {isError && <FailedMsg>{TC.formObj[language].failed}</FailedMsg>}

          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  );
};
