/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{Object3DStateSet as t}from"../../webgl-engine/lib/Object3DStateSet.js";class e{constructor(e,i){this.stateType=e,this.objectIdField=i,this.objectStateSet=new t,this.ids=new Set,this.paused=!1}hasGraphic(t){if(this.objectIdField){const e=t.graphic.attributes[this.objectIdField];return this.ids.has(e)}return this.ids.has(t.graphic.uid)}}export{e as Graphics3DObjectStateSet};
