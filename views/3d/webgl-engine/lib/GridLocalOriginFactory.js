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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../core/compilerUtils","../../../../core/libs/gl-matrix-2/gl-matrix","../../../../geometry/SpatialReference","../../support/projectionUtils","./Geometry","./GeometryData","./Layer","./localOrigin","./Object3D","./Util","../materials/RibbonLineMaterial","../parts/Model"],function(t,i,e,r,a,n,o,s,l,d,O,c,h,_){var g=0,u="rg_",f=function(){function t(){if(this.ROOT_ORIGIN_ID=u+"root_"+g++,this._origins=new Map,this._gridSize=42e5,e.isSome(t.testOrigin)){var i=t.testOrigin;this._origins.set(this.ROOT_ORIGIN_ID,d.fromValues(i[0],i[1],i[2],this.ROOT_ORIGIN_ID))}}return t.prototype.getOrigin=function(t){var i=this._origins.get(this.ROOT_ORIGIN_ID);if(null==i){var e=d.fromValues(t[0]+Math.random()-.5,t[1]+Math.random()-.5,t[2]+Math.random()-.5,this.ROOT_ORIGIN_ID);return this._origins.set(this.ROOT_ORIGIN_ID,e),e}r.vec3.subtract(m,t,i.vec3),m[0]=Math.abs(m[0]),m[1]=Math.abs(m[1]),m[2]=Math.abs(m[2]);var a=this._gridSize;if(m[0]<a&&m[1]<a&&m[2]<a)return i;var n=Math.round(t[0]/a),o=Math.round(t[1]/a),s=Math.round(t[2]/a),l=""+u+n+"/"+o+"/"+s,O=this._origins.get(l);return O||(O=d.fromValues(n*a,o*a,s*a,l),this._origins.set(l,O)),O},t.prototype._drawOriginBox=function(t){var i=window.view,e=i._stage;if(null==this._object){this._material=new h({width:2,color:[0,1,0,1]},"GridLocalOriginMaterial"),e.add(_.ContentType.MATERIAL,this._material);var r=new l("GridLocalOrigin",{isPickable:!1},"GridLocalOrigin");e.add(_.ContentType.LAYER,r),this._object=new O({name:"GridLocalOrigin",idHint:"GridLocalOrigin",castShadow:!1}),e.add(_.ContentType.OBJECT,this._object),r.addObject(this._object),e.addToViewContent([r.id])}for(var d=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],g=d.length,u=new Float32Array(3*g),f=new Uint32Array(2*(g-1)),m=.5*this._gridSize,R=0;R<g;R++)u[3*R+0]=t[0]+(1&d[R]?m:-m),u[3*R+1]=t[1]+(2&d[R]?m:-m),u[3*R+2]=t[2]+(4&d[R]?m:-m),R>0&&(f[2*R+0]=R-1,f[2*R+1]=R);n.bufferToBuffer(u,a.WebMercator,0,u,i.spatialReference,0,g);var b={};b[c.VertexAttrConstants.POSITION]={size:3,data:u};var p={};p[c.VertexAttrConstants.POSITION]=f;var v=new s(b,p,void 0,"line"),T=new o(v,"GridLocalOriginBox");e.add(_.ContentType.GEOMETRY,T),this._object.addGeometry(T,this._material,I),console.log(this._origins.size,t)},t}(),I=r.mat4f64.create(),m=r.vec3f64.create();return function(t){t.testOrigin=null}(f||(f={})),f});