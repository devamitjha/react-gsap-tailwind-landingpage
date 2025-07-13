import React from "react";
import Header from "./components/Header";
import HeroImage from "./assets/images/hero-img.png";
import Shape from "./assets/images/shape-1.png";
import Shape2 from "./assets/images/shape-2.png";
import { Facebook, Instagram, Linkedin, LucideTwitter, MoveRight, TwitchIcon } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

function App() {
  useGSAP(() => {
    const titleSplitText = new SplitText(".mainTitle", {
      type: "chars, words",
    });

    const tl = gsap.timeline();
    tl.from(
      "header",
      {
        opacity: 0,
        yPercent: -50,
        duration:1,
        ease: "power1.inOut",
        stagger: 0.02,
      })
    .from(titleSplitText.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    })
    .fromTo(".heroImage", { x: -100, opacity:0}, { x: 0, opacity:1 }, "<")
    .from(
      ".subtitle, .info",
      {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.04,
      },
      ">" 
    )  
      .fromTo(".client", { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: .02 }, "<")
    .fromTo(
        ".client",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.02 },
        "<" 
      )
      .fromTo(
        [".btn-group button", ".social-icons span"],
        { y: 100, opacity:0},
        { y: 0, opacity:1, stagger: 0.05 },
        "<" 
    )
    .fromTo(
        [".shape-1", ".shape-2", ".shape-3"],
        { y: 100, opacity:0},
        { y: 0, opacity:1, stagger: 0.05 },
        ">" 
      );
   
    
  }, []);
  return (
    <main>
        <div className="container mx-auto my-8 overflow-y-hidden">
        <Header />
          <section className="w-full grid lg:grid-cols-2 gap-8  items-center">
          <div className="selction-left"> 
            <div className="content relative">
              <div className="shape-1 absolute -top-20 left-4">
                <img src={Shape} alt="shape" />
              </div>
              <p className="text-2xl font-title uppercase tracking-wide subtitle">Hellow</p>
              <h3 className="mainTitle text-8xl lg:text-[8rem] font-title uppercase font-semibold tracking-wider my-4 text-yellow h-35 overflow-hidden">I'm Maria</h3>
              <span className="block text-2xl font-semibold mb-6 subtitle">Actor / Model / Performer</span>
              <p className="text-gray-500 text-lg mb-8 info">Fashion that exists in everything. Style is a way to say who you are without having to speak.</p>
              <div className="btn-group flex items-center justify-start gap-4 overflow-hidden">
                <button className="py-4 px-5 bg-yellow text-white flex gap-2 rounded-lg border-2 border-yellow cursor-pointer text-lg hover:bg-white hover:text-yellow transition-all ease-in-out duration-300">See My work <MoveRight /></button>
                <div className="social-icons flex justify-start items-center gap-4">
                <span className="w-14 h-14 flex justify-center items-center text-yellow border-2 border-yellow rounded-md cursor-pointer hover:bg-yellow transition-all duration-300 ease-in-out hover:text-white"><Facebook/></span>
                <span className="w-14 h-14 flex justify-center items-center text-yellow border-2 border-yellow rounded-md cursor-pointer hover:bg-yellow transition-all duration-300 ease-in-out hover:text-white"><Instagram/></span>
                <span className="w-14 h-14 flex justify-center items-center text-yellow border-2 border-yellow rounded-md cursor-pointer hover:bg-yellow transition-all duration-300 ease-in-out hover:text-white"><LucideTwitter/></span>
                <span className="w-14 h-14 flex justify-center items-center text-yellow border-2 border-yellow rounded-md cursor-pointer hover:bg-yellow transition-all duration-300 ease-in-out hover:text-white"><Linkedin/></span>
                </div>
              </div>
              <div className="shape-2 absolute -bottom-30 right-1/2">
                <img src={Shape} alt="shape" />
              </div>  
            </div>
                     
          </div>


          <div className="selction-right">            
              <div className="image-container relative">
                <img src={HeroImage} alt="hero" className="heroImage"/>
                  <div className="client absolute top-1/3 -left-2 bg-white py-6 px-8 rounded-2xl flex gap-2 justify-center items-center shadow-xl">
                      <h3 className="flex justify-center items-center gap-1 text-4xl font-semibold text-yellow">100<span className="text-xl">+</span></h3>
                      <span className="text-lg">Worldwide <br/>Clients</span>
                  </div>
                    <div className="client absolute bottom-1/3 right-1/7 bg-white py-6 px-8 rounded-2xl flex gap-4 justify-center items-center shadow-xl">
                      <h3 className="flex justify-center items-center gap-1 text-4xl font-semibold text-yellow">10</h3>
                      <span className="text-lg">Years Of<br/>Clients</span>
                    </div>
                  <div className="shape-3 absolute bottom-0 right-1/2">
                    <img src={Shape2} alt="shape" />
                  </div>
              </div>              
          </div>
          </section>
        </div>
      
    </main>
  )
}

export default App
