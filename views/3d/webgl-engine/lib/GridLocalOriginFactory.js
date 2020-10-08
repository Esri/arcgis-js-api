// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../../core/maybe","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/SpatialReference","../../support/projectionUtils","./Geometry","./GeometryData","./Layer","./localOrigin","./Object3D","./Util","../materials/RibbonLineMaterial"],(function(t,i,r,e,a,n,o,s,c,l,h,d,O,_,g){"use strict";var u=0,f=function(){function t(){this.ROOT_ORIGIN_ID="rg_root_"+u++,this._origins=new Map,this._gridSize=42e5}return t.prototype.getOrigin=function(i){var e=this._origins.get(this.ROOT_ORIGIN_ID);if(null==e){if(r.isSome(t.testOrigin)){var n=t.testOrigin;return this._origins.set(this.ROOT_ORIGIN_ID,d.fromValues(n[0],n[1],n[2],this.ROOT_ORIGIN_ID)),this.getOrigin(i)}var o=d.fromValues(i[0]+Math.random()-.5,i[1]+Math.random()-.5,i[2]+Math.random()-.5,this.ROOT_ORIGIN_ID);return this._origins.set(this.ROOT_ORIGIN_ID,o),o}a.vec3.subtract(I,i,e.vec3),I[0]=Math.abs(I[0]),I[1]=Math.abs(I[1]),I[2]=Math.abs(I[2]);var s=this._gridSize;if(I[0]<s&&I[1]<s&&I[2]<s)return e;var c=Math.round(i[0]/s),l=Math.round(i[1]/s),h=Math.round(i[2]/s),O="rg_"+c+"/"+l+"/"+h,_=this._origins.get(O);return _||(_=d.fromValues(c*s,l*s,h*s,O),this._origins.set(O,_)),_},t.prototype._drawOriginBox=function(t){var i=window.view,r=i._stage;if(null==this._object){this._material=new g({width:2,color:[0,1,0,1]},"GridLocalOriginMaterial"),r.add(3,this._material);var a=new h("GridLocalOrigin",{isPickable:!1});r.add(0,a),this._object=new O({idHint:"GridLocalOrigin",castShadow:!1}),r.add(1,this._object),a.addObject(this._object),r.addToViewContent([a.id])}for(var n=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],d=n.length,u=new Float32Array(3*d),f=new Uint32Array(2*(d-1)),I=.5*this._gridSize,m=0;m<d;m++)u[3*m+0]=t[0]+(1&n[m]?I:-I),u[3*m+1]=t[1]+(2&n[m]?I:-I),u[3*m+2]=t[2]+(4&n[m]?I:-I),m>0&&(f[2*m+0]=m-1,f[2*m+1]=m);s.bufferToBuffer(u,o.WebMercator,0,u,i.spatialReference,0,d);var b={};b[_.VertexAttrConstants.POSITION]={size:3,data:u};var v={};v[_.VertexAttrConstants.POSITION]=f;var w=new l.GeometryData(b,v,"line"),R=new c(w,"GridLocalOriginBox");r.add(2,R),this._object.addGeometry(R,this._material,e.mat4f64.IDENTITY),console.log(this._origins.size,t)},t}(),I=n.vec3f64.create();return function(t){t.testOrigin=null}(f||(f={})),f}));