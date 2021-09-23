/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/accessorSupport/decorators/property","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/Logger","../../../../core/accessorSupport/decorators/subclass","./CameraController","../../webgl-engine/lib/Camera"],(function(r,e,t,o,n,a,s,c,i,l){"use strict";r.InteractiveController=function(r){function t(){var e;return(e=r.apply(this,arguments)||this).startCamera=new l,e.currentCamera=new l,e}e._inheritsLoose(t,r);var o=t.prototype;return o.stepController=function(r,e){e.copyViewFrom(this.currentCamera),this.currentCamera.copyFrom(e)},o.onControllerStart=function(r){this.state=i.State.Running,this.startCamera.copyFrom(r),this.currentCamera.copyFrom(r)},o.onControllerEnd=function(r){r.copyViewFrom(this.currentCamera)},e._createClass(t,[{key:"isInteractive",get:function(){return!0}}]),t}(i.CameraController),r.InteractiveController=t.__decorate([c.subclass("esri.views.3d.state.controllers.InteractiveController")],r.InteractiveController),Object.defineProperty(r,"__esModule",{value:!0})}));
