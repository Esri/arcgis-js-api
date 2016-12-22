// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../../../core/declare","../support/RenderCoordsHelper","../lib/glMatrix","../webgl-engine/lib/Selector"],function(e,t,i,a){var n=i.vec3d,r=n.create(),c=n.create(),o=e([],{constructor:function(e,t){this.navigation=e,this.pickAlongRay=t._pickRay.bind(t),this.createPickRay=t._pickRayWithBeginPoint.bind(t),this.selector=new a},pickPointInScreen:function(e,t){var i=!1;return this.pickedIntersectionPoint(this.pickInScreen(e,i),t)},pickFreePointInScreen:function(e,i){this.createPickRay(e,void 0,this.navigation.currentCamera.viewMatrix,r,c),i||(i=n.create()),n.subtract(c,r),n.normalize(c);var a,o=this.navigation.view.dataExtent,h={x:o.xmax-o.xmin,y:o.ymax-o.ymin,z:8*Math.max(o.xmax-o.xmin,o.ymax-o.ymin)},s=Math.max(h.x,h.y,h.z),l=this.navigation.currentCamera,m=Math.max(0,o.xmin-l.eye[0],l.eye[0]-o.xmax),x=Math.max(0,o.ymin-l.eye[1],l.eye[1]-o.ymax),y=Math.sqrt(m*m+x*x);a="global"==this.navigation.view.viewingMode?t.Spherical.prototype.getAltitude(l.eye):t.Planar.prototype.getAltitude(l.eye);var u=this.navigation._getTerrainElevationBelowCamera(l),g=Math.abs(a-u)+Number.MIN_VALUE,v=Math.pow(Math.max(0,Math.log(s/g)),2),p=s/Math.max(1,v);p=Math.max(p,Math.min(y,s)),n.scale(c,p),n.add(r,c,i)},pickInScreen:function(e,t){return this.createPickRay(e,void 0,this.navigation.currentCamera.viewMatrix,r,c),t&&n.set(this.navigation.currentCamera.eye,r),this.pickAlongRay(r,c,e,e,null,null,this.selector)},pickedIntersectionPoint:function(e,t){return e?(t||(t=n.create()),e.getMinResult().getIntersectionPoint(t)):!1}});return o});