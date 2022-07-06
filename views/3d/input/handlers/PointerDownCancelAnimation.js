/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{InputHandler as t}from"../../../input/InputHandler.js";class e extends t{constructor(t,e){super(!0),this.view=t,this.registerIncoming("pointer-down",e,(()=>this.view.state.stopActiveCameraController()))}}export{e as PointerDownCancelAnimation};
