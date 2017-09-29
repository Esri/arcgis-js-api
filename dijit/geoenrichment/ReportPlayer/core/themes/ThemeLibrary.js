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

define(["dojo/_base/lang","./BorderStyles","./ReportThemes","./ThemeUtil","esri/dijit/geoenrichment/utils/ObjectUtil","dojo/i18n!../../../../../nls/jsapi"],function(o,e,t,r,n,a){function i(o){var e=o==t.CLASSIC?u:d,r={backgroundColor:"#FFFFFF",icon:{backgroundColor:"#56a5d8"},highlightedIcon:{backgroundColor:"#D6851A"},iconBarBackground:{backgroundColor:"#AAAAAA"},titleLine:{color:"#A8A7A8"},titleStyle:{fontFamily:e,color:"#828282",fontSize:C,backgroundColor:"transparent"},variableLabelStyle:{fontFamily:e,color:"#56a5d8",fontSize:24,backgroundColor:"transparent"},variableDescriptionStyle:{fontFamily:e,color:"#828282",fontSize:13,backgroundColor:"transparent"}};return r}function l(){return{style:e.ALL,lineStyle:"dashed",thickness:1,color:"#b2b2b2"}}function c(o){var e=o==t.CLASSIC?u:d,r={document:{fontSize:f,fontFamily:e,backgroundImage:{data:null,position:"center",repeat:!1,scale:!0,opacity:1},border:l()},chart:{renderSingleDataSeriesWithSameColor:!0,line:{},column:{},bar:{},pie:{},donut:{},ring:{},pictureColumn:{},pictureBar:{},titleStyle:{fontFamily:e,fontSize:C},dataLabelsStyle:{fontFamily:e,fontSize:f},xAxis:{axisStyle:{fontFamily:e,fontSize:f-1},titleStyle:{fontFamily:e,fontSize:f}},yAxis:{axisStyle:{fontFamily:e,fontSize:f-1},titleStyle:{fontFamily:e,fontSize:f}},legendStyle:{fontFamily:e,fontSize:f},icon:{backgroundColor:"#56a5d8"}},infographic:{staticInfographic:i(o)}};return r}function F(e){var t=o.mixin({},e.additional);t.id=e.id;var a=c(e.id);return r.applyThemeColorsToTheme(a,e.colors),n.populateObject(a,t,!0),a}a=a.geoenrichment.dijit.ReportPlayer.ReportPlayer;var d="Avenir Next",u="Verdana",f=10,C=16,S={DEFAULT_FONT_FAMILY_CLASSIC:u,DEFAULT_FONT_FAMILY_GRAPHIC:d,defaultStaticInfographic:i(),standardRamps:[{id:t.CLASSIC,colors:["#FFFFFF","#13729F","#DEA429"],additional:{table:{Default:{color:"#4C4C4C",backgroundColor:"#FFFFFF"},ReportTitle:{color:"#FFFFFF",backgroundColor:"#00436D"},TableHeader:{color:"#4C4C4C",backgroundColor:"#CCCCCC"},GreyText:{color:"#AAAAAA",backgroundColor:"#FFFFFF"},BlueText:{color:"#00436D",backgroundColor:"#FFFFFF"},AlternatingRow:{color:"#4C4C4C",backgroundColor:"#EEEEEE"}},chart:{renderSingleDataSeriesWithSameColor:!1,colors:["#13729F","#DEA429","#6A9741","#A75523","#456E35","#D7DF22","#868686","#3C546D","#829AB3","#DEDEDE","#03406E","#B1B1B1"]}}},{id:t.GRAPHIC,colors:["#FFFFFF","#56A5D8","#D6851A"]},{id:"orange",colors:["#d3d3d3","#8b4513","#ff4500"]},{id:"dark",colors:["#6A6A6A","#FFFFFF","#EEEEEE"],additional:{chart:{ring:{colors:["#6B1010"]}}}},{id:"green2",colors:["#556b2f","#90ee90","#ffffe0"]},{id:"green",colors:["#FFFFFF","#0B7AC0","#35AC46"]}]},A={};return S.standardRamps.forEach(function(o){var e=F(o);S[o.id]=e,A[o.id]=e}),S.TABLE_STYLES=["Default","ReportTitle","TableHeader","GreyText","BlueText","AlternatingRow"],S.getReportThemeById=function(o){return A[o]},S.isStandardTheme=function(o){return!!A[o]},S.getStandardThemes=function(){return Object.keys(A).map(function(o){return A[o]})},S.getDefaultStaticInfographicSettings=function(){return o.clone(S.defaultStaticInfographic)},S.getDefaultBorderSettings=function(){return l()},S});