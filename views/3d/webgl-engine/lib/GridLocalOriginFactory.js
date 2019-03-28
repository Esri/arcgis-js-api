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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/maybe","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/SpatialReference","../../support/projectionUtils","./Geometry","./GeometryData","./Layer","./localOrigin","./Object3D","./Util","../materials/RibbonLineMaterial","../parts/Model"],function(t,i,e,r,a,n,o,s,l,c,d,O,h,_,g,f){var u=0,I="rg_",m=function(){function t(){if(this.ROOT_ORIGIN_ID=I+"root_"+u++,this._origins=new Map,this._gridSize=42e5,e.isSome(t.testOrigin)){var i=t.testOrigin;this._origins.set(this.ROOT_ORIGIN_ID,O.fromValues(i[0],i[1],i[2],this.ROOT_ORIGIN_ID))}}return t.prototype.getOrigin=function(t){var i=this._origins.get(this.ROOT_ORIGIN_ID);if(null==i){var e=O.fromValues(t[0]+Math.random()-.5,t[1]+Math.random()-.5,t[2]+Math.random()-.5,this.ROOT_ORIGIN_ID);return this._origins.set(this.ROOT_ORIGIN_ID,e),e}a.vec3.subtract(v,t,i.vec3),v[0]=Math.abs(v[0]),v[1]=Math.abs(v[1]),v[2]=Math.abs(v[2]);var r=this._gridSize;if(v[0]<r&&v[1]<r&&v[2]<r)return i;var n=Math.round(t[0]/r),o=Math.round(t[1]/r),s=Math.round(t[2]/r),l=""+I+n+"/"+o+"/"+s,c=this._origins.get(l);return c||(c=O.fromValues(n*r,o*r,s*r,l),this._origins.set(l,c)),c},t.prototype._drawOriginBox=function(t){var i=window.view,e=i._stage;if(null==this._object){this._material=new g({width:2,color:[0,1,0,1]},"GridLocalOriginMaterial"),e.add(f.ContentType.MATERIAL,this._material);var r=new d("GridLocalOrigin",{isPickable:!1});e.add(f.ContentType.LAYER,r),this._object=new h({name:"GridLocalOrigin",idHint:"GridLocalOrigin",castShadow:!1}),e.add(f.ContentType.OBJECT,this._object),r.addObject(this._object),e.addToViewContent([r.id])}for(var a=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],n=a.length,O=new Float32Array(3*n),u=new Uint32Array(2*(n-1)),I=.5*this._gridSize,m=0;m<n;m++)O[3*m+0]=t[0]+(1&a[m]?I:-I),O[3*m+1]=t[1]+(2&a[m]?I:-I),O[3*m+2]=t[2]+(4&a[m]?I:-I),m>0&&(u[2*m+0]=m-1,u[2*m+1]=m);s.bufferToBuffer(O,o.WebMercator,0,O,i.spatialReference,0,n);var v={};v[_.VertexAttrConstants.POSITION]={size:3,data:O};var R={};R[_.VertexAttrConstants.POSITION]=u;var T=new c(v,R,void 0,"line"),p=new l(T,"GridLocalOriginBox");e.add(f.ContentType.GEOMETRY,p),this._object.addGeometry(p,this._material,b),console.log(this._origins.size,t)},t}(),b=r.mat4f64.create(),v=n.vec3f64.create();return function(t){t.testOrigin=null}(m||(m={})),m});