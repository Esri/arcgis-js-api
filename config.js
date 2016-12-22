// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/_base/window"],function(c,e,s){var r={screenDPI:96,geometryService:null,geometryServiceUrl:null,geoRSSServiceUrl:null,kmlServiceUrl:null,portalUrl:"https://www.arcgis.com",request:{corsDetection:!(s.global&&s.global.cordova),corsDetectionTimeout:15,corsEnabledServers:["dev.arcgis.com","devext.arcgis.com","elevation3d.arcgis.com","elevation3ddev.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","geocode.arcgis.com","geocodedev.arcgis.com","geocodeqa.arcgis.com","geoenrich.arcgis.com","geoenrichdev.arcgis.com","geoenrichqa.arcgis.com","qaext.arcgis.com","server.arcgisonline.com","services.arcgis.com","services.arcgisonline.com","services1.arcgis.com","services2.arcgis.com","services3.arcgis.com","services4.arcgis.com","services5.arcgis.com","services6.arcgis.com","services7.arcgis.com","servicesdev.arcgis.com","servicesdev1.arcgis.com","servicesdev2.arcgis.com","servicesdev3.arcgis.com","servicesqa.arcgis.com","servicesqa1.arcgis.com","servicesqa2.arcgis.com","servicesqa3.arcgis.com","static.arcgis.com","staticdev.arcgis.com","tiles.arcgis.com","tiles1.arcgis.com","tiles2.arcgis.com","tiles3.arcgis.com","tiles4.arcgis.com","tilesdevext.arcgis.com","tilesqa.arcgis.com","utility.arcgisonline.com","www.arcgis.com"],corsStatus:{},forceProxy:!1,maxUrlLength:2e3,maxWorkers:5,proxyRules:[],proxyUrl:null,timeout:6e4,useCors:"with-credentials",useWorkers:"on-request",httpsDomains:["arcgis.com","arcgisonline.com","esrikr.com","premiumservices.blackbridge.com","esripremium.accuweather.com","gbm.digitalglobe.com","firstlook.digitalglobe.com","msi.digitalglobe.com"]},useSpatialIndex:(s.global&&s.global.Worker,!1)};return r});