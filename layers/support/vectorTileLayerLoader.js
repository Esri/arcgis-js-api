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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/has","dojo/_base/lang","../../core/promiseUtils","../../core/urlUtils","../../config","../../request"],function(e,r,t,l,n,s,i,o){function a(e){if(!e)return n.reject("invalid input URL!");var r={layerDefinition:null,parsedUrl:null,serviceUrl:null,style:null,styleUrl:null,url:null,spriteUrl:null,glyphsUrl:null};if("string"!=typeof e)return f(r,e,null).then(function(){return r});var t=r.url=s.normalize(e),i=r.parsedUrl=s.urlToObject(t);return u(t),o(i.path,{responseType:"json",query:l.mixin({f:"json"},i.query)}).then(function(e){return f(r,e.data,i)}).then(function(){return r})}function u(e){if(e){var r=s.getOrigin(e);return s.canUseXhr(r)||-1!==d.indexOf(r)||d.push(r),e}}function f(e,r,t){var l=null!=r.sources;if(l){t&&-1!==t.path.indexOf("root.json")&&(t.path=t.path.substr(0,t.path.indexOf("root.json")),e.styleUrl=t.path);var n=y(r,t),i=r.sprite,o=r.glyphs;if(n&&n.url){var a=t&&t.path?t.path:n.url;r.sprite&&!s.isAbsolute(r.sprite)&&(i=s.join(a,r.sprite)),r.glyphs&&!s.isAbsolute(r.glyphs)&&(o=s.join(a,r.glyphs))}return e.style=r,e.spriteUrl=i,e.glyphsUrl=o,c(e,r,t)}var u=r.hasOwnProperty("tileInfo");return u?(e.layerDefinition=r,e.serviceUrl=t.path,p(e,r,t)):void 0}function p(e,r,t){if(v&&!r.hasOwnProperty("defaultStyles"))throw new Error("Service definition must have 'defaultStyles' element!");var l=r.defaultStyles;return s.isAbsolute(l)?e.styleUrl=s.normalize(l):e.styleUrl=s.normalize(s.join(t.path,l)),u(e.styleUrl),o(s.join(e.styleUrl,"root.json"),{responseType:"json"}).then(function(r){var t=r.data.sprite,l=r.data.glyphs;return t&&!s.isAbsolute(t)&&(t=s.join(e.styleUrl,t)),l&&!s.isAbsolute(l)&&(l=s.join(e.styleUrl,l)),e.spriteUrl=t,e.glyphsUrl=l,e.style=r.data,r.data})}function c(e,r,t){var l=y(r,t);return l||n.reject("Source isn't available in the syle object!"),l.url?(e.serviceUrl=l.url,s.isAbsolute(e.serviceUrl)||(e.serviceUrl=s.join(t.path,e.serviceUrl)),u(e.serviceUrl),o(e.serviceUrl,{query:{f:"json"},responseType:"json"}).then(function(r){return e.layerDefinition=h(r.data),e})):(e.layerDefinition=h(l),n.resolve(e))}function y(e,r){if(!e.sources)return null;var t=e.sources,l=null;if(t.esri){if(l=t.esri,r&&l.url&&!s.isAbsolute(l.url)){var n=r.path.substring(0,r.path.lastIndexOf("/"));l.url=s.join(n,l.url)}}else{for(var i=Object.keys(t),o=0,a=i;o<a.length;o++){var u=a[o];if(-1!==u.toLocaleLowerCase().indexOf("street")&&"vector"===l.type){l=t[u];break}}if(!l)for(var f=0,p=Object.keys(t);f<p.length;f++){var u=p[f];if(l=t[u],"vector"===l.type)break}}return l}function h(e){var r=e.hasOwnProperty("tileInfo");if(r)return e;for(var t={xmin:-20037507.067161843,ymin:-20037507.067161843,xmax:20037507.067161843,ymax:20037507.067161843,spatialReference:{wkid:102100}},l=512,n=39.37007874015748,s=(t.xmax-t.xmin)/l,i=[],o=e.hasOwnProperty("minzoom")?parseFloat(e.minzoom):0,a=e.hasOwnProperty("maxzoom")?parseFloat(e.maxzoom):16,f=o;a>f;f++){var p=s/Math.pow(2,f),c=Math.floor(96*p*n);i.push({level:f,scale:c,resolution:p})}return e.tiles.forEach(u),{capabilities:"TilesOnly",initialExtent:t,fullExtent:t,minScale:i[0].scale,maxScale:i[i.length-1].scale,tiles:e.tiles,tileInfo:{rows:l,cols:l,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},lods:i,spatialReference:{wkid:102100}}}}var v=t("dojo-debug-messages"),d=i.defaults&&i.defaults.io.corsEnabledServers||i.request.corsEnabledServers;r.loadMetadata=a});