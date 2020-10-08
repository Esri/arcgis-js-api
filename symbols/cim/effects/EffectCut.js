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

define(["require","exports","tslib","../CIMCursor","../CurveHelper"],(function(e,t,u,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EffectCut=void 0;var n=function(){function e(){}return e.local=function(){return null===e.instance&&(e.instance=new e),e.instance},e.prototype.execute=function(e,t,u){return new s(e,t,u)},e.instance=null,e}();t.EffectCut=n;var s=function(e){function t(t,u,r){var n=e.call(this,t,!0,!0)||this;return n._curveHelper=new i.CurveHelper,n._beginCut=(void 0!==u.beginCut?u.beginCut:1)*r,n._endCut=(void 0!==u.endCut?u.endCut:1)*r,n._middleCut=(void 0!==u.middleCut?u.middleCut:0)*r,n._invert=void 0!==u.invert&&u.invert,n._beginCut<0&&(n._beginCut=0),n._endCut<0&&(n._endCut=0),n._middleCut<0&&(n._middleCut=0),n}return u.__extends(t,e),t.prototype.processPath=function(e){var t=this._beginCut,u=this._endCut,r=this._middleCut,i=this._curveHelper.calculatePathLength(e),n=[];if(this._invert)if(0===t&&0===u&&0===r);else if(t+u+r>=i)n.push(e);else{(s=this._curveHelper.getSubCurve(e,0,t))&&n.push(s),(s=this._curveHelper.getSubCurve(e,.5*(i-r),.5*(i+r)))&&n.push(s),(s=this._curveHelper.getSubCurve(e,i-u,u))&&n.push(s)}else if(0===t&&0===u&&0===r)n.push(e);else if(t+u+r>=i);else if(0===r){(s=this._curveHelper.getSubCurve(e,t,i-u))&&n.push(s)}else{var s;(s=this._curveHelper.getSubCurve(e,t,.5*(i-r)))&&n.push(s),(s=this._curveHelper.getSubCurve(e,.5*(i+r),i-u))&&n.push(s)}return 0===n.length?null:{paths:n}},t}(r.PathGeometryCursor)}));