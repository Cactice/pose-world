import { Box, Cone } from '@components/BasicObjects'
import { blazeposeLeftNameToMixamoMap, blazeposeToMixamoMap, landmarkToVec3, mixamoToBlazepose, SkeletonNodes } from '@components/utils'
import { usePose } from '@hooks/usePose'
import { NormalizedLandmarkList } from '@mediapipe/pose'
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import React, { FC, Suspense, useEffect, useRef, useState } from "react"
import { Bone, Euler, Object3D, Quaternion, SkinnedMesh, Vector3 } from "three"
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"



const applyLandmarksToModel =
  (landmarks: NormalizedLandmarkList,
    skeletonNodes: SkeletonNodes
  ) => {
    Object.entries(blazeposeToMixamoMap).map(([blazeposeIndex, boneName]) => {
      const landmark = landmarks[Number(blazeposeIndex)]
      const bone = skeletonNodes[boneName]
      if (bone) {
        const parentLandmark = bone?.parent?.name ? landmarks[Number(mixamoToBlazepose[bone.parent.name])] : { x: 0, y: 0, z: 0 }
        const landmarkVec3 = landmarkToVec3(landmark)
        const parentLandmarkVec3 = landmarkToVec3(parentLandmark ?? { x: 0, y: 0, z: 0 })
        const angle = new Euler().setFromVector3(parentLandmarkVec3.sub(landmarkVec3))
        const currentAngle = new Quaternion()
        bone.parent?.getWorldQuaternion(currentAngle)
        // if (boneName === 'mixamorigLeftForeArm') {
        //   bone.parent?.getWorldQuaternion(currentAngle)
        //   bone.setRotationFromQuaternion(currentAngle)
        // } else {
        // const angleQ = new Quaternion().setFromEuler(angle)
        const direction = parentLandmarkVec3.sub(landmarkVec3)
        const directionQ = new Quaternion().setFromUnitVectors(new Vector3(0, 1, 0), direction.clone().normalize())
        const directionQ2 = directionQ.clone().multiply(new Quaternion(0.5110536, 0, 0.5110536, 0.6911211)) // rotate 90 degrees on Z
        if (boneName.includes('Left')) {
          bone.parent?.getWorldQuaternion(currentAngle)
          const targetQ = currentAngle.clone().invert().multiply(directionQ2).multiply(new Quaternion(0, -1, 0, 0))
          bone.setRotationFromQuaternion(targetQ)
        }
        else {
          bone.parent?.getWorldQuaternion(currentAngle)
          const targetQ = currentAngle.clone().invert().multiply(directionQ2)
          bone.setRotationFromQuaternion(targetQ)
        }
        // const angleDiff = currentAngle.invert().multiply(angleQ)
        // bone.setRotationFromEuler(new Euler().setFromQuaternion(angleDiff))
        // }
      }
    })
  }
const defaultScale = new Vector3(0.02, 0.02, 0.02)

const Dancer: FC<{ landmarks: NormalizedLandmarkList }> = ({ landmarks }) => {
  const texture = useTexture('stacy.jpg')
  const gltf = useGLTF('dancer.glb', '/') as GLTF & { nodes: { [e in string]: (Object3D | Bone | SkinnedMesh) } }
  const { nodes } = gltf
  const dancer = nodes.Beta_Surface as SkinnedMesh


  useEffect(() => { applyLandmarksToModel(landmarks, nodes as SkeletonNodes) }, [landmarks])


  return (
    <group dispose={null}>
      {
        'geometry' in dancer ?
          <>
            <group rotation={[Math.PI / 2, 0, Math.PI]} scale={defaultScale}>
              <primitive object={nodes["mixamorigHips"]} />
              <skinnedMesh receiveShadow castShadow geometry={dancer.geometry} skeleton={dancer.skeleton} >
                <meshBasicMaterial map={texture} map-flipY={false} skinning />
              </skinnedMesh>
            </group>
          </>
          : null
      }
    </group>
  )
}

const Camera: FC = () => {
  const { camera } = useThree()
  return <OrbitControls camera={camera} />
}
const DebugLandmark = ({ landmarks }: { landmarks: NormalizedLandmarkList }) => {
  return <>
    {landmarks?.length && landmarks.map((landmark, i) => {
      if ('x' in landmark) {
        const { x, y, z } = landmark
        const color = i in blazeposeLeftNameToMixamoMap ? 'red' : 'blue'
        const landmarkVec3 = landmarkToVec3(landmark)
        const parentLandmarkVec3 = landmarkToVec3(landmarks[i - 2] ? landmarks[i - 2] : landmark)

        const angle = new Euler().setFromVector3(parentLandmarkVec3.sub(landmarkVec3).multiplyScalar(-1))

        return <Cone key={i} props={{ position: [x, -y, z], rotation: angle }} color={color} />
      }
    })}
  </>
}

export default function Pose() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream
          }
        })
        .catch((err0r) => {
          console.log("Something went wrong!")
          console.log(err0r)
        });
    }
  }, [])
  const landmarks = usePose({ videoRef })


  return <>
    <Canvas style={{ height: '70vh' }}>

      <Suspense fallback={null}>
        {/* <DancerDebug /> */}
        {landmarks && <><Dancer landmarks={landmarks} /><DebugLandmark landmarks={landmarks} /></>}
      </Suspense>
      <Camera />
    </Canvas>
    <video autoPlay={true} ref={videoRef} width={300} />
  </>
}
