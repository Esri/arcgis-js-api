/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{DragEventSeparator as t}from"../../../input/DragEventSeparator.js";import{InputHandler as a}from"../../../input/InputHandler.js";import{eventMatchesPointerAction as i}from"../../../input/handlers/support.js";class o extends a{constructor(a,o,r){super(!0),this.view=a,this.pointerAction=o;const e=this.view.mapViewNavigation;this.dragEventSeparator=new t({start:(t,a)=>{e.rotate.begin(this.view,a.data),a.stopPropagation()},update:(t,a)=>{e.rotate.update(this.view,a.data),a.stopPropagation()},end:(t,a)=>{e.rotate.end(),a.stopPropagation()},condition:(t,a)=>1===t&&i(a.data,this.pointerAction)}),this.registerIncoming("drag",r,(t=>this.dragEventSeparator.handle(t)))}}export{o as DragRotate};
