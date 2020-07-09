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

define(["require","exports","tslib","../CIMCursor","../CurveHelper"],(function(e,t,u,r,n){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){}return e.local=function(){return null===e.instance&&(e.instance=new e),e.instance},e.prototype.execute=function(e,t,u){return new s(e,t,u)},e.instance=null,e}();t.EffectCut=i;var s=function(e){function t(t,u,r){var i=e.call(this,t,!0,!0)||this;return i._curveHelper=new n.CurveHelper,i._beginCut=(void 0!==u.beginCut?u.beginCut:1)*r,i._endCut=(void 0!==u.endCut?u.endCut:1)*r,i._middleCut=(void 0!==u.middleCut?u.middleCut:0)*r,i._invert=void 0!==u.invert&&u.invert,i._beginCut<0&&(i._beginCut=0),i._endCut<0&&(i._endCut=0),i._middleCut<0&&(i._middleCut=0),i}return u.__extends(t,e),t.prototype.processPath=function(e){var t=this._beginCut,u=this._endCut,r=this._middleCut,n=this._curveHelper.calculatePathLength(e),i=[];if(this._invert)if(0===t&&0===u&&0===r);else if(t+u+r>=n)i.push(e);else{(s=this._curveHelper.getSubCurve(e,0,t))&&i.push(s),(s=this._curveHelper.getSubCurve(e,.5*(n-r),.5*(n+r)))&&i.push(s),(s=this._curveHelper.getSubCurve(e,n-u,u))&&i.push(s)}else if(0===t&&0===u&&0===r)i.push(e);else if(t+u+r>=n);else if(0===r){(s=this._curveHelper.getSubCurve(e,t,n-u))&&i.push(s)}else{var s;(s=this._curveHelper.getSubCurve(e,t,.5*(n-r)))&&i.push(s),(s=this._curveHelper.getSubCurve(e,.5*(n+r),n-u))&&i.push(s)}return 0===i.length?null:{paths:i}},t}(r.PathGeometryCursor)}));