/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{createScreenPointArray as e}from"../../../../core/screenUtils.js";import{RotateController as t,PivotPoint as r}from"../../state/controllers/RotateController.js";import{InputHandler as a}from"../../../input/InputHandler.js";class o extends a{constructor(e,t=!1){super(!0),this.view=e,this.invert=t,this.registerIncoming("vertical-two-finger-drag",(e=>this._handleTwoFinger(e)))}_handleTwoFinger(a){const o=this.invert?-1:1,i=e(0,a.data.delta*o);switch(a.data.action){case"begin":this.cameraController?.end(),this.cameraController=new t({view:this.view,pivot:r.CENTER}),this.view.state.switchCameraController(this.cameraController),this.cameraController.begin(i);break;case"update":this.cameraController?.update(i);break;case"end":this.cameraController?.end(),this.cameraController=null}}}export{o as TwoFingerTilt};
