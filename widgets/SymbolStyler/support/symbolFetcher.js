// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","./SymbolSources","../../../portal/PortalQueryParams","../../../symbols/support/jsonUtils"],function(e,t,r,n,u){function o(e){return i(e).then(function(e){return e.map(function(e){return new r.SymbolSetSymbolSource({portalItem:e})})})}function i(e){return m({portal:e,queries:{group:e.symbolSetsGroupQuery,item:'type:"Symbol Set" AND (typekeywords:"by value" AND typekeywords:"marker")'}}).then(a)}function s(e){return l(e).then(function(e){return e.map(function(e){return new r.WebStyleSymbolSource({portalItem:e})})})}function l(e){return m({portal:e,queries:{group:e.stylesGroupQuery,item:'type:"Style"'}}).then(a)}function y(e){return e.map(function(e){return u.fromJSON(e)})}function c(e){return"flat"===e?new r.IconPrimitiveWebStyleSource:new r.ObjectPrimitiveWebStyleSource}function f(){return new r.BasicSymbolSetSource}function m(e){var t=e.portal,r=e.queries.group,u=e.queries.item,o=20;return t.queryGroups({query:r,disableExtraQuery:!0}).then(function(e){return e.results[0].queryItems(new n({query:u,disableExtraQuery:!0,num:o,sortField:"title"})).then(function(e){return e.results})})}function S(e,t){return e.typeKeywords.indexOf(t)>-1}function a(e){var t=[];return e.forEach(function(e){S(e,"default")?t.unshift(e):t.push(e)}),t}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchSymbolSetSymbolSources=o,t.fetchWebStyleSymbolSources=s,t.symbolsFromJson=y,t.getPrimitives=c,t.getBasic=f});