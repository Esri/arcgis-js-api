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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../core/maybe","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/SpatialReference","../../support/projectionUtils","./Geometry","./GeometryData","./Layer","./localOrigin","./Object3D","./Util","../materials/RibbonLineMaterial","../parts/Model"],function(t,i,e,r,a,n,o,s,l,c,d,O,h,g,_,u){var f=0,I="rg_",m=function(){function t(){this.ROOT_ORIGIN_ID=I+"root_"+f++,this._origins=new Map,this._gridSize=42e5}return t.prototype.getOrigin=function(i){var r=this._origins.get(this.ROOT_ORIGIN_ID);if(null==r){if(e.isSome(t.testOrigin)){var n=t.testOrigin;return this._origins.set(this.ROOT_ORIGIN_ID,O.fromValues(n[0],n[1],n[2],this.ROOT_ORIGIN_ID)),this.getOrigin(i)}var o=O.fromValues(i[0]+Math.random()-.5,i[1]+Math.random()-.5,i[2]+Math.random()-.5,this.ROOT_ORIGIN_ID);return this._origins.set(this.ROOT_ORIGIN_ID,o),o}a.vec3.subtract(v,i,r.vec3),v[0]=Math.abs(v[0]),v[1]=Math.abs(v[1]),v[2]=Math.abs(v[2]);var s=this._gridSize;if(v[0]<s&&v[1]<s&&v[2]<s)return r;var l=Math.round(i[0]/s),c=Math.round(i[1]/s),d=Math.round(i[2]/s),h=""+I+l+"/"+c+"/"+d,g=this._origins.get(h);return g||(g=O.fromValues(l*s,c*s,d*s,h),this._origins.set(h,g)),g},t.prototype._drawOriginBox=function(t){var i=window.view,e=i._stage;if(null==this._object){this._material=new _({width:2,color:[0,1,0,1]},"GridLocalOriginMaterial"),e.add(u.ContentType.MATERIAL,this._material);var r=new d("GridLocalOrigin",{isPickable:!1});e.add(u.ContentType.LAYER,r),this._object=new h({name:"GridLocalOrigin",idHint:"GridLocalOrigin",castShadow:!1}),e.add(u.ContentType.OBJECT,this._object),r.addObject(this._object),e.addToViewContent([r.id])}for(var a=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],n=a.length,O=new Float32Array(3*n),f=new Uint32Array(2*(n-1)),I=.5*this._gridSize,m=0;m<n;m++)O[3*m+0]=t[0]+(1&a[m]?I:-I),O[3*m+1]=t[1]+(2&a[m]?I:-I),O[3*m+2]=t[2]+(4&a[m]?I:-I),m>0&&(f[2*m+0]=m-1,f[2*m+1]=m);s.bufferToBuffer(O,o.WebMercator,0,O,i.spatialReference,0,n);var v={};v[g.VertexAttrConstants.POSITION]={size:3,data:O};var R={};R[g.VertexAttrConstants.POSITION]=f;var T=new c(v,R,void 0,"line"),p=new l(T,"GridLocalOriginBox");e.add(u.ContentType.GEOMETRY,p),this._object.addGeometry(p,this._material,b),console.log(this._origins.size,t)},t}(),b=r.mat4f64.create(),v=n.vec3f64.create();return function(t){t.testOrigin=null}(m||(m={})),m});