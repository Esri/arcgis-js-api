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

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/ColorUtil","esri/dijit/geoenrichment/utils/ObjectUtil"],function(o,r,t){var e={};return e.applyBackgroundImageFromSettings=function(o,r){return o.style.backgroundImage="",r&&r.data?(o.style.backgroundPosition=r.position||"center",o.style.backgroundImage="url("+r.data+")",o.style.backgroundRepeat=r.repeat?"repeat":"no-repeat",r.opacity>0&&r.opacity<1&&(o.style.opacity=r.opacity),r.scale&&(o.style.backgroundSize=r.repeat?"contain":"cover"),!0):!1},e.getThemeColors=function(o){return[o.document.backgroundColor,o.infographic.staticInfographic.icon.backgroundColor,o.infographic.staticInfographic.highlightedIcon.backgroundColor]},e.applyThemeColorsToTheme=function(o,e,a){var n=e[0],l=e[1],c=e[2],i=r.getContrastColor(n).toHex(),g="#FFFFFF"==n.toUpperCase()?"#4C4C4C":i,d=r.isLightColor(n),s=r.transform(n,{dv:d?-50:50}).toHex(),u={document:{color:g,backgroundColor:n},table:{Default:{color:g,backgroundColor:"transparent"},ReportTitle:{color:c,backgroundColor:"transparent"},TableHeader:{color:r.getContrastColor(l,void 0,void 0,200).toHex(),backgroundColor:l},GreyText:{color:r.transform(n,{dv:d?-33:33}).toHex(),backgroundColor:"transparent"},BlueText:{color:"#56A5D8",backgroundColor:"transparent"},AlternatingRow:{color:g,backgroundColor:r.transform(n,{dv:d?-7:7}).toHex()}},chart:{backgroundColor:"transparent",colors:[l,c,r.transform(c,{dv:-10}).toHex(),r.transform(c,{dv:-20}).toHex(),r.transform(c,{dv:-30}).toHex(),r.transform(c,{dv:-40}).toHex(),r.transform(c,{dv:-50}).toHex(),r.transform(c,{dv:-60}).toHex()],titleStyle:{color:s},dataLabelsStyle:{color:i},xAxis:{axisStyle:{color:i},titleStyle:{color:i}},yAxis:{axisStyle:{color:i},titleStyle:{color:i}},legendStyle:{color:i,backgroundColor:n},ring:{ringBackground:{backgroundColor:r.transform(n,{dv:d?-13:13}).toHex()}},icon:{backgroundColor:l}},infographic:{backgroundColor:"transparent",agePyramid:{theme:d?"light":"common",male:{backgroundColor:l},female:{backgroundColor:c}},staticInfographic:{backgroundColor:"transparent",icon:{backgroundColor:l},highlightedIcon:{backgroundColor:c},iconBarBackground:{},titleLine:{color:r.transform(n,{dv:d?-40:40}).toHex()},titleStyle:{color:s},variableLabelStyle:{color:l},variableLabelStyleHighlighted:{color:c},variableLabelStyleContrast:{color:n},variableDescriptionStyle:{color:r.transform(n,{dv:d?-50:50}).toHex()}}}};a&&a(u),t.populateObject(o,u,!0)},e.populateMissingStyles=function(r){r.chart.icon=r.chart.icon||o.clone(r.infographic.staticInfographic.icon)},e});