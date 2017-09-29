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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","dojo/has","dojo/_base/lang","../../core/promiseUtils","../../core/urlUtils","../../config","../../request"],function(e,r,l,t,n,i,s,o){function a(e){if(!e)return n.reject("invalid input URL!");var r={layerDefinition:null,parsedUrl:null,serviceUrl:null,style:null,styleUrl:null,url:null,spriteUrl:null,glyphsUrl:null};if("string"!=typeof e)return f(r,e,null).then(function(){return r});var l=r.url=i.normalize(e),s=r.parsedUrl=i.urlToObject(l);return u(l),o(s.path,{responseType:"json",query:t.mixin({f:"json"},s.query)}).then(function(e){return f(r,e.data,s)}).then(function(){return r})}function u(e){if(e){var r=i.getOrigin(e);return i.canUseXhr(r)||-1!==d.indexOf(r)||d.push(r),e}}function f(e,r,l){var t=null!=r.sources;if(t){l&&-1!==l.path.indexOf("root.json")&&(l.path=l.path.substr(0,l.path.indexOf("root.json")),e.styleUrl=l.path);var n=y(r,l),s=r.sprite||null,o=r.glyphs||null;if(n&&n.url){var a=l&&l.path?l.path:n.url;r.sprite&&!i.isAbsolute(r.sprite)&&(s=i.normalize(i.join(a,r.sprite))),r.glyphs&&!i.isAbsolute(r.glyphs)&&(o=i.normalize(i.join(a,r.glyphs)))}return e.style=r,e.spriteUrl=s,e.glyphsUrl=o,c(e,r,l)}var u=r.hasOwnProperty("tileInfo");return u?(e.layerDefinition=r,e.serviceUrl=l.path,p(e,r,l)):void 0}function p(e,r,l){if(v&&!r.hasOwnProperty("defaultStyles"))throw new Error("Service definition must have 'defaultStyles' element!");var t=r.defaultStyles;return i.isAbsolute(t)?e.styleUrl=i.normalize(t):e.styleUrl=i.normalize(i.join(l.path,t)),u(e.styleUrl),o(i.join(e.styleUrl,"root.json"),{responseType:"json"}).then(function(r){var l=r.data.sprite||null,t=r.data.glyphs||null;return l&&!i.isAbsolute(l)&&(l=i.normalize(i.join(e.styleUrl,l))),t&&!i.isAbsolute(t)&&(t=i.normalize(i.join(e.styleUrl,t))),e.spriteUrl=l,e.glyphsUrl=t,e.style=r.data,r.data})}function c(e,r,l){var t=y(r,l);return t||n.reject("Source isn't available in the syle object!"),t.url?(e.serviceUrl=t.url,i.isAbsolute(e.serviceUrl)||(e.serviceUrl=i.join(l.path,e.serviceUrl)),u(e.serviceUrl),o(e.serviceUrl,{query:{f:"json"},responseType:"json"}).then(function(r){return e.layerDefinition=h(r.data),e})):(e.layerDefinition=h(t),n.resolve(e))}function y(e,r){if(!e.sources)return null;var l=e.sources,t=null;if(l.esri){if(t=l.esri,r&&t.url&&!i.isAbsolute(t.url)){var n=r.path.substring(0,r.path.lastIndexOf("/"));t.url=i.join(n,t.url)}}else{for(var s=Object.keys(l),o=0,a=s;o<a.length;o++){var u=a[o];if(-1!==u.toLocaleLowerCase().indexOf("street")&&"vector"===t.type){t=l[u];break}}if(!t)for(var f=0,p=Object.keys(l);f<p.length;f++){var u=p[f];if(t=l[u],"vector"===t.type)break}}return t}function h(e){var r=e.hasOwnProperty("tileInfo");if(r)return e;for(var l={xmin:-20037507.067161843,ymin:-20037507.067161843,xmax:20037507.067161843,ymax:20037507.067161843,spatialReference:{wkid:102100}},t=512,n=39.37007874015748,i=(l.xmax-l.xmin)/t,s=[],o=e.hasOwnProperty("minzoom")?parseFloat(e.minzoom):0,a=e.hasOwnProperty("maxzoom")?parseFloat(e.maxzoom):16,f=o;a>f;f++){var p=i/Math.pow(2,f),c=Math.floor(96*p*n);s.push({level:f,scale:c,resolution:p})}return e.tiles.forEach(u),{capabilities:"TilesOnly",initialExtent:l,fullExtent:l,minScale:s[0].scale,maxScale:s[s.length-1].scale,tiles:e.tiles,tileInfo:{rows:t,cols:t,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},lods:s,spatialReference:{wkid:102100}}}}Object.defineProperty(r,"__esModule",{value:!0});var v=l("dojo-debug-messages"),d=s.defaults&&s.defaults.io.corsEnabledServers||s.request.corsEnabledServers;r.loadMetadata=a});