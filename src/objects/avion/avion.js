import * as THREE from 'three'
import { textureLoader } from '../../js_modules/textureLoader'
//grupo avion

const avion = new THREE.Group()

//sub grupo helice
const helice_group = new THREE.Group()

//subgrupo cuerpo del avion
const avion_cuerpo = new THREE.Group()

//wireframe valor
const wireframe_valor = false;

//cargar textura metodo
const cargar_textura = (url) => {
    const textura = textureLoader.load(url)
    textura.colorSpace = THREE.SRGBColorSpace
    return textura
}

//barras de metal color
const barras_de_metal_color = 0x6E6E6E

const textura_avion_ala_superior = cargar_textura('/textures/avion/avion_ala_diseño.jpg')
const textura_avion_base = cargar_textura('textures/avion/avion_ala_base.jpg')
const textura_avion_cola_frontal = cargar_textura('/textures/avion/avion_cola.jpg')
const textura_avion_cola_trasera = cargar_textura('/textures/avion/avion_cola.jpg')
const textura_avion_llantas = cargar_textura('/textures/avion/avion_llanta.jpg')

//movimiento de la textura
textura_avion_ala_superior.center.set(0.5,0.5)
textura_avion_ala_superior.rotation = Math.PI  / 2
textura_avion_ala_superior.minFilter = THREE.NearestFilter
textura_avion_ala_superior.magFilter = THREE.NearestFilter
textura_avion_ala_superior.mipmaps = false

//texturas del ala del avion
const avion_ala_superior_texturas = [
    new THREE.MeshBasicMaterial({map: textura_avion_base, wireframe: wireframe_valor}), //derecha
    new THREE.MeshBasicMaterial({map: textura_avion_base, wireframe: wireframe_valor}), //izquierda
    new THREE.MeshBasicMaterial({map: textura_avion_ala_superior, wireframe: wireframe_valor}), //arriba con diseño
    new THREE.MeshBasicMaterial({map: textura_avion_base, wireframe: wireframe_valor}), //abajo
    new THREE.MeshBasicMaterial({map: textura_avion_base, wireframe: wireframe_valor}), //frontal
    new THREE.MeshBasicMaterial({map: textura_avion_base, wireframe: wireframe_valor}), //trasera
]

//texturas del ala del avion inferiores
const avion_ala_inferior_texturas = [
    new THREE.MeshBasicMaterial({map: textura_avion_base, wireframe: wireframe_valor}), //derecha
    new THREE.MeshBasicMaterial({map: textura_avion_base, wireframe: wireframe_valor}), //izquierda
    new THREE.MeshBasicMaterial({map: textura_avion_base, wireframe: wireframe_valor}), //arriba 
    new THREE.MeshBasicMaterial({map: textura_avion_ala_superior, wireframe: wireframe_valor}), //abajo con diseño
    new THREE.MeshBasicMaterial({map: textura_avion_base, wireframe: wireframe_valor}), //frontal
    new THREE.MeshBasicMaterial({map: textura_avion_base, wireframe: wireframe_valor}), //trasera
]

//texturas de la cola del avion
const avion_cola_texturas = [
    new THREE.MeshBasicMaterial({map: textura_avion_base , side: THREE.DoubleSide, wireframe: wireframe_valor}), //lateral
    new THREE.MeshBasicMaterial({map: textura_avion_cola_frontal , side: THREE.DoubleSide, wireframe: wireframe_valor}), //tapa superior
    new THREE.MeshBasicMaterial({map: textura_avion_cola_trasera , side: THREE.DoubleSide, wireframe: wireframe_valor}), //tapa inferior
]

//texturas de las llantas del avion
const avion_llantas_textura = [
    new THREE.MeshBasicMaterial({color: barras_de_metal_color, wireframe: wireframe_valor,side: THREE.DoubleSide}), //lateral
    new THREE.MeshBasicMaterial({map: textura_avion_llantas, wireframe: wireframe_valor,side: THREE.DoubleSide}), //tapa superior
    new THREE.MeshBasicMaterial({map: textura_avion_llantas, wireframe: wireframe_valor,side: THREE.DoubleSide}), //tapa inferior
]


avion_cola_texturas[2].map.minFilter = THREE.NearestFilter
avion_cola_texturas[2].map.magFilter = THREE.NearestFilter
avion_cola_texturas[2].map.mipmaps = false
avion_cola_texturas[1].map.minFilter = THREE.NearestFilter
avion_cola_texturas[1].map.magFilter = THREE.NearestFilter
avion_cola_texturas[1].map.mipmaps = false
avion_cola_texturas[2].map.center.set(0.5,0.5)
avion_cola_texturas[2].map.offset.y = 0.3
avion_cola_texturas[2].map.offset.x = -0.1

//base del cuerpo del avion
const avion_cuerpo_parte_baja_geometry = new THREE.CylinderGeometry(0.4,1,6,15,1,true,0,5)
const avion_cuerpo_parte_baja_material = new THREE.MeshBasicMaterial({map: avion_ala_superior_texturas[0].map, side: THREE.DoubleSide, wireframe: wireframe_valor})
const avion_cuerpo_parte_baja_objeto = new THREE.Mesh(avion_cuerpo_parte_baja_geometry,avion_cuerpo_parte_baja_material)
//posicionamiento
avion_cuerpo_parte_baja_objeto.rotation.order = 'ZYX'
avion_cuerpo_parte_baja_objeto.rotation.z = Math.PI * 0.5
avion_cuerpo_parte_baja_objeto.rotation.y = Math.PI * 0.75
avion_cuerpo.add(avion_cuerpo_parte_baja_objeto)

//cola del avion base
const avion_cola_base_geometry = new THREE.CylinderGeometry(0.1,0.4,0.5,15,1,false,0,6.30)
const avion_cola_base_material = new THREE.MeshBasicMaterial({map: avion_ala_superior_texturas[0].map, side: THREE.DoubleSide, wireframe: wireframe_valor})
const avion_cola_base_objeto = new THREE.Mesh(avion_cola_base_geometry,avion_cola_base_material)
//posicionamiento
avion_cola_base_objeto.rotation.order = 'ZYX'
avion_cola_base_objeto.position.x = -3.253
avion_cola_base_objeto.rotation.z = Math.PI * 0.5
avion_cola_base_objeto.rotation.y = Math.PI * 0.75
avion_cuerpo.add(avion_cola_base_objeto)

//avion primera parte de arriba del cuerpo
const avion_cuerpo_arriba_uno_geometry = new THREE.CylinderGeometry(0.69,0.98,3,15,1,false,0,1.3)
const avion_cuerpo_arriba_uno_material = new THREE.MeshBasicMaterial({map: avion_ala_superior_texturas[0].map, side: THREE.DoubleSide, wireframe: wireframe_valor})
const avion_cuerpo_arriba_uno_objeto = new THREE.Mesh(avion_cuerpo_arriba_uno_geometry,avion_cuerpo_arriba_uno_material)
//posicionamiento
avion_cuerpo_arriba_uno_objeto.order = 'ZYX'
avion_cuerpo_arriba_uno_objeto.position.x = 1.5
avion_cuerpo_arriba_uno_objeto.position.y = 0.025
avion_cuerpo_arriba_uno_objeto.rotation.z = Math.PI * 0.5
avion_cuerpo_arriba_uno_objeto.rotation.x = - Math.PI * 0.34
avion_cuerpo.add(avion_cuerpo_arriba_uno_objeto)

//avion asiento 
const avion_asiento_geometry = new THREE.CylinderGeometry(0.49,0.69,2,15,1,false,0,5)
const avion_asiento_material = new THREE.MeshBasicMaterial({color: 0x4A4A4A, side: THREE.DoubleSide, wireframe: wireframe_valor})
const avion_asiento_objeto = new THREE.Mesh(avion_asiento_geometry,avion_asiento_material)
//posicionamiento
avion_asiento_objeto.order = 'ZYX'
avion_asiento_objeto.position.x = -1.01
avion_asiento_objeto.rotation.z = Math.PI * 0.5
avion_asiento_objeto.rotation.x = -Math.PI * 0.75
avion_cuerpo.add(avion_asiento_objeto)

