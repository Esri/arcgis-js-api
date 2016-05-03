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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../Navigation","./ConstraintsPlanar","./AnimationPlanar","./actions/PanPlanar","./actions/RotatePlanar","./actions/ZoomPlanar","../../lib/glMatrix"],function(t,e,a,i,n,r,s){var o=s.vec3d,c=o.create(),l=o.create(),g=o.create(),u=o.create(),d=t.createSubclass([e,a],{declaredClass:"esri.views.3d.navigation.planar.NavigationPlanar",initialize:function(){this.pan=new i(this),this.zoom=new r(this),this.rotate=new n(this)},fixTargetUpVector:function(){var t=this.renderCoordsHelper.worldUp,e=this.cameras.target;o.direction(e.center,e.eye,u);var a=o.dot(u,t);Math.abs(a)>.9999||(o.scale(u,a,u),o.subtract(t,u,e.up),o.normalize(e.up))},setPoiAuto:function(t){var e=this.picker.pickAlongRay(this.cameras.target.eye,this.cameras.target.center,null,t);if(e.getMinResult().getIntersectionPoint(c)&&e.getMaxResult().getIntersectionPoint(l)){var a=5/this.renderUnitInMeters,i=e.getMinResult().dist-a,n=e.getMaxResult().dist+a,r=o.dist(this.cameras.target.eye,this.cameras.target.center);if(i>=r||r>=n){if(e.getMinResult().object){if(e.getMaxResult().dist=void 0,e.intersectObject(e.getMinResult().object),void 0===e.getMaxResult().dist)return void console.error("[NavigationPlanar.setPoiAuto] Did not obtain maximum intersection distance");e.getMaxResult().getIntersectionPoint(l),o.lerp(c,l,.5,g)}else o.set(c,g);this.setCameraFromEyeAndCenter(this.cameras.target.eye,g,{animate:!1})}}}});return d});