/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{SingleKey as t}from"./SingleKey.js";class e extends t{constructor(t,e,i){super(e,i),this.view=t}activate(){this.view.goTo({tilt:0}).catch((()=>{}))}}export{e as SingleKeyResetTilt};
