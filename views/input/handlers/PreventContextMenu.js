/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{InputHandler as t}from"../InputHandler.js";class e extends t{constructor(){super(!0),this.registerIncoming("context-menu",(t=>{t.data.native.preventDefault()}))}}export{e as PreventContextMenu};
