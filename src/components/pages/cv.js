import React, { useEffect, useRef, useState } from "react";
import myPhotoSrc from "../../assets/images/_DSF2827.jpg"; // Ruta de la imagen
import Footer from "../sections/footer";

// Componente para la barra de habilidades
const SkillBar = ({ skill, level, isVisible }) => {
  return (
    <div className="skill-bar">
      <div className="skill-name">{skill}</div>
      <div className="bar-container">
        <div
          className="skill-progress"
          style={{
            width: isVisible ? `${level}%` : "0%",
            transition: "width 1.3s ease-in-out",
          }}
        ></div>
      </div>
    </div>
  );
};

const CV = () => {
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [edad, setEdad] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const skillsRef = useRef(null);

  const calcularEdad = (fechaNacimiento) => {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    const dia = hoy.getDate() - nacimiento.getDate();

    if (mes < 0 || (mes === 0 && dia < 0)) {
      edad--;
    }

    return edad;
  };

  useEffect(() => {
    setEdad(calcularEdad("1993-08-16"));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSkillsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = myPhotoSrc;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className="cv-section">
      <div className="title">ABOUT ME</div>
      <div className="cv-wrapper">
        <div className="content-wrapper">
          <div className="pic-info">
            <div className="image">
              {imageLoaded && (
                <img src={myPhotoSrc} alt="myPhoto" loading="lazy" />
              )}
            </div>

            <div className="subtitle">
              <div>Full Stack Developer</div>
              <div className="myname">Jon Madariaga Ortega</div>
            </div>
          </div>

          <div className="cv-text-wrapper">
            <p>
              I am a Full Stack Developer with a strong background in research
              and consulting, supported by three years of experience in
              qualitative analysis. I recently completed my Full Stack
              Development training through DevCamp at Bottega University,
              equipping me with the skills to build comprehensive web projects,
              from backend logic to frontend user experience. In addition to my
              technical expertise, I hold a Master's degree in Leisure Project
              Management, a degree in Political Science and Public Management,
              and have knowledge of Big Data and Business Intelligence, enabling
              me to approach projects strategically and from a multidisciplinary
              perspective.
            </p>

            <a
              href="https://drive.google.com/file/d/1Kz1tVmhpPFXaUXzA5v-hfQjkPRh9OXRQ/view?usp=sharing"
              className="download-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Download My CV</span>
            </a>
          </div>
        </div>

        <div className="info-wrapper">
          <div className="section">
            <h2>PERSONAL INFORMATION</h2>
            <p>
              <strong>Age:</strong> {edad} Years
            </p>
            <p>
              <strong>Location:</strong> Sopela, Bizkaia, Spain
            </p>
            <p>
              <strong>Languages:</strong> Native Spanish / English / Basque
            </p>
          </div>

          <div className="section" ref={skillsRef}>
            <h2>SKILLS</h2>
            <SkillBar skill="HTML5" level={95} isVisible={skillsVisible} />
            <SkillBar skill="JavaScript" level={90} isVisible={skillsVisible} />
            <SkillBar skill="CSS" level={90} isVisible={skillsVisible} />
            <SkillBar skill="React.js" level={85} isVisible={skillsVisible} />
            <SkillBar skill="Git" level={80} isVisible={skillsVisible} />
            <SkillBar skill="MySQL" level={80} isVisible={skillsVisible} />
            <SkillBar skill="Python" level={80} isVisible={skillsVisible} />
            <SkillBar skill="Node.js" level={75} isVisible={skillsVisible} />
            <SkillBar skill="SAAS" level={75} isVisible={skillsVisible} />
            <SkillBar skill="MongoDB" level={70} isVisible={skillsVisible} />
            <SkillBar skill="R" level={70} isVisible={skillsVisible} />
            <SkillBar skill="UML" level={65} isVisible={skillsVisible} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CV;
