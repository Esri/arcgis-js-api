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

define(["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DisplayIdGenerator=t.getDisplayIdIndex=t.getDisplayIdType=t.DISPLAY_ID_TYPE_AGGREGATE=t.DISPLAY_ID_TYPE_FEATURE=void 0;t.DISPLAY_ID_TYPE_FEATURE=0,t.DISPLAY_ID_TYPE_AGGREGATE=1,t.getDisplayIdType=function(e){return(2147483648&e)>>>31},t.getDisplayIdIndex=function(e){return 2147483647&e};var r=function(){function e(){this._freeIds=[],this._idCounter=1}return e.prototype.createId=function(e){return void 0===e&&(e=!1),function(e,t){return((t?2147483648:0)|e)>>>0}(this._getFreeId(),e)},e.prototype.releaseId=function(e){this._freeIds.push(e)},e.prototype._getFreeId=function(){return this._freeIds.length?this._freeIds.pop():this._idCounter++},e}();t.DisplayIdGenerator=r}));