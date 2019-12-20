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

define(["dojo/_base/lang","dojox/gfx","dojox/charting/plot2d/common"],function(e,t,o){var n={},a=4;return n.getLabelInfo=function(r,i,l,s){function d(e){return t._base._getTextBox(e.text,{font:f(e).font})}function f(e,t){return{font:e.isLabel&&l.series.dataLabelsLabelFont||e.isPercent&&l.series.dataLabelsPercentFont||l.series.dataLabelsFont,fontColor:t&&l.series.dataLabelsAltColor||e.isLabel&&l.series.dataLabelsLabelColor||e.isPercent&&l.series.dataLabelsPercentColor||l.series.dataLabelsColor}}function c(t){t=e.mixin(t||{},s);var o={x:0,y:0,w:0,h:0},r="";x.forEach(function(e,a){var i=d(e),l=i.w,s=i.h,c=0;if(t.forceOneLine)a>0&&a===x.length-1&&(c=t.spaceToWidth?Math.max(0,t.spaceToWidth-o.w-l):t.minSpace||0),o.w+=l+c,o.h=Math.max(o.h,s);else{var p=e.isLabel&&t.dataLabelsMaxWidth||void 0;p&&p>=l&&(p=void 0),l=p?Math.min(l,p):l,p&&(s*=Math.ceil(i.w/l)),o.w=Math.max(o.w,l),o.h+=s}var h=f(e,t.isAltPosition);a>0&&!t.forceOneLine&&(r+="<br/>"),r+=n.getStyledLabel({w:l,h:s,font:h.font,fontColor:h.fontColor,text:e.text,forceOneLine:t.forceOneLine,spaceBefore:c,isInlineBlock:!0,maxWidth:p})});var i="";return"number"==typeof l.series.dataLabelsAngle&&0!==l.series.dataLabelsAngle&&(i="transform:rotate("+-l.series.dataLabelsAngle+"deg);"),r="<div style='font-size: 0px;text-align:"+(t.horizontalAlign||"left")+";"+(t.forceOneLine?"white-space:nowrap;":"")+i+"width:"+o.w+"px;height:"+o.h+"px;'>"+r+"</div>",delete o.l,delete o.t,!t.considerAngle||90!==l.series.dataLabelsAngle&&-90!==l.series.dataLabelsAngle||(o={w:o.h,h:o.w+a}),{text:r,box:o}}var x=r.opt.labelFunc?r.opt.labelFunc.apply(r,[i,r.opt.fixed,r.opt.precision]):i.text||o.getLabel(i[i.valueProp],r.opt.fixed,r.opt.precision)||"";return x="string"==typeof x?[{text:x}]:x,{getText:function(e){return c(e).text},box:c().box,angle:s.considerAngle&&l.series.dataLabelsAngle}},n.getSimpleLabelInfo=function(e){var o=e.font.replace(/\s\w*px/," "+Math.round(e.fontSize)+"px"),a=t._base._getTextBox(e.text,{font:o});return{text:n.getStyledLabel({text:e.text,font:o,fontColor:e.fontColor,w:a.w,h:a.h}),box:a}},n.getStyledLabel=function(e){var t=e.fontSize?e.font.replace(/\s\w*px/," "+Math.round(e.fontSize)+"px"):e.font;return"<div style='"+(e.maxWidth?"max-width:"+e.maxWidth+"px;white-space:normal;":"white-space:nowrap;")+"width:"+Math.round(e.w)+"px;height:"+Math.round(e.h)+"px;font:"+t+";color:"+e.fontColor+";"+(e.textDecoration?"text-decoration:"+e.textDecoration+";text-decoration-color:"+e.fontColor+";":"")+(e.forceOneLine?"vertical-align:bottom;":"")+(e.spaceBefore?"padding-left:"+Math.round(e.spaceBefore)+"px;":"")+(e.isInlineBlock||e.forceOneLine?"display:inline-block;":"")+"'>"+String(e.text).replace(/\s/g," ")+"</div>"},n.renderHTMLLabel=function(e,t,o,n,r,i,l){var s=document.createElement("div"),d=s.style;s.innerHTML=n,d.position="absolute";var f=0,c=0;return 90!==l&&-90!==l||(f=-(i-a-r)/2,c=-(r-(i-a))/2),d.left=Math.floor(t+f)+"px",d.top=Math.floor(o+c)+"px",d.pointerEvents="none",e.node.insertBefore(s,e.node.firstChild),s},n});