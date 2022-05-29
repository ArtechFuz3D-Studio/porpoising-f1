import React from "react";
import styled from "styled-components";
import {  withRouter } from "react-router-dom";


const Container = styled.div`
  text-align: center;
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: 0xffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4%;

`
const Logo = styled.h1`
  text-align: center;
  margin-top: 2em;
  color: #fff;
  font-weight: 800;
  font-size: 30px;
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  margin-top: 2em;
`;

const Paragraph = styled.p`
  margin: 0;
  margin-top: 3em;
  margin-bottom: 4em;
  color: #fff;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 500;
  max-width: 30%;
  text-align: center;
`;

const Button = styled.button`
  background: rgb(37,130,128);
  background: linear-gradient(90deg, rgba(37,130,128,1) 0%, rgba(76,175,80,1) 100%); 
  border: none;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 12px;
  // border: 2px solid #00FF00;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  
`




export function WelcomeText() {
  return (
    <Container>

      <Logo>Web Templates for <a href="https://spline.design">Spline.Design</a></Logo>
      <Slogan>React Three Fiber with Styled Components</Slogan>

      <Paragraph>
        Show off your <br />
        Spline.Design creations<br />
        with easy to use<br />
        website templates!
      </Paragraph>
      <Button as="a" href="/Guide">Guide</Button>


    </Container>
  );
}
export default withRouter(WelcomeText);
