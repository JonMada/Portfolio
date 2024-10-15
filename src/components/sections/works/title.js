import React from 'react';
import Typical from 'react-typical';



const WorksTitle = () => {
    return(
        <div className='works-title'>
            <Typical
                steps={[ 1000,'MY RECENT PROJECTS']}
                wrapper="div"
            />
    
        </div>
    )
}

export default WorksTitle;