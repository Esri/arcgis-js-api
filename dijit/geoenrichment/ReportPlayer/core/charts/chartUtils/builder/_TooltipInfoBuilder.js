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

define(["./_ChartDataUtil"],function(e){var a={};return a.getTooltipInfo=function(a,l,n,t,r,u,o,i,b,c,f){function L(a){return e.formatNumber(a||0,i,void 0,b)}return{color:c,label:l,seriesLabel:n,valueLabel:L(a),sumValueLabel:L(u),minValueLabel:L(t),maxValueLabel:L(r),avgValueLabel:L(o),percentLabel:u?L(a/u*100)+"%":"",formatFunc:L,showPercent:-1!==i.dataLabels.indexOf("Percent"),value:a,conditionalStyling:f,getGroup:null}},a});