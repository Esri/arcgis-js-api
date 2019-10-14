// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/maybe","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/SpatialReference","../../support/projectionUtils","./Geometry","./GeometryData","./Layer","./localOrigin","./Object3D","./Util","../materials/RibbonLineMaterial"],function(t,i,r,e,a,n,o,s,c,l,h,d,O,_,g){var u=0,f="rg_",m=function(){function t(){this.ROOT_ORIGIN_ID=f+"root_"+u++,this._origins=new Map,this._gridSize=42e5}return t.prototype.getOrigin=function(i){var e=this._origins.get(this.ROOT_ORIGIN_ID);if(null==e){if(r.isSome(t.testOrigin)){var n=t.testOrigin;return this._origins.set(this.ROOT_ORIGIN_ID,d.fromValues(n[0],n[1],n[2],this.ROOT_ORIGIN_ID)),this.getOrigin(i)}var o=d.fromValues(i[0]+Math.random()-.5,i[1]+Math.random()-.5,i[2]+Math.random()-.5,this.ROOT_ORIGIN_ID);return this._origins.set(this.ROOT_ORIGIN_ID,o),o}a.vec3.subtract(b,i,e.vec3),b[0]=Math.abs(b[0]),b[1]=Math.abs(b[1]),b[2]=Math.abs(b[2]);var s=this._gridSize;if(b[0]<s&&b[1]<s&&b[2]<s)return e;var c=Math.round(i[0]/s),l=Math.round(i[1]/s),h=Math.round(i[2]/s),O=""+f+c+"/"+l+"/"+h,_=this._origins.get(O);return _||(_=d.fromValues(c*s,l*s,h*s,O),this._origins.set(O,_)),_},t.prototype._drawOriginBox=function(t){var i=window.view,r=i._stage;if(null==this._object){this._material=new g({width:2,color:[0,1,0,1]},"GridLocalOriginMaterial"),r.add(3,this._material);var e=new h("GridLocalOrigin",{isPickable:!1});r.add(0,e),this._object=new O({idHint:"GridLocalOrigin",castShadow:!1}),r.add(1,this._object),e.addObject(this._object),r.addToViewContent([e.id])}for(var a=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],n=a.length,d=new Float32Array(3*n),u=new Uint32Array(2*(n-1)),f=.5*this._gridSize,m=0;m<n;m++)d[3*m+0]=t[0]+(1&a[m]?f:-f),d[3*m+1]=t[1]+(2&a[m]?f:-f),d[3*m+2]=t[2]+(4&a[m]?f:-f),m>0&&(u[2*m+0]=m-1,u[2*m+1]=m);s.bufferToBuffer(d,o.WebMercator,0,d,i.spatialReference,0,n);var b={};b[_.VertexAttrConstants.POSITION]={size:3,data:d};var v={};v[_.VertexAttrConstants.POSITION]=u;var w=new l.GeometryData(b,v,void 0,"line"),R=new c(w,"GridLocalOriginBox");r.add(2,R),this._object.addGeometry(R,this._material,I),console.log(this._origins.size,t)},t}(),I=e.mat4f64.create(),b=n.vec3f64.create();return function(t){t.testOrigin=null}(m||(m={})),m});