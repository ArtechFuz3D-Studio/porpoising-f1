import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";


const ButLink = styled.button`
background: rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%); 
border: none;
border-radius: 24px;
color: white;
padding: 8px 16px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 14px;
`

function Navbar(props) {
  return (
    <div className="navbar">
      <nav class="navbar navbar-expand navbar-dark fixed-top bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Neill Hewitt 3D
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              {/* <li
                class={`nav-item  ${props.location.pathname === "/" ? "active" : ""
                  }`}
              >
                <Link class="nav-link" to="/">
                  Welcome
                  <span class="sr-only">(current)</span>
                </Link>
              </li> */}
              <li
                class={`nav-item  ${props.location.pathname === "/guide" ? "active" : ""
                  }`}
              >
                <Link class="nav-link" to="/Guide">
                  Others
                </Link>
              </li>
            </ul>
          </div>
          <ButLink as="a"
            href="https://github.com/clickonrefresh">
            GITHUB
          </ButLink>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navbar);