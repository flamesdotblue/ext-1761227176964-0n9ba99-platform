import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <div className="absolute inset-0 z-0">
      <Spline
        scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black"></div>
    </div>
  );
}
