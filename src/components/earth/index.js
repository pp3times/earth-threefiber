import React from "react";

export function Earth(props) {
	return (
		<>
			<mesh>
				<sphereGeometry args={[1, 32, 32]} />
				<meshPhongMaterial color="red" />
			</mesh>
		</>
	)
	// return (
	// 	<mesh
	// 		position={props.position}
	// 		rotation={props.rotation}
	// 		scale={props.scale}
	// 		onClick={props.onClick}
	// 	>
	// 		<sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
	// 		<meshStandardMaterial
	// 			attach="material"
	// 			color={0xffffff}
	// 			roughness={0.5}
	// 			metalness={0.5}
	// 		/>
	// 	</mesh>
	// );
}