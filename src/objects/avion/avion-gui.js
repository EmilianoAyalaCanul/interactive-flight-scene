import debug_gui from "../../js_modules/lil-gui";

export const debug_object_avion = {}
debug_object_avion.avion_helices_movimiento = false    

export const avion_menu = (avion) =>{
    

    //menu del avion
    const debug_gui_avion = debug_gui.addFolder('Avion Menu ✈︎')

    //visibilidad del objeto
    debug_gui_avion.add(avion,'visible').name('Object Visible')

    //animacion de las helices
    debug_gui_avion.add(debug_object_avion,'avion_helices_movimiento')
    .name('Propellers Animation ✇')

}