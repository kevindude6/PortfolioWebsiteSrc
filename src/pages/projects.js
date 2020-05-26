import React from "react"


//import "../styles/styles.scss"

import BottomNavbar from "../components/bottomnavbar"
import {graphql } from 'gatsby';
import Img from 'gatsby-image';

const ProjectsPage = props => (
  <div>
    <div id="wrapper">
      <BottomNavbar activepage="Projects"></BottomNavbar>
      <div className="content-pane">
        <p className="bigtext leftalign">Cow Kingdom</p>
        <hr></hr>
        <div className="project-flexcontainer">
          <div className="project-flexitemtext project-flexitem">
            &emsp; Cow Kingdom is a project I gave myself in order to learn Unity development from start to finish. 
            In my past Unity work, I would focus on the mechanics and the gameplay of whatever project I was working on, but that led to a serious imbalance in my knowledge of Unity.
            I realized that I knew very little about Unity's UI tools, saving and loading, and how different mechanics of a game end up fitting together.
            <br/><br/>
            &emsp; I decided to give myself until the end of April (which, at the time, was about three weeks away) to create a game from start to finish.
            I also wanted to try to work out a proper Blender to Unity workflow, as I had spent the past 2-3 months learning how to use Blender (see the modeling section of this website)

          </div>
          <div className="project-flexitem imgborder">
            <Img fluid={props.data.cowKingdomOne.childImageSharp.fluid} />
          </div>
          <div className="project-flexitem imgborder">
            <Img fluid={props.data.cowKingdomTwo.childImageSharp.fluid} />
          </div>
          <div className="project-flexitemtext project-flexitem">
            &emsp; I consider this project a success, though I have not (yet) released it on the Google Play Store. I accomplished my goal of learning about aspects of Unity development I was not yet familiar with.
            Specifically, I learned how to use Unity's UI tools and how to save and load using JSON, but I think the most important thing I learned was how to use ScriptableObjects.
            <br/><br/>
            
            &emsp;ScriptableObjects were the missing piece of the puzzle for me when it came to Unity. The ability to have game data shared between multiple gameobjects without relying on singletons or managers (for the most part) is incredibly powerful. 
            In addition, event systems built with ScriptableObjects are extremely powerful, and I can't wait to see how else I can use them in the future.                       
          </div>
          <div className="project-flexitemtext project-flexitem">
            &emsp; In the future, I intend to add more content and a short tutorial, then put the game on the Play Store. I don't believe it is up to the level of quality I expect from myself as it is, but for the time being I am focusing on other projects.
            <br/><br/>
          </div>
        </div>

        
         
       
        <p className="bigtext rightalign">Kermode Kanji</p>
        <hr></hr>
        <div className="project-flexcontainer">
          <div className="project-flexitemtext project-flexitem">
            &emsp; During my sophomore year at university, I wanted to prorcrastinate studying Japanese, so I decided to make an application to help me study Japanese.
            I know that sounds silly, but hey. I'm only human.
            <br/><br/>
            &emsp; Anyway, I wanted to create a study app that would test me on kanji writing, since I've found that is how I learn best. I studied up on Android design patterns to try and create a clean and efficient design. 
            I still had (and have) a lot to learn about application programming, since most of my programming experience was in game development at that point.   
          </div>
          <div className="project-flexitem imgborder"><Img fluid={props.data.kKanjiOne.childImageSharp.fluid} /></div>
          <div className="project-flexitem imgborder"><Img fluid={props.data.kKanjiTwo.childImageSharp.fluid} /></div>
          <div className="project-flexitemtext project-flexitem">
            &emsp; I ended up learning a lot about the android api and material design. Particularly, floating action buttons and animating UI elements. I've come to really like designs using floating action buttons, especially when they are properly labeled and nicely animated.
            I feel they make designs much cleaner and intuitive overall. 
            <br/><br/>
            &emsp; I would have liked to have integrated a kanji OCR library to automatically grade whether or not users drew kanji correctly, but I felt that was a great deal of difficulty for not a great improvement in usability. 
            What I did want to do however, was implement a form of spaced repetition to help me learn, but I never got around to it.
          </div>
          <div className="project-flexitemtext project-flexitem">
            &emsp; This app is currently on the Play Store, but to be honest, I'm not particularly proud of it. I learned a lot, but I know I can do better. If you are looking to practice kanji, I recommend an app called Kanji Study, which has been lovely for my personal use.
          </div>
          <div className="project-flexitem imgborder"><Img fluid={props.data.kKanjiThree.childImageSharp.fluid} /></div>
        </div>  
      </div>
    </div>
  </div>
  
)

export default ProjectsPage


//https://codebushi.com/using-gatsby-image/
export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    cowKingdomOne: file(relativePath: { eq: "projects/cow-kingdom/cowkingdom0.png" }) {
      ...fluidImage
    }
    cowKingdomTwo: file(relativePath: { eq: "projects/cow-kingdom/cowkingdom1.png" }) {
      ...fluidImage
    }

    kKanjiOne: file(relativePath: { eq: "projects/kermode-kanji/kkanji1.png" }) {
      ...fluidImage
    }
    kKanjiTwo: file(relativePath: { eq: "projects/kermode-kanji/kkanji2.png" }) {
      ...fluidImage
    }
    kKanjiThree: file(relativePath: { eq: "projects/kermode-kanji/kkanji3.png" }) {
      ...fluidImage
    }




  }
`;
