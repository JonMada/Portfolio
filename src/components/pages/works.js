import React, {useState} from 'react';

import WorksTitle from '../sections/works/title';
import WorksFilter from '../sections/works/filter';
import Projects from '../sections/works/projects';


const Works = ({ loading }) => {
    const [selectedTechnologies, setSelectedTechnologies] = useState([]);

    const handleFilterChange = (technologies) => {
        setSelectedTechnologies(technologies);
    };

    return (
        <div className='works-page'>
            {!loading ? (
                <>
                    <WorksTitle loading={loading} />
                    <WorksFilter onFilterChange={handleFilterChange}/>
                    <Projects selectedTechnologies={selectedTechnologies}/>
                </>
            ) : null}
        </div>
    )
}

export default Works;
