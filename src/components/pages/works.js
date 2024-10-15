import React from 'react';

import WorksTitle from '../sections/works/title';
import WorksFilter from '../sections/works/filter';

const Works = ({ loading }) => {
    return (
        <div className='works-page'>
            {!loading ? (
                <>
                    <WorksTitle loading={loading} />
                    <WorksFilter />
                </>
            ) : null}
        </div>
    )
}

export default Works;
