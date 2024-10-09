import React, { useState, useEffect } from 'react';


const Loader = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsComplete(true); 
          setTimeout(() => {
            onLoadComplete();
          }, 500); 
          return 100;
        }
        return prevProgress + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div className={`loader ${isComplete ? 'loader--complete' : ''}`}>
      <div 
        className="loader__progress" 
        style={{ height: `${progress}%` }} 
      />
      <div className="loader__text">{progress}%</div>
    </div>
  );
};

export default Loader;
