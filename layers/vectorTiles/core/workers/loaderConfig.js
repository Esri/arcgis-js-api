// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["require","exports","../tsSupport/assignHelper","dojo/has","../urlUtils"],(function(e,a,s,t,n){function r(a){return n.removeQueryParameters(e.toUrl(a))}Object.defineProperty(a,"__esModule",{value:!0});var l;a.DEFAULT_LOADER_URL=n.makeAbsolute(r("./worker-init.js")),a.DEFAULT_CONFIG={baseUrl:(l=r("dojo/x.js"),n.makeAbsolute(l.slice(0,l.length-5))),packages:[{name:"esri"},{name:"dojo"},{name:"dojox"},{name:"dstore"},{name:"moment",main:"moment"},{name:"@dojo"},{name:"cldrjs",main:"dist/cldr"},{name:"globalize",main:"dist/globalize"},{name:"maquette",main:"dist/maquette.umd"},{name:"maquette-css-transitions",main:"dist/maquette-css-transitions.umd"},{name:"maquette-jsx",main:"dist/maquette-jsx.umd"},{name:"tslib",main:"tslib"}],map:{globalize:{cldr:"cldrjs/dist/cldr","cldr/event":"cldrjs/dist/cldr/event","cldr/supplemental":"cldrjs/dist/cldr/supplemental","cldr/unresolved":"cldrjs/dist/cldr/unresolved"}}},a.default=function(e){var t={async:e.async,isDebug:e.isDebug,locale:e.locale,baseUrl:e.baseUrl,has:s({},e.has),map:s({},e.map),packages:e.packages&&e.packages.concat()||[],paths:s({},e.paths)};e.hasOwnProperty("async")||(t.async=!0),e.hasOwnProperty("isDebug")||(t.isDebug=!1),e.baseUrl||(t.baseUrl=a.DEFAULT_CONFIG.baseUrl),a.DEFAULT_CONFIG.packages.forEach((function(e){!function(e,a){for(var t=0,l=e;t<l.length;t++){if(l[t].name===a.name)return}var m=s({},a),i=r(m.name+"/x.js"),o=i.slice(0,i.length-5);m.location=n.makeAbsolute(o),e.push(m)}(t.packages,e)}));for(var l=t.map=t.map||{},m=0,i=Object.keys(a.DEFAULT_CONFIG.map);m<i.length;m++){var o=i[m];l[o]||(l[o]=a.DEFAULT_CONFIG.map[o])}return t}}));