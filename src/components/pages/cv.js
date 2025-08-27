import React, { useEffect, useRef, useState } from "react";
import myPhotoSrc from "../../assets/images/_DSF2827.webp";
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
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

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
    if (!isImageLoaded) return;

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

    const ref = skillsRef.current;

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [isImageLoaded]);

  useEffect(() => {
    const img = new Image();
    img.src = myPhotoSrc;
    img.onload = () => {
      setImageSrc(myPhotoSrc);
      setIsImageLoaded(true);
    };
  }, []);

  if (!isImageLoaded) {
    return <div style={{ minHeight: "100vh" }}></div>;
  }

  return (
    <div className="cv-section">
      <div className="title">ABOUT ME</div>
      <div className="cv-wrapper">
        <div className="content-wrapper">
          <div className="pic-info">
            <div className="image">
              <img src={imageSrc} alt="myPhoto" loading="eager" />
            </div>

            <div className="subtitle">
              <div>Full Stack Developer</div>
              <div className="myname">Jon Madariaga Ortega</div>
            </div>
          </div>

          <div className="cv-text-wrapper">
            <p>
              I work as a Junior Software Developer at Bexen Cardio, where I
              continue to expand my technical skills and apply my knowledge in
              the development of digital solutions. I have Full Stack
              Development training through Bottega University’s DevCamp, where I
              acquired the skills necessary to build complete web projects, from
              backend logic to frontend user experience. In addition, I hold a
              Master’s degree in Leisure Project Management, a Bachelor’s degree
              in Political Science and Public Management, and have training in
              Big Data and Business Intelligence, which enables me to approach
              projects from a strategic and multidisciplinary perspective.
            </p>

            <a
              href="https://drive.google.com/file/d/1WrmbrQffnWxaUloBYKbof_tkslup_ZWR/view?usp=sharing"
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
              <strong>Location:</strong> Getxo, Bizkaia, Spain
            </p>
            <p>
              <strong>Languages:</strong> Native Spanish / English / Basque
            </p>
          </div>

          <div className="section">
            <h2>EDUCATION</h2>
            <p>
              <strong>Full Stack Program:</strong> DevCamp by Bottega University
              (2023 - 2024)
            </p>
            <p>
              <strong>Big Data and Business Intelligence Program:</strong>{" "}
              Universidad de Deusto (2020 - 2021)
            </p>
            <p>
              <strong>Master's in Leisure Project Management:</strong>{" "}
              Universidad de Deusto (2019 - 2020)
            </p>
            <p>
              <strong>
                Degree in Political Science and Public Management:
              </strong>{" "}
              UPV/EHU (2013 - 2019)
            </p>
          </div>

          <div className="section">
            <h2>EXPERIENCE</h2>

            <p>
              <strong>Junior Software Developer:</strong> Bexen Cardio
              (2025-present)
            </p>
            <p>
              <strong>Qualitative Research Technician:</strong> Kualitate
              Lantaldea, Bilbao (2020-2023)
            </p>
            <p>
              <strong>Event Organization Technician (Intern):</strong>{" "}
              Universidad de Deusto, Bilbao (2020)
            </p>
            <p>
              <strong>Qualitative Research Technician (Intern):</strong>{" "}
              Kualitate Lantaldea, Bilbao (2018-2019)
            </p>
          </div>

          <div className="section">
            <h2>CONTACT</h2>
            <p>
              <strong>Phone:</strong> +34 688 650 193
            </p>
            <p>
              <strong>Email:</strong> jonmadariaga93@gmail.com
            </p>
          </div>

          <div className="section" ref={skillsRef}>
            <h2>SKILLS</h2>
            <SkillBar skill="JavaScript" level={95} isVisible={skillsVisible} />
            <SkillBar skill="Python" level={90} isVisible={skillsVisible} />
            <SkillBar skill="React.js" level={90} isVisible={skillsVisible} />
            <SkillBar skill="HTML5" level={90} isVisible={skillsVisible} />
            <SkillBar skill="CSS" level={90} isVisible={skillsVisible} />
            <SkillBar skill="Sass" level={90} isVisible={skillsVisible} />
            <SkillBar
              skill="React Native"
              level={85}
              isVisible={skillsVisible}
            />
            <SkillBar skill="Angular" level={80} isVisible={skillsVisible} />
            <SkillBar skill="Node.js" level={80} isVisible={skillsVisible} />
            <SkillBar skill="Git" level={80} isVisible={skillsVisible} />
            <SkillBar skill="MySQL" level={80} isVisible={skillsVisible} />
            <SkillBar skill="MongoDB" level={75} isVisible={skillsVisible} />
            <SkillBar skill="REST APIs" level={75} isVisible={skillsVisible} />
            <SkillBar skill="Azure" level={70} isVisible={skillsVisible} />
            <SkillBar skill="Docker" level={70} isVisible={skillsVisible} />
            <SkillBar skill="Deployment" level={70} isVisible={skillsVisible} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CV;
