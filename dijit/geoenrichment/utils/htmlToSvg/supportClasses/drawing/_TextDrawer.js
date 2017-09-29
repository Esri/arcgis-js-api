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

define(["../ElementBuilder","../TextMeasurer"],function(t,e){var i={drawText:function(i,l,n,s){var r=e.getLines(i,l,s);if(r){var a,y=l.isSpanLike?l.style.cw||r.textWidth:l.style.cw;a="center"==l.style.textAlign?"middle":"right"==l.style.textAlign?"end":"start";var o=[];return r.lines.forEach(function(e,i){var s=l.style.fontSize>=30?6:5,d=0;l.isSpanLike&&"block"!=l.style.display?d=e.lineHeight-l.style.fontSize:(d=Math.max(2,Math.round(l.style.fontSize/s)),d+=(e.lineHeight-l.style.fontSize)/2);var x=0==i,f=r.lines.length>1&&r.lines.length-1==i,g=0;g="center"==l.style.textAlign?y/2:"right"==l.style.textAlign?y+(f?-l.style.spanFlowEndOffset:0):x?l.style.spanFlowStartOffset:0;var h=t.buildElement("text",{fill:l.style.color,x:l.box.x+l.style.paddings.l+l.style.border.l.width+g,y:l.box.y+l.style.paddings.t+(l.isSpanLike?0:l.style.border.t.width)+e.lineHeight*(i+1)-d,style:l.style.getTextStyle(void 0,l.isLink?{"text-decoration":"underline"}:void 0),"text-anchor":a,opacity:l.style.opacity,clipParams:n},e.text);l.isLink&&(h=t.buildElement("a",{"xlink:href":l.href,target:l.target},h)),o.push(h)}),o}}};return i});