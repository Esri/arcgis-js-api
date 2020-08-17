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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["./dataProvider/supportClasses/stdGeographies/StdGeographiesModel"],(function(r){var e,n,t,u,o,i={};return i.getCurrentCountry=function(){return e},i.getCountryID=function(){return e&&e.id},i.getCurrencySymbol=function(){return e&&e.currencySymbol||"$"},i.getCurrencyFormat=function(){if(e&&e.currencyFormat)return e.currencyFormat;var r=i.getCurrencySymbol();return r+"0;-"+r+"0"},i.setCountry=function(r){e=r},i.getSingleUnits=function(){return n},i.getPluralUnits=function(){return t},i.setSingleAndPluralUnits=function(r,e){n=r,t=e},i.getHierarchyID=function(){return u},i.setHierarchyID=function(r){u=r||function(){if(!e||!e.hierarchies)return"census";var r=e.hierarchies[0].ID;if(1==e.hierarchies.length)return r;if(e.defaultDatasetID)for(var n in e.hierarchies){var t=e.hierarchies[n];if(t.datasets&&t.datasets.some((function(r){return r==e.defaultDatasetID}))){r=t.ID;break}}return r}()},i.getGeographiesModel=function(){return o},i.setGeographiesModel=function(r){o=r},i.reset=function(){e=null,u=null,n=null,t=null,o=null},i.toJson=function(){return{country:{id:i.getCountryID(),currencySymbol:i.getCurrencySymbol(),currencyFormat:i.getCurrencyFormat()},hierarchy:u,geographiesModel:o&&o.toJson()}},i.fromJson=function(n){n&&(e=n.country,u=n.hierarchy,o=n.geographiesModel&&new r(n.geographiesModel))},i}));
