/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{InputHandler as t}from"../../../input/InputHandler.js";class e extends t{constructor(t,e){super(!0),this.key=t,this.registerIncoming("key-down",e,(t=>this._handleKeyDown(t)))}_handleKeyDown(t){t.data.key===this.key&&(this.activate(),t.stopPropagation())}}export{e as SingleKey};
