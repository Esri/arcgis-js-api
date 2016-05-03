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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["dojo/_base/lang","./TiledLayer","./mixins/ArcGISMapService","./mixins/ArcGISCachedService","./mixins/PortalLayer","../request","../core/promiseUtils"],function(e,r,i,a,t,s,n){var o=r.createSubclass([i,a,t],{declaredClass:"esri.layers.ElevationLayer",portalLoaderModule:"portal/loaders/ElevationLayerLoader",viewModulePaths:{"3d":"../views/3d/layers/ElevationLayerView3D"},normalizeCtorArgs:function(r,i){return"string"==typeof r?e.mixin({},{url:r},i):r},load:function(){this.addResolvingPromise(this.loadFromPortal(this._fetchImageService.bind(this)))},_fetchImageService:function(){return n.resolve().then(function(){return this.resourceInfo||s(this.parsedUrl.path,{query:e.mixin({f:"json"},this.parsedUrl.query),responseType:"json",callbackParamName:"callback"})}.bind(this)).then(function(e){e.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.read(e.data)}.bind(this))}});return o});