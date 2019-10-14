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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/Error","../../../../core/Logger","../../../../core/maybe","../DisplayObject","./Mesh2D","../../../webgl/VertexArrayObject"],function(e,t,o,a,r,p,i,s,f){Object.defineProperty(t,"__esModule",{value:!0});var c=r.getLogger("esri.views.2d.engine.webgl.ClippingInfo"),l=function(e){return parseFloat(e)/100},n=function(i){function r(e,t){var r=i.call(this)||this;return r._cache={},r.parent=e,r._handle=t.watch("version",function(){return r._invalidate()}),r._clip=t,r.attach(),r.attached=!0,r}return o(r,i),r.fromClipArea=function(e,t){return new r(e,t)},r.prototype._destroyGL=function(){p.isSome(this._cache.mesh)&&(this._cache.mesh.destroy(),this._cache.mesh=null),p.isSome(this._cache.vao)&&(this._cache.vao.dispose(),this._cache.vao=null)},r.prototype.destroy=function(){this._destroyGL(),this._handle.remove()},r.prototype.doRender=function(e){},r.prototype.getVAO=function(e,t,r,i){var o=t.size,a=o[0],s=o[1];if("geometry"!==this._clip.type&&this._lastWidth===a&&this._lastHeight===s||(this._lastWidth=a,this._lastHeight=s,this._destroyGL()),p.isNone(this._cache.vao)){var c=this._createMesh(t,this._clip),n=c.getIndexBuffer(e),h=c.getVertexBuffers(e);this._cache.mesh=c,this._cache.vao=new f(e,r,i,h,n)}return this._cache.vao},r.prototype._invalidate=function(){this._destroyGL(),this.requestRender()},r.prototype._createScreenRect=function(e,t){var r=e.size,i=r[0],o=r[1],a="string"==typeof t.left?l(t.left)*i:t.left,s="string"==typeof t.right?l(t.right)*i:t.right,c="string"==typeof t.top?l(t.top)*o:t.top,n="string"==typeof t.bottom?l(t.bottom)*o:t.bottom,h=a,p=c;return{x:h,y:p,width:Math.max(i-s-h,0),height:Math.max(o-n-p,0)}},r.prototype._createMesh=function(e,t){switch(t.type){case"rect":return s.default.fromRect(this._createScreenRect(e,t));case"path":return s.default.fromPath(t);case"geometry":return s.default.fromGeometry(e,t);default:return c.error(new a("mapview-bad-type","Unable to create ClippingInfo mesh from clip of type: ${clip.type}")),s.default.fromRect({x:0,y:0,width:1,height:1})}},r}(i.DisplayObject);t.default=n});