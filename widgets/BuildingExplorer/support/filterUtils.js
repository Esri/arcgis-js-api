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

define(["require","exports","../../../core/maybe","../../../core/uuid","../../../layers/support/BuildingFilterBlock","../../../layers/support/BuildingFilterModeSolid","../../../layers/support/BuildingFilterModeXRay"],(function(e,r,t,i,n,l,o){Object.defineProperty(r,"__esModule",{value:!0});function u(e){var r="string"==typeof e?e:e.id;return!!r&&-1!==r.indexOf("__BUILDING_EXPLORER_FILTER__")}function f(e){return e.filter((function(e){return!!e})).map((function(e){return"("+e+")"})).join(" AND ")}r.generateFilterId=function(){return i.generateUUID()+"__BUILDING_EXPLORER_FILTER__"},r.isBuildingExplorerFilter=u,r.getValueFromFilters=function(e,r){for(var i=0,n=e.items;i<n.length;i++)for(var l=0,o=n[i].filters.items;l<o.length;l++){var f=o[l];if(u(f)){var s=r(f);if(t.isSome(s))return s}}return null},r.setFilterOnLayers=function(e,r){t.isNone(r)||e.forEach((function(e){e.filters=e.filters.filter((function(e){return!u(e)})).concat([r]),e.activeFilterId=r.id}))},r.getFilterBlockXRay=function(e){var r=f(e);return r?new n({filterExpression:r,filterMode:new o}):null},r.getFilterBlockSolid=function(e){var r=f(e);return r?new n({filterExpression:r,filterMode:new l}):null}}));