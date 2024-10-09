import React, { useEffect, useState } from 'react';

const AnimatedBackground = ({ loading }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!loading) {
      // Iniciar la animación solo cuando loading sea false
      setIsAnimating(true);
    }
  }, [loading]);

  return (
    <svg
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      viewBox="0 0 1600 1000"
    >
      <defs>
        <pattern id="animatedPattern" patternUnits="userSpaceOnUse" width="100%" height="1000">
          <circle cx="800" cy="500" r="600" stroke="#8bacee" strokeWidth="0.5" fill="none">
            <animate
              attributeName="r"
              from="100"
              to="600"
              dur="6s"
              fill="freeze"
              begin={isAnimating ? "0s" : "indefinite"} 
            />
          </circle>

          <rect className="square" x="500" y="200" width="600" height="600" stroke="#8bacee" strokeWidth="0.5" fill="none">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="scale"
              from="3, 2"
              to="1, 1"
              dur="6s"
              fill="freeze"
              begin={isAnimating ? "0s" : "indefinite"} 
            />
          </rect>

          <line className="line-diagonal-1" x1="0" y1="0" x2="1600" y2="1000" stroke="#8bacee" strokeWidth="0.5" />
          
          <line className="line-horizontal-1" x1="0" y1="400" x2="1600" y2="400" stroke="#8bacee" strokeWidth="0.5" />
          <line className="line-horizontal-2" x1="0" y1="600" x2="1600" y2="600" stroke="#8bacee" strokeWidth="0.5" />

          <line className="line-vertical-left" x1="0" y1="0" x2="0" y2="1000" stroke="#8bacee" strokeWidth="1.5">
            <animate
              attributeName="x1"
              from="200"
              to="0"
              dur="6s"
              fill="freeze"
              begin={isAnimating ? "0s" : "indefinite"} 
            />
            <animate
              attributeName="x2"
              from="200"
              to="0"
              dur="6s"
              fill="freeze"
              begin={isAnimating ? "0s" : "indefinite"} 
            />
          </line>
          <line className="line-vertical-right" x1="1600" y1="0" x2="1600" y2="1000" stroke="#8bacee" strokeWidth="1.5">
            <animate
              attributeName="x1"
              from="1200"
              to="1600"
              dur="6s"
              fill="freeze"
              begin={isAnimating ? "0s" : "indefinite"} 
            />
            <animate
              attributeName="x2"
              from="1200"
              to="1600"
              dur="6s"
              fill="freeze"
              begin={isAnimating ? "0s" : "indefinite"} 
            />
          </line>
        </pattern>
      </defs>

      <rect
        width="100%"
        height="100%"
        fill="url(#animatedPattern)"
      />

      <rect
        x="-10"
        y="490"
        width="20"
        height="20"
        fill="#8bacee"
      />
      <rect
        x="1590"
        y="490"
        width="20"
        height="20"
        fill="#8bacee"
      />
    </svg>
  );
};

export default AnimatedBackground;
