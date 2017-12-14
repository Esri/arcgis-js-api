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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["../ChartTypes","../plots/Ring","./_ChartDataUtil"],function(a,e,t){var i={};return i.formatDataLabel=function(i,r,n,d,f){function v(){return t.formatNumber(i,d,void 0,f)}function l(){return n?t.formatNumber(i/n*100,d,!0,f):""}var o=-1!==d.dataLabels.indexOf("Label"),u=-1!==d.dataLabels.indexOf("Value"),L=-1!==d.dataLabels.indexOf("Percent"),b="";if(f===a.RING)o&&(b+=r),u&&(b+=(o?e.LABEL_SEPARATOR:"")+v()),L&&(b+=(o?e.LABEL_SEPARATOR:"")+l());else if(o||u||L){var s=0;b="",o&&(b+="<div>"+r+"</div>",s++),u&&(b+="<div>"+v()+"</div>",s++),L&&(b+="<div>"+l()+"</div>",s++),b+="</div>",b="<div two-row-label='"+(s>1)+"'>"+b}return b},i});