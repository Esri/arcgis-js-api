// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../portal/PortalQueryParams","../../../symbols/support/jsonUtils","./SymbolSources"],function(e,t,r,n,u){function o(e){return i(e).then(function(e){return e.map(function(e){return new u.SymbolSetSymbolSource({portalItem:e})})})}function i(e){return m({portal:e,queries:{group:e.symbolSetsGroupQuery,item:'type:"Symbol Set" AND (typekeywords:"by value" AND typekeywords:"marker")'}}).then(a)}function s(e){return l(e).then(function(e){return e.map(function(e){return new u.WebStyleSymbolSource({portalItem:e})})})}function l(e){return m({portal:e,queries:{group:e.stylesGroupQuery,item:'type:"Style"'}}).then(a)}function y(e){return e.map(function(e){return n.fromJSON(e)})}function c(e){return"flat"===e?new u.IconPrimitiveWebStyleSource:new u.ObjectPrimitiveWebStyleSource}function f(){return new u.BasicSymbolSetSource}function m(e){var t=e.portal,n=e.queries.group,u=e.queries.item;return t.queryGroups({query:n,disableExtraQuery:!0}).then(function(e){return e.results[0].queryItems(new r({query:u,disableExtraQuery:!0,num:20,sortField:"title"})).then(function(e){return e.results})})}function S(e,t){return e.typeKeywords.indexOf(t)>-1}function a(e){var t=[];return e.forEach(function(e){S(e,"default")?t.unshift(e):t.push(e)}),t}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchSymbolSetSymbolSources=o,t.fetchWebStyleSymbolSources=s,t.symbolsFromJson=y,t.getPrimitives=c,t.getBasic=f});