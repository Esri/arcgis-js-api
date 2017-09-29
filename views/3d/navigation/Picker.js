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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["../../../core/declare","../lib/glMatrix","../webgl-engine/lib/Selector"],function(e,t,i){var n=t.vec3d,a=n.create(),r=n.create(),c=e([],{constructor:function(e,t){this.navigation=e,this.pickAlongRay=t._pickRay.bind(t),this.createPickRay=t._pickRayWithBeginPoint.bind(t),this.renderCoordsHelper=t.renderCoordsHelper,this.selector=new i(t.viewingMode)},pickPointInScreen:function(e,t){var i=!1;return this.pickedIntersectionPoint(this.pickInScreen(e,i),t)},pickFreePointInScreen:function(e,t){this.createPickRay(e,void 0,this.navigation.currentCamera.viewMatrix,a,r),t||(t=n.create()),n.subtract(r,a),n.normalize(r);var i=this.navigation.view.dataExtent,c={x:i.xmax-i.xmin,y:i.ymax-i.ymin,z:8*Math.max(i.xmax-i.xmin,i.ymax-i.ymin)},o=Math.max(c.x,c.y,c.z),s=this.navigation.currentCamera,h=Math.max(0,i.xmin-s.eye[0],s.eye[0]-i.xmax),m=Math.max(0,i.ymin-s.eye[1],s.eye[1]-i.ymax),x=Math.sqrt(h*h+m*m),l=this.renderCoordsHelper.getAltitude(s.eye),u=this.navigation._getTerrainElevationBelowCamera(s),y=Math.abs(l-u)+Number.MIN_VALUE,d=Math.pow(Math.max(0,Math.log(o/y)),2),g=o/Math.max(1,d);g=Math.max(g,Math.min(x,o)),n.scale(r,g),n.add(a,r,t)},pickInScreen:function(e,t){return this.createPickRay(e,void 0,this.navigation.currentCamera.viewMatrix,a,r),t&&n.set(this.navigation.currentCamera.eye,a),this.pickAlongRay(a,r,e,e,null,null,this.selector)},pickedIntersectionPoint:function(e,t){return e?(t||(t=n.create()),e.getMinResult().getIntersectionPoint(t)):!1}});return c});