import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

//canvas doom element
const canvas = document.querySelector('canvas.webgl')

//viewpor sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 200)
camera.position.z = 5

//object delete
const object = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true})
)

const axesHelper = new THREE.AxesHelper(2)

//scene
const scene = new THREE.Scene()
scene
    .add(camera,object,axesHelper)

//renderer
const renderer = new THREE.WebGLRenderer({canvas:canvas})
renderer.setSize(sizes.width,sizes.height)

//update camera
window.addEventListener('resize', (event) => {
    //update sizes
    sizes.width = innerWidth
    sizes.height = innerHeight

    //update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateMatrix()

    //update rendere
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

//orbit controls
const controls = new OrbitControls(camera,canvas)
controls.enableDamping = true

//loop
const loop = () => {
    //update orbitcontrols
    controls.update()

    //render frame
    renderer.render(scene,camera)

    //recall loop
    requestAnimationFrame(loop)
}

loop()