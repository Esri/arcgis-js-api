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

define(["require","exports","tslib","../request","./utils","../tasks/operations/find","../tasks/support/FindParameters","../tasks/support/FindResult"],(function(t,s,r,e,n,i,a,u){"use strict";function o(t){var s=t.data;s.results=s.results||[];var r={results:[]};return r.results=s.results.map((function(t){return u.fromJSON(t)})),r}Object.defineProperty(s,"__esModule",{value:!0}),s.find=void 0,s.find=function(t,s,u){return r.__awaiter(this,void 0,void 0,(function(){var d,f,l,p;return r.__generator(this,(function(_){return s=a.from(s),d=i.findToFindRESTParameters(s),(f=n.parseUrl(t)).path+="/find",l=n.encode(r.__assign(r.__assign(r.__assign({},f.query),{f:"json"}),d)),p=n.asValidOptions(l,u),[2,e(f.path,p).then(o)]}))}))}}));