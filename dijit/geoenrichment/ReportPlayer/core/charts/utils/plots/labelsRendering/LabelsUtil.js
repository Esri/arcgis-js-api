// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/lang","dojox/gfx","dojox/charting/plot2d/common"],(function(e,t,o){var n={};return n.getLabelInfo=function(a,r,i,l){function s(e,t){return{font:e.isLabel&&i.series.dataLabelsLabelFont||e.isPercent&&i.series.dataLabelsPercentFont||i.series.dataLabelsFont,fontColor:t&&i.series.dataLabelsAltColor||e.isLabel&&i.series.dataLabelsLabelColor||e.isPercent&&i.series.dataLabelsPercentColor||i.series.dataLabelsColor}}var d=a.opt.labelFunc?a.opt.labelFunc.apply(a,[r,a.opt.fixed,a.opt.precision]):r.text||o.getLabel(r[r.valueProp],a.opt.fixed,a.opt.precision)||"";function f(o){o=e.mixin(o||{},l);var a={x:0,y:0,w:0,h:0},r="";d.forEach((function(e,i){var l,f=(l=e,t._base._getTextBox(l.text,{font:s(l).font})),c=f.w,x=f.h,p=0;if(o.forceOneLine)i>0&&i===d.length-1&&(p=o.spaceToWidth?Math.max(0,o.spaceToWidth-a.w-c):o.minSpace||0),a.w+=c+p,a.h=Math.max(a.h,x);else{var h=e.isLabel&&o.dataLabelsMaxWidth||void 0;h&&h>=c&&(h=void 0),c=h?Math.min(c,h):c,h&&(x*=Math.ceil(f.w/c)),a.w=Math.max(a.w,c),a.h+=x}var b=s(e,o.isAltPosition);i>0&&!o.forceOneLine&&(r+="<br/>"),r+=n.getStyledLabel({w:c,h:x,font:b.font,fontColor:b.fontColor,text:e.text,forceOneLine:o.forceOneLine,spaceBefore:p,isInlineBlock:!0,maxWidth:h})}));var f="";return"number"==typeof i.series.dataLabelsAngle&&0!==i.series.dataLabelsAngle&&(f="transform:rotate("+-i.series.dataLabelsAngle+"deg);"),r="<div style='font-size: 0px;text-align:"+(o.horizontalAlign||"left")+";"+(o.forceOneLine?"white-space:nowrap;":"")+f+"width:"+a.w+"px;height:"+a.h+"px;'>"+r+"</div>",delete a.l,delete a.t,!o.considerAngle||90!==i.series.dataLabelsAngle&&-90!==i.series.dataLabelsAngle||(a={w:a.h,h:a.w+4}),{text:r,box:a}}return d="string"==typeof d?[{text:d}]:d,{getText:function(e){return f(e).text},box:f().box,angle:l.considerAngle&&i.series.dataLabelsAngle}},n.getSimpleLabelInfo=function(e){var o=e.font.replace(/\s\w*px/," "+Math.round(e.fontSize)+"px"),a=t._base._getTextBox(e.text,{font:o});return{text:n.getStyledLabel({text:e.text,font:o,fontColor:e.fontColor,w:a.w,h:a.h}),box:a}},n.getStyledLabel=function(e){var t=e.fontSize?e.font.replace(/\s\w*px/," "+Math.round(e.fontSize)+"px"):e.font;return"<div style='"+(e.maxWidth?"max-width:"+e.maxWidth+"px;white-space:normal;":"white-space:nowrap;")+"width:"+Math.round(e.w)+"px;height:"+Math.round(e.h)+"px;font:"+t+";color:"+e.fontColor+";"+(e.textDecoration?"text-decoration:"+e.textDecoration+";text-decoration-color:"+e.fontColor+";":"")+(e.forceOneLine?"vertical-align:bottom;":"")+(e.spaceBefore?"padding-left:"+Math.round(e.spaceBefore)+"px;":"")+(e.isInlineBlock||e.forceOneLine?"display:inline-block;":"")+"'>"+String(e.text).replace(/\s/g," ")+"</div>"},n.renderHTMLLabel=function(e,t,o,n,a,r,i){var l=document.createElement("div"),s=l.style;l.innerHTML=n,s.position="absolute";var d=0,f=0;return 90!==i&&-90!==i||(d=-(r-4-a)/2,f=-(a-(r-4))/2),s.left=Math.floor(t+d)+"px",s.top=Math.floor(o+f)+"px",s.pointerEvents="none",e.node.insertBefore(l,e.node.firstChild),l},n}));