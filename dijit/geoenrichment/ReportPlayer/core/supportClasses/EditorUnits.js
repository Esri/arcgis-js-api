// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/ObjectUtil","dojo/i18n!esri/nls/jsapi"],(function(n,t){t=t.geoenrichment.dijit.ReportPlayer.units;var e={},i=["px","pt","mm","cm","in"],r={px:0,pt:1,mm:1,cm:2,in:2};return e.getSupportedUnits=function(){return i},e.getShortName=function(n){return t.shortNames[n]},e.getLongName=function(n){return t.longNames[n]},e.getLongNameWithUnits=function(n){return t.longNamesWithUnits[n]},e.getPlaces=function(n){return r[n]||0},e.round=function(t,i){return n.roundNumber(t,e.getPlaces(i))},e.provideUnits=function(n,t){return n.replace("${units}",e.getShortName(t))},e}));