import * as THREE from 'three'

//gestor de texturas
const loadingManager = new THREE.LoadingManager()

loadingManager.onStart = (url, loaded, total) =>{
      console.log(`Loading started: ${url}`)
}

loadingManager.onLoad = (url, loaded, total) =>{
    console.log(`Loading: ${loaded}/${total}`)
}

loadingManager.onProgress = () =>{
    console.log('onProgress')
}

loadingManager.onError = (url) =>{
    console.error('Failed to load:', url)
}

//exportar constructor de texturas
export const textureLoader = new THREE.TextureLoader(loadingManager)