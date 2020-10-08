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

define(["require","exports","../../../core/lang","../../../geometry/support/jsonUtils","../CIMCursor"],(function(e,t,n,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EffectReverse=void 0;var o=function(){function e(){}return e.local=function(){return null===e.instance&&(e.instance=new e),e.instance},e.prototype.execute=function(e,t,n){return new s(e,t,n)},e.instance=null,e}();t.EffectReverse=o;var s=function(){function e(e,t,n){this._inputGeometries=e,this._reverse=void 0===t.reverse||t.reverse}return e.prototype.next=function(){for(var e=this._inputGeometries.next();e;){if(!this._reverse)return e;if(r.isPolyline(e)){var t=n.clone(e);return i.reverseMultipath(t.paths),t}e=this._inputGeometries.next()}return null},e}()}));