// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","exports","dojo/has","dojo/_base/lang","../../config","../../request","../../core/promiseUtils","../../core/urlUtils"],function(e,r,l,t,n,s,i,o){function a(e){if(!e)return i.reject("invalid input URL!");var r={layerDefinition:null,parsedUrl:null,serviceUrl:null,style:null,styleUrl:null,url:null,spriteUrl:null,glyphsUrl:null};if("string"!=typeof e)return f(r,e).then(function(){return r});var l=r.url=o.normalize(e),n=r.parsedUrl=o.urlToObject(l);return u(l),s(n.path,{responseType:"json",query:t.mixin({f:"json"},n.query)}).then(function(e){return f(r,e.data)}).then(function(){return r})}function u(e){if(e){var r=o.getOrigin(e);return o.canUseXhr(r)||-1!==h.indexOf(r)||h.push(r),e}}function f(e,r){var l=e.parsedUrl;if(null!=r.sources){var t=null;if(l&&(t=l.path.substring(0,l.path.lastIndexOf("/")),e.styleUrl=l.path),!t){var n=y(r,l);t=n&&n.url}r.jsonUrl&&(e.styleUrl=r.jsonUrl);var s=r.sprite||null,i=r.glyphs||null;return t&&(s&&!o.isAbsolute(s)&&(s=o.normalize(o.join(t,s))),i&&!o.isAbsolute(i)&&(i=o.normalize(o.join(t,i)))),e.style=r,e.spriteUrl=s,e.glyphsUrl=i,p(e,r)}if(r.hasOwnProperty("tileInfo"))return e.layerDefinition=r,e.serviceUrl=l.path,c(e,r)}function c(e,r){var l=e.parsedUrl;if(d&&!r.hasOwnProperty("defaultStyles"))throw new Error("Service definition must have 'defaultStyles' element!");var t=r.defaultStyles;return o.isAbsolute(t)?e.styleUrl=o.normalize(t):e.styleUrl=o.normalize(o.join(l.path,t,"root.json")),u(e.styleUrl),s(e.styleUrl,{responseType:"json"}).then(function(r){var l=r.data.sprite||null,t=r.data.glyphs||null,n=o.removeFile(e.styleUrl);return l&&!o.isAbsolute(l)&&(l=o.normalize(o.join(n,l))),t&&!o.isAbsolute(t)&&(t=o.normalize(o.join(n,t))),e.spriteUrl=l,e.glyphsUrl=t,e.style=r.data,r.data})}function p(e,r){var l=e.parsedUrl,t=y(r,l);return t||i.reject("Source isn't available in the style object!"),t.url?(e.serviceUrl=t.url,o.isAbsolute(e.serviceUrl)||(e.serviceUrl=o.join(l.path,e.serviceUrl)),u(e.serviceUrl),s(e.serviceUrl,{query:{f:"json"},responseType:"json"}).then(function(r){return e.layerDefinition=v(r.data),e})):(e.layerDefinition=v(t),i.resolve(e))}function y(e,r){if(!e.sources)return null;var l=e.sources,t=null;if(l.esri){if(t=l.esri,r&&t.url&&!o.isAbsolute(t.url)){var n=r.path.substring(0,r.path.lastIndexOf("/"));t.url=o.join(n,t.url)}}else{for(var s=Object.keys(l),i=0,a=s;i<a.length;i++){var u=a[i];if(-1!==u.toLocaleLowerCase().indexOf("street")&&"vector"===t.type){t=l[u];break}}if(!t)for(var f=0,c=Object.keys(l);f<c.length;f++){var u=c[f];if(t=l[u],"vector"===t.type)break}}return t}function v(e){if(e.hasOwnProperty("tileInfo"))return e;for(var r={xmin:-20037507.067161843,ymin:-20037507.067161843,xmax:20037507.067161843,ymax:20037507.067161843,spatialReference:{wkid:102100}},l=(r.xmax-r.xmin)/512,t=[],n=e.hasOwnProperty("minzoom")?parseFloat(e.minzoom):0,s=e.hasOwnProperty("maxzoom")?parseFloat(e.maxzoom):16,i=n;i<s;i++){var o=l/Math.pow(2,i),a=Math.floor(96*o*39.37007874015748);t.push({level:i,scale:a,resolution:o})}return e.tiles.forEach(u),{capabilities:"TilesOnly",initialExtent:r,fullExtent:r,minScale:t[0].scale,maxScale:t[t.length-1].scale,tiles:e.tiles,tileInfo:{rows:512,cols:512,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},lods:t,spatialReference:{wkid:102100}}}}Object.defineProperty(r,"__esModule",{value:!0});var d=l("dojo-debug-messages"),h=n.defaults&&n.defaults.io.corsEnabledServers||n.request.corsEnabledServers;r.loadMetadata=a});