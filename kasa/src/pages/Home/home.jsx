import React from "react"
import Banner from "../../components/Banner/banner"
import Gallery from "../../components/Gallery/gallery"
import bannerImg from '../../assets/Banner/homeBanner.png';
import './home.scss'


function Home() {
  return (
    <div className="home">
    <div className="liste-logement">
      <Banner image={bannerImg} texte={"Chez vous, partout et ailleurs"}/>
      <Gallery />
    </div>
  </div>
);
}

export default Home