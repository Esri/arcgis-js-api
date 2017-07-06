// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/Accessor","../../../Viewpoint","../../../geometry/Point","./actions/Pan","./actions/Rotate","./actions/Pinch","./ZoomBox","../viewpointUtils"],function(t,o,i,n,e,a,s,r,p,c,u,h,v){var w=10,y=1,g=new s({targetGeometry:new r}),l=[0,0],d=function(t){function o(o){var i=t.call(this)||this;return i.animationManager=null,i}return i(o,t),o.prototype.initialize=function(){this.pan=new p({navigation:this}),this.rotate=new c({navigation:this}),this.pinch=new u({navigation:this}),this.zoomBox=new h({view:this.view,navigation:this})},o.prototype.destroy=function(){this.zoomBox.destroy(),this.zoomBox=null,this.animationManager=null},o.prototype.begin=function(){this._set("interacting",!0)},o.prototype.end=function(){this._set("interacting",!1)},o.prototype.zoom=function(t,o){return void 0===o&&(o=this._getDefaultAnchor()),this.stop(),this.begin(),this.view.constraints.snapToZoom&&this.view.constraints.effectiveLODs?1>t?this.zoomIn(o):this.zoomOut(o):void this.setViewpoint(o,t,0)},o.prototype.zoomIn=function(t){void 0===t&&(t=this._getDefaultAnchor()),this.begin();var o=this.view,i=o.scale,n=o.constraints.snapToNextScale(i),e=o.goTo(this._scaleAndRotateViewpoint(g,t,n/i,0));return this.end(),e},o.prototype.zoomOut=function(t){void 0===t&&(t=this._getDefaultAnchor()),this.begin();var o=this.view,i=o.scale,n=o.constraints.snapToPreviousScale(i),e=o.goTo(this._scaleAndRotateViewpoint(g,t,n/i,0));return this.end(),e},o.prototype.setViewpoint=function(t,o,i){this.begin(),this.view.state.viewpoint=this._scaleAndRotateViewpoint(g,t,o,i),this.end()},o.prototype.animateViewpoint=function(t,o,i){return this.view.goTo(this._scaleAndRotateViewpoint(g,t,o,i))},o.prototype.continousRotateClockwise=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,function(t){v.rotateBy(t,t,-y)})},o.prototype.continousRotateCounterclockwise=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,function(t){v.rotateBy(t,t,y)})},o.prototype.resetRotation=function(){this.view.rotation=0},o.prototype.continousPanLeft=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,function(t){v.translateBy(t,t,[-w,0])})},o.prototype.continousPanRight=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,function(t){v.translateBy(t,t,[w,0])})},o.prototype.continousPanUp=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,function(t){v.translateBy(t,t,[0,w])})},o.prototype.continousPanDown=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,function(t){v.translateBy(t,t,[0,-w])})},o.prototype.stop=function(){this.pan.stopMomentumNavigation(),this.animationManager.stop(),this.end()},o.prototype._getDefaultAnchor=function(){var t=this.view.size;return l[0]=.5*t[0],l[1]=.5*t[1],l},o.prototype._scaleAndRotateViewpoint=function(t,o,i,n){var e=this.view,a=e.size,s=e.padding,r=e.constraints,p=e.scale,c=e.viewpoint,u=p*i,h=r.canZoomInTo(u),w=r.canZoomOutTo(u);return i>1&&!h||1>=i&&!w?c:v.padAndScaleAndRotateBy(t,c,i,n,o,a,s)},o}(e.declared(a));return n([e.property()],d.prototype,"animationManager",void 0),n([e.property({type:Boolean,readOnly:!0})],d.prototype,"interacting",void 0),n([e.property()],d.prototype,"pan",void 0),n([e.property()],d.prototype,"pinch",void 0),n([e.property()],d.prototype,"rotate",void 0),n([e.property()],d.prototype,"view",void 0),n([e.property()],d.prototype,"zoomBox",void 0),d=n([e.subclass("esri.views.2d.navigation.MapViewNavigation")],d)});