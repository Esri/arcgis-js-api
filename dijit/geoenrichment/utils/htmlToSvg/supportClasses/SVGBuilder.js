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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["./VisualsCollector"],function(i){function t(i){return Math.round(100*i)/100}var n={buildSVG:function(n,o,s){function a(){var a=i.getNodeVisuals(o),e=[],r={w:s.fitParams.w||a.box.w,h:s.fitParams.h||a.box.h},h="left"==s.fitParams.hAlign?"xMin":"right"==s.fitParams.hAlign?"xMax":"xMid",x="top"==s.fitParams.vAlign?"YMin":"bottom"==s.fitParams.vAlign?"YMax":"YMid",f=h+x+" meet";if(s.autoTrimHeight&&"top"==s.fitParams.vAlign){var u=a.box.h/Math.max(a.box.w/r.w,a.box.h/r.h);u<r.h&&(r.h=u)}e.push('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="'+t(a.box.x)+'px" y="'+t(a.box.y)+'px" width="'+t(r.w)+'px" height="'+t(r.h)+'px" viewBox="0 0 '+a.box.w+" "+a.box.h+'" xml:space="preserve" preserveAspectRatio="'+f+'">'),s&&s.definitions&&s.definitions.length&&(e.push("<defs>"),s.definitions.forEach(function(i){e.push(i)}),e.push("</defs>")),n=e.concat(n)}function e(){n.push("</svg>")}a(),e();var r="";return n.forEach(function(i){r+="string"==typeof i?i:i.text}),r}};return n});