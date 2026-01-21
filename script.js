import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'
import debug_gui from './js_modules/lil-gui'
import { avion_menu } from './objects/avion/avion-gui'
import { debug_object_avion } from './objects/avion/avion-gui'
import { helice_group } from './objects/avion/avion'

//canvas doom element
const canvas = document.querySelector('canvas.webgl')

//viewpor sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}

//debug objetc
const debug_object = {}
debug_object.controls_value = false

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 200)
camera.position.z = 5

//orbit controls
const controls = new OrbitControls(camera,canvas)
controls.enableDamping = true
controls.enabled = false

//objects
import {avion} from './objects/avion/avion'

const axesHelper = new THREE.AxesHelper(2)

//gui options
debug_gui.
    add(debug_object,'controls_value').onChange((value)=>{
        controls.enabled = value
    })
    .name('Orbit Controls 🕹️')

//avion menu
avion_menu(avion)


//scene
const scene = new THREE.Scene()
scene
    .add(camera,axesHelper,avion)

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

//timer fps
let time = Date.now()
let deltaTime = 0

//loop
const loop = () => {
    //deltatime
    const currentTime = Date.now()
    deltaTime = currentTime - time
    time = currentTime

    if(debug_object_avion.avion_helices_movimiento){
        helice_group.rotation.x += 0.01 * deltaTime
    }
    //update orbitcontrols
    controls.update()

    //render frame
    renderer.render(scene,camera)

    //recall loop
    requestAnimationFrame(loop)
}

export {
    deltaTime
}

loop()