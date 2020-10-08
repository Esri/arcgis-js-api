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

define(["require","exports"],(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.VisualElement=void 0;var i=function(){function t(t){this._attached=!1,this._visible=!0,this.view=t}return t.prototype.applyProps=function(t){var e=!1;for(var i in t)i in this?"attached"===i?e=t[i]:this[i]=t[i]:console.error("Cannot set unknown property",i);this.attached=e},t.prototype.destroy=function(){this.attached=!1},Object.defineProperty(t.prototype,"attached",{get:function(){return this._attached},set:function(t){t!==this._attached&&(this._attached=t,this._attached?this.createResources():this.destroyResources())},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return this._visible},set:function(t){t!==this._visible&&(this._visible=t,this.attached&&this.updateVisibility(t))},enumerable:!1,configurable:!0}),t}();e.VisualElement=i}));