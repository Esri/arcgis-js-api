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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../lib/glMatrix","../../webgl-engine/lib/Selector","../../camera/intersectionUtils"],function(t,e,i,n,a){Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t){this.view=t,this.tmpR0=i.vec3d.create(),this.tmpR1=i.vec3d.create(),this.tmpSelector=new n(this.view.viewingMode)}return t.prototype.pickPointInScreen=function(t,e){var i=!1;return this.pickedIntersectionPoint(this.pickInScreen(t,i),e)},t.prototype.pickFreePointFromSegment=function(t,e,n){i.vec3d.set(t,this.tmpR0),i.vec3d.set(e,this.tmpR1),i.vec3d.subtract(this.tmpR1,this.tmpR0),i.vec3d.normalize(this.tmpR1);var r=this.view.dataExtent,s={x:r.xmax-r.xmin,y:r.ymax-r.ymin,z:8*Math.max(r.xmax-r.xmin,r.ymax-r.ymin)},c=Math.max(s.x,s.y,s.z),o=this.view.state.camera,m=Math.max(0,r.xmin-o.eye[0],o.eye[0]-r.xmax),h=Math.max(0,r.ymin-o.eye[1],o.eye[1]-r.ymax),p=Math.sqrt(m*m+h*h),l=this.view.renderCoordsHelper.getAltitude(o.eye),v=a.surfaceElevationBelowEye(this.view,o),u=Math.abs(l-v)+Number.MIN_VALUE,y=Math.pow(Math.max(0,Math.log(c/u)),2),x=c/Math.max(1,y);x=Math.max(x,Math.min(p,c)),i.vec3d.scale(this.tmpR1,x),i.vec3d.add(this.tmpR0,this.tmpR1,n)},t.prototype.pickFreePointInScreen=function(t,e){this.view._pickRayWithBeginPoint(t,void 0,this.view.state.camera.viewMatrix,this.tmpR0,this.tmpR1),this.pickFreePointFromSegment(this.tmpR0,this.tmpR1,e)},t.prototype.pickRaySegment=function(t,e,i){return this.pickedIntersectionPoint(this.view._pickRay(t,e,null,null,null,null,this.tmpSelector),i)},t.prototype.pickInScreen=function(t,e){return this.view._pickRayWithBeginPoint(t,void 0,this.view.state.camera.viewMatrix,this.tmpR0,this.tmpR1),e&&i.vec3d.set(this.view.state.camera.eye,this.tmpR0),this.view._pickRay(this.tmpR0,this.tmpR1,t,t,null,null,this.tmpSelector)},t.prototype.pickedIntersectionPoint=function(t,e){return t?t.getMinResult().getIntersectionPoint(e):!1},t}();e.PickingHelper=r});