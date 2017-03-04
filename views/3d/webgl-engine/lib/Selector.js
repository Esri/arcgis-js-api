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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/has","./PerformanceTimer","./gl-matrix","./Object3D"],function(t,e,i,s,r,n){var o=r.vec3d,a=r.mat4d,h=1e-5,l=a.create(),u=o.create(),c=o.create(),m=i("dojo-debug-messages"),p=function(){function t(t,e,i,r,n,h,l){void 0===l&&(l=!1),this.dir=o.create(),this.normalDir=null,this.minResult=new d,this.maxResult=new d,this.invertedM=a.create(),this.enableHUDSelection=!0,this.enableInvisibleTerrain=!1,this.enableBackfacesTerrain=!0,this.performanceInfo={queryDuration:0,numObjectsTested:0},this.intersectObject=this.intersectObject.bind(this),m&&(this.timer=new s(1)),this.init(t,e,i,r,n,h,l)}return t.prototype.init=function(t,e,i,s,r,n,a){if(e&&i&&o.subtract(i,e,this.dir),this.minResult.init(e,i),this.maxResult.init(e,i),this.numObjectsTested=0,this.point=s,this.camera=r,this.isSelection=a,this.layers=t,this.p0=e,this.p1=i,this.hudResults=[],null==n&&(n=h),this.tolerance=n,this.layers){m&&this.timer.start();for(var l=0;l<this.layers.length;++l){var u=this.layers[l],c=u.getSpatialQueryAccelerator?u.getSpatialQueryAccelerator():void 0;if(c)c.forEachAlongRay(this.p0,this.dir,this.intersectObject);else for(var p=u.getObjects(),d=0;d<p.length;++d)this.intersectObject(p[d])}m&&(this.timer.stop(),this.performanceInfo.queryDuration=this.timer.getLast(),this.performanceInfo.numObjectsTested=this.numObjectsTested)}},t.prototype.getDirection=function(){return this.normalDir||(this.normalDir=o.create(),o.normalize(this.dir,this.normalDir)),this.normalDir},t.prototype.intersectObject=function(t){var e=this;this.numObjectsTested++;for(var i,s=t.getId(),r=t.getGeometryRecords(),n=t.getObjectTransformation(),o=l,h=0;h<r.length;h++){var m=r[h],p=m.geometry,f=m.materials,y=m.instanceParameters;i=p.getId(),a.set(n,o),a.multiply(o,m.getShaderTransformation()),a.inverse(o,this.invertedM),a.multiplyVec3(this.invertedM,this.p0,u),a.multiplyVec3(this.invertedM,this.p1,c),f[0].intersect(p,y,o,this,u,c,function(r,n,o,a,h){if(r>=0)if(h){var l=new d;l.set(t,s,r,n,a,t.getCenter(),i,o),e.hudResults.push(l)}else(null==e.minResult.priority||a>=e.minResult.priority)&&(null==e.minResult.dist||r<e.minResult.dist)&&e.minResult.set(t,s,r,n,a,null,i,o),(null==e.maxResult.priority||a>=e.maxResult.priority)&&(null==e.maxResult.dist||r>e.maxResult.dist)&&e.maxResult.set(t,s,r,n,a,null,i,o)},m.customTransformation)}},t.prototype.getMinResult=function(){return this.minResult},t.prototype.getMaxResult=function(){return this.maxResult},t.prototype.getHudResults=function(){return this.hudResults},t}();p.DEFAULT_TOLERANCE=h,p.Result=typeof d;var d=function(){function t(t,e){this.normal=o.create(),this.init(t,e)}return t.prototype.getIntersectionPoint=function(t){return null==this.dist?!1:(o.lerp(this.p0,this.p1,this.dist,t),!0)},t.prototype.set=function(t,e,i,s,r,a,h,l){this.dist=i,o.set(s,this.normal),t?this.targetType=t instanceof n?"StageObject":"StagePoint":this.targetType="None",this.target=t,this.name=e,this.priority=r,this.center=a,this.geometryId=h,this.triangleNr=l},t.prototype.setIntersector=function(t){this.intersector=t},t.prototype.init=function(t,e){this.dist=void 0,this.targetType="None",this.target=void 0,this.name=void 0,this.priority=void 0,this.center=null,this.geometryId=null,this.triangleNr=null,this.intersector="stage",this.p0=t,this.p1=e},t}();return p});