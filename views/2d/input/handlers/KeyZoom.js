/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../../../../core/has.js";import{InputHandler as o}from"../../../input/InputHandler.js";var t;!function(o){o[o.IN=0]="IN",o[o.OUT=1]="OUT"}(t||(t={}));class e extends o{constructor(o,e,i){super(!0),this.view=o,this.keys=e,this._keysToZoomAction={},this.registerIncoming("key-down",i,(o=>this._handleKeyDown(o))),e.zoomIn.forEach((o=>this._keysToZoomAction[o]=t.IN)),e.zoomOut.forEach((o=>this._keysToZoomAction[o]=t.OUT))}_handleKeyDown(o){this._handleKey(o)}_handleKey(o){const e=o.modifiers;if(e.size>0&&!e.has("Shift"))return;const{key:i}=o.data;if(!(i in this._keysToZoomAction))return;const n=this._keysToZoomAction[i],{mapViewNavigation:s}=this.view;let r=null;switch(n){case t.IN:r=s.zoomIn();break;case t.OUT:r=s.zoomOut();break;default:return}s.begin(),r.then((()=>s.end())),o.stopPropagation()}}export{e as KeyZoom};
