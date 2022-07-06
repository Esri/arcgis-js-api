/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{InputHandler as t}from"../../../input/InputHandler.js";import{eventMatchesPointerAction as i}from"../../../input/handlers/support.js";class a extends t{constructor(t,i){super(!0),this.view=t,this.registerIncoming("double-click",i,(t=>this._handleDoubleClick(t,i)))}_handleDoubleClick(t,a){i(t.data,"primary")&&(t.stopPropagation(),a?this.view.mapViewNavigation.zoomOut([t.data.x,t.data.y]):this.view.mapViewNavigation.zoomIn([t.data.x,t.data.y]))}}export{a as DoubleClickZoom};
