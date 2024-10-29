
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const WorksTitle = () => {
    
    
    return (
        <div className='works-title'>
            <Typewriter
                words={['MY RECENT PROJECTS']}
                loop={1} 
                cursor
                cursorStyle='|'
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
            />
        </div>
    );
};

export default WorksTitle;
