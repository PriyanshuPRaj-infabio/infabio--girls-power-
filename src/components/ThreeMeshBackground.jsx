import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

// Global mouse tracker to share coordinates between DOM and WebGL thread
const sharedMouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
// Global scroll tracker to track smooth scroll metrics on the WebGL thread
const sharedScroll = { current: 0, target: 0 };

if (typeof window !== 'undefined') {
  const handleMouseMove = (e) => {
    sharedMouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
    sharedMouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
  };
  window.addEventListener('mousemove', handleMouseMove, { passive: true });

  const handleScroll = () => {
    sharedScroll.target = window.scrollY;
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
}

function GridMesh() {
  const pointsRef = useRef(null);
  const geoRef = useRef(null);
  const { size } = useThree();
  const { theme } = useTheme();

  const width = 45;
  const height = 45;
  const count = width * height;

  // Initialize flat grid points in a 3D float array
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        const idx = (i * height + j) * 3;
        pos[idx] = (i - width / 2) * 1.4;
        pos[idx + 1] = (j - height / 2) * 1.4;
        pos[idx + 2] = 0;
      }
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const geo = geoRef.current;
    const points = pointsRef.current;
    if (!geo || !points) return;

    // Smooth lerp mouse positioning
    sharedMouse.x += (sharedMouse.targetX - sharedMouse.x) * 0.08;
    sharedMouse.y += (sharedMouse.targetY - sharedMouse.y) * 0.08;

    // Smooth lerp scroll position
    sharedScroll.current += (sharedScroll.target - sharedScroll.current) * 0.08;

    // Slowly rotate the mesh grid on scroll
    points.rotation.z = time * 0.015 + sharedScroll.current * 0.0003;
    points.rotation.x = Math.sin(time * 0.1) * 0.1 + sharedScroll.current * 0.00015;

    const posAttr = geo.attributes.position;

    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        const idx = i * height + j;
        const x = posAttr.getX(idx);
        const y = posAttr.getY(idx);

        // Base morphing waves
        let z = Math.sin(time * 0.35 + x * 0.12 + y * 0.12) * 2.2;
        z += Math.cos(time * 0.2 + x * 0.08 - y * 0.08) * 1.2;

        // Interactive mouse distortion warp
        const dx = x - sharedMouse.x * 24;
        const dy = y - sharedMouse.y * 14;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 10) {
          const influence = (1 - dist / 10) * 4.2;
          z += Math.sin(time * 2.2 + dist) * influence;
        }

        posAttr.setZ(idx, z);
      }
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry ref={geoRef}>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={theme === 'light' ? 0.22 : 0.13}
        color={theme === 'light' ? '#7c3aed' : '#c084fc'}
        transparent
        opacity={theme === 'light' ? 0.6 : 0.38}
        sizeAttenuation={true}
      />
    </points>
  );
}

function StarField() {
  const pointsRef = useRef(null);
  const orangeRef = useRef(null);
  const count = 300;
  const { theme } = useTheme();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 85;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 85;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 60;
    }
    return pos;
  }, []);

  const orangePositions = useMemo(() => {
    const pos = new Float32Array(180 * 3);
    for (let i = 0; i < 180; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 85;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 85;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 60;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const points = pointsRef.current;
    const orange = orangeRef.current;
    const time = state.clock.getElapsedTime();
    
    if (points) {
      points.rotation.y = time * 0.009 + sharedScroll.current * 0.00015;
      points.rotation.x = time * 0.004 + sharedScroll.current * 0.00008;
    }
    if (orange) {
      orange.rotation.y = -time * 0.007 - sharedScroll.current * 0.0001;
      orange.rotation.x = -time * 0.003 - sharedScroll.current * 0.00006;
    }
  });

  return (
    <>
      {/* Electric Indigo Drifting Starfield */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={theme === 'light' ? 0.24 : 0.17}
          color={theme === 'light' ? '#4f46e5' : '#6366f1'}
          transparent
          opacity={theme === 'light' ? 0.55 : 0.3}
          sizeAttenuation={true}
        />
      </points>
      {/* Rose Gold Drifting Starfield */}
      <points ref={orangeRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[orangePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={theme === 'light' ? 0.25 : 0.18}
          color={theme === 'light' ? '#db2777' : '#fda4af'}
          transparent
          opacity={theme === 'light' ? 0.55 : 0.32}
          sizeAttenuation={true}
        />
      </points>
    </>
  );
}

export default function ThreeMeshBackground() {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Underlying ambient background overlay */}
      <div className="absolute inset-0 bg-background transition-colors duration-500" />
      
      {/* WebGL Canvas fixed backdrop */}
      <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${theme === 'light' ? 'opacity-85' : 'opacity-70'}`}>
        <Canvas
          camera={{ position: [0, 0, 22], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={theme === 'light' ? 0.9 : 0.6} />
          <GridMesh />
          <StarField />
        </Canvas>
      </div>

      {/* Floating dynamic glow elements all over the site — redesigned for cyber-feminine luxury */}
      <div className={`absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[140px] pointer-events-none transition-colors duration-700 ${
        theme === 'light' ? 'bg-indigo-200/40' : 'bg-indigo-950/15'
      }`} />
      <div className={`absolute top-[30%] right-[10%] w-[50%] h-[50%] rounded-full blur-[140px] pointer-events-none transition-colors duration-700 ${
        theme === 'light' ? 'bg-purple-200/30' : 'bg-purple-950/12'
      }`} />
      <div className={`absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full blur-[140px] pointer-events-none transition-colors duration-700 ${
        theme === 'light' ? 'bg-pink-200/45' : 'bg-pink-950/10'
      }`} />
    </div>
  );
}
