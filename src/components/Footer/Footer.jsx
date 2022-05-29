import React from "react";
import styled from "styled-components";


const ButLink = styled.button`
background: rgb(63,94,251);
background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%); 
border: none;
color: white;
padding: 2px 4px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 13px;
border-radius: 5px;
`

function Footer() {
  return (
    <div className="footer">
      <footer class="py-1 bg-dark fixed-bottom">
        <div class="container">
          <p class="m-0 text-center text-white">
            {/* <ButLink as="a"
              href="https://patreon.com/Clickonrefresh">
              Sponsor this project
            </ButLink> */}
            <ButLink as="a"
              href="https://cliqonrefraich.clickonrefresh.xyz">
              Made by Neill
            </ButLink>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;