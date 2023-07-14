import { Box } from '@mui/material';
import React from 'react';
import * as THREE from 'three';
import { forwardRef, } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {  useGLTF,  ScrollControls, useTexture, useScroll } from '@react-three/drei';
import useRefs from 'react-use-refs';

const rsqw = (t, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) => (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);

function Composition({ ...props }) {
  const scroll = useScroll();
  const { width, height } = useThree((state) => state.viewport);
  const [group, mbp16, mbp14, keyLight, stripLight, fillLight, left, right] = useRefs();
  const [textureRed, textureBlue] = useTexture(['/Ado.jpg', '/Chroma Blue.jpg']);

  useFrame((state, delta) => {
    const r1 = scroll.range(0 / 4, 1 / 4);
    const r2 = scroll.range(1 / 4, 1 / 4);
    const r3 = scroll.visible(4 / 5, 1 / 5);
    mbp16.current.rotation.x = Math.PI - (Math.PI / 2) * rsqw(r1) + r2 * 0.33;
    mbp14.current.rotation.x = Math.PI - (Math.PI / 2) * rsqw(r1) - r2 * 0.39;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, (-Math.PI / 1.45) * r2, 4, delta);
    group.current.position.x = THREE.MathUtils.damp(group.current.position.x, (-width / 7) * r2, 4, delta);
    group.current.scale.x = group.current.scale.y = group.current.scale.z = THREE.MathUtils.damp(group.current.scale.z, 1 + 0.24 * (1 - rsqw(r1)), 4, delta);
    keyLight.current.position.set(0.25 + -15 * (1 - r1), 4 + 11 * (1 - r1), 3 + 2 * (1 - r1));
    left.current?.classList.toggle('show', r3);
    right.current?.classList.toggle('show', r3);
  });
  return (
    <>
      <spotLight position={[0, -width * 0.7, 0]} intensity={0.5} />
      <directionalLight ref={keyLight} castShadow intensity={6}>
        <orthographicCamera attachObject={['shadow', 'camera']} args={[-10, 10, 10, -10, 0.5, 30]} />
      </directionalLight>
      <group ref={group} position={[0, -height / 3.65, 0]} {...props}>
        <spotLight ref={stripLight} position={[width * 2.5, 0, width]} angle={0.19} penumbra={1} intensity={0.25} />
        <spotLight ref={fillLight} position={[0, -width / 2.4, -width * 2.2]} angle={0.2} penumbra={1} intensity={2} distance={width * 3} />
        <M1 ref={mbp16} texture={textureRed} scale={width / 67}>
          {/*<Tag ref={left} position={[16, 5, 0]} head="up to" stat="13x" expl={`faster\ngraphics\nperformance²`} />*/}
        </M1>
        <M1 ref={mbp14} texture={textureBlue} scale={width / 77} rotation={[0, Math.PI, 0]} position={[0, 0, -width / 2.625]}>
          {/*<Tag ref={right} position={[10, 14, 0]} head="up to" stat="3.7x" expl={`faster CPU\nperformance¹`} />*/}
        </M1>
      </group>
    </>
  );
}

// eslint-disable-next-line react/display-name
const M1 = forwardRef(({ texture, children, ...props }, ref) => {
  const { nodes, materials } = useGLTF('/mbp-v1-pipe.glb');
  return (
    <group {...props} dispose={null}>
      <group ref={ref} position={[0, -0.43, -11.35]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.back_1.geometry} material={materials.blackmatte} />
        <mesh receiveShadow castShadow geometry={nodes.back_2.geometry} material={materials.aluminium} />
        <mesh geometry={nodes.matte.geometry}>
          <meshLambertMaterial map={texture} toneMapped={false} />
        </mesh>
      </group>
      {children}
      <mesh geometry={nodes.body_1.geometry} material={materials.aluminium} material-color='#aaaaaf' material-envMapIntensity={0.2} />
      <mesh geometry={nodes.body_2.geometry} material={materials.blackmatte} />
    </group>
  );
});

