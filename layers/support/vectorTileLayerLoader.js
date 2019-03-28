// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../config","../../request","../../core/promiseUtils","../../core/urlUtils","../../views/vectorTiles/style/VectorTileSource"],function(e,r,l,t,s,o,n,u){function a(e){var r={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:""},l="string"==typeof e?[e,null]:[null,e.jsonUrl],t=l[0],s=l[1],o=t?n.urlToObject(t):null;return f(r,"esri",e,s).then(function(){var e={layerDefinition:r.validatedSource,url:t,parsedUrl:o,serviceUrl:r.sourceUrl,style:r.style,styleUrl:r.styleUrl,spriteUrl:r.style.sprite&&c(r.styleBase,r.style.sprite),glyphsUrl:r.style.glyphs&&c(r.styleBase,r.style.glyphs),sourceNameToSource:r.sourceNameToSource,primarySourceName:r.primarySourceName};return i(e.spriteUrl),i(e.glyphsUrl),e})}function i(e){if(e){var r=n.getOrigin(e);d&&-1===d.indexOf(r)&&d.push(r)}}function c(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var l=void 0,t=0;t<e.length;++t)if(n.isProtocolRelative(e[t])){if(l){var s=l.split("://")[0];l=s+":"+e[t].trim()}}else l=n.isAbsolute(e[t])?e[t]:n.join(l,e[t]);return l}function f(e,r,l,t){var u,a,c;if("string"==typeof l){var f=n.normalize(l);i(f);var h=n.urlToObject(f);u=s(h.path,{query:{f:"json"},responseType:"json"}),a=f,c=f}else u=o.resolve({data:l}),a=l.jsonUrl||null,c=t;return u.then(function(l){var t=l.data;return l.ssl&&(a&&(a=a.replace(/^http:/i,"https:")),c&&(c=c.replace(/^http:/i,"https:"))),p(t)?(e.styleUrl=a||null,m(e,t,c)):y(t)?e.sourceUrl?v(e,t,c,!1,r):(e.sourceUrl=a||null,v(e,t,c,!0,r)):o.reject("You must specify the URL or the JSON for a service or for a style.")})}function p(e){return!!e.sources}function y(e){return!p(e)}function m(e,r,l){var t=l?n.removeFile(l):n.appBaseUrl;if(e.styleBase=t,e.style=r,e.styleUrl&&i(e.styleUrl),!e.source){var s=[],u=null;if(r.sources.esri){var a=r.sources.esri;a.url?u=f(e,"esri",c(t,a.url)):s.push(f(e,"esri",a,t))}return null===u&&(u=o.resolve()),u.then(function(){for(var l=0,n=Object.keys(r.sources);l<n.length;l++){var u=n[l];"esri"!==u&&"vector"===r.sources[u].type&&(r.sources[u].url?s.push(f(e,u,c(t,r.sources[u].url))):s.push(f(e,u,r.sources[u],t)))}return o.eachAlways(s).then(function(){})})}return o.resolve()}function v(e,r,l,t,s){var a=l?n.removeTrailingSlash(l)+"/":n.appBaseUrl,p=h(r,a),y=new u(s,a,p);if(!t&&e.primarySourceName in e.sourceNameToSource){var m=e.sourceNameToSource[e.primarySourceName];if(!m.isCompatibleWith(y))return o.resolve();m.fullExtent.union(y.fullExtent),m.tileInfo.lods.length<y.tileInfo.lods.length&&(m.tileInfo=y.tileInfo)}return t?(e.sourceBase=a,e.source=r,e.validatedSource=p,e.primarySourceName=s,e.sourceUrl&&i(e.sourceUrl)):i(a),e.sourceNameToSource[s]=y,e.style?o.resolve():null==r.defaultStyles?o.reject():"string"==typeof r.defaultStyles?f(e,"",c(a,r.defaultStyles,"root.json")):f(e,"",r.defaultStyles,c(a,"root.json"))}function h(e,r){if(e.hasOwnProperty("tileInfo"))return e;for(var l={xmin:-20037507.067161843,ymin:-20037507.067161843,xmax:20037507.067161843,ymax:20037507.067161843,spatialReference:{wkid:102100}},t=(l.xmax-l.xmin)/512,s=[],o=e.hasOwnProperty("minzoom")?parseFloat(e.minzoom):0,n=e.hasOwnProperty("maxzoom")?parseFloat(e.maxzoom):16,u=o;u<n;u++){var a=t/Math.pow(2,u),f=Math.floor(96*a*39.37007874015748);s.push({level:u,scale:f,resolution:a})}for(var p=0,y=e.tiles;p<y.length;p++){i(c(r,y[p]))}return{capabilities:"TilesOnly",initialExtent:l,fullExtent:l,minScale:s[0].scale,maxScale:s[s.length-1].scale,tiles:e.tiles,tileInfo:{rows:512,cols:512,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},lods:s,spatialReference:{wkid:102100}}}}Object.defineProperty(r,"__esModule",{value:!0});var d=t.defaults&&t.defaults.io.corsEnabledServers;r.loadMetadata=a});