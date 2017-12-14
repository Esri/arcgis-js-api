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

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/ColorUtil","esri/dijit/geoenrichment/utils/ObjectUtil"],function(o,r,t){function e(o){var t=r.isLightColor(o);return t?"#666666":"#BBBBBB"}var a={getPanelTitleColor:function(o){var t=r.isLightColor(o);return r.transform(o,{dv:t?-50:50}).toHex()},getChartElementBackgroundColor:function(o){var t=r.isLightColor(o);return r.transform(o,{dv:t?-13:13}).toHex()}},l={};return l.getThemeColors=function(o){return[o.document.backgroundColor,o.infographic.staticInfographic.icon.backgroundColor,o.infographic.staticInfographic.highlightedIcon.backgroundColor]},l._generateChartColors=function(o,t){var e=[t,r.transform(t,{dv:-20}).toHex(),r.transform(t,{dv:-40}).toHex(),r.transform(t,{dv:-50}).toHex(),r.transform(t,{dv:-55}).toHex(),r.transform(t,{dv:-60}).toHex(),r.transform(t,{dv:-65}).toHex(),r.transform(t,{dv:-70}).toHex()];return o!==t&&e.unshift(o),e},l.applyThemeColorsToTheme=function(o,n,i,c){var g=n[0],d=n[1],s=n[2],u=r.getContrastColor(g).toHex(),C="#FFFFFF"===g.toUpperCase()?"#4C4C4C":u,b=r.isLightColor(g),h=a.getChartElementBackgroundColor(g),f=a.getPanelTitleColor(g),p={document:{color:C,backgroundColor:g},table:{Default:{color:C,backgroundColor:"transparent"},ReportTitle:{color:s,backgroundColor:"transparent"},TableHeader:{color:r.getContrastColor(d,void 0,void 0,200).toHex(),backgroundColor:d},GreyText:{color:r.transform(g,{dv:b?-33:33}).toHex(),backgroundColor:"transparent"},BlueText:{color:"#56A5D8",backgroundColor:"transparent"},AlternatingRow:{color:C,backgroundColor:r.transform(g,{dv:b?-7:7}).toHex()}},chart:{backgroundColor:"transparent",titleStyle:{color:f},dataLabelsStyle:{color:u},xAxis:{lineColor:u,axisStyle:{color:u},titleStyle:{color:u}},yAxis:{lineColor:u,axisStyle:{color:u},titleStyle:{color:u}},legendStyle:{color:u,backgroundColor:g},ring:{ringBackground:{backgroundColor:h}},gauge:{dataLabelStyle:{color:d},othersColor:h,arrowIndicator:{lineColor:f,backgroundColor:f}},icon:{backgroundColor:d},columnBarBackground:{backgroundColor:h},comparisonInfo:{lineColor:e(g)}},infographic:{backgroundColor:"transparent",agePyramid:{theme:b?"light":"common",male:{backgroundColor:d},female:{backgroundColor:s}},staticInfographic:{backgroundColor:"transparent",icon:{backgroundColor:d},highlightedIcon:{backgroundColor:s},iconBarBackground:{},titleLine:{color:r.transform(g,{dv:b?-40:40}).toHex()},titleStyle:{color:f},variableLabelStyle:{color:d},variableLabelStyleHighlighted:{color:s},variableLabelStyleContrast:{color:g},variableDescriptionStyle:{color:r.transform(g,{dv:b?-50:50}).toHex()}}}};c&&c(p),t.populateObject(o,p,!0),o&&o.chart&&(o.chart.colors=i&&i.length?i:l._generateChartColors(d,s))},l.applyTextStyleToTheme=function(r,e){function a(r){return o.mixin({},e)}var l={document:a(),table:{Default:{color:e.color},ReportTitle:{color:e.color},TableHeader:{color:e.color},AlternatingRow:{color:e.color}},chart:{titleStyle:a(),dataLabelsStyle:a(),xAxis:{axisStyle:a(),titleStyle:a()},yAxis:{axisStyle:a(),titleStyle:a()},legendStyle:a()},infographic:{staticInfographic:{titleStyle:a(),variableLabelStyle:a(),variableDescriptionStyle:a(),variableLabelStyleHighlighted:a(),variableLabelStyleContrast:a()}}};t.populateObject(r,l,!0)},l.removeBackgroundFromThemeElements=function(o,r){if(o&&(o.chart.backgroundColor="transparent",o.infographic.backgroundColor="transparent",o.infographic.staticInfographic=o.infographic.staticInfographic||{},o.infographic.staticInfographic.backgroundColor="transparent",r))for(var t in o.table)o.table[t].backgroundColor="transparent"},l});