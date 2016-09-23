// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","dojo/has","dojo/_base/lang","../../symbols/support/jsonUtils","../../core/urlUtils","../../core/promiseUtils","../../core/Error","../../request","../../portal/Portal","../../portal/PortalQueryParams"],function(e,t,r,n,l,s,a,o,u,i,y){function m(e,t){e=s.normalize(s.makeAbsolute(e,t));var r=e.lastIndexOf("/");return-1===r?{url:e,base:e,filename:null}:{url:e,base:e.slice(0,r),filename:e.slice(r+1)}}function f(e,t){h(e,function(e){return m(e,t).url})}function c(e,t){var r=e;r.symbolLayers&&r.symbolLayers.forEach(t)}function h(e,t){c(e,function(e){var r=e.resource;r&&r.href&&(r.href=t(r.href))})}function b(e){h(e,function(e){return/\.svg$/.test(e)?(e.slice(0,e.length-4)+".png").replace("/resource/","/resource/png/"):e})}function d(e,t){return e=n.clone(e),f(e,t),(r("ie")||r("trident"))&&b(e),l.fromJSON(e)}function p(e,t){var r=m(e,t&&t.url&&t.url.path);return N(r.url).then(function(e){return{data:e.data,base:r.base,filename:r.filename}})}function v(e,t){var r=this,n=t.portal||new i,l=n.url+" - "+e;return x[l]?a.resolve(x[l]):g(e,n).then(function(e){return e.fetchData()}).then(function(e){var t={data:e,base:r.itemUrl,filename:"data"};return x[l]=t,t})}function g(e,t){return t.load().then(function(){if(!t.stylesGroupQuery)throw new o("layer-templates:styles-group-query-missing","The styles group query needs to be configured in the portal to query styles");var e=new y({disableExtraQuery:!0,query:t.stylesGroupQuery});return t.queryGroups(e)}).then(function(t){var r=t.results;if(!r||!Array.isArray(r)||0===r.length)throw new o("layer-templates:styles-missing","The styles group does not contain any styles");var n=r[0],l=new y({disableExtraQuery:!0,query:'typekeywords:"'+e+'"'});return n.queryItems(l)}).then(function(t){var r=t.results;if(!r||!Array.isArray(r)||0===r.length)throw new o("layer-templates:style-missing","The style '${styleName}' is not part of the styles group",{styleName:e});return r[0].load()})}function w(e,t){return e.styleUrl?p(e.styleUrl,t):e.styleName?v(e.styleName,t):a.reject(new o("layer-templates:style-url-and-name-missing","Either styleUrl or styleName is required in layerDefinition"))}function S(e,t){return e.name?w(e,t).then(function(t){return j(t,e.name)}):a.reject(new o("layer-templates:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function j(e,t){for(var r=e.data,n=function(n){if(r.items[n].name===t){var l=m(r.items[n].webRef,e.base);return{value:N(l.url).then(function(e){return d(e.data,l.base)})}}},l=0;l<r.items.length;l++){var s=n(l);if("object"==typeof s)return s.value}return a.reject(new o("layer-templates:symbol-name-not-found","The symbol name '${symbolName}' could not be found",{symbolName:t}))}function q(e){var t=e.data;if(!t.symbolSetUrl)return a.reject(new o("layer-templates:symbol-set-url-missing","Style does not provide symbol set url",{style:t}));var r=m(t.symbolSetUrl,e.base);return N(r.url).then(function(e){var n=e.data;if(0===n.length||!n[0].name)throw new o("layer-templates:symbol-set-missing-data","Invalid syntax or missing data in symbol set",{style:t});for(var l={},s=0;s<n.length;s++){var a=d(n[s],r.base);l[n[s].name]=a,n[s].name===t.defaultItem&&(l.defaultSymbol=a)}return l.defaultSymbol||(l.defaultSymbol=l[n[0].name]),l})}function U(e,t){return e?d(e,t&&t.url&&t.url.path):null}function N(e){var t={responseType:"json"};return/\.json$/.test(e)||(t.query={f:"json"}),u(s.normalize(e),t)}t.fetchStyleFromUrl=p;var x={};t.fetchStyle=w,t.fetchStyleSymbol=S,t.fetchSymbolFromStyle=j,t.fetchSymbolSet=q,t.createSymbol=U});