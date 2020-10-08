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

define(["require","exports","tslib","../request","../core/maybe","../geometry/support/normalizeUtils","./utils","../tasks/support/ImageServiceIdentifyResult"],(function(e,t,r,i,n,o,s,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageServiceIdentify=void 0,t.imageServiceIdentify=function(e,t,u){return r.__awaiter(this,void 0,void 0,(function(){var f,d;return r.__generator(this,(function(c){return f=s.parseUrl(e),d=t.geometry?[t.geometry]:[],[2,o.normalizeCentralMeridian(d).then((function(e){var o=t.toJSON(),a=e&&e[0];n.isSome(a)&&(o.geometry=JSON.stringify(a.toJSON()));var d=s.encode(r.__assign(r.__assign(r.__assign({},f.query),{f:"json"}),o)),c=s.asValidOptions(d,u);return i(f.path+"/identify",c)})).then((function(e){return a.fromJSON(e.data)}))]}))}))}}));