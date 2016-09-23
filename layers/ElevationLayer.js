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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["dojo/_base/lang","./TiledLayer","./mixins/ArcGISMapService","./mixins/ArcGISCachedService","./mixins/OperationalLayer","./mixins/PortalLayer","../core/Error","../request","../core/promiseUtils"],function(e,r,i,t,a,s,n,o,l){var c=r.createSubclass([i,t,a,s],{declaredClass:"esri.layers.ElevationLayer",viewModulePaths:{"3d":"../views/3d/layers/ElevationLayerView3D"},normalizeCtorArgs:function(r,i){return"string"==typeof r?e.mixin({},{url:r},i):r},load:function(){this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:function(e){for(var r=0;r<e.typeKeywords.length;r++)if("elevation 3d layer"===e.typeKeywords[r].toLowerCase())return!0;throw new n("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}}).always(this._fetchImageService.bind(this)))},properties:{operationalLayerType:"ArcGISTiledElevationServiceLayer"},_fetchImageService:function(){return l.resolve().then(function(){return this.resourceInfo||o(this.parsedUrl.path,{query:e.mixin({f:"json"},this.parsedUrl.query),responseType:"json",callbackParamName:"callback"})}.bind(this)).then(function(e){e.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.read(e.data,{origin:"service",url:this.parsedUrl})}.bind(this))}});return c});