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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/Error","../../../../core/Logger","../../../../core/maybe","../../../../core/libs/earcut/earcut","../../../../core/libs/gl-matrix-2/vec2","../../../../core/libs/gl-matrix-2/vec2f64","../../../../layers/graphics/featureConversionUtils","../../../../layers/graphics/OptimizedGeometry","./number","../../../webgl/BufferObject"],(function(e,r,t,n,o,i,c,a,f,s,u,h,y){Object.defineProperty(r,"__esModule",{value:!0});var m=o.getLogger("esri.views.2d.engine.webgl.Mesh2D"),v=function(e,r,t,n){for(var o=0,i=1;i<t;i++){var c=e[2*(r+i-1)],a=e[2*(r+i-1)+1];o+=(e[2*(r+i)]-c)*(e[2*(r+i)+1]+a)}return n?o>0:o<0},g=function(e,r){for(var t=e.coords,n=e.lengths,o=[],i=0,a=0;i<n.length;a+=n[i],i+=1){for(var f=a,s=[];i<n.length-1&&v(t,a+n[i],n[i+1],r);a+=n[i+=1])s.push(a+n[i]-f);for(var u=t.slice(2*f,2*(a+n[i])),h=0,y=c.earcut(u,s,2);h<y.length;h++){var m=y[h];o.push(m+f)}}return o},l=function(){function e(e,r,t,n){void 0===n&&(n=!1),this._cache={},this.vertices=e,this.indices=r,this.primitiveType=t,this.isMapSpace=n}return e.fromRect=function(r){var t=r.x,n=r.y,o=t+r.width,i=n+r.height;return e.fromScreenExtent({xmin:t,ymin:n,xmax:o,ymax:i})},e.fromPath=function(r){for(var t=s.convertFromNestedArray(new u.default,r.path,!1,!1),n=t.coords,o=new Uint32Array(g(t,!0)),i=new Uint32Array(n.length/2),c=0;c<i.length;c++)i[c]=h.i1616to32(Math.floor(n[2*c]),Math.floor(n[2*c+1]));return new e({geometry:i},o,4)},e.fromGeometry=function(r,t){var o=t.geometry.type;switch(o){case"polygon":return e.fromPolygon(r,t.geometry);case"extent":return e.fromMapExtent(r,t.geometry);default:return m.error(new n("mapview-bad-type","Unable to create a mesh from type "+o,t)),e.fromRect({x:0,y:0,width:1,height:1})}},e.fromPolygon=function(r,t){for(var n=s.convertFromPolygon(new u.default,t,!1,!1),o=n.coords,i=new Uint32Array(g(n,!1)),c=new Uint32Array(o.length/2),y=f.vec2f64.create(),m=f.vec2f64.create(),v=0;v<c.length;v++)a.vec2.set(y,o[2*v],o[2*v+1]),r.toScreen(m,y),c[v]=h.i1616to32(Math.floor(m[0]),Math.floor(m[1]));return new e({geometry:c},i,4,!0)},e.fromScreenExtent=function(r){var t=r.xmin,n=r.xmax,o=r.ymin,i=r.ymax;return new e({geometry:new Uint32Array([h.i1616to32(t,o),h.i1616to32(n,o),h.i1616to32(t,i),h.i1616to32(t,i),h.i1616to32(n,o),h.i1616to32(n,i)])},new Uint32Array([0,1,2,3,4,5]),4)},e.fromMapExtent=function(r,t){var n=r.toScreen([0,0],[t.xmin,t.ymin]),o=n[0],i=n[1],c=r.toScreen([0,0],[t.xmax,t.ymax]),a=c[0],f=c[1];return new e({geometry:new Uint32Array([h.i1616to32(o,i),h.i1616to32(a,i),h.i1616to32(o,f),h.i1616to32(o,f),h.i1616to32(a,i),h.i1616to32(a,f)])},new Uint32Array([0,1,2,3,4,5]),4)},e.prototype.destroy=function(){for(var e in i.isSome(this._cache.indexBuffer)&&this._cache.indexBuffer.dispose(),this._cache.vertexBuffers)i.isSome(this._cache.vertexBuffers[e])&&this._cache.vertexBuffers[e].dispose()},Object.defineProperty(e.prototype,"elementType",{get:function(){return function(e){switch(e.BYTES_PER_ELEMENT){case 1:return 5121;case 2:return 5123;case 4:return 5125;default:throw new n("Cannot get DataType of array")}}(this.indices)},enumerable:!0,configurable:!0}),e.prototype.getIndexBuffer=function(e,r){return void 0===r&&(r=35044),this._cache.indexBuffer||(this._cache.indexBuffer=y.createIndex(e,r,this.indices)),this._cache.indexBuffer},e.prototype.getVertexBuffers=function(e,r){var n=this;return void 0===r&&(r=35044),this._cache.vertexBuffers||(this._cache.vertexBuffers=Object.keys(this.vertices).reduce((function(o,i){var c;return t({},o,((c={})[i]=y.createVertex(e,r,n.vertices[i]),c))}),{})),this._cache.vertexBuffers},e}();r.default=l}));