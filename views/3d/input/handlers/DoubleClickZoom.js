/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{createScreenPointArray as o}from"../../../../core/screenUtils.js";import{ZoomStepController as t}from"../../state/controllers/global/ZoomStepController.js";import{ZoomStepController as e}from"../../state/controllers/local/ZoomStepController.js";import{InputHandler as r}from"../../../input/InputHandler.js";import{eventMatchesPointerAction as i}from"../../../input/handlers/support.js";class s extends r{constructor(o,t){super(!0),this.view=o,this.registerIncoming("double-click",t,(o=>this._handleDoubleClick(o)))}_handleDoubleClick(r){const s=r.data;if(i(s,"primary")){const i=this.view.state.isGlobal?new t({view:this.view,mode:"animation"}):new e({view:this.view,mode:"animation"});this.view.state.switchCameraController(i),i.zoomStep(Math.log(.5)/Math.log(.6),o(s.x,s.y)),r.stopPropagation()}}}export{s as DoubleClickZoom};
