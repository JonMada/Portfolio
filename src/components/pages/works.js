import React from 'react';

import WorksTitle from '../sections/works/title';
import WorksFilter from '../sections/works/filter';
import Projects from '../sections/works/projects';


const Works = ({ loading }) => {
    return (
        <div className='works-page'>
            {!loading ? (
                <>
                    <WorksTitle loading={loading} />
                    <WorksFilter />
                    <Projects />
                </>
            ) : null}
        </div>
    )
}

export default Works;