const Fusion = (props) => {
  return (
    <Box id='style-2' sx={{ backgroundColor: '#383737', width: '100%', height: { xs: '35vh', sm: '40vh', md: '60vh', lg: '80vh' }, mb: 15 }}>
      <Box className='extra' color={'white'} textAlign={'center'} sx={{ fontSize: { xs: '2rem', lg: '3.5rem' } }} fontWeight={900}>
        HUZURLARINIZDA
      </Box>

      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, -3.2, 40], fov: 12 }}>
        <ScrollControls pages={2}>
          <Composition />
        </ScrollControls>
      </Canvas>
      {/*<Box className="scroll-container" ref={containerRef} display={'flex'} justifyContent={'center'} alignItems={'center'} height={'50rem'} width={'100%'} color={'white'}>
        <Box className='img-container' sx={{ flexDirection: 'column', justifyContent: 'end' }}>
          <motion.div className="img-inner" style={{ translateX: imageValue }}>
            <Image width={170} src={Watch} alt="a green plant" />
          </motion.div>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
            <motion.div className="img-inner" style={{ translateX: imageValue }}>
              <Image style={{ marginRight: 20, }} width={30} src={Usb} alt="a green plant" />
              <Image style={{ marginRight: 20 }} width={20} src={Pen} alt="a green plant" />
              <Image width={60} src={Glasses} alt="a green plant" />
            </motion.div>
          </Box>
          <motion.div className="img-inner" style={{ translateX: imageValue }}>
            <Image width={170} src={Makas} alt="a green plant" />
          </motion.div>
        </Box>

        <Box className='img-container' >
          <div className="img-inner" >
            <Image width={550} src={Mac} alt="a green plant" />

          </div>
        </Box>

        <Box className='img-container' sx={{ flexDirection: 'column' }}>
          <motion.div className="img-inner" style={{ translateX: rightItems }}>
            <Image width={200} src={Coffe} alt="a green plant" />
          </motion.div>
          <Box sx={{ width: '100%', display: 'flex' }}>
            <motion.div style={{ translateX: rightItems, display: 'flex', }}>
              <Image style={{ marginRight: 10 }} width={30} src={Cetvel} alt="a green plant" />
              <motion.div style={{ translateX: rightItems, display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                <Image width={100} src={Ruler} alt="a green plant" />
                <Image width={100} src={Plane} alt="a green plant" />
              </motion.div>
            </motion.div>
          </Box>
        </Box>
      </Box>
      <Container maxWidth='xl' sx={{ minHeight: '35rem', mt: 7 }}>
        <Grid container spacing={2}>
          <Grid item md={4} >
            <Box component={'img'} src='https://via.placeholder.com/477x658' sx={{ width: '100%', height: '100%', backgroundColor: 'white' }} />
          </Grid>
          <Grid item md={4} >
            <Box component={'img'} src='https://via.placeholder.com/477x658' sx={{ width: '100%', height: '100%', backgroundColor: 'white' }} />
          </Grid>
          <Grid item md={4} >
            <Box component={'img'} src='https://via.placeholder.com/477x658' sx={{ width: '100%', height: '100%', backgroundColor: 'white' }} />
          </Grid>
        </Grid>
        <Box display={'flex'} mt={8} width={'100%'} flexDirection={'column'} color={'white'} height={'100%'} textAlign={'center'}>
          <Box sx={{ fontSize: { xs: '2rem', sm: '4.5rem', md: '6rem' } }} fontWeight={900}>HEMEN TANIŞALIM</Box>
          <Box sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3.8rem' } }} fontWeight={600}>Seninle konuşmayı çok isteriz</Box>
          <Box display={'flex'} flexDirection={'row'} width={'100%'} mt={3} justifyContent={'center'}>
            <Button size='large' sx={{ width: { xs: '50%', md: '50%', lg: '40%' }, borderRadius: '2rem', mr: 1, backgroundColor: 'black', border: '1px solid grey', height: '4rem' }} variant='contained'> Button</Button>
            <Button size='large' sx={{ width: { xs: '50%', md: '20%' }, borderRadius: '2rem', backgroundColor: 'white', color: 'black' }} variant='contained'>Lorem </Button>
          </Box>
        </Box>
      </Container>*/}
    </Box>
  );
};

export default Fusion;
