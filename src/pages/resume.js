import React from "react"


import "../styles/styles.scss"


//import components


import BottomNavbar from "../components/bottomnavbar"
import MetaData from "../components/metadata"
const ResumePage = () => (
  <div>
    <MetaData/>
    <div id="wrapper">
      <BottomNavbar activepage="Resume"></BottomNavbar>
      <div className="content-pane">
        <p className="bigtext leftalign">Summary</p>
        <hr></hr>
        <ul className="normaltext leftalign">
          <li>Software Engineer open to opportunities</li>
          <li>Driven to learn and practice modern software development technologies</li>
          <li>B.S. Computer Science, University of Maryland College Park</li>
          <li>B.A. Japanese, University of Maryland College Park</li>
        </ul>

        <p className="bigtext leftalign">Skills</p>
        <hr></hr>
        <ul className="normaltext leftalign">
          <li>Plethora of C experience</li>
          <li>Proficiency in C++, C#, Java</li>
          <li>Extensive Python experience</li>
          <li>Extensive Unity experience</li>
          <li>Plentiful Android development experience</li>
          <li>React, Javascript, HTML, CSS experience</li>
          <li>Skilled debugger of old and archaic code</li>
          <li>Blender experience, including mobile optimized modeling</li>
          <li>Windows API experience</li>
          <li>Strong communication skills</li>
          <li>Intermediate speaker of Japanese</li>
          <li>Certified SolidWorks Associate</li>
          <li>Basic electronics experience</li>
          <li>Microsoft Office and Google Docs experience</li>
          <li>Engineering experience throughout STEM program</li>
          <li>Experience in robotic automation</li>
        </ul>

        <p className="bigtext leftalign">Experience</p>
        <hr></hr>
        <ul className="normaltext leftalign">
          <li>Software Engineer at HummingHeads, Inc. (ハミングヘッズ) (09/19 - 03/21)</li>
          <ul className="smalltext leftalign">
            <li>Supported enterprise security product through investigating, debugging, and modifying C and C++ code. Used Windows API extensively</li>
            <li>Created and presented documents regarding investigation results and bug-fix strategies</li>
          </ul>
          <li>Undergraduate Technology Apprenticeship Program (2018 - 2019)</li>
          <ul className="smalltext leftalign">
            <li>Created website for Japanese department containing multimedia for Japanese study and practice</li>
            <li>Digitally designed several posters, fliers, and pamphlets for the Arts and Humanities Department</li>
          </ul>
          <li>Software Development Intern at JF Taylor, Inc.(Summer 2016, Summer 2017)</li>
          <ul className="smalltext leftalign">
            <li>Supported development of support applications for Navy aircraft technicians</li>
          </ul>
          <li>Supercomputing Internship Program (Summer 2014) at PAX Naval Base</li>
          <li>Independent Game Development</li>
          <ul className="smalltext leftalign">
            <li>Created prototypes in Unity using C#</li>
            <li>Used HLSL with Unity to write a custom geometry shader</li>
            <li>Created a voxel engine using C# with XNA and OpenGL (2015)</li>
            <li>Created and painted models using Blender and Substance Painter</li>
          </ul>
          <li>Personal Projects</li>
          <ul className="smalltext leftalign">
            <li>Android app for money management using Kotlin, Room, Navigation</li>
            <li>Personal website using React and Gatsby</li>
            <li>Android app for kanji study</li>
          </ul>
        </ul>
        
        <p className="bigtext leftalign">Education</p>
        <hr></hr>
        <p className="normaltext leftalign">University Of Maryland, College Park - 3.422 GPA</p>
        <ul className="normaltext leftalign">
          <li>Programming Handheld Systems</li>
          <li>Machine Learning</li>
          <li>Discrete Structures</li>
          <li>Algorithms</li>
          <li>Game Programming</li>
        </ul>

        <p className="bigtext leftalign">Activities and Achievements</p>
        <hr></hr>
        <ul className="normaltext leftalign">
          <li>Independent Android application development</li>
          <li>Independent Game Development (mobile and PC)</li>
          <li>President of UMD Fencing Club (2016-2017)</li>
          <li>CMNS Dean’s list (2018, 2019)</li>
          <li>Botball 2014 International Champions (August 2014)</li>
        </ul>
       
      </div>
    </div>
  </div>
  
)

export default ResumePage
