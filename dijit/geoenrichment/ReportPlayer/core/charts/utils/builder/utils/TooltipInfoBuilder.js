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

define(["./ChartDataUtil"],function(a){var e={};return e.getTooltipInfo=function(e,l,i,t,n,u,r,o,b,s,f,m,L,c){function v(e,l){return a.formatNumber(e||0,void 0!==l?{dataLabelsDecimals:l}:b,void 0,s)}return{value:e,label:l,color:f,seriesLabel:i,valueLabel:v(e),sumValueLabel:v(u),minValueLabel:v(t),maxValueLabel:v(n),avgValueLabel:v(o),weightValueLabel:r?v(Math.abs(e)/r*100,2)+"%":"",formatFunc:v,isUnavailableData:isNaN(e),conditionalStyling:m,fieldInfo:L,isPrimarySeries:c,getGroup:null}},e});