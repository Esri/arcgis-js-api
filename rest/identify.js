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

define(["require","exports","tslib","../request","../geometry/support/normalizeUtils","./utils","../tasks/operations/identify","../tasks/support/IdentifyParameters","../tasks/support/IdentifyResult"],(function(e,t,r,n,i,s,o,a,u){"use strict";function f(e){var t=e.data;t.results=t.results||[];var r={results:[]};return r.results=t.results.map((function(e){return u.fromJSON(e)})),r}Object.defineProperty(t,"__esModule",{value:!0}),t.identify=void 0,t.identify=function(e,t,u){return r.__awaiter(this,void 0,void 0,(function(){var d,l;return r.__generator(this,(function(p){return t=function(e){return e=a.from(e)}(t),d=t.geometry?[t.geometry]:[],(l=s.parseUrl(e)).path+="/identify",[2,i.normalizeCentralMeridian(d).then((function(e){var i=o.identifyToIdentifyRESTParameters(t,{geometry:e&&e[0]}),a=s.encode(r.__assign(r.__assign(r.__assign({},l.query),{f:"json"}),i)),d=s.asValidOptions(a,u);return n(l.path,d).then(f)}))]}))}))}}));