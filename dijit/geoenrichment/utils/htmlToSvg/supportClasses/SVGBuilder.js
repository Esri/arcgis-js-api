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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["./VisualsCollector","./EncodeUtil"],(function(i,t){function n(i){return Math.round(100*i)/100}return{buildSVG:function(o,e,s){!function(){var t=i.getNodeVisuals(e),a=[],r={w:s.fitParams.w||t.box.w,h:s.fitParams.h||t.box.h},h=("left"===s.fitParams.hAlign?"xMin":"right"===s.fitParams.hAlign?"xMax":"xMid")+("top"===s.fitParams.vAlign?"YMin":"bottom"===s.fitParams.vAlign?"YMax":"YMid")+" meet";if(s.autoTrimHeight&&"top"===s.fitParams.vAlign){var x=t.box.h/Math.max(t.box.w/r.w,t.box.h/r.h);x<r.h&&(r.h=x)}a.push('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="'+n(t.box.x)+'px" y="'+n(t.box.y)+'px" width="'+n(r.w)+'px" height="'+n(r.h)+'px" viewBox="0 0 '+t.box.w+" "+t.box.h+'" xml:space="preserve" preserveAspectRatio="'+h+'">'),s&&s.definitions&&s.definitions.length&&(a.push("<defs>"),s.definitions.forEach((function(i){a.push(i)})),a.push("</defs>")),o=a.concat(o)}(),o.push("</svg>");var a="";return o.forEach((function(i){a+="string"==typeof i?i:i.text})),t.encodeXML(a)}}}));