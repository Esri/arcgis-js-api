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

define(["../supportClasses/WaffleLabelPlacements","./_LabelCalculator"],(function(e,a){return{renderLabels:function(a,t,r,s,l){var i={x:s.l,y:s.t,w:r.width,h:r.height};return i.w-=s.l+s.r,i.h-=s.t+s.b,l.series.waffleLabelPlacement===e.NONE?i:t.length>2?i:this._renderSingleVariableLabels(a,t[0],r,s,l,i)},_renderSingleVariableLabels:function(t,r,s,l,i,b){var o=[];i.series.waffleHideValue||o.push(a.getValueLabelInfo(r,i,{isSingle:!0})),i.series.waffleHideLabel||o.push(a.getPointLabelInfo(r,i,{isSingle:!0}));var c=function(e){return a.getValueLabelInfo(r,i,{isSingle:!0,progress:e}).text};i.series.waffleShowLabelAbove&&o.reverse();var n={w:0,h:0};if(o.forEach((function(e,a){e.box.x=0,n.w=Math.max(n.w,e.box.w),a>0&&(n.h+=5),e.box.y=n.h,n.h+=e.box.h})),!o.length)return b;switch(i.series.waffleLabelPlacement){case e.TOP:o.forEach((function(e){var a,r=l.t+e.box.y;switch(i.series.dataLabelsHorizontalAlign){case"left":a=l.l;break;case"center":a=l.l+(b.w-e.box.w)/2;break;case"right":a=s.width-l.r-e.box.w}t.renderLabel({x:a,y:r,text:e.text},e.isValue,c)})),b.h-=n.h+10,b.y+=n.h+10;break;case e.RIGHT:o.forEach((function(e){var a,r;switch(i.series.dataLabelsHorizontalAlign){case"left":a=s.width-l.r-n.w;break;case"center":a=s.width-l.r-n.w+(n.w-e.box.w)/2;break;case"right":a=s.width-l.r-e.box.w}switch(i.series.dataLabelsVerticalAlign){case"top":r=l.t+e.box.y;break;case"middle":r=l.t+(b.h-n.h)/2+e.box.y;break;case"bottom":r=l.t+b.h-n.h+e.box.y}t.renderLabel({x:a,y:r,text:e.text},e.isValue,c)})),b.w-=n.w+10;break;case e.BOTTOM:o.forEach((function(e){var a,r=s.height-l.b-n.h+e.box.y;switch(i.series.dataLabelsHorizontalAlign){case"left":a=l.l;break;case"center":a=l.l+(b.w-e.box.w)/2;break;case"right":a=s.width-l.r-e.box.w}t.renderLabel({x:a,y:r,text:e.text},e.isValue,c)})),b.h-=n.h+10;break;case e.LEFT:o.forEach((function(e){var a,r;switch(i.series.dataLabelsHorizontalAlign){case"left":a=l.l;break;case"center":a=l.l+(n.w-e.box.w)/2;break;case"right":a=l.l+n.w-e.box.w}switch(i.series.dataLabelsVerticalAlign){case"top":r=l.t+e.box.y;break;case"middle":r=l.t+(b.h-n.h)/2+e.box.y;break;case"bottom":r=l.t+b.h-n.h+e.box.y}t.renderLabel({x:a,y:r,text:e.text},e.isValue,c)})),b.w-=n.w+10,b.x+=n.w+10;break;case e.INSIDE:var h=i.series.waffleLabelOffset||0;o.forEach((function(e){var a,r;switch(i.series.dataLabelsHorizontalAlign){case"left":a=l.l+h;break;case"center":a=l.l+(b.w-e.box.w)/2;break;case"right":a=s.width-l.r-e.box.w-h}switch(i.series.dataLabelsVerticalAlign){case"top":r=l.t+e.box.y+h;break;case"middle":r=l.t+(b.h-n.h)/2+e.box.y;break;case"bottom":r=l.t+b.h-n.h+e.box.y-h}t.renderLabel({x:a,y:r,text:e.text},e.isValue,c)}))}return b}}}));