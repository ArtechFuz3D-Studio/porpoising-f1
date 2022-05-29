import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: left;
  position: absolute;
  width: 50%;
  height: 100%;
  color: black;
  top: 0;
  left: 0;
  background-color: 0xffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4%;
  z-index: 99;
`
const Title = styled.h1`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 1.5em;
  color: #fff;
  font-weight: 800;
  font-size: 20px;
`;

// const Slogan = styled.h4`
//   margin: 0;
//   color: #fff;
//   font-weight: 600;
//   font-size: 18px;
//   margin-top: 10px;
// `;

const Paragraph = styled.p`
  margin: 0;
  margin-top: 1em;
  margin-bottom: 1em;
  color: #fff;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  max-width: 40%;
  text-align: center;
`;

const Button = styled.button`
  border: none;
  padding: 10px 24px;
  display: inline-block;
`


export function GuideText() {
  return (
    <Container>
      <Title>How to use this template</Title>
      {/* <Slogan>This template uses React Three Fiber with Styled Components </Slogan> */}

      <Paragraph>
        Export your final Spline.Design creation to a public URL.
        Copy the embed link.
      </Paragraph>
      <Paragraph>
        Navigate to /src/pages/Welcome and replace the iframe line with your embed link.
      </Paragraph>
      <Paragraph>
        Changes made in Spline editor and exported, automatically appear on your website.
      </Paragraph>
      <Paragraph as="a" href="https://github.com/clickonrefresh/web-templates-for-spline.design">
        Clone this project on Github, or
      </Paragraph>
      <Paragraph>
        Deploy this example to Vercel and start sharing your designs!
      </Paragraph>
      <Button as="a" href="https://vercel.com/new/clone?repository-url=https://github.com/clickonrefresh/web-templates-for-spline.design/tree/main/React-Three-Fiber"><img alt="deployvercel" src="https://vercel.com/button" /></Button>
    </Container>
  );
}
export default GuideText;