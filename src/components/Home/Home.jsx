import styles from "./Home.module.css";

import Socials from "../Socials/Socials";

// CSS STYLES
const {
  homePage,
  bgCircles,
  outerCircle,
  innerCircle,
  socialsDiv,
  arrowDiv,
  pageContent,
  verticalLine,
  pageHeading,
  verticalLine1,
  verticalLine2,
} = styles;

const Home = () => {
  return (
    <div className={homePage}>
      <div className={bgCircles}>
        <div className={outerCircle}>
          <div className={innerCircle}></div>
        </div>
      </div>
      <div className={socialsDiv}>
        <Socials orientation={"column"} />
      </div>
      <div className={arrowDiv}>
        <a href="#about">
          <img src="/icons/triangleArrow.png" alt="arrow" />
        </a>
      </div>
      <div className={pageContent}>
        <div className={pageHeading}>UPES</div>
        <hr className={verticalLine} id={verticalLine1} />
        <hr className={verticalLine} id={verticalLine2} />
        <div className={pageHeading}>CSA</div>
      </div>
    </div>
  );
};

export default Home;