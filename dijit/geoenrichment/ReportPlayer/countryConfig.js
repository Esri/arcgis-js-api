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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["./dataProvider/supportClasses/stdGeographies/StdGeographiesModel"],(function(r){var e,n,t,o,i,u={};return u.getCountryID=function(){return e&&e.id},u.getCurrencySymbol=function(){return e&&e.currencySymbol||"$"},u.getCurrencyFormat=function(){if(e&&e.currencyFormat)return e.currencyFormat;var r=u.getCurrencySymbol();return r+"0;-"+r+"0"},u.setCountry=function(r){e=r},u.getSingleUnits=function(){return n},u.getPluralUnits=function(){return t},u.setSingleAndPluralUnits=function(r,e){n=r,t=e},u.getHierarchyID=function(){return o},u.setHierarchyID=function(r){o=r||function(){if(!e||!e.hierarchies)return"census";var r=e.hierarchies[0].ID;if(1==e.hierarchies.length)return r;if(e.defaultDatasetID)for(var n in e.hierarchies){var t=e.hierarchies[n];if(t.datasets&&t.datasets.some((function(r){return r==e.defaultDatasetID}))){r=t.ID;break}}return r}()},u.getGeographiesModel=function(){return i},u.setGeographiesModel=function(r){i=r},u.toJson=function(){return{country:{id:u.getCountryID(),currencySymbol:u.getCurrencySymbol(),currencyFormat:u.getCurrencyFormat()},hierarchy:o,geographiesModel:i&&i.toJson()}},u.fromJson=function(n){n&&(e=n.country,o=n.hierarchy,i=n.geographiesModel&&new r(n.geographiesModel))},u}));