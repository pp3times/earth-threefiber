import React from "react";
import { useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three"

import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthNomalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";
import { TextureLoader } from "three";

export function Earth(props) {

	const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [EarthDayMap, EarthNomalMap, EarthSpecularMap, EarthCloudsMap]);

	return (
		<>
			<ambientLight intensity={1} />
			<Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade={true} />
			<mesh>
				<sphereGeometry args={[1.005, 32, 32]} />
				<meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide} />
			</mesh>
			<mesh>
				<sphereGeometry args={[1, 32, 32]} />
				<meshStandardMaterial specularMap={specularMap} />
				<meshStandardMaterial map={colorMap} normalMap={normalMap} />
				<OrbitControls enableZoom={true} enablePan={true} enableRotate={true} zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4} />
			</mesh>
		</>
	)
}