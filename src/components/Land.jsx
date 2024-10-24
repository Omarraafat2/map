import React from 'react';
import { Plane } from '@react-three/drei';

const Land = () => (
  <Plane receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} args={[100, 100]}>
    <meshStandardMaterial attach="material" color="green" />
  </Plane>
);

export default Land;
