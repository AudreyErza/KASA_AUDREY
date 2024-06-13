import React from "react"
import Banner from "../../components/Banner/banner"
import Collapse from "../../components/Collapse/collapse"
import DataAbout from "../../datas/about.json"
import bannerImg from "../../assets/Banner/aboutBanner.png"
import './about.scss'

function About() {
    return (
        <div className="about">
      <main>
        <Banner image={bannerImg} titre="" />

        <div className="collapse">
          <div className="collapse__dropdown">
            {DataAbout.map((item) => {
              return (
                <div key={item.id}>
                  <Collapse content={item.content} title={item.title} />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};


export default About