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

define(["../Navigation","./ConstraintsPlanar","./AnimationPlanar","./actions/PanPlanar","./actions/RotatePlanar","./actions/ZoomPlanar","../../webgl-engine/lib/Camera","../../lib/glMatrix"],function(t,e,a,i,n,r,s,o){var c=o.vec3d,l=c.create(),g=c.create(),u=c.create(),d=c.create(),m=t.createSubclass([e,a],{declaredClass:"esri.views.3d.navigation.planar.NavigationPlanar",initialize:function(){this.pan=new i({navigation:this}),this.zoom=new r({navigation:this}),this.rotate=new n({navigation:this})},getInitialCamera:function(){return new s(c.createFrom(0,0,100),c.createFrom(0,0,0),c.createFrom(0,1,0))},fixTargetUpVector:function(){var t=this.renderCoordsHelper.worldUp,e=this.cameras.target;c.direction(e.center,e.eye,d);var a=c.dot(d,t);Math.abs(a)<=.9999&&(c.scale(d,a,d),c.subtract(t,d,e.up),c.normalize(e.up))},setPoiAuto:function(t,e){var a=this.picker.pickAlongRay(this.cameras.target.eye,this.cameras.target.center,null,t);if(a.getMinResult().getIntersectionPoint(l)&&a.getMaxResult().getIntersectionPoint(g)){var i=5/this.renderUnitInMeters,n=a.getMinResult().dist-i,r=a.getMaxResult().dist+i,s=c.dist(this.cameras.target.eye,this.cameras.target.center);if(n>=s||s>=r){if(a.getMinResult().object){if(a.getMaxResult().dist=void 0,a.intersectObject(a.getMinResult().object),void 0===a.getMaxResult().dist)return void console.error("[NavigationPlanar.setPoiAuto] Did not obtain maximum intersection distance");a.getMaxResult().getIntersectionPoint(g),c.lerp(l,g,.5,u)}else c.set(l,u);this.setCameraFromEyeAndCenter(this.cameras.target.eye,u,{animate:!1})}}}});return m});