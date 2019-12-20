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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/lang","../ElementBuilder","../text/TextMeasurer"],function(e,t,l){return{drawText:function(i,n,s){var r=l.getLines(i,n);if(r){var a,y=n.isSpanLike?n.style.cw||r.textWidth:n.style.cw;a="center"===n.style.textAlign?"middle":"right"===n.style.textAlign?"end":"start";var o=[],d=0;return r.lines.forEach(function(l,i){var g=n.style.fontSize>=30?6:5,h=0;n.isSpanLike&&"block"!==n.style.display?h=n.style.fontSize-l.lineHeight:(h=-Math.max(2,Math.round(n.style.fontSize/g)),h-=(l.lineHeight-n.style.fontSize)/2,"middle"===n.style.vAlign&&"table-cell"===n.style.display?h+=(n.style.ch-l.lineHeight*r.lines.length)/2:"bottom"===n.style.vAlign&&"table-cell"===n.style.display&&(h+=n.style.ch-l.lineHeight*r.lines.length));var c=0===i,x=r.lines.length>1&&r.lines.length-1===i,f=0;f="center"===n.style.textAlign?y/2:"right"===n.style.textAlign?y+(x?-n.style.spanFlowEndOffset:0):c?n.style.spanFlowStartOffset:0,d+=l.lineHeight;var u,p={fill:n.style.color,x:n.box.x+n.style.getPaddings().l+n.style.getBorder().l.width+f,y:n.box.y+n.style.getPaddings().t+(n.isSpanLike?0:n.style.getBorder().t.width)+d+h,style:n.style.getTextStyle(void 0,n.isLink?{"text-decoration":"underline"}:void 0),opacity:n.style.opacity*n.style.colorOpacity,transform:n.style.transform,clipParams:s,"text-anchor":a};if("justify"===n.style.textAlign&&l.words){var m=0;l.words.forEach(function(i){var n=e.mixin({},p);n.x+=m,u=t.buildElement("text",n,i.text),o.push(u),m+=i.w+l.wordSpace})}else u=t.buildElement("text",p,l.text),n.isLink&&(u=t.buildElement("a",{"xlink:href":n.href,target:n.target},u)),o.push(u)}),o}}}});