import React from "react"


//import "../styles/styles.scss"

import BottomNavbar from "../components/bottomnavbar"
import {graphql } from 'gatsby';
import Img from 'gatsby-image';

const ModelingPage = props => (
  <div>
    <div id="wrapper">
      <BottomNavbar activepage="Modeling"></BottomNavbar>
      <div className="content-pane">
        <div className="models-pane">
          <ul>
            <li><div className="renderImg" ><Img fluid={props.data.cozyhouse.childImageSharp.fluid} /></div></li>
            <li><div className="renderImg" ><Img fluid={props.data.earring.childImageSharp.fluid} /></div></li>
            <li><div className="renderImg" ><Img fluid={props.data.squareislands.childImageSharp.fluid} /></div></li>
            <li><div className="renderImg" ><Img fluid={props.data.plane3.childImageSharp.fluid} /></div></li>
            <li><div className="renderImg" ><Img fluid={props.data.plane2.childImageSharp.fluid} /></div></li>
            <li><div className="renderImg" ><Img fluid={props.data.plane1.childImageSharp.fluid} /></div></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
)

export default ModelingPage


//https://codebushi.com/using-gatsby-image/
export const fluidImageRender = graphql`
  fragment fluidImageRender on File {
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    cozyhouse: file(relativePath: { eq: "renders/cozy house.png" }) {
      ...fluidImageRender
    }
    earring: file(relativePath: { eq: "renders/earring.png" }) {
      ...fluidImageRender
    }
    squareislands: file(relativePath: { eq: "renders/square-islands.png" }) {
      ...fluidImageRender
    }

    plane1: file(relativePath: { eq: "renders/plane 1.png" }) {
      ...fluidImageRender
    }
    plane2: file(relativePath: { eq: "renders/plane 2.png" }) {
      ...fluidImageRender
    }
    plane3: file(relativePath: { eq: "renders/plane 3.png" }) {
      ...fluidImageRender
    }




  }
`;
