import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Scrolltop from "../../components/ScrollTop/Scrolltop";
import Sectionscard from "../../components/UI/Sectionscard/SectionCard";
import Chatbot from '../../components/UI/Chatbot/Chatbot'
import ImgSrc from "../../shared/ImgSrc";
import Footer from "../../components/Footer/Footer";
import "./Section.css";

const Section = () => {
 const [opened, setOpened] = useState(false);
useEffect(() => {
  setOpened(false);
}, [opened])
  return (
    <div>
      <section>
        <div className="main-container">
          <div className="main_section">
            <h1 className="main-sec-head">
              Where <span>To Go ?</span>
            </h1>
            <div className="choose_sec">
              <div className="section_under">
                <Link to="/" style={{textDecoration: 'none'}}>
                <Sectionscard
                  name="Home Page"
                  image={ImgSrc.home}
                  para="Go to home page"
                >
                <div>
                  <p className="hovertext">Go back to the home page!!</p>
                </div>
                </Sectionscard>
                </Link>
                
                <Link to="/learn" style={{textDecoration: 'none'}}>
                <Sectionscard
                  name="Learn"
                  image={ImgSrc.video}
                  para="Bored with reading here are some interesting lectures"
                >
                  <div>
                  <p className="hovertext">Learn About Superconductors!!</p>
                  <p className="hovertext">Learn about the Mesinner effect!!</p>
                  </div>
                </Sectionscard>
                </Link>
              </div>
              <div className="section_under">
              <Link to="/quiz" style={{textDecoration: 'none'}}>
                <Sectionscard
                  name="Test Series/Quiz Section"
                  image={ImgSrc.Quiz}
                  para="Want to test your skills take Test/Quiz."
                >
                <div>
                  <p className="hovertext">Challenge yourself!</p>
                  <p className="hovertext">What are HTC superconductors?</p>
                </div>
                </Sectionscard>
              </Link>
                <Sectionscard
                  name="More Features"
                  image={ImgSrc.more}
                  para="See more features"
                >
                  <div>
                   <p className="hovertext">Soon to come...</p>
                  </div>
                </Sectionscard>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Scrolltop showBelow={250} showLeft={true}/>
      <Footer />
    </div>
  );
}


export default Section;

