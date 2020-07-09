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

define(["require","exports","tslib","../CIMCursor","../CurveHelper"],(function(t,e,n,i,r){Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){}return t.local=function(){return null===t.instance&&(t.instance=new t),t.instance},t.prototype.execute=function(t,e,n){return new s(t,e,n)},t.instance=null,t}();e.EffectJog=o;var s=function(t){function e(e,n,i){var o=t.call(this,e,!1,!0)||this;return o._curveHelper=new r.CurveHelper,o._length=(void 0!==n.length?n.length:20)*i,o._angle=void 0!==n.angle?n.angle:225,o._position=void 0!==n.position?n.position:50,o._length<0&&(o._length=-o._length),o._position<20&&(o._position=20),o._position>80&&(o._position=80),o._mirror=!1,o}return n.__extends(e,t),e.prototype.processPath=function(t){if(this._curveHelper.isEmpty(t,!1))return null;var e=t[0],n=t[t.length-1],i=[n[0]-e[0],n[1]-e[1]];this._curveHelper.normalize(i);var r=[e[0]+(n[0]-e[0])*this._position/100,e[1]+(n[1]-e[1])*this._position/100],o=Math.cos((90-this._angle)/180*Math.PI),s=Math.sin((90-this._angle)/180*Math.PI);return this._mirror&&(s=-s),this._mirror=!this._mirror,{paths:[[e,[r[0]-this._length/2*o,r[1]-this._length/2*s],[r[0]+this._length/2*o,r[1]+this._length/2*s],n]]}},e}(i.PathGeometryCursor)}));