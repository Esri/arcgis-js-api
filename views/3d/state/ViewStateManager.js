/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/maybe","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../core/scheduling","../../../core/Accessor","../../../geometry/support/webMercatorUtils","../../../geometry/Point","../../../geometry/Extent","../../../core/screenUtils","../../../Camera","../../../core/Handles","../../../Viewpoint","../../../core/watchUtils","../../../chunks/vec4f64","../../../chunks/vec4","../camera/intersectionUtils","../camera/constraintUtils","../webgl-engine/lib/Camera","../support/cameraUtils","./Frustum","../support/PropertiesPool","./ConstraintsManager","./controllers/SurfaceCollisionCorrectionController","../support/viewpointUtils","./GoToOperation"],(function(e,t,i,r,n,a,o,s,c,p,l,h,d,u,m,v,y,w,f,g,C,_,T,x,O,S,P,b,R,I,k,B,E){"use strict";const U=n.getLogger("esri.views.3d.state.ViewStateManager");let M=function(t){function i(i){var r;return(r=t.call(this,i)||this).propertiesPool=new R.PropertiesPool({frustum:b.Frustum},e._assertThisInitialized(r)),r.handles=new f,r.cameraSetByUser=!1,r.gotoOperation=null,r.ready=!1,r.updateDevicePixelRatio=null,r}e._inheritsLoose(i,t);var n=i.prototype;return n.paddingToArray=function(e,t,i){e?T.set(i,e.top||0,e.right||0,e.bottom||0,e.left||0):T.set(i,0,0,0,0);for(let r=0;r<4;r++)i[r]=Math.round(i[r]*t)},n.initialize=function(){this.handles.add([this.view.state.watch("camera",(e=>this.cameraChangedSync(e)),!0),C.on(this.view,"state.events","before-camera-change",(e=>this.updateElevation(e.camera)))]),C.once(this.view.state,"camera",(e=>this.updateElevation(e)),!0),this.handles.add(h.addFrameTask({prepare:()=>this.prepareFrame()})),this.handles.add(this.view.state.watch("cameraController",(()=>{this.cameraSetByUser=!0,this.handles.remove(G)}))),this.handles.add(C.on(this.view,"state.events","camera-projection-changed",(()=>this.notifyChange("scale"))))},n.destroy=function(){this.deinit(),this.handles&&(this.handles.destroy(),this.handles=null),this.propertiesPool&&(this.propertiesPool.destroy(),this.propertiesPool=null)},n.init=function(){this.constraintsManager=new I.default({view:this.view}),this.prepareFrame();const e=this.getInitialProperties();this.cameraSetByUser=!1,this._set("ready",!0);for(const t of e)this.set(t.name,t.value);if(!this.cameraSetByUser){const e=this.view.get("map.initialViewProperties.viewpoint")||this.view.initialExtent;e&&this.isCompatible(e)?this.setInitialView(e):2===this.view.state.mode&&this.handles.add(C.whenOnce(this.view.basemapTerrain,"ready",(()=>{this.handles.remove(G),this.setInitialView(this.view.groundExtent)})),G)}},n.deinit=function(){this.cancelGoToOperation(),this.ready&&(this._override("padding",this.padding),this._set("ready",!1),this._clearOverride("hasInitialView"),this.cameraSetByUser=!1,this.handles.remove(G),this.constraintsManager&&(this.constraintsManager.destroy(),this.constraintsManager=null))},n.goTo=async function(e,t){const i={animate:!0,...t};return r.isSome(this.gotoOperation)&&this.gotoOperation.abort(i.animate),this.gotoOperation=new E.GoToOperation(e,i,this.view),this.gotoOperation},n.debugSetCameraOnContent=function(){this.setStateCamera(x.cameraOnContentAlongViewDirection(this.view),{applyConstraints:!1})},n.step=function(e){const t=this.view.state,i=t&&this.view.state.cameraController;i&&(t.updateCamera((t=>{i.stepController(e,t)})),i.steppingFinished&&i.finishController())},n.cancelGoToOperation=function(){r.isSome(this.gotoOperation)&&(this.gotoOperation.abort(),this.gotoOperation=null)},n.getInitialProperties=function(){const e=new Set,t=[];for(const{propertyName:i,overrides:r}of z){const n=e.has(i),a=this._isOverridden(i);!n&&a&&t.push({name:i,value:this._get(i)}),this._clearOverride(i),(n||a)&&r.forEach((t=>e.add(t)))}return t},n.setInitialView=function(e){if(!e||this.cameraSetByUser)return;if(e instanceof w)return void this.setStateCamera(P.externalToInternal(this.view,e),{applyConstraints:!1});if(e instanceof g){if(e.targetGeometry instanceof v){const t=P.fromExtent(this.view,e.targetGeometry,0,.5,0);return void(r.isSome(t)&&this.setStateCamera(P.externalToInternal(this.view,t),{applyConstraints:!0}))}const t={applyConstraints:!e.camera},i=this.viewpointToCamera(e);return void this.setStateCamera(i,t)}const t=P.fromExtent(this.view,e,0,.5,0);r.isSome(t)&&this.setStateCamera(P.externalToInternal(this.view,t),{applyConstraints:!0})},n.updatePropertyBeforeReady=function(e,t){return!this.ready&&(this._override(e,t),t&&-1!==V.indexOf(e)&&this._override("hasInitialView",!0),!0)},n.isCompatible=function(e){return!r.isNone(e)&&(e instanceof g?e.camera?this.isCompatible(e.camera):this.isCompatible(e.targetGeometry):e instanceof w?this.isCompatible(e.position):e.spatialReference&&u.canProject(e.spatialReference,this.view.spatialReference))},n.getPreservingHeadingTilt=function(e=A){return this.cameraSetByUser?(e.heading=this.camera.heading,e.tilt=this.camera.tilt):(e.heading=0,e.tilt=.5),e},n.centerPointAtDistanceToCamera=function(e,t,i=H){const{heading:n,tilt:a}=this.getPreservingHeadingTilt(),o=P.getObserverForPointAtDistance(this.view,n,a,e,t,1);return r.isNone(o)?null:(i.copyFrom(this.view.state.camera),i.eye=o.eye,i.center=o.center,i.up=o.up,i)},n.centerToCamera=function(e){const t=this.view.pointsOfInterest.centerOnContent;t.update();const i=t.distance;return this.centerPointAtDistanceToCamera(e,i)},n.extentToCamera=function(e){const{heading:t,tilt:i}=this.getPreservingHeadingTilt(),n=P.fromExtent(this.view,e,t,i,1,F);return r.isSome(n)?P.externalToInternal(this.view,n):null},n.scaleToCamera=function(e){if(null==e)return null;const t=this.view.pointsOfInterest.centerOnContent;t.update();const i=t.renderLocation,r=t.location.latitude,n=P.scaleToDistance(this.view,e,r);return this.centerPointAtDistanceToCamera(i,n)},n.zoomToCamera=function(e){return this.scaleToCamera(P.zoomToScale(this.view,e))},n.viewpointToCamera=function(e){return P.externalToInternal(this.view,B.toCamera(this.view,e))},n.setStateCamera=function(e,t){return!(r.isNone(e)||!this.view.state.stopActiveCameraController())&&(this.cameraSetByUser=!0,t.doNotCancelGoToOperation||this.cancelGoToOperation(),this.view.state.updateCamera((i=>{t.positionAndOrientationOnly?(i.eye=e.eye,i.center=e.center,i.up=e.up):i.copyFrom(e),t.applyConstraints&&O.applyAll(this.view,i)})),t.applyConstraints||(this.view.state.cameraController=new k.SurfaceCollisionCorrectionController({view:this.view,desiredCamera:e})),!0)},n.prepareFrame=function(){const{container:e,canvas:t}=this.view;if(!e||!t)return;r.isSome(this.updateDevicePixelRatio)&&this.updateDevicePixelRatio();const i=this.view.pixelRatio,n=Math.round(e.clientWidth*i),a=Math.round(e.clientHeight*i);if(0!==n&&0!==a&&(t.width===n&&t.height===a||(t.width=n,t.height=a),this.view.state)){const e=this.view.state.camera;e.fullWidth===n&&e.fullHeight===a&&e.pixelRatio===i||(H.copyFrom(e),H.pixelRatio!==i&&(this.paddingToArray(this.padding,i,D),H.padding=D),H.fullWidth=n,H.fullHeight=a,H.pixelRatio=i,this.view.state.camera=H)}},n.updateElevation=function(e){const t=this.view.basemapTerrain&&this.view.basemapTerrain.spatialReference,i=this.view.renderCoordsHelper.getAltitude(e.eye),r=t?x.surfaceElevationBelowRenderLocation(this.view,e.eye):0;e.relativeElevation=i-r},n.cameraChangedSync=function(e){e&&this.view._stage&&(this.view._stage.camera=e)},e._createClass(i,[{key:"camera",get:function(){const e=this._get("camera");if(!this.ready)return e;const t=P.internalToExternal(this.view,this.view.state.camera);return t&&e&&t.equals(e)?e:t},set:function(e){this.updatePropertyBeforeReady("camera",e)||this.setStateCamera(P.externalToInternal(this.view,e),{applyConstraints:!1})||U.error("#camera=","Invalid camera",e)}},{key:"contentCamera",get:function(){const e=this._get("contentCamera");if(!this.ready)return e;const t=P.internalToExternal(this.view,this.view.state.contentCamera);return t&&e&&t.equals(e)?e:t},set:function(e){if(this.updatePropertyBeforeReady("contentCamera",e))return;const t=P.externalToInternal(this.view,e);r.isNone(t)?this.view.state.contentCamera=null:(this.updateElevation(t),this.view.state.contentCamera=t)}},{key:"center",get:function(){return this.ready?this.view.pointsOfInterest.centerOnContent.location:this._get("center")},set:function(e){this.updatePropertyBeforeReady("center",e)||(e?this.isCompatible(e)?this.setStateCamera(this.centerToCamera(e),{applyConstraints:!0})?this.view.pointsOfInterest.centerOnContent.update():U.error("#center=","Invalid center",e):U.error("#center=","Center has an incompatible spatial reference (center: "+(e.spatialReference?e.spatialReference.wkid:"none")+", view: "+this.view.spatialReference.wkid+")",e):U.error("#center=","Center may not be null or undefined"))}},{key:"extent",get:function(){if(!this.ready)return this._get("extent");const e=this.view,t=P.toExtent(e,e.state.camera,e.pointsOfInterest.centerOnContent.renderLocation);return r.isSome(t)?t:this._get("extent")},set:function(e){this.updatePropertyBeforeReady("extent",e)||(e?this.isCompatible(e)?this.setStateCamera(this.extentToCamera(e),{applyConstraints:!0})||U.error("#extent=","Invalid extent",e):U.error("#extent=","Extent has an incompatible spatial reference (extent: "+(e.spatialReference?e.spatialReference.wkid:"none")+", view: "+this.view.spatialReference.wkid+")",e):U.error("#extent=","Extent may not be null or undefined"))}},{key:"frustum",get:function(){const e=this.propertiesPool.get("frustum");return e.renderCoordsHelper=this.view.renderCoordsHelper,e.update(this.view.state.camera),e}},{key:"hasInitialView",get:function(){return!!this.view.get("map.initialViewProperties.viewpoint")}},{key:"scale",get:function(){if(this.ready){const e=this.view.pointsOfInterest.centerOnContent;return P.distanceToScale(this.view,e.distance,e.location.latitude)}return this._get("scale")},set:function(e){this.updatePropertyBeforeReady("scale",e)||this.setStateCamera(this.scaleToCamera(e),{applyConstraints:!0})||U.error("#scale=","Invalid scale",e)}},{key:"padding",get:function(){if(!this.ready)return this._get("padding");const e=this.view.state.camera,t=e.padding,i=e.pixelRatio,r=this._get("padding"),n=Math.round(t[0]/i),a=Math.round(t[1]/i),o=Math.round(t[2]/i),s=Math.round(t[3]/i);return null!=r&&r.top===n&&r.right===a&&r.bottom===o&&r.left===s?r:{top:n,right:a,bottom:o,left:s}},set:function(e){this.updatePropertyBeforeReady("padding",e)||(this.paddingToArray(e,this.view.state.camera.pixelRatio,D),this.view.state.updateCamera((e=>e.padding=D)))}},{key:"screenCenter",get:function(){const e=this.padding;return y.createScreenPoint((this.view.width-(e.left+e.right))/2+e.left,(this.view.height-(e.top+e.bottom))/2+e.top)}},{key:"viewpoint",get:function(){return this.ready?B.fromCamera(this.view,this.camera):this._get("viewpoint")},set:function(e){if(!this.updatePropertyBeforeReady("viewpoint",e))if(e)if(this.isCompatible(e))this.setStateCamera(this.viewpointToCamera(e),{applyConstraints:!e.camera})||U.error("#viewpoint=","Invalid viewpoint",e);else{const t=r.isSome(e.camera)?e.camera.position:e.targetGeometry,i=r.isSome(t)&&t.spatialReference;U.error("#viewpoint=","Viewpoint has an incompatible spatial reference (viewpoint: "+(i?i.wkid:"none")+", view: "+this.view.spatialReference.wkid+")",e)}else U.error("#viewpoint=","Viewpoint may not be null or undefined")}},{key:"zoom",get:function(){return this.ready?P.scaleToZoom(this.view,this.scale):this._get("zoom")},set:function(e){this.updatePropertyBeforeReady("zoom",e)||this.setStateCamera(this.zoomToCamera(e),{applyConstraints:!0})||U.error("#zoom=","Invalid zoom",e)}}]),i}(d);t.__decorate([o.property({type:w,dependsOn:["view.state.camera","ready"]})],M.prototype,"camera",null),t.__decorate([o.property({type:w,dependsOn:["view.state.contentCamera","ready"]})],M.prototype,"contentCamera",null),t.__decorate([o.property({type:m})],M.prototype,"center",null),t.__decorate([o.property({type:v})],M.prototype,"extent",null),t.__decorate([o.property({readOnly:!0})],M.prototype,"frustum",null),t.__decorate([o.property({readOnly:!0})],M.prototype,"hasInitialView",null),t.__decorate([o.property({readOnly:!0,type:Boolean})],M.prototype,"ready",void 0),t.__decorate([o.property({type:Number})],M.prototype,"scale",null),t.__decorate([o.property()],M.prototype,"padding",null),t.__decorate([o.property({readOnly:!0})],M.prototype,"screenCenter",null),t.__decorate([o.property({constructOnly:!0})],M.prototype,"view",void 0),t.__decorate([o.property({type:g})],M.prototype,"viewpoint",null),t.__decorate([o.property({type:Number})],M.prototype,"zoom",null),t.__decorate([o.property({constructOnly:!0})],M.prototype,"updateDevicePixelRatio",void 0),M=t.__decorate([s.subclass("esri.views.3d.state.ViewStateManager")],M);var N=M;const V=["camera","viewpoint","extent","scale","center","zoom"],z=[{propertyName:"camera",overrides:["viewpoint"]},{propertyName:"viewpoint",overrides:["extent"]},{propertyName:"extent",overrides:["center","scale"]},{propertyName:"center",overrides:[]},{propertyName:"scale",overrides:["zoom"]},{propertyName:"zoom",overrides:[]},{propertyName:"padding",overrides:[]}],A={heading:0,tilt:0},F=new w,H=new S,D=_.create(),G="pending-initial-view";return N}));
