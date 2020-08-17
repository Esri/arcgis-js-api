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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../config","../../request","../../core/promiseUtils","../../core/urlUtils"],(function(e,r,l,t,s,o,n){Object.defineProperty(r,"__esModule",{value:!0});var a=t.defaults&&t.defaults.io.corsEnabledServers||t.request.corsEnabledServers;function i(e){if(e){var r=n.getOrigin(e);n.canUseXhr(r)||-1!==a.indexOf(r)||a.push(r)}}function u(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var l=void 0,t=0;t<e.length;++t)if(n.isProtocolRelative(e[t])){if(l){var s=l.split("://")[0];l=s+":"+e[t].trim()}}else l=n.isAbsolute(e[t])?e[t]:n.join(l,e[t]);return l}function c(e,r,l){var t,a,p;if("string"==typeof r){var y=n.normalize(r);i(y);var v=n.urlToObject(y);t=s(v.path,{query:{f:"json"},responseType:"json"}),a=y,p=y}else t=o.resolve({data:r}),a=r.jsonUrl||null,p=l;return t.then((function(r){var l=r.data;return r.ssl&&(a&&(a=a.replace(/^http:/i,"https:")),p&&(p=p.replace(/^http:/i,"https:"))),f(l)?(e.styleUrl=a||null,function(e,r,l){var t=l?n.removeFile(l):n.appBaseUrl;e.styleBase=t,e.style=r,e.styleUrl&&i(e.styleUrl);if(!e.source){var s=function(e){if(e.esri)return e.esri;for(var r=0,l=Object.keys(e);r<l.length;r++){var t=l[r];if("vector"===e[t].type)return e[t]}return null}(r.sources);return s.url?c(e,u(t,s.url)):c(e,s,t)}return o.resolve()}(e,l,p)):f(l)?o.reject("You must specify the URL or the JSON for a service or for a style."):(e.sourceUrl=a||null,function(e,r,l){var t=l?n.removeTrailingSlash(l)+"/":n.appBaseUrl;e.sourceBase=t,e.source=r,e.validatedSource=function(e,r){if(e.hasOwnProperty("tileInfo"))return e;for(var l={xmin:-20037507.067161843,ymin:-20037507.067161843,xmax:20037507.067161843,ymax:20037507.067161843,spatialReference:{wkid:102100}},t=(l.xmax-l.xmin)/512,s=[],o=e.hasOwnProperty("minzoom")?parseFloat(e.minzoom):0,n=e.hasOwnProperty("maxzoom")?parseFloat(e.maxzoom):16,a=o;a<n;a++){var c=t/Math.pow(2,a),f=Math.floor(96*c*39.37007874015748);s.push({level:a,scale:f,resolution:c})}for(var p=0,y=e.tiles;p<y.length;p++){var v=y[p];i(u(r,v))}return{capabilities:"TilesOnly",initialExtent:l,fullExtent:l,minScale:s[0].scale,maxScale:s[s.length-1].scale,tiles:e.tiles,tileInfo:{rows:512,cols:512,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},lods:s,spatialReference:{wkid:102100}}}}(r,t),e.sourceUrl&&i(e.sourceUrl);if(!e.style)return null==r.defaultStyles?o.reject():"string"==typeof r.defaultStyles?c(e,u(t,r.defaultStyles,"root.json")):c(e,r.defaultStyles,u(t,"root.json"));return o.resolve()}(e,l,p))}))}function f(e){return!!e.sources}r.loadMetadata=function(e){var r={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null},l="string"==typeof e?[e,null]:[null,e.jsonUrl],t=l[0],s=l[1],o=t?n.urlToObject(t):null;return c(r,e,s).then((function(){var e={layerDefinition:r.validatedSource,url:t,parsedUrl:o,serviceUrl:r.sourceUrl,style:r.style,styleUrl:r.styleUrl,spriteUrl:r.style.sprite&&u(r.styleBase,r.style.sprite),glyphsUrl:r.style.glyphs&&u(r.styleBase,r.style.glyphs)};return i(e.spriteUrl),i(e.glyphsUrl),e}))}}));
