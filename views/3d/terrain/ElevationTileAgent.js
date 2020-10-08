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

define(["require","exports","tslib","./TerrainConst","./TileAgent"],(function(e,t,n,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._scaleRangeEnabled=!1,t}return n.__extends(t,e),Object.defineProperty(t.prototype,"_desiredMinLevelDelta",{get:function(){return r.ELEVATION_DESIRED_RESOLUTION_LEVEL-(this.tile.vlevel-this.tile.lij[0])},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_loadingLevelDelta",{get:function(){return 0},enumerable:!1,configurable:!0}),t}(i.TileAgent);t.default=l}));