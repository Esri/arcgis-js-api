/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{InputHandler as t}from"../InputHandler.js";class s extends t{constructor(t){super(!0),this._onChange=t,this._value="mouse",this._x=null,this._y=null,this.registerIncoming("pointer-move",(t=>{const s="touch"===t.data.native.pointerType;this._setValue(s?"touch":"mouse",t.data.x,t.data.y)}))}_setValue(t,s,e){t===this._value&&this._x===s&&this._y===e||(this._value=t,this._x=s,this._y=e,this._onChange(t,s,e))}}export{s as LatestPointer};
