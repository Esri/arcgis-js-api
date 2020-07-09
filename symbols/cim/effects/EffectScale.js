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

define(["require","exports","../../../core/lang","../../../geometry/support/aaBoundingRect","../../../geometry/support/boundsUtils","../../../geometry/support/jsonUtils"],(function(t,e,n,i,r,o){Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(){}return t.local=function(){return null===t.instance&&(t.instance=new t),t.instance},t.prototype.execute=function(t,e,n){return new s(t,e,n)},t.instance=null,t}();e.EffectScale=a;var s=function(){function t(t,e,n){this._inputGeometries=t,this._xFactor=void 0!==e.xScaleFactor?e.xScaleFactor:1.15,this._yFactor=void 0!==e.yScaleFactor?e.yScaleFactor:1.15}return t.prototype.next=function(){for(var t=this._inputGeometries.next();t;){if(1===this._xFactor&&1===this._yFactor)return t;var e=i.create();r.getBoundsXY(e,t);var a=(e[2]+e[0])/2,s=(e[3]+e[1])/2;if(o.isExtent(t)){var c={rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]};return this._scaleMultipath(c.rings,a,s),c}if(o.isPolygon(t)){c=n.clone(t);return this._scaleMultipath(c.rings,a,s),c}if(o.isPolyline(t)){var u=n.clone(t);return this._scaleMultipath(u.paths,a,s),u}if(o.isMultipoint(t)){var l=n.clone(t);return this._scalePath(l.points,a,s),l}if(o.isPoint(t))return t;t=this._inputGeometries.next()}return null},t.prototype._scaleMultipath=function(t,e,n){if(t)for(var i=0,r=t;i<r.length;i++){var o=r[i];this._scalePath(o,e,n)}},t.prototype._scalePath=function(t,e,n){if(t)for(var i=0,r=t;i<r.length;i++){var o=r[i],a=(o[0]-e)*this._xFactor,s=(o[1]-n)*this._yFactor;o[0]=e+a,o[1]=n+s}},t}()}));