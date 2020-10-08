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

define(["require","exports","tslib"],(function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ReloadableShaderModule=void 0;var r=function(){function e(e,t){this._module=e,this._loadModule=t}return e.prototype.get=function(){return this._module},e.prototype.reload=function(){return o.__awaiter(this,void 0,void 0,(function(){var e;return o.__generator(this,(function(t){switch(t.label){case 0:return e=this,[4,this._loadModule()];case 1:return e._module=t.sent(),[2,this._module]}}))}))},e}();t.ReloadableShaderModule=r}));