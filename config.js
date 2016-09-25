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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["dojo/_base/config","dojo/topic","dojo/has","./kernel"],function(e,s,c,i){var r=function(){return this}(),o={defaults:{screenDPI:96,geometryService:null,kmlService:null,map:{width:400,height:400,layerNamePrefix:"layer",graphicsLayerNamePrefix:"graphicsLayer",slider:{left:"30px",top:"30px",width:null,height:"200px"},sliderLabel:{tick:5,labels:null,style:"width:2em; font-family:Verdana; font-size:75%;"},sliderChangeImmediate:!0,zoomSymbol:{color:[0,0,0,64],outline:{color:[255,0,0,255],width:1.25,style:"esriSLSSolid"},style:"esriSFSSolid"},zoomDuration:500,zoomRate:25,panDuration:350,panRate:25,logoLink:"http://www.esri.com"},autoSpatialIndexing:r.Worker&&!1,io:{errorHandler:function(e,c){s.publish("esri.Error",[e])},proxyUrl:null,alwaysUseProxy:!1,useCors:"with-credentials",corsEnabledServers:["server.arcgisonline.com","services.arcgisonline.com","www.arcgis.com","tiles.arcgis.com","tiles1.arcgis.com","tiles2.arcgis.com","tiles3.arcgis.com","tiles4.arcgis.com","basemaps.arcgis.com","elevation3d.arcgis.com","services.arcgis.com","services1.arcgis.com","services2.arcgis.com","services3.arcgis.com","services4.arcgis.com","services5.arcgis.com","services6.arcgis.com","services7.arcgis.com","static.arcgis.com","utility.arcgisonline.com","geocode.arcgis.com","geoenrich.arcgis.com","qaext.arcgis.com","tilesqa.arcgis.com","servicesqa.arcgis.com","servicesqa1.arcgis.com","servicesqa2.arcgis.com","servicesqa3.arcgis.com","geocodeqa.arcgis.com","geoenrichqa.arcgis.com","dev.arcgis.com","devext.arcgis.com","staticdev.arcgis.com","tilesdevext.arcgis.com","elevation3ddev.arcgis.com","servicesdev.arcgis.com","servicesdev1.arcgis.com","servicesdev2.arcgis.com","servicesdev3.arcgis.com","geocodedev.arcgis.com","geoenrichdev.arcgis.com","basemapsdev.arcgis.com"],corsDetection:r.cordova?!1:!0,corsStatus:{},webTierAuthServers:[],proxyRules:[],postLength:2e3,timeout:6e4,useWorkers:"on-request",maxRequestWorkers:5}}};return c("extend-esri")&&(i.config=o),e.noGlobals||(r.esriConfig=o),o});