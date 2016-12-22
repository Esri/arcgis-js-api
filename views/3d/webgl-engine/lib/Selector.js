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

define(["require","exports","dojo/has","./PerformanceTimer","./gl-matrix"],function(t,e,i,s,r){var n=r.vec3d,o=r.mat4d,h=1e-5,l=o.create(),u=n.create(),a=n.create(),c=i("dojo-debug-messages"),m=function(){function t(t,e,i,r,h,l,u){void 0===u&&(u=!1),this.dir=n.create(),this.normalDir=null,this.minResult=new p,this.maxResult=new p,this.invertedM=o.create(),this.enableHUDSelection=!0,this.enableInvisibleTerrain=!1,this.enableBackfacesTerrain=!0,this.performanceInfo={queryDuration:0,numObjectsTested:0},this.intersectObject=this.intersectObject.bind(this),c&&(this.timer=new s(1)),this.init(t,e,i,r,h,l,u)}return t.prototype.init=function(t,e,i,s,r,o,l){if(e&&i&&n.subtract(i,e,this.dir),this.minResult.init(e,i),this.maxResult.init(e,i),this.numObjectsTested=0,this.point=s,this.camera=r,this.isSelection=l,this.layers=t,this.p0=e,this.p1=i,this.hudResults=[],null==o&&(o=h),this.tolerance=o,this.layers){c&&this.timer.start();for(var u=0;u<this.layers.length;++u){var a=this.layers[u],m=a.getSpatialQueryAccelerator?a.getSpatialQueryAccelerator():void 0;if(m)m.forEachAlongRay(this.p0,this.dir,this.intersectObject);else for(var p=a.getObjects(),d=0,f=p.length;f>d;++d)this.intersectObject(p[d])}c&&(this.timer.stop(),this.performanceInfo.queryDuration=this.timer.getLast(),this.performanceInfo.numObjectsTested=this.numObjectsTested)}},t.prototype.getDirection=function(){return this.normalDir||(this.normalDir=n.create(),n.normalize(this.dir,this.normalDir)),this.normalDir},t.prototype.intersectObject=function(t){var e=this;this.numObjectsTested++;for(var i,s=t.getId(),r=t.getGeometryRecords(),n=t.getObjectTransformation(),h=l,c=0;c<r.length;c++){var m=r[c].geometry,d=r[c].materials;i=m.getId(),o.set(n,h),o.multiply(h,r[c].getShaderTransformation()),o.inverse(h,this.invertedM),o.multiplyVec3(this.invertedM,this.p0,u),o.multiplyVec3(this.invertedM,this.p1,a);for(var f=0,y=m.numGroups;y>f;++f)d[f].intersect(m,f,h,this,u,a,function(r,n,o,h,l){if(r>=0)if(l){var u=new p;u.set(t,s,r,n,h,t.getCenter(),i,o),e.hudResults.push(u)}else(null==e.minResult.priority||h>=e.minResult.priority)&&(null==e.minResult.dist||r<e.minResult.dist)&&e.minResult.set(t,s,r,n,h,null,i,o),(null==e.maxResult.priority||h>=e.maxResult.priority)&&(null==e.maxResult.dist||r>e.maxResult.dist)&&e.maxResult.set(t,s,r,n,h,null,i,o)},r[c].customTransformation)}},t.prototype.getMinResult=function(){return this.minResult},t.prototype.getMaxResult=function(){return this.maxResult},t.prototype.getHudResults=function(){return this.hudResults},t.DEFAULT_TOLERANCE=h,t.Result=typeof p,t}(),p=function(){function t(t,e){this.normal=n.create(),this.init(t,e)}return t.prototype.getIntersectionPoint=function(t){return null==this.dist?!1:(n.lerp(this.p0,this.p1,this.dist,t),!0)},t.prototype.set=function(t,e,i,s,r,o,h,l){this.dist=i,n.set(s,this.normal),this.object=t,this.name=e,this.priority=r,this.center=o,this.geometryId=h,this.triangleNr=l},t.prototype.setIntersector=function(t){this.intersector=t},t.prototype.init=function(t,e){this.dist=void 0,this.object=void 0,this.name=void 0,this.priority=void 0,this.center=null,this.geometryId=null,this.triangleNr=null,this.intersector="stage",this.p0=t,this.p1=e},t}();return m});