import React from 'react';
import myPhoto from '../../assets/images/_DSF2827.jpg';

// Componente para la barra de habilidades
const SkillBar = ({ skill, level }) => {
  return (
    <div className="skill-bar">
      <div className="skill-name">{skill}</div>
      <div className="bar-container">
        <div className="skill-progress" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
};

const CV = () => {
  return (
    <div className="cv-section">
      <div className='title'>
        ABOUT ME
      </div>
      <div className='content-wrapper'>
        <div className='pic-info'>
          <div className='image'>
            <img src={myPhoto} alt='myPhoto' />
          </div>

          <div className='subtitle'>
            <div>Full Stack Developer</div>
            <div className='myname'>Jon Madariaga Ortega</div>
          </div>
        </div>

        <div className='cv-text-wrapper'>
          <p>
            I am a Full Stack Developer with a strong background in research and consulting, supported by three years of experience in qualitative analysis. I recently completed my Full Stack Development training through DevCamp at Bottega University, equipping me with the skills to build comprehensive web projects, from backend logic to frontend user experience. In addition to my technical expertise, I hold a Master's degree in Leisure Project Management, a degree in Political Science and Public Management, and have knowledge of Big Data and Business Intelligence, enabling me to approach projects strategically and from a multidisciplinary perspective.
          </p>

          <a
            href="https://drive.google.com/file/d/14KDBEFN4L4EursgBBXxH84Xbo9KnmVpX/view?usp=sharing"
            className="download-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Download My CV</span>
          </a>

        </div>
      </div>

      <div className='info-wrapper'>
          <div className='section'>
              <h2>PERSONAL INFORMATION</h2>
              <p><strong>Age:</strong> 31 Years</p>
              <p><strong>Location:</strong> Sopela, Bizkaia, Spain</p>
              <p><strong>Languages:</strong> Native Spanish / English / Basque</p>
          </div>

          <div className='section'>
              <h2>EDUCATION</h2>
              <p><strong>Full Stack Program:</strong> DevCamp by Bottega University (2023 - 2024)</p>
              <p><strong>Big Data and Business Intelligence Program:</strong> Universidad de Deusto (2020 - 2021)</p>
              <p><strong>Master's in Leisure Project Management:</strong> Universidad de Deusto (2019 - 2020)</p>
              <p><strong>Degree in Political Science and Public Management:</strong> UPV/EHU (2013 - 2019)</p>
          </div>

          <div className='section'>
              <h2>EXPERIENCE</h2>
              <p><strong>Qualitative Research Technician:</strong> Kualitate Lantaldea, Bilbao (2020-2023)</p>
              <p><strong>Event Organization Technician (Intern):</strong> Universidad de Deusto, Bilbao (2020)</p>
              <p><strong>Qualitative Research Technician (Intern):</strong> Kualitate Lantaldea, Bilbao (2018-2019)</p>
          </div>

          <div className='section'>
              <h2>CONTACT</h2>
              <p><strong>Phone:</strong> +34 688 650 193</p>
              <p><strong>Email:</strong> jonmadariaga93@gmail.com</p>
              <p><strong>Address:</strong> Plazarte, 45, Sopela, Bizkaia</p>
          </div>

          <div className='section'>
              <h2>SKILLS</h2>
              <SkillBar skill="HTML5" level={95} />
              <SkillBar skill="JavaScript" level={90} />
              <SkillBar skill="CSS" level={90} />
              <SkillBar skill="React.js" level={85} />
              <SkillBar skill="Git" level={80} />
              <SkillBar skill="MySQL" level={80} />
              <SkillBar skill="Python" level={80} />
              <SkillBar skill="Node.js" level={75} />
              <SkillBar skill="SAAS" level={75} />
              <SkillBar skill="MongoDB" level={70} />
              <SkillBar skill="R" level={70} />
              <SkillBar skill="UML" level={65} />
          </div>
      </div>


    </div>
  );
};

export default CV;
