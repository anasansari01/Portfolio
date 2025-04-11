import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Memories Project */}
          <div className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/memories.png" alt="Memories App Interface" />
            </div>
            <div className="text-content">
              <h2>Memories - A Full-Stack Social Sharing Platform</h2>
              <p className="text-white-50 md:text-xl">
                Built with the MERN stack (MongoDB, Express, React, Node).
                Features post creation, liking, commenting, and clean UI using
                Material UI. Frontend and backend deployed with seamless server
                integration.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {/* Fake News Detection */}
            <div className="project">
              <div className="image-wrapper bg-[#F0F4FF]">
                <img
                  src="/images/fakenews.png"
                  alt="Fake News Detection Project"
                />
              </div>
              <h2>Fake News Detection - ML/NLP Model</h2>
              <p className="text-white-50 md:text-base mt-2">
                Machine Learning project using Python, Pandas, and Scikit-learn.
                Achieved 85% accuracy using NLP techniques like tokenization,
                vectorization, and classification. Built & tested in Jupyter
                Notebook.
              </p>
            </div>

            {/* Chess Game */}
            <div className="project">
              <div className="image-wrapper bg-[#FDF3E7]">
                <img src="/images/chessgame.png" alt="Web Chess Game" />
              </div>
              <h2>Interactive Chess Game - JavaScript</h2>
              <p className="text-white-50 md:text-base mt-2">
                A web-based multiplayer chess game using pure JavaScript, HTML,
                and CSS. Includes drag-and-drop UI, turn logic, and
                checkmate/stalemate detection for a realistic gameplay
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
