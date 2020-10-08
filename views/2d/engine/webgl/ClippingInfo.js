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

define(["require","exports","tslib","../../../../core/Error","../../../../core/Logger","../../../../core/maybe","../DisplayObject","./Mesh2D","../../../webgl/VertexArrayObject"],(function(e,t,r,i,o,s,a,c,h){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o.getLogger("esri.views.2d.engine.webgl.ClippingInfo"),p=function(e){return parseFloat(e)/100},f=function(e){function t(t,r){var i=e.call(this)||this;return i._clip=r,i._cache={},i.stage=t,i._handle=r.watch("version",(function(){return i._invalidate()})),i.ready(),i}return r.__extends(t,e),t.fromClipArea=function(e,r){return new t(e,r)},t.prototype._destroyGL=function(){s.isSome(this._cache.mesh)&&(this._cache.mesh.destroy(),this._cache.mesh=null),s.isSome(this._cache.vao)&&(this._cache.vao.dispose(),this._cache.vao=null)},t.prototype.destroy=function(){this._destroyGL(),this._handle.remove()},t.prototype.getVAO=function(e,t,r,i){var o=t.size,a=o[0],c=o[1];if("geometry"!==this._clip.type&&this._lastWidth===a&&this._lastHeight===c||(this._lastWidth=a,this._lastHeight=c,this._destroyGL()),s.isNone(this._cache.vao)){var n=this._createMesh(t,this._clip),p=n.getIndexBuffer(e),f=n.getVertexBuffers(e);this._cache.mesh=n,this._cache.vao=new h(e,r,i,f,p)}return this._cache.vao},t.prototype._invalidate=function(){this._destroyGL(),this.requestRender()},t.prototype._createScreenRect=function(e,t){var r=e.size,i=r[0],o=r[1],s="string"==typeof t.left?p(t.left)*i:t.left,a="string"==typeof t.right?p(t.right)*i:t.right,c="string"==typeof t.top?p(t.top)*o:t.top,h="string"==typeof t.bottom?p(t.bottom)*o:t.bottom,n=s,f=c;return{x:n,y:f,width:Math.max(i-a-n,0),height:Math.max(o-h-f,0)}},t.prototype._createMesh=function(e,t){switch(t.type){case"rect":return c.default.fromRect(this._createScreenRect(e,t));case"path":return c.default.fromPath(t);case"geometry":return c.default.fromGeometry(e,t);default:return n.error(new i("mapview-bad-type","Unable to create ClippingInfo mesh from clip of type: ${clip.type}")),c.default.fromRect({x:0,y:0,width:1,height:1})}},t}(a.DisplayObject);t.default=f}));