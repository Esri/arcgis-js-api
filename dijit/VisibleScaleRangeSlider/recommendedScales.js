// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/lang"],(function(e){var n={_recommendedScales:{world:1e8,continent:5e7,countriesBig:25e6,countriesSmall:12e6,statesProvinces:6e6,stateProvince:3e6,counties:15e5,county:75e4,metropolitanArea:32e4,cities:16e4,city:8e4,town:4e4,neighborhood:2e4,streets:1e4,street:5e3,buildings:2500,building:1250,smallBuilding:800,rooms:400,room:100},getRecommendedScale:function(e){return n._recommendedScales[e]},all:function(){return e.clone(n._recommendedScales)}};return n}));