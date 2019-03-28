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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["./dataProvider/supportClasses/stdGeographies/StdGeographiesModel"],function(e){var n,r={};r.getCountryID=function(){return n&&n.id},r.getCurrencySymbol=function(){return n&&n.currencySymbol||"$"},r.setCountry=function(e){n=e};var t,o;r.getSingleUnits=function(){return t},r.getPluralUnits=function(){return o},r.setSingleAndPluralUnits=function(e,n){t=e,o=n};var u;r.getHierarchyID=function(){return u},r.setHierarchyID=function(e){u=e||"census"};var i;return r.getGeographiesModel=function(){return i},r.setGeographiesModel=function(e){i=e},r.toJson=function(){return{country:{id:r.getCountryID(),currencySymbol:r.getCurrencySymbol()},hierarchy:u,geographiesModel:i&&i.toJson()}},r.fromJson=function(r){r&&(n=r.country,u=r.hierarchy,i=r.geographiesModel&&new e(r.geographiesModel))},r});