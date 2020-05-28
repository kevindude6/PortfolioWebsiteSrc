import React from "react"


//import "../styles/styles.scss"

import BottomNavbar from "../components/bottomnavbar"
import {graphql } from 'gatsby';
import Img from 'gatsby-image';
import MetaData from "../components/metadata"

const ModelingPage = props => (
  <div>
    <MetaData/>
    <div id="wrapper">
      <BottomNavbar activepage="Modeling"></BottomNavbar>
      <div className="content-pane">
        <p className="bigtext centeralign">Modeling</p>
        <hr></hr>
        <div className="models-pane">
          <ul>
          <li><div className="normaltext centeralign" >As a hobby, I enjoy 3D modeling using Blender. 
            My focus is on create models for video games, but I also enjoy creating low poly renders. The planes you see are for use in a game I am working on. </div></li>
            <br></br>
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
      fluid(maxWidth: 800, quality:90) {
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
