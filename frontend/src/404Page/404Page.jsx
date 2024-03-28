import "./404Page.css";
import Button from "../shared Comp/Buttons/Button/Button";
import SocalMediaIcon from "../shared Comp/SVG/SocalMediaIcon/SocalMediaIcon";

const Page = () => {
  return (
    <div className="notFoundPage--container">
      <div className="notFoundPage--header--container">
        <h1>
          <a href="http://www.amirhosseinkhakshori.ir/"> AMIR HOSSEIN KHAKSHOURI SANI </a>  
        </h1>
      </div>

      <div className="notFoundPage--body--container">
        <a href="http://www.amirhosseinkhakshori.ir/"> <img src="/public/AmirHossein-Khakshouri.jpg" alt="AmirHossein Khakshouri" /></a>
        <div className="notFoundPage--context--container" >
          <p>
            I am a passionate and experienced software engineer with a proven
            track record of delivering high quality solutions to complex
            challenges. <br/> My expertise lies in developing large-scale web
            applications that serve thousands of users. <br/> I am a self-driven and
            adaptable individual, always eager to take on new challenges and
            push the boundaries of what is possible.
          </p>
          <p>
            <SocalMediaIcon  name={"telegram"}/>
            {" "}
            <a href="https://www.youtube.com/channel/UCYsUI2qDGolucuEe-5QmoDw"> <SocalMediaIcon name="youtube" /> </a>
            {" "}
            <SocalMediaIcon  name={"email"}/>
          </p>
        </div>
      </div>
      
    <div>

    </div>

    <div className="notFoundPage--footer--container">
      <h3> I won't go into the details of my resume because it should be a 404 page but You can check it through the links </h3>

      <img src="/public/404page.png" alt="404 Image" />

      <Button className="notFoundPage--footer--button" blue to="/">  NAVIGATE BACK TO COIN-EX CLONE  </Button>
    </div>

    </div>
  );
};

export default Page;
