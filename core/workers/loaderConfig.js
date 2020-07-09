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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../has","../urlUtils"],(function(e,a,s,n,t){function l(a){return t.removeQueryParameters(e.toUrl(a))}Object.defineProperty(a,"__esModule",{value:!0});var r,i=n("esri-built")?"dojo/dojo-lite.js":"dojo/dojo.js";a.DEFAULT_LOADER_URL=t.makeAbsolute(l(i)),a.DEFAULT_CONFIG={baseUrl:(r=l("dojo/x.js"),t.makeAbsolute(r.slice(0,r.length-5))),packages:[{name:"esri"},{name:"dojo"},{name:"dojox"},{name:"dstore"},{name:"moment",main:"moment"},{name:"@dojo"},{name:"cldrjs",main:"dist/cldr"},{name:"globalize",main:"dist/globalize"},{name:"maquette-css-transitions",main:"dist/maquette-css-transitions.umd"},{name:"maquette-jsx",main:"dist/maquette-jsx.umd"},{name:"tslib",main:"tslib"}],map:{globalize:{cldr:"cldrjs/dist/cldr","cldr/event":"cldrjs/dist/cldr/event","cldr/supplemental":"cldrjs/dist/cldr/supplemental","cldr/unresolved":"cldrjs/dist/cldr/unresolved"}}},a.default=function(e){var n={async:e.async,isDebug:e.isDebug,locale:e.locale,baseUrl:e.baseUrl,has:s.__assign({},e.has),map:s.__assign({},e.map),packages:e.packages&&e.packages.concat()||[],paths:s.__assign({},e.paths)};e.hasOwnProperty("async")||(n.async=!0),e.hasOwnProperty("isDebug")||(n.isDebug=!1),e.baseUrl||(n.baseUrl=a.DEFAULT_CONFIG.baseUrl),a.DEFAULT_CONFIG.packages.forEach((function(e){!function(e,a){for(var n=0,r=e;n<r.length;n++){if(r[n].name===a.name)return}var i=s.__assign({},a),o=l(i.name+"/x.js"),m=o.slice(0,o.length-5);i.location=t.makeAbsolute(m),e.push(i)}(n.packages,e)}));for(var r=n.map=n.map||{},i=0,o=Object.keys(a.DEFAULT_CONFIG.map);i<o.length;i++){var m=o[i];r[m]||(r[m]=a.DEFAULT_CONFIG.map[m])}return n}}));