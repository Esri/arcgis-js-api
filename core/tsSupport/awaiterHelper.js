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

define(["../Logger","../deprecate"],(function(e,r){return r.deprecated(e.getLogger("esri.core.tsSupport.awaiterHelper"),"helpers from esri.core.tsSupport are no longer required",{replacement:"use helpers from TSLib by enabling the TypeScript compiler importHelpers option",version:"4.16",see:"https://github.com/Microsoft/tslib#readme"}),function(e,r,t,n){return new(t||(t=Promise))((function(o,i){function c(e){try{u(n.next(e))}catch(e){i(e)}}function p(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(c,p)}u((n=n.apply(e,r||[])).next())}))}}));