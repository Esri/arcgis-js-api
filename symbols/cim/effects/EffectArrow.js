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

define(["require","exports","tslib","../CIMCursor","../CurveHelper"],(function(t,r,e,n,o){Object.defineProperty(r,"__esModule",{value:!0});var i=1.7320508075688772,u=function(){function t(){}return t.local=function(){return null===t.instance&&(t.instance=new t),t.instance},t.prototype.execute=function(t,r,e){return new s(t,r,e)},t.instance=null,t}();r.EffectArrow=u;var s=function(t){function r(r,e,n){var i=t.call(this,r,!1,!0)||this;return i._curveHelper=new o.CurveHelper,i._width=(void 0!==e.width?e.width:5)*n,i._arrowType=e.geometricEffectArrowType,i._offsetFlattenError=o.PIXEL_TOLERANCE*n,i}return e.__extends(r,t),r.prototype.processPath=function(t){switch(this._arrowType){case"OpenEnded":default:return this._constructSimpleArrow(t,!0);case"Block":return this._constructSimpleArrow(t,!1);case"Crossed":return this._constructCrossedArrow(t)}},r.prototype._constructSimpleArrow=function(t,r){var e=this._curveHelper.calculatePathLength(t),n=this._width;e<2*n&&(n=e/2);var i=this._curveHelper.getSubCurve(t,0,e-n);if(!i)return null;var u=n/2;if(this._curveHelper.isEmpty(i,!1))return null;var s=this._constructOffset(i,-u);if(!s)return null;var l=this._constructOffset(i,u);if(!l)return null;var a=this._constructArrowBasePoint(s,-u);if(!a)return null;var c=this._constructArrowBasePoint(l,u);if(!c)return null;var h=t[t.length-1];r||(this._makeControlPoint(l,!0),this._makeControlPoint(s,!0));var f=new o.PathHelper;return f.addPath(l,!0),f.lineTo(c),this._makeControlPoint(f.path()),f.lineTo(h),this._makeControlPoint(f.path()),f.lineTo(a),this._makeControlPoint(f.path()),f.addPath(s,!1),r?{paths:[f.path()]}:(f.close(),{rings:[f.path()]})},r.prototype._constructCrossedArrow=function(t){var r=this._curveHelper.calculatePathLength(t),e=this._width;r<e*(1+i+1)&&(e=r/(1+i+1));var n=this._curveHelper.getSubCurve(t,0,r-e*(1+i));if(!n)return null;var u=e/2;if(this._curveHelper.isEmpty(n,!1))return null;var s=this._constructOffset(n,u);if(!s)return null;var l=this._constructOffset(n,-u);if(!l)return null;var a=this._curveHelper.getSubCurve(t,0,r-e);if(!a)return null;if(this._curveHelper.isEmpty(a,!1))return null;var c=this._constructOffset(a,u);if(!c)return null;var h=this._constructOffset(a,-u);if(!h)return null;var f=c[c.length-1],p=this._constructArrowBasePoint(c,u);if(!p)return null;var _=h[h.length-1],v=this._constructArrowBasePoint(h,-u);if(!v)return null;var P=t[t.length-1];this._makeControlPoint(s,!1),this._makeControlPoint(l,!1);var d=new o.PathHelper;return d.addPath(s,!0),this._makeControlPoint(d.path()),d.lineTo(_),d.lineTo(v),this._makeControlPoint(d.path()),d.lineTo(P),this._makeControlPoint(d.path()),d.lineTo(p),this._makeControlPoint(d.path()),d.lineTo(f),this._makeControlPoint(d.path()),d.addPath(l,!1),{paths:[d.path()]}},r.prototype._constructOffset=function(t,r){return this._curveHelper.offset(t,r,"Rounded",4,this._offsetFlattenError)},r.prototype._constructArrowBasePoint=function(t,r){if(!t||t.length<2)return null;var e=t[t.length-2],n=t[t.length-1],o=[n[0]-e[0],n[1]-e[1]];return this._curveHelper.normalize(o),[n[0]+o[1]*r,n[1]-o[0]*r]},r.prototype._makeControlPoint=function(t,r){void 0===r&&(r=!1),r?n.setId(t[0],1):n.setId(t[t.length-1],1)},r}(n.PathGeometryCursor)}));