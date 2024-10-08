import React from 'react';

const AnimatedBackground = () => {
  return (
    <svg
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      viewBox="0 0 1600 1000" 
    >
      <defs>
        <pattern id="animatedPattern" patternUnits="userSpaceOnUse" width="100%" height="1000">
          {/* Círculo animado centrado */}
          <circle cx="800" cy="500" r="600" stroke="#8bacee" strokeWidth="0.5" fill="none">
            <animate
              attributeName="r"
              from="100"
              to="600"
              dur="6s"
              fill="freeze"
            />
          </circle>

          {/* Cuadrado animado centrado */}
          <rect className="square" x="500" y="200" width="600" height="600" stroke="#8bacee" strokeWidth="0.5" fill="none">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="scale"
              from="3, 2"
              to="1, 1"
              dur="6s"
              fill="freeze"
            />
          </rect>

          {/* Líneas diagonales */}
          <line className="line-diagonal-1" x1="0" y1="0" x2="1600" y2="1000" stroke="#8bacee" strokeWidth="0.5" />


          {/* Líneas horizontales */}
          <line className="line-horizontal-1" x1="0" y1="400" x2="1600" y2="400" stroke="#8bacee" strokeWidth="0.5" />
          <line className="line-horizontal-2" x1="0" y1="600" x2="1600" y2="600" stroke="#8bacee" strokeWidth="0.5" />

          {/* Líneas verticales */}
          <line className="line-vertical-left" x1="0" y1="0" x2="0" y2="1000" stroke="#8bacee" strokeWidth="1.5" />
          <line className="line-vertical-right" x1="1600" y1="0" x2="1600" y2="1000" stroke="#8bacee" strokeWidth="1.5" />
        </pattern>
      </defs>

      {/* Rellenar el fondo con el patrón animado y establecer un alto grande para que se repita al hacer scroll */}
      <rect
        width="100%"
        height="100%"
        fill="url(#animatedPattern)"
      />
    </svg>
  );
};

export default AnimatedBackground;