//avion segunda parte de arriba del cuerpo
const avion_cuerpo_arriba_dos_geometry = new THREE.CylinderGeometry(0.39,0.49,0.95,15,1,false,0,6.3)
const avion_cuerpo_arriba_dos_material = new THREE.MeshBasicMaterial({map: avion_ala_superior_texturas[0].map, side: THREE.DoubleSide, wireframe: wireframe_valor})
const avion_cuerpo_arriba_dos_objeto = new THREE.Mesh(avion_cuerpo_arriba_dos_geometry,avion_cuerpo_arriba_dos_material)
//posicionamiento
avion_cuerpo_arriba_dos_objeto.order = 'ZYX'
avion_cuerpo_arriba_dos_objeto.position.x = -2.51   
avion_cuerpo_arriba_dos_objeto.rotation.z = Math.PI * 0.5
avion_cuerpo.add(avion_cuerpo_arriba_dos_objeto)

//estabilizador Vertical Trasero
const avion_cuerpo_estabilizador_vertical_geometry = new THREE.CylinderGeometry(0.27,0.27,0.05,15,1,false,0.55,3.14)
const avion_cuerpo_estabilizador_vertical_objeto = new THREE.Mesh(avion_cuerpo_estabilizador_vertical_geometry,avion_cola_texturas)
//posicionamiento
avion_cuerpo_estabilizador_vertical_objeto.order = 'ZYX'
avion_cuerpo_estabilizador_vertical_objeto.rotation.z = Math.PI * 0.5
avion_cuerpo_estabilizador_vertical_objeto.rotation.y = Math.PI * 0.5
avion_cuerpo_estabilizador_vertical_objeto.position.x = -3.27
avion_cuerpo_estabilizador_vertical_objeto.position.y = 0.25

avion_cuerpo.add(avion_cuerpo_estabilizador_vertical_objeto)

//estabilizador horizontal derecho
const avion_cuerpo_estabilizador_horzontal_derecho_geometry = new THREE.CylinderGeometry(0.27,0.27,0.05,15,1,false,0,3.14)
const avion_cuerpo_estabilizador_horzontal_derecho_material = new THREE.MeshBasicMaterial({map: avion_ala_superior_texturas[0].map,side: THREE.DoubleSide, wireframe: wireframe_valor})
const avion_cuerpo_estabilizador_horzontal_derecho_objeto = new THREE.Mesh(avion_cuerpo_estabilizador_horzontal_derecho_geometry,avion_cuerpo_estabilizador_horzontal_derecho_material) 
//posiacionamiento  
avion_cuerpo_estabilizador_horzontal_derecho_objeto.order = 'ZYX'
avion_cuerpo_estabilizador_horzontal_derecho_objeto.position.x = -3.269
avion_cuerpo_estabilizador_horzontal_derecho_objeto.position.z = 0.26
avion_cuerpo_estabilizador_horzontal_derecho_objeto.rotation.y = -2.1

avion_cuerpo.add(avion_cuerpo_estabilizador_horzontal_derecho_objeto)

//estabilizador horizontal izquierod
const avion_cuerpo_estabilizador_horzontal_izquierdo_geometry = new THREE.CylinderGeometry(0.27,0.27,0.05,15,1,false,0,3.14)
const avion_cuerpo_estabilizador_horzontal_izquierdo_material = new THREE.MeshBasicMaterial({map: avion_ala_superior_texturas[0].map,side: THREE.DoubleSide, wireframe: wireframe_valor})
const avion_cuerpo_estabilizador_horzontal_izquierdo_objeto = new THREE.Mesh(avion_cuerpo_estabilizador_horzontal_izquierdo_geometry,avion_cuerpo_estabilizador_horzontal_izquierdo_material) 
//posiacionamiento  
avion_cuerpo_estabilizador_horzontal_izquierdo_objeto.order = 'ZYX'
avion_cuerpo_estabilizador_horzontal_izquierdo_objeto.position.x = -3.269
avion_cuerpo_estabilizador_horzontal_izquierdo_objeto.position.z = -0.26
avion_cuerpo_estabilizador_horzontal_izquierdo_objeto.rotation.y = 2.1
avion_cuerpo.add(avion_cuerpo_estabilizador_horzontal_izquierdo_objeto)

//nariz del avion
const avion_nariz_geometry = new THREE.CylinderGeometry(1,0.5,0.5,15,1,false,0,6.29)
const avion_nariz_material = new THREE.MeshBasicMaterial({map: avion_ala_superior_texturas[0].map, wireframe: wireframe_valor})
const avion_nariz_objeto = new THREE.Mesh(avion_nariz_geometry, avion_nariz_material)
//posicionamiento
avion_nariz_objeto.order = 'ZYX'
avion_nariz_objeto.position.x = 3.26
avion_nariz_objeto.position.y = 0.025
avion_nariz_objeto.rotation.z = Math.PI * 0.5
avion_nariz_objeto.rotation.x = - Math.PI * 0.34
avion_cuerpo.add(avion_nariz_objeto)

//montante inferior
const avion_montante_inferior_geometry = new THREE.BoxGeometry(1.6,0.1,9)
const avion_montante_inferior_objeto = new THREE.Mesh(avion_montante_inferior_geometry,avion_ala_inferior_texturas)
//posicionamiento
avion_montante_inferior_objeto.position.y = -0.97
avion_montante_inferior_objeto.position.x = 1.2
avion_cuerpo.add(avion_montante_inferior_objeto)

//montante superior
const avion_montante_superior_geometry = new THREE.BoxGeometry(1.6,0.1,9)
const avion_montante_superior_objeto = new THREE.Mesh(avion_montante_superior_geometry,avion_ala_superior_texturas)
//posicionamiento
avion_montante_superior_objeto.position.y = 1.5
avion_montante_superior_objeto.position.x = 1.2
avion_cuerpo.add(avion_montante_superior_objeto)

//avion tensores lado derecho
const avion_tenzor_derecho_uno_geometry = new THREE.CylinderGeometry(0.05,0.05,2.35,15)
const avion_tenzor_derecho_uno_material = new THREE.MeshBasicMaterial({color: barras_de_metal_color, wireframe: wireframe_valor})
const avion_tenzor_derecho_uno_objeto = new THREE.Mesh(avion_tenzor_derecho_uno_geometry,avion_tenzor_derecho_uno_material)
//posicionamiento
avion_tenzor_derecho_uno_objeto.position.z = 3
avion_tenzor_derecho_uno_objeto.position.y = 0.27
avion_tenzor_derecho_uno_objeto.position.x = 1.78
avion_cuerpo.add(avion_tenzor_derecho_uno_objeto)

//avion tensores lado derecho
const avion_tenzor_derecho_dos_geometry = new THREE.CylinderGeometry(0.05,0.05,2.35,15)
const avion_tenzor_derecho_dos_material = new THREE.MeshBasicMaterial({color: barras_de_metal_color, wireframe: wireframe_valor})
const avion_tenzor_derecho_dos_objeto = new THREE.Mesh(avion_tenzor_derecho_dos_geometry,avion_tenzor_derecho_dos_material)
//posicionamiento
avion_tenzor_derecho_dos_objeto.position.z = 3
avion_tenzor_derecho_dos_objeto.position.y = 0.27
avion_tenzor_derecho_dos_objeto.position.x = 0.6
avion_cuerpo.add(avion_tenzor_derecho_dos_objeto)

//avion tensores lado derecho
const avion_tenzor_derecho_tres_geometry = new THREE.CylinderGeometry(0.05,0.05,2.5,15)
const avion_tenzor_derecho_tres_material = new THREE.MeshBasicMaterial({color: barras_de_metal_color, wireframe: wireframe_valor})
const avion_tenzor_derecho_tres_objeto = new THREE.Mesh(avion_tenzor_derecho_tres_geometry,avion_tenzor_derecho_tres_material)
//posicionamiento
avion_tenzor_derecho_tres_objeto.position.z = 3
avion_tenzor_derecho_tres_objeto.position.y = 0.27
avion_tenzor_derecho_tres_objeto.position.x = 1.2
avion_tenzor_derecho_tres_objeto.rotation.z = Math.PI * 0.125
avion_cuerpo.add(avion_tenzor_derecho_tres_objeto)

//avion tensores lado derecho
const avion_tenzor_derecho_cuatro_geometry = new THREE.CylinderGeometry(0.07,0.07,1,15)
const avion_tenzor_derecho_cuatro_material = new THREE.MeshBasicMaterial({color: barras_de_metal_color, wireframe: wireframe_valor})
const avion_tenzor_derecho_cuatro_objeto = new THREE.Mesh(avion_tenzor_derecho_cuatro_geometry,avion_tenzor_derecho_cuatro_material)
//posicionamiento
avion_tenzor_derecho_cuatro_objeto.position.z = 0.9
avion_tenzor_derecho_cuatro_objeto.position.y = 1.04
avion_tenzor_derecho_cuatro_objeto.position.x = 1.78
avion_tenzor_derecho_cuatro_objeto.rotation.x = Math.PI * 0.25
avion_cuerpo.add(avion_tenzor_derecho_cuatro_objeto)

//avion tensores lado izquierdo
const avion_tenzor_izquierdo_uno_geometry = new THREE.CylinderGeometry(0.05,0.05,2.35,15)
const avion_tenzor_izquierdo_uno_material = new THREE.MeshBasicMaterial({color: barras_de_metal_color, wireframe: wireframe_valor})
const avion_tenzor_izquierdo_uno_objeto = new THREE.Mesh(avion_tenzor_izquierdo_uno_geometry,avion_tenzor_izquierdo_uno_material)
//posicionamiento
avion_tenzor_izquierdo_uno_objeto.position.z = -3
avion_tenzor_izquierdo_uno_objeto.position.y = 0.27
avion_tenzor_izquierdo_uno_objeto.position.x = 1.78
avion_cuerpo.add(avion_tenzor_izquierdo_uno_objeto)

//avion tensores lado izquierdo
const avion_tenzor_izquierdo_dos_geometry = new THREE.CylinderGeometry(0.05,0.05,2.35,15)
const avion_tenzor_izquierdo_dos_material = new THREE.MeshBasicMaterial({color: barras_de_metal_color, wireframe: wireframe_valor})
const avion_tenzor_izquierdo_dos_objeto = new THREE.Mesh(avion_tenzor_izquierdo_dos_geometry,avion_tenzor_izquierdo_dos_material)
//posicionamiento
avion_tenzor_izquierdo_dos_objeto.position.z = -3
avion_tenzor_izquierdo_dos_objeto.position.y = 0.27
avion_tenzor_izquierdo_dos_objeto.position.x = 0.6
avion_cuerpo.add(avion_tenzor_izquierdo_dos_objeto)

//avion tensores lado izquierdo
const avion_tenzor_izquierdo_tres_geometry = new THREE.CylinderGeometry(0.05,0.05,2.5,15)
const avion_tenzor_izquierdo_tres_material = new THREE.MeshBasicMaterial({color: barras_de_metal_color, wireframe: wireframe_valor})
const avion_tenzor_izquierdo_tres_objeto = new THREE.Mesh(avion_tenzor_izquierdo_tres_geometry,avion_tenzor_izquierdo_tres_material)
//posicionamiento
avion_tenzor_izquierdo_tres_objeto.position.z = -3
avion_tenzor_izquierdo_tres_objeto.position.y = 0.27
avion_tenzor_izquierdo_tres_objeto.position.x = 1.2
avion_tenzor_izquierdo_tres_objeto.rotation.z = Math.PI * 0.125
avion_cuerpo.add(avion_tenzor_izquierdo_tres_objeto)

//avion tensores lado izquierdo
const avion_tenzor_izquierdo_cuatro_geometry = new THREE.CylinderGeometry(0.07,0.07,1,15)
const avion_tenzor_izquierdo_cuatro_material = new THREE.MeshBasicMaterial({color: barras_de_metal_color, wireframe: wireframe_valor})
const avion_tenzor_izquierdo_cuatro_objeto = new THREE.Mesh(avion_tenzor_izquierdo_cuatro_geometry,avion_tenzor_izquierdo_cuatro_material)
//posicionamiento
avion_tenzor_izquierdo_cuatro_objeto.position.z = -0.9
avion_tenzor_izquierdo_cuatro_objeto.position.y = 1.04
avion_tenzor_izquierdo_cuatro_objeto.position.x = 1.78
avion_tenzor_izquierdo_cuatro_objeto.rotation.x = -Math.PI * 0.25
avion_cuerpo.add(avion_tenzor_izquierdo_cuatro_objeto)

//helice_base
const helice_base_geometry = new THREE.TorusGeometry(10,1.5,10,50,6.3)
const helice_base_material = new THREE.MeshBasicMaterial({color: barras_de_metal_color ,wireframe: wireframe_valor})
const helice_base_objeto = new THREE.Mesh(helice_base_geometry,helice_base_material)
helice_base_objeto.scale.set(0.05,0.05,0.05)
//posicionamiento
helice_base_objeto.rotation.y = Math.PI * 0.5
helice_base_objeto.position.x = 3.59

//helice 1
const helice_uno_grupo = new THREE.Group()
const helice_uno_geometry = new THREE.BoxGeometry(0.5,2.5,0.1)
const helice_uno_material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: wireframe_valor})
const helice_uno_objeto = new THREE.Mesh(helice_uno_geometry,helice_uno_material)
//helice uno borde
//estabilizador Vertical Trasero
const helice_uno_borde_geometry = new THREE.CylinderGeometry(0.25,0.25,0.1,15,1,false,0,3.14)
const helice_uno_borde_material = new THREE.MeshBasicMaterial({color: 0xff0000 ,side: THREE.DoubleSide, wireframe: wireframe_valor})
const helice_uno_borde_objeto = new THREE.Mesh(helice_uno_borde_geometry,helice_uno_borde_material)
//posicionamiento
helice_uno_borde_objeto.order = 'ZYX'
helice_uno_borde_objeto.rotation.z = Math.PI * 0.5
helice_uno_borde_objeto.rotation.y = Math.PI * 0.5
helice_uno_borde_objeto.position.y = 1.255
//posicionamiento grupal
helice_uno_grupo.order = 'ZYX'
helice_uno_grupo.scale.set(0.6,0.6,0.6)
helice_uno_grupo.rotation.y = Math.PI * 0.5
helice_uno_grupo.position.x = 3.6
helice_uno_grupo.position.y = 1.33
//agregar al grupo
helice_uno_grupo.add(helice_uno_objeto)
helice_uno_grupo.add(helice_uno_borde_objeto)

//helice 2
const helice_dos_grupo = new THREE.Group()
const helice_dos_geometry = new THREE.BoxGeometry(0.5,2.5,0.1)
const helice_dos_material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: wireframe_valor})
const helice_dos_objeto = new THREE.Mesh(helice_dos_geometry,helice_dos_material)
//helice uno borde
//estabilizador Vertical Trasero
const helice_dos_borde_geometry = new THREE.CylinderGeometry(0.25,0.25,0.1,15,1,false,0,3.14)
const helice_dos_borde_material = new THREE.MeshBasicMaterial({color: 0xff0000 ,side: THREE.DoubleSide, wireframe: wireframe_valor})
const helice_dos_borde_objeto = new THREE.Mesh(helice_dos_borde_geometry,helice_dos_borde_material)
//posicionamiento
helice_dos_borde_objeto.order = 'ZYX'
helice_dos_borde_objeto.rotation.z = Math.PI * 0.5
helice_dos_borde_objeto.rotation.y = Math.PI * 0.5
helice_dos_borde_objeto.position.y = 1.255
//posicionamiento grupal
helice_dos_grupo.order = 'ZYX'
helice_dos_grupo.scale.set(0.6,0.6,0.6)
helice_dos_grupo.rotation.y = Math.PI * 0.5
helice_dos_grupo.rotation.x = -Math.PI * 0.65
helice_dos_grupo.position.x = 3.6
helice_dos_grupo.position.y = -0.64
helice_dos_grupo.position.z = -1.16
//agregar al grupo
helice_dos_grupo.add(helice_dos_objeto)
helice_dos_grupo.add(helice_dos_borde_objeto)

//helice 3
const helice_tres_grupo = new THREE.Group()
const helice_tres_geometry = new THREE.BoxGeometry(0.5,2.5,0.1)
const helice_tres_material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: wireframe_valor})
const helice_tres_objeto = new THREE.Mesh(helice_tres_geometry,helice_tres_material)
//helice uno borde
//estabilizador Vertical Trasero
const helice_tres_borde_geometry = new THREE.CylinderGeometry(0.25,0.25,0.1,15,1,false,0,3.14)
const helice_tres_borde_material = new THREE.MeshBasicMaterial({color: 0xff0000 ,side: THREE.DoubleSide, wireframe: wireframe_valor})
const helice_tres_borde_objeto = new THREE.Mesh(helice_tres_borde_geometry,helice_tres_borde_material)
//posicionamiento
helice_tres_borde_objeto.order = 'ZYX'
helice_tres_borde_objeto.rotation.z = Math.PI * 0.5
helice_tres_borde_objeto.rotation.y = Math.PI * 0.5
helice_tres_borde_objeto.position.y = 1.255
//posicionamiento grupal
helice_tres_grupo.order = 'ZYX'
helice_tres_grupo.scale.set(0.6,0.6,0.6)
helice_tres_grupo.rotation.y = Math.PI * 0.5
helice_tres_grupo.rotation.x = Math.PI * 0.65
helice_tres_grupo.position.x = 3.6
helice_tres_grupo.position.y = -0.64
helice_tres_grupo.position.z = 1.16
//agregar al grupo
helice_tres_grupo.add(helice_tres_objeto)
helice_tres_grupo.add(helice_tres_borde_objeto)

//rotor del avion
const avion_rotor_geometry = new THREE.ConeGeometry(0.43,0.8,20)
const avion_rotor_material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: wireframe_valor})
const avion_rotor_objeto = new THREE.Mesh(avion_rotor_geometry,avion_rotor_material)
//posicionamiento
avion_rotor_objeto.order = 'ZYX'
avion_rotor_objeto.rotation.z = -Math.PI * 0.5
avion_rotor_objeto.position.x = 4.03
helice_group.add(avion_rotor_objeto)

//llanta trasera grupo
const llanta_trasera = new THREE.Group()

//llanta trasera partes
const llanta_trasera_ruedita_geometry = new THREE.CircleGeometry(0.5,15)
const llanta_trasera_ruedita_material = new THREE.MeshBasicMaterial({color: barras_de_metal_color, wireframe: wireframe_valor , side: THREE.DoubleSide})
const llanta_trasera_ruedita_objeto = new THREE.Mesh(llanta_trasera_ruedita_geometry,llanta_trasera_ruedita_material)

//soporte uno de rueda
const llanta_trasera_soporte_uno_geometry = new THREE.CylinderGeometry(0.05,0.05,1,10)
const llanta_trasera_soporte_uno_material = new THREE.MeshBasicMaterial({color: barras_de_metal_color, wireframe: wireframe_valor})
const llanta_trasera_soporte_uno_objeto = new THREE.Mesh(llanta_trasera_soporte_uno_geometry,llanta_trasera_soporte_uno_material)
//posicionaimento
llanta_trasera_soporte_uno_objeto.position.y = 0.5
llanta_trasera_soporte_uno_objeto.position.z = 0.06

//soporte uno de rueda
const llanta_trasera_soporte_dos_geometry = new THREE.CylinderGeometry(0.05,0.05,1,10)
const llanta_trasera_soporte_dos_material = new THREE.MeshBasicMaterial({color: barras_de_metal_color, wireframe: wireframe_valor})
const llanta_trasera_soporte_dos_objeto = new THREE.Mesh(llanta_trasera_soporte_dos_geometry,llanta_trasera_soporte_dos_material)
//posicionaimento
llanta_trasera_soporte_dos_objeto.position.y = 0.5
llanta_trasera_soporte_dos_objeto.position.z = -0.06
//agregar al grupo objetos de la rueda trasera
llanta_trasera.add(llanta_trasera_ruedita_objeto)
llanta_trasera.add(llanta_trasera_soporte_uno_objeto)
llanta_trasera.add(llanta_trasera_soporte_dos_objeto)
//rueda trasera posicionamiento
llanta_trasera.order = 'ZYX'
llanta_trasera.scale.set(0.5,0.5,0.5)
llanta_trasera.position.x = -2.3
llanta_trasera.position.y = -0.87
llanta_trasera.rotation.z = -Math.PI / 4
avion_cuerpo.add(llanta_trasera)

//llanta delantera
const llanta_delantera_completa_uno = new THREE.Group()
const llanta_delantera_uno_geometry = new THREE.CylinderGeometry(0.4,0.4,0.1,20)
const llanta_delantera_uno_objeto = new THREE.Mesh(llanta_delantera_uno_geometry,avion_llantas_textura)
llanta_delantera_completa_uno.add(llanta_delantera_uno_objeto)
//posicionamiento
llanta_delantera_uno_objeto.order = 'ZYX'
llanta_delantera_uno_objeto.rotation.z = Math.PI * 0.5
llanta_delantera_uno_objeto.rotation.y = Math.PI * 0.5

//soporte de llanta delantera
const llanta_delantera_soporte_uno_geometry = new THREE.CylinderGeometry(0.05,0.05,1,10)
const llanta_delantera_soporte_uno_material = new THREE.MeshBasicMaterial({color: barras_de_metal_color, wireframe: wireframe_valor})
const llanta_delantera_soporte_uno_objeto = new THREE.Mesh(llanta_delantera_soporte_uno_geometry,llanta_delantera_soporte_uno_material)
llanta_delantera_completa_uno.add(llanta_delantera_soporte_uno_objeto)
//posicionamiento de llanta
llanta_delantera_soporte_uno_objeto.position.y = 0.5
llanta_delantera_soporte_uno_objeto.position.z = -0.11
//posicionamiento del grupo 
llanta_delantera_completa_uno.order = 'ZYX'
llanta_delantera_completa_uno.rotation.z = Math.PI * 0.15
llanta_delantera_completa_uno.rotation.x = -Math.PI * 0.10
llanta_delantera_completa_uno.position.x = 2.7
llanta_delantera_completa_uno.position.z = 0.7
llanta_delantera_completa_uno.position.y = -1.7
//agregar llanta al avion
avion_cuerpo.add(llanta_delantera_completa_uno)

//llanta delantera
const llanta_delantera_completa_dos = new THREE.Group()
const llanta_delantera_dos_geometry = new THREE.CylinderGeometry(0.4,0.4,0.1,20)
const llanta_delantera_dos_objeto = new THREE.Mesh(llanta_delantera_dos_geometry,avion_llantas_textura)
llanta_delantera_completa_dos.add(llanta_delantera_dos_objeto)
//posicionamiento
llanta_delantera_dos_objeto.order = 'ZYX'
llanta_delantera_dos_objeto.rotation.z = Math.PI * 0.5
llanta_delantera_dos_objeto.rotation.y = Math.PI * 0.5
llanta_delantera_dos_objeto.position.z = -0.22

//soporte de llanta delantera
const llanta_delantera_soporte_dos_geometry = new THREE.CylinderGeometry(0.05,0.05,1,10)
const llanta_delantera_soporte_dos_material = new THREE.MeshBasicMaterial({color: barras_de_metal_color, wireframe: wireframe_valor})
const llanta_delantera_soporte_dos_objeto = new THREE.Mesh(llanta_delantera_soporte_dos_geometry,llanta_delantera_soporte_dos_material)
llanta_delantera_completa_dos.add(llanta_delantera_soporte_dos_objeto)
//posicionamiento de llanta
llanta_delantera_soporte_dos_objeto.position.y = 0.5
llanta_delantera_soporte_dos_objeto.position.z = -0.11
//posicionamiento del grupo 
llanta_delantera_completa_dos.order = 'ZYX'
llanta_delantera_completa_dos.rotation.z = Math.PI * 0.15
llanta_delantera_completa_dos.rotation.x = Math.PI * 0.10
llanta_delantera_completa_dos.position.x = 2.7
llanta_delantera_completa_dos.position.z = -0.7
llanta_delantera_completa_dos.position.y = -1.7
//agregar llanta al avion
avion_cuerpo.add(llanta_delantera_completa_dos)

//agregar partes del avion
avion.add(helice_group)
avion.add(avion_cuerpo)
helice_group.add(helice_base_objeto)
helice_group.add(helice_uno_grupo)
helice_group.add(helice_dos_grupo)
helice_group.add(helice_tres_grupo)

export {
    avion,
    helice_group
}

