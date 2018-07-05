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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["../ElementBuilder","../text/TextMeasurer"],function(e,t){return{drawText:function(l,i,n,s){var r=t.getLines(l,i,s);if(r){var a,y=i.isSpanLike?i.style.cw||r.textWidth:i.style.cw;a="center"===i.style.textAlign?"middle":"right"===i.style.textAlign?"end":"start";var o=[];return r.lines.forEach(function(t,l){var s=i.style.fontSize>=30?6:5,d=0;i.isSpanLike&&"block"!==i.style.display?d=i.style.fontSize-t.lineHeight:(d=-Math.max(2,Math.round(i.style.fontSize/s)),d-=(t.lineHeight-i.style.fontSize)/2,"middle"===i.style.vAlign&&"table-cell"===i.style.display?d+=(i.style.ch-t.lineHeight*r.lines.length)/2:"bottom"===i.style.vAlign&&"table-cell"===i.style.display&&(d+=i.style.ch-t.lineHeight*r.lines.length));var g=0===l,h=r.lines.length>1&&r.lines.length-1===l,c=0;c="center"===i.style.textAlign?y/2:"right"===i.style.textAlign?y+(h?-i.style.spanFlowEndOffset:0):g?i.style.spanFlowStartOffset:0;var f=e.buildElement("text",{fill:i.style.color,x:i.box.x+i.style.getPaddings().l+i.style.getBorder().l.width+c,y:i.box.y+i.style.getPaddings().t+(i.isSpanLike?0:i.style.getBorder().t.width)+t.lineHeight*(l+1)+d,style:i.style.getTextStyle(void 0,i.isLink?{"text-decoration":"underline"}:void 0),"text-anchor":a,opacity:i.style.opacity,transform:i.style.transform,clipParams:n},t.text);i.isLink&&(f=e.buildElement("a",{"xlink:href":i.href,target:i.target},f)),o.push(f)}),o}}}});