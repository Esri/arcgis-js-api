/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/screenUtils","../../state/controllers/RotateController","../../../input/InputHandler"],(function(e,t,r,n,l){"use strict";let a=function(e){function l(t,r=!1){var n;return(n=e.call(this,!0)||this).view=t,n.invert=r,n.registerIncoming("vertical-two-finger-drag",(e=>n.handleTwoFinger(e))),n}return t._inheritsLoose(l,e),l.prototype.handleTwoFinger=function(e){var t,l,a;const o=this.invert?-1:1,i=r.createScreenPointArray(0,e.data.delta*o);switch(e.data.action){case"begin":null==(t=this.cameraController)||t.end(),this.cameraController=new n.RotateController({view:this.view,pivot:0}),this.view.state.switchCameraController(this.cameraController),this.cameraController.begin(i);break;case"update":null==(l=this.cameraController)||l.update(i);break;case"end":null==(a=this.cameraController)||a.end(),this.cameraController=null}},l}(l.InputHandler);e.TwoFingerTilt=a,Object.defineProperty(e,"__esModule",{value:!0})}));
