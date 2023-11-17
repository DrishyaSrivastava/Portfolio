import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';


const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of of design and keen eye for details. I am proficient in HTML , CSS , and javascript as well as design software such as Adobe Photoshopa and illustrator</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is a Demo text, you can write your own content here.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Development</h2>
                    <p>this demo can be changed for the production ready website.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="Appdesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Development</h2>
                    <p>you can write text related to mobile app development.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;
