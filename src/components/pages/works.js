import React, {useState} from 'react';

import WorksTitle from '../sections/works/title';
import WorksFilter from '../sections/works/filter';
import Projects from '../sections/works/projects';
import Footer from '../sections/footer';


const Works = ({ loading }) => {
    const [selectedTechnologies, setSelectedTechnologies] = useState([]);

    const handleFilterChange = (technologies) => {
        setSelectedTechnologies(technologies);
    };

    return (
        <div className='works-page'>
            <div className='works-container'>
                {!loading ? (
                    <>
                        <WorksTitle loading={loading} />
                        <WorksFilter onFilterChange={handleFilterChange}/>
                        <Projects selectedTechnologies={selectedTechnologies}/>
                    </>
                ) : null}
            </div>
            <Footer/>
        </div>
    )
}

export default Works;
