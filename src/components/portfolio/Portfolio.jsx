import "./portfolio.scss";
import ProjectList from "../projectList/ProjectList";
import "../carousel/Carousel";
import { useState } from "react";
import Carousel from "../carousel/Carousel";

export default function Portfolio() {
  const list = [
    { id: "barter", title: "Barter" },
    { id: "standUp", title: "StandUp" },
    { id: "rateIt", title: "RateIt" },
    { id: "genius", title: "Genius" },
    { id: "portfolio", title: "Portfolio" },
    { id: "website", title: "Website" },
    { id: "clone", title: "Clone" },
    { id: "hello", title: "Hello" },
    { id: "break", title: "Break" },
    { id: "portal", title: "Portal" },
  ];
  const data = [
    {
      id: 1,
      project: "Barter",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sed euismod nisi porta lorem mollis aliquam ut
                    porttitor leo. Metus vulputate eu scelerisque felis
                    imperdiet proin fermentum. Egestas congue quisque egestas
                    diam in arcu cursus euismod quis. Fames ac turpis egestas
                    sed tempus urna et pharetra pharetra. Ut venenatis tellus in
                    metus vulputate eu scelerisque felis imperdiet. Ornare massa
                    eget egestas purus viverra accumsan in nisl. Risus quis
                    varius quam quisque id diam vel quam. Nunc id cursus metus
                    aliquam. Mauris augue neque gravida in. Libero volutpat sed
                    cras ornare arcu dui vivamus arcu felis. Tellus in metus
                    vulputate eu scelerisque felis imperdiet proin fermentum.
                    Pulvinar pellentesque habitant morbi tristique. Magnis dis
                    parturient montes nascetur. Donec pretium vulputate sapien
                    nec sagittis aliquam malesuada bibendum arcu. <br />
                    <br />
                    Ut venenatis tellus in metus vulputate eu scelerisque felis
                    imperdiet. Ornare massa eget egestas purus viverra accumsan
                    in nisl. Risus quis varius quam quisque id diam vel quam.
                    Nunc id cursus metus aliquam. Mauris augue neque gravida in.
                    Libero volutpat sed cras ornare arcu dui vivamus arcu felis.
                    Tellus in metus vulputate eu scelerisque felis imperdiet
                    proin fermentum. Pulvinar pellentesque habitant morbi
                    tristique. Magnis dis parturient montes nascetur. Donec
                    pretium vulputate sapien nec sagittis aliquam malesuada
                    bibendum arcu.`,
      screenshot: "../../images/32213.png",
    },
    {
      id: 2,
      project: "StandUp",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sed euismod nisi porta lorem mollis aliquam ut
                    porttitor leo. Metus vulputate eu scelerisque felis
                    imperdiet proin fermentum. Egestas congue quisque egestas
                    diam in arcu cursus euismod quis. Fames ac turpis egestas
                    sed tempus urna et pharetra pharetra. Ut venenatis tellus in
                    metus vulputate eu scelerisque felis imperdiet. Ornare massa
                    eget egestas purus viverra accumsan in nisl. Risus quis
                    varius quam quisque id diam vel quam. Nunc id cursus metus
                    aliquam. Mauris augue neque gravida in. Libero volutpat sed
                    cras ornare arcu dui vivamus arcu felis. Tellus in metus
                    vulputate eu scelerisque felis imperdiet proin fermentum.
                    Pulvinar pellentesque habitant morbi tristique. Magnis dis
                    parturient montes nascetur. Donec pretium vulputate sapien
                    nec sagittis aliquam malesuada bibendum arcu. <br />
                    <br />
                    Ut venenatis tellus in metus vulputate eu scelerisque felis
                    imperdiet. Ornare massa eget egestas purus viverra accumsan
                    in nisl. Risus quis varius quam quisque id diam vel quam.
                    Nunc id cursus metus aliquam. Mauris augue neque gravida in.
                    Libero volutpat sed cras ornare arcu dui vivamus arcu felis.
                    Tellus in metus vulputate eu scelerisque felis imperdiet
                    proin fermentum. Pulvinar pellentesque habitant morbi
                    tristique. Magnis dis parturient montes nascetur. Donec
                    pretium vulputate sapien nec sagittis aliquam malesuada
                    bibendum arcu.`,
      screenshot: "../../images/pexels-ezequiel-da-silva-2902536.jpg",
    },
    {
      id: 3,
      project: "RateIt",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sed euismod nisi porta lorem mollis aliquam ut
                    porttitor leo. Metus vulputate eu scelerisque felis
                    imperdiet proin fermentum. Egestas congue quisque egestas
                    diam in arcu cursus euismod quis. Fames ac turpis egestas
                    sed tempus urna et pharetra pharetra. Ut venenatis tellus in
                    metus vulputate eu scelerisque felis imperdiet. Ornare massa
                    eget egestas purus viverra accumsan in nisl. Risus quis
                    varius quam quisque id diam vel quam. Nunc id cursus metus
                    aliquam. Mauris augue neque gravida in. Libero volutpat sed
                    cras ornare arcu dui vivamus arcu felis. Tellus in metus
                    vulputate eu scelerisque felis imperdiet proin fermentum.
                    Pulvinar pellentesque habitant morbi tristique. Magnis dis
                    parturient montes nascetur. Donec pretium vulputate sapien
                    nec sagittis aliquam malesuada bibendum arcu. <br />
                    <br />
                    Ut venenatis tellus in metus vulputate eu scelerisque felis
                    imperdiet. Ornare massa eget egestas purus viverra accumsan
                    in nisl. Risus quis varius quam quisque id diam vel quam.
                    Nunc id cursus metus aliquam. Mauris augue neque gravida in.
                    Libero volutpat sed cras ornare arcu dui vivamus arcu felis.
                    Tellus in metus vulputate eu scelerisque felis imperdiet
                    proin fermentum. Pulvinar pellentesque habitant morbi
                    tristique. Magnis dis parturient montes nascetur. Donec
                    pretium vulputate sapien nec sagittis aliquam malesuada
                    bibendum arcu.`,
      screenshot: "../../images/pexels-ezequiel-da-silva-2902536.jpg",
    },
    {
      id: 4,
      project: "Genius",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sed euismod nisi porta lorem mollis aliquam ut
                    porttitor leo. Metus vulputate eu scelerisque felis
                    imperdiet proin fermentum. Egestas congue quisque egestas
                    diam in arcu cursus euismod quis. Fames ac turpis egestas
                    sed tempus urna et pharetra pharetra. Ut venenatis tellus in
                    metus vulputate eu scelerisque felis imperdiet. Ornare massa
                    eget egestas purus viverra accumsan in nisl. Risus quis
                    varius quam quisque id diam vel quam. Nunc id cursus metus
                    aliquam. Mauris augue neque gravida in. Libero volutpat sed
                    cras ornare arcu dui vivamus arcu felis. Tellus in metus
                    vulputate eu scelerisque felis imperdiet proin fermentum.
                    Pulvinar pellentesque habitant morbi tristique. Magnis dis
                    parturient montes nascetur. Donec pretium vulputate sapien
                    nec sagittis aliquam malesuada bibendum arcu. <br />
                    <br />
                    Ut venenatis tellus in metus vulputate eu scelerisque felis
                    imperdiet. Ornare massa eget egestas purus viverra accumsan
                    in nisl. Risus quis varius quam quisque id diam vel quam.
                    Nunc id cursus metus aliquam. Mauris augue neque gravida in.
                    Libero volutpat sed cras ornare arcu dui vivamus arcu felis.
                    Tellus in metus vulputate eu scelerisque felis imperdiet
                    proin fermentum. Pulvinar pellentesque habitant morbi
                    tristique. Magnis dis parturient montes nascetur. Donec
                    pretium vulputate sapien nec sagittis aliquam malesuada
                    bibendum arcu.`,
      screenshot: "../../images/pexels-ezequiel-da-silva-2902536.jpg",
    },
    {
      id: 5,
      project: "Portfolio",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sed euismod nisi porta lorem mollis aliquam ut
                    porttitor leo. Metus vulputate eu scelerisque felis
                    imperdiet proin fermentum. Egestas congue quisque egestas
                    diam in arcu cursus euismod quis. Fames ac turpis egestas
                    sed tempus urna et pharetra pharetra. Ut venenatis tellus in
                    metus vulputate eu scelerisque felis imperdiet. Ornare massa
                    eget egestas purus viverra accumsan in nisl. Risus quis
                    varius quam quisque id diam vel quam. Nunc id cursus metus
                    aliquam. Mauris augue neque gravida in. Libero volutpat sed
                    cras ornare arcu dui vivamus arcu felis. Tellus in metus
                    vulputate eu scelerisque felis imperdiet proin fermentum.
                    Pulvinar pellentesque habitant morbi tristique. Magnis dis
                    parturient montes nascetur. Donec pretium vulputate sapien
                    nec sagittis aliquam malesuada bibendum arcu. <br />
                    <br />
                    Ut venenatis tellus in metus vulputate eu scelerisque felis
                    imperdiet. Ornare massa eget egestas purus viverra accumsan
                    in nisl. Risus quis varius quam quisque id diam vel quam.
                    Nunc id cursus metus aliquam. Mauris augue neque gravida in.
                    Libero volutpat sed cras ornare arcu dui vivamus arcu felis.
                    Tellus in metus vulputate eu scelerisque felis imperdiet
                    proin fermentum. Pulvinar pellentesque habitant morbi
                    tristique. Magnis dis parturient montes nascetur. Donec
                    pretium vulputate sapien nec sagittis aliquam malesuada
                    bibendum arcu.`,
      screenshot: "../../images/pexels-ezequiel-da-silva-2902536.jpg",
    },
  ];

  const [selectedProject, setSelectedProject] = useState("barter");

  return (
    <div className="portfolio" id="portfolio">
      <div className="top">
        <div className="heading">Portfolio</div>
      </div>
      <div className="bottom">
        <div className="main-container">
          <div className="outer-container">
            <div className="left">
              <div className="title">Projects</div>
              <div className="title-list">
                {list.map((item) => (
                  <ProjectList
                    title={item.title}
                    active={selectedProject === item.id}
                    setSelectedProject={setSelectedProject}
                  />
                ))}
              </div>
            </div>
            <div className="right">
              <Carousel className="container" />
            </div>
          </div>
          <img
            className="left-arrow"
            src={require("../../images/Down-Arrow-PNG-white.png")}
            alt=""
          />
          <img
            className="right-arrow"
            src={require("../../images/Down-Arrow-PNG-white.png")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
