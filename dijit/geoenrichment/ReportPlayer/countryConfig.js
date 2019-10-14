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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["./dataProvider/supportClasses/stdGeographies/StdGeographiesModel"],function(r){var e,n={};n.getCountryID=function(){return e&&e.id},n.getCurrencySymbol=function(){return e&&e.currencySymbol||"$"},n.getCurrencyFormat=function(){if(e&&e.currencyFormat)return e.currencyFormat;var r=n.getCurrencySymbol();return r+"0;-"+r+"0"},n.setCountry=function(r){e=r};var t,o;n.getSingleUnits=function(){return t},n.getPluralUnits=function(){return o},n.setSingleAndPluralUnits=function(r,e){t=r,o=e};var u;n.getHierarchyID=function(){return u},n.setHierarchyID=function(r){u=r||"census"};var c;return n.getGeographiesModel=function(){return c},n.setGeographiesModel=function(r){c=r},n.toJson=function(){return{country:{id:n.getCountryID(),currencySymbol:n.getCurrencySymbol(),currencyFormat:n.getCurrencyFormat()},hierarchy:u,geographiesModel:c&&c.toJson()}},n.fromJson=function(n){n&&(e=n.country,u=n.hierarchy,c=n.geographiesModel&&new r(n.geographiesModel))},n});