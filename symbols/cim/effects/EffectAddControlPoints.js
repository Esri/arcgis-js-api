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

define(["require","exports","../../../core/lang","../../../geometry/support/jsonUtils","../CIMCursor"],(function(t,e,i,n,s){Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){}return t.local=function(){return null===t.instance&&(t.instance=new t),t.instance},t.prototype.execute=function(t,e,i){return new r(t,e,i)},t.instance=null,t}();e.EffectAddControlPoints=o;var r=function(){function t(t,e,i){this._inputGeometries=t,this._angleTolerance=void 0!==e.angleTolerance?e.angleTolerance:120,this._maxCosAngle=Math.cos((1-Math.abs(this._angleTolerance)/180)*Math.PI)}return t.prototype.next=function(){for(var t=this._inputGeometries.next();t;){if(n.isPolygon(t)){this._isClosed=!0;var e=i.clone(t);return this._processMultipath(e.rings),e}if(n.isPolyline(t)){this._isClosed=!1;var s=i.clone(t);return this._processMultipath(s.paths),s}if(n.isExtent(t)){if(this._maxCosAngle)return t;this._isClosed=!0;var o=[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]];return this._processPath(o),{rings:[o]}}t=this._inputGeometries.next()}return null},t.prototype._processMultipath=function(t){if(t)for(var e=0,i=t;e<i.length;e++){var n=i[e];this._processPath(n)}},t.prototype._processPath=function(t){if(t){var e=t.length,i=t[0],n=void 0,o=void 0,r=void 0,a=void 0,l=void 0,u=void 0;this._isClosed&&++e;for(var c=1;c<e;++c){var h=void 0,f=(h=this._isClosed&&c===e-1?t[0]:t[c])[0]-i[0],p=h[1]-i[1],_=Math.sqrt(f*f+p*p);if(c>1&&_>0&&r>0)(n*f+o*p)/_/r<=this._maxCosAngle&&s.setId(i,1);1===c&&(a=f,l=p,u=_),_>0&&(i=h,n=f,o=p,r=_)}if(this._isClosed&&r>0&&u>0)(n*a+o*l)/u/r<=this._maxCosAngle&&s.setId(t[0],1)}},t}()}));