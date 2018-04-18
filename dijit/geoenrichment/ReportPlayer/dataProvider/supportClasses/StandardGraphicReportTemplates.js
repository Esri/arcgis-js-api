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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define([],function(){var e={portalUrl:"http://www.arcgis.com",user:"esri_reports",query:"http://www.arcgis.com/home/search.html?q=owner%3Aesri_reports",templates:{ed093d10e12544fa9d45bc24b477c453:"at-risk-population-US","15f136dd2b2a4fb2b3f51d2944ed82bc":"executive-summary-call-outs-US","0627ed051bf84d9ca9e93518e1e0c13e":"demographic-summary-US","1165ab4dbae5446bbc5e9558d3e2f0af":"transportation-to-work-US","7931861c32254fb3a642b3a17dce3246":"health-care-US","6cfba5c9a6c44e729e7983ebb78b4892":"marketing-profile-US","9668d7dce8ff4bd99908508c792ba5a1":"portrait-property-flyer-US","0b68c6309b0d44bfa7a1d5198c2c4904":"skyscraper-US",ff11fa48b9184f4ba66a3271dec6252d:"key-facts-US"}};return e.aliasToID=function(a){for(var r in e.templates)if(e.templates[r]===a)return r;return null},e.hasAlias=function(a){return!!e.aliasToID(a)},e.idToAlias=function(a){return e.templates[id]},e.hasID=function(a){return!!e.templates[a]},e});