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

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/Error","../../../../core/Logger","../../../../core/maybe","../../../../core/libs/earcut/earcut","../../../../core/libs/gl-matrix-2/vec2","../../../../core/libs/gl-matrix-2/vec2f64","../../../../layers/graphics/featureConversionUtils","../../../../layers/graphics/OptimizedGeometry","./number","../../../webgl/BufferObject"],function(e,r,c,n,t,o,m,u,h,y,v,g,a){Object.defineProperty(r,"__esModule",{value:!0});var i=t.getLogger("esri.views.2d.engine.webgl.Mesh2D"),l=function(e,r,t,n){for(var o=0,i=1;i<t;i++){var c=e[2*(r+i-1)],a=e[2*(r+i-1)+1];o+=(e[2*(r+i)]-c)*(e[2*(r+i)+1]+a)}return n?0<o:o<0},x=function(e,r){for(var t=e.coords,n=e.lengths,o=[],i=0,c=0;i<n.length;c+=n[i],i+=1){for(var a=c,f=[];i<n.length-1&&l(t,c+n[i],n[i+1],r);c+=n[i+=1])f.push(c+n[i]-a);for(var s=t.slice(2*a,2*(c+n[i])),u=0,h=m(s,f,2);u<h.length;u++){var y=h[u];o.push(y+a)}}return o},f=function(){function s(e,r,t,n){void 0===n&&(n=!1),this._cache={},this.vertices=e,this.indices=r,this.primitiveType=t,this.isMapSpace=n}return s.fromRect=function(e){var r=e.x,t=e.y,n=e.width,o=e.height;return s.fromScreenExtent({xmin:r,ymin:t,xmax:r+n,ymax:t+o})},s.fromPath=function(e){for(var r=y.convertFromNestedArray(new v.default,e.path,!1,!1),t=r.coords,n=new Uint32Array(x(r,!0)),o=new Uint32Array(t.length/2),i=0;i<o.length;i++)o[i]=g.i1616to32(Math.floor(t[2*i]),Math.floor(t[2*i+1]));return new s({geometry:o},n,4)},s.fromGeometry=function(e,r){var t=r.geometry.type;switch(t){case"polygon":return s.fromPolygon(e,r.geometry);case"extent":return s.fromMapExtent(e,r.geometry);default:return i.error(new n("mapview-bad-type","Unable to create a mesh from type "+t,r)),s.fromRect({x:0,y:0,width:1,height:1})}},s.fromPolygon=function(e,r){for(var t=y.convertFromPolygon(new v.default,r,!1,!1),n=t.coords,o=new Uint32Array(x(t,!1)),i=new Uint32Array(n.length/2),c=h.vec2f64.create(),a=h.vec2f64.create(),f=0;f<i.length;f++)u.vec2.set(c,n[2*f],n[2*f+1]),e.toScreen(a,c),i[f]=g.i1616to32(Math.floor(a[0]),Math.floor(a[1]));return new s({geometry:i},o,4,!0)},s.fromScreenExtent=function(e){var r=e.xmin,t=e.xmax,n=e.ymin,o=e.ymax;return new s({geometry:new Uint32Array([g.i1616to32(r,n),g.i1616to32(t,n),g.i1616to32(r,o),g.i1616to32(r,o),g.i1616to32(t,n),g.i1616to32(t,o)])},new Uint32Array([0,1,2,3,4,5]),4)},s.fromMapExtent=function(e,r){var t=e.toScreen([0,0],[r.xmin,r.ymin]),n=t[0],o=t[1],i=e.toScreen([0,0],[r.xmax,r.ymax]),c=i[0],a=i[1];return new s({geometry:new Uint32Array([g.i1616to32(n,o),g.i1616to32(c,o),g.i1616to32(n,a),g.i1616to32(n,a),g.i1616to32(c,o),g.i1616to32(c,a)])},new Uint32Array([0,1,2,3,4,5]),4)},s.prototype.destroy=function(){for(var e in o.isSome(this._cache.indexBuffer)&&this._cache.indexBuffer.dispose(),this._cache.vertexBuffers)o.isSome(this._cache.vertexBuffers[e])&&this._cache.vertexBuffers[e].dispose()},Object.defineProperty(s.prototype,"elementType",{get:function(){return function(e){switch(e.BYTES_PER_ELEMENT){case 1:return 5121;case 2:return 5123;case 4:return 5125;default:throw new n("Cannot get DataType of array")}}(this.indices)},enumerable:!0,configurable:!0}),s.prototype.getIndexBuffer=function(e,r){return void 0===r&&(r=35044),this._cache.indexBuffer||(this._cache.indexBuffer=a.createIndex(e,r,this.indices)),this._cache.indexBuffer},s.prototype.getVertexBuffers=function(n,o){var i=this;return void 0===o&&(o=35044),this._cache.vertexBuffers||(this._cache.vertexBuffers=Object.keys(this.vertices).reduce(function(e,r){var t;return c({},e,((t={})[r]=a.createVertex(n,o,i.vertices[r]),t))},{})),this._cache.vertexBuffers},s}();r.default=f});