import React from 'react';
import { useLocation } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ProjectDetails = () => {
    const location = useLocation();
    const project = location.state?.project; 

    if (!project) {
        return <div>Project not found</div>;
    }

    // Configuración del carrusel
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1, 
            slidesToSlide: 1, 
            infinite: true
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1,
            infinite: true
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
            infinite: true
        }
    };

    const carouselSettings = {
        responsive,
        infinite: true, 
        autoPlay: true, 
        autoPlaySpeed: 3000, 
        keyBoardControl: true, 
        customTransition: "all .5s", 
        transitionDuration: 500, 
        containerClass: "carousel-container", 
        removeArrowOnDeviceType: ["tablet", "mobile"], 
    };


    return (
        <div className="project-details">
            <h1>{project.title}</h1>

            <section className="project-screenshots">
                <Carousel {...carouselSettings}>
                    {project.screenshots.map((screenshot, index) => (
                        <div key={index} style={{ marginBottom: '20px' }}>
                            <img 
                                src={screenshot.url} 
                                alt={screenshot.caption} 
                                title={screenshot.caption} 
                                style={{ width: '100%', borderRadius: '5px', marginTop: '15px', marginBottom: '15px' }} 
                            />
                        </div>
                    ))}

                   
                </Carousel>
                
                <div className="button-container">
                    <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="visit-resource-button"
                    >
                        Visit Resource
                    </a>

                    <a 
                        href={project.codeLink[0]} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="visit-resource-button"
                    >
                        Code Repos
                    </a>

                 
                </div>
            </section>


            <section className="project-details-section">
                <p>{project.details}</p>
            </section>
           
        </div>
    );
};

export default ProjectDetails;
