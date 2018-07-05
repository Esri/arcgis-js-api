// COPYRIGHT © 2018 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../Viewpoint","../../../core/Accessor","../../../core/accessorSupport/decorators","../../../geometry/Point","../viewpointUtils","./ZoomBox","./actions/Pan","./actions/Pinch","./actions/Rotate"],function(t,o,i,n,e,a,r,s,p,c,u,h,v){var w=new e({targetGeometry:new s}),y=[0,0];return function(t){function o(o){var i=t.call(this)||this;return i._endTimer=null,i.animationManager=null,i}return i(o,t),o.prototype.initialize=function(){this.pan=new u({navigation:this}),this.rotate=new v({navigation:this}),this.pinch=new h({navigation:this}),this.zoomBox=new c({view:this.view,navigation:this})},o.prototype.destroy=function(){this.zoomBox.destroy(),this.zoomBox=null,this.animationManager=null},o.prototype.begin=function(){this._set("interacting",!0)},o.prototype.end=function(){var t=this;this._endTimer&&(clearTimeout(this._endTimer),this._endTimer=0),this._endTimer=setTimeout(function(){t._set("interacting",!1)},0)},o.prototype.zoom=function(t,o){if(void 0===o&&(o=this._getDefaultAnchor()),this.stop(),this.begin(),this.view.constraints.snapToZoom&&this.view.constraints.effectiveLODs)return t<1?this.zoomIn(o):this.zoomOut(o);this.setViewpoint(o,t,0)},o.prototype.zoomIn=function(t){void 0===t&&(t=this._getDefaultAnchor());var o=this.view,i=o.scale,n=o.constraints.snapToNextScale(i);return o.goTo(this._scaleAndRotateViewpoint(w,t,n/i,0))},o.prototype.zoomOut=function(t){void 0===t&&(t=this._getDefaultAnchor());var o=this.view,i=o.scale,n=o.constraints.snapToPreviousScale(i);return o.goTo(this._scaleAndRotateViewpoint(w,t,n/i,0))},o.prototype.setViewpoint=function(t,o,i){this.begin(),this.view.state.viewpoint=this._scaleAndRotateViewpoint(w,t,o,i),this.end()},o.prototype.animateViewpoint=function(t,o,i){return this.view.goTo(this._scaleAndRotateViewpoint(w,t,o,i))},o.prototype.continousRotateClockwise=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,function(t){p.rotateBy(t,t,-1)})},o.prototype.continousRotateCounterclockwise=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,function(t){p.rotateBy(t,t,1)})},o.prototype.resetRotation=function(){this.view.rotation=0},o.prototype.continousPanLeft=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,function(t){p.translateBy(t,t,[-10,0])})},o.prototype.continousPanRight=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,function(t){p.translateBy(t,t,[10,0])})},o.prototype.continousPanUp=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,function(t){p.translateBy(t,t,[0,10])})},o.prototype.continousPanDown=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,function(t){p.translateBy(t,t,[0,-10])})},o.prototype.stop=function(){this.pan.stopMomentumNavigation(),this.animationManager.stop(),this.end(),this._endTimer&&(clearTimeout(this._endTimer),this._endTimer=0)},o.prototype._getDefaultAnchor=function(){var t=this.view.size;return y[0]=.5*t[0],y[1]=.5*t[1],y},o.prototype._scaleAndRotateViewpoint=function(t,o,i,n){var e=this.view,a=e.size,r=e.padding,s=e.constraints,c=e.scale,u=e.viewpoint,h=c*i,v=s.canZoomInTo(h),w=s.canZoomOutTo(h);return i<1&&!v||i>1&&!w?u:p.padAndScaleAndRotateBy(t,u,i,n,o,a,r)},n([r.property()],o.prototype,"animationManager",void 0),n([r.property({type:Boolean,readOnly:!0})],o.prototype,"interacting",void 0),n([r.property()],o.prototype,"pan",void 0),n([r.property()],o.prototype,"pinch",void 0),n([r.property()],o.prototype,"rotate",void 0),n([r.property()],o.prototype,"view",void 0),n([r.property()],o.prototype,"zoomBox",void 0),o=n([r.subclass("esri.views.2d.navigation.MapViewNavigation")],o)}(r.declared(a))});