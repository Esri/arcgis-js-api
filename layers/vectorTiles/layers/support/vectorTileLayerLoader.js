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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["require","exports","dojo/has","dojo/_base/lang","../../core/promiseUtils","../../core/urlUtils","../../request"],function(e,r,t,n,l,a,s){function i(e){if(!e)return l.reject("invalid input URL!");if("string"!=typeof e){var r=p(e);if(r&&r.hasOwnProperty("url")){var t=a.join(r.url,"/resources/styles");e.hasOwnProperty("sprite")&&!a.isAbsolute(e.sprite)&&(e.sprite=a.join(t,e.sprite)),e.hasOwnProperty("glyphs")&&!a.isAbsolute(e.glyphs)&&(e.glyphs=a.join(t,e.glyphs))}}var i={layerDefinition:null,parsedUrl:null,serviceUrl:null,style:null,styleUrl:null,url:null};if("string"==typeof e){var u=i.url=a.normalize(e),f=i.parsedUrl=a.urlToObject(u);return s(f.path,{callbackParamName:"callback",responseType:"json",query:n.mixin({f:"json"},f.query)}).then(function(e){return o(i,e.data,f)}).then(function(){return i})}return o(i,e,null).then(function(){return i})}function o(e,r,t){var n=r.hasOwnProperty("tileInfo");if(n)return e.layerDefinition=r,e.serviceUrl=t.path,u(e,r,t);if(t)-1!==t.path.indexOf("root.json")&&(t.path=t.path.substr(0,t.path.indexOf("root.json")));else{var l=r.sprite;l=l.substr(0,l.indexOf("sprites/sprite"))+"styles/",e.url=a.normalize(l),t=e.parsedUrl=a.urlToObject(e.url)}return e.styleUrl=t.path,e.style=r,f(e,r,t)}function u(e,r,t){if(y&&!r.hasOwnProperty("defaultStyles"))throw new Error("Service definition must have 'defaultStyles' element!");var n=r.defaultStyles;return e.styleUrl=a.normalize(a.join(t.path,n)),s(a.join(e.styleUrl,"root.json"),{callbackParamName:"callback",responseType:"json"}).then(function(r){return e.style=r.data,r.data})}function f(e,r,t){var n=p(r);return n||l.reject("Source isn't available in the syle object!"),n.hasOwnProperty("url")?(e.serviceUrl=n.url,a.isAbsolute(e.serviceUrl)||(e.serviceUrl=a.join(t.path,e.serviceUrl)),s(e.serviceUrl,{query:{f:"json"},callbackParamName:"callback",responseType:"json"}).then(function(r){return e.layerDefinition=c(r.data),e})):(e.layerDefinition=c(n),l.resolve(e))}function p(e){if(!e.hasOwnProperty("sources"))return null;var r=e.sources,t=null;if(r.hasOwnProperty("esri"))t=r.esri;else{for(var n=Object.keys(r),l=0,a=n;l<a.length;l++){var s=a[l];if(-1!==s.toLocaleLowerCase().indexOf("street")&&"vector"===t.type){t=r[s];break}}if(!t)for(var i=0,o=Object.keys(r);i<o.length;i++){var s=o[i];if(t=r[s],"vector"===t.type)break}}return t}function c(e){var r;if(r=e.hasOwnProperty("fullExtent")?{xmin:-20037507.0671618,ymin:-19971868.8804086,xmax:20037507.0671618,ymax:19971868.8804086,spatialReference:{wkid:102100}}:e.fullExtent,!e.hasOwnProperty("tileInfo")){for(var t=512,n=39.37007874015748,l=this.fullExtent.width/t,a=[],s=e.hasOwnProperty("minzoom")?parseFloat(e.minzoom):0,i=e.hasOwnProperty("maxzoom")?parseFloat(e.maxzoom):16,o=s;i>o;o++){var u=l/Math.pow(2,o),f=Math.floor(96*u*n);a.push({level:o,scale:f,resolution:u})}var p={x:this.fullExtent.xmin,y:this.fullExtent.ymax,spatialReference:{wkid:102100}};e.tileInfo={rows:t,cols:t,dpi:96,format:"pbf",origin:p,lods:a,spatialReference:{wkid:102100}}}if(e.hasOwnProperty("capabilities")||(e.capabilities="TilesOnly"),y&&!e.hasOwnProperty("tiles"))throw new Error("Cannot find element tiles!");return e}var y=t("dojo-debug-messages");r.loadMetadata=i});