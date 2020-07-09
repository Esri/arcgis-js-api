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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../core/lang","../../../geometry/support/aaBoundingRect","../../../geometry/support/boundsUtils","../../../geometry/support/jsonUtils"],(function(t,e,n,i,r,o){Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(){}return t.local=function(){return null===t.instance&&(t.instance=new t),t.instance},t.prototype.execute=function(t,e,n){return new u(t,e,n)},t.instance=null,t}();e.EffectRotate=a;var u=function(){function t(t,e,n){this._inputGeometries=t,this._rotateAngle=void 0!==e.angle?-e.angle*Math.PI/180:0}return t.prototype.next=function(){for(var t=this._inputGeometries.next();t;){if(0===this._rotateAngle)return t;var e=i.create();r.getBoundsXY(e,t);var a=(e[2]+e[0])/2,u=(e[3]+e[1])/2;if(o.isExtent(t)){var s={rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]};return this._rotateMultipath(s.rings,a,u),s}if(o.isPolygon(t)){s=n.clone(t);return this._rotateMultipath(s.rings,a,u),s}if(o.isPolyline(t)){var l=n.clone(t);return this._rotateMultipath(l.paths,a,u),l}if(o.isMultipoint(t)){var p=n.clone(t);return this._rotatePath(p.points,a,u),p}if(o.isPoint(t))return t;t=this._inputGeometries.next()}return null},t.prototype._rotateMultipath=function(t,e,n){if(t)for(var i=0,r=t;i<r.length;i++){var o=r[i];this._rotatePath(o,e,n)}},t.prototype._rotatePath=function(t,e,n){if(t)for(var i=Math.cos(this._rotateAngle),r=Math.sin(this._rotateAngle),o=0,a=t;o<a.length;o++){var u=a[o],s=u[0]-e,l=u[1]-n;u[0]=e+s*i-l*r,u[1]=n+s*r+l*i}},t}()}));