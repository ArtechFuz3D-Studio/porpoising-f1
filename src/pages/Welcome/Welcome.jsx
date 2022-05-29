import { React } from "react";
import styled from "styled-components";
import { Suspense } from "react";
// import { WelcomeText } from "../../components/welcomeText/WelcomeText";


const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;


function Welcome() {
  return (
    <CanvasContainer>

      <Suspense fallback={null}>

        <iframe title="clickonrefresh-logo" src='https://my.spline.design/untitled-dbdf2c7880958c2537cd85327aa46e57/' frameborder='0' width='100%' height='100%'></iframe>
        {/* <WelcomeText /> */}
      </Suspense>

    </CanvasContainer>
  );
}

export default Welcome;
