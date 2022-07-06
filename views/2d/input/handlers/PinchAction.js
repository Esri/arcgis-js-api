/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{DragEventSeparator as t}from"../../../input/DragEventSeparator.js";import{InputHandler as i}from"../../../input/InputHandler.js";class a extends i{constructor(i){super(!0),this.view=i,this.registerIncoming("drag",(t=>this._handleDrag(t))),this.registerIncoming("pointer-down",(()=>this._stopMomentumNavigation()));const a=this.view.mapViewNavigation;this.dragEventSeparator=new t({start:(t,i)=>{a.pinch.begin(this.view,i.data),i.stopPropagation()},update:(t,i)=>{a.pinch.update(this.view,i.data),i.stopPropagation()},end:(t,i)=>{a.pinch.end(this.view),i.stopPropagation()},condition:t=>t>=2})}_handleDrag(t){this.dragEventSeparator.handle(t)}_stopMomentumNavigation(){this.view.mapViewNavigation.pinch.stopMomentumNavigation()}}export{a as PinchRotateAndZoom};
