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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../../../core/workers","../../../../../../layers/graphics/featureConversionUtils","../../../../../../layers/ogc/ogcFeatureUtils","../../../../../../tasks/operations/query","../../support/FeatureSetReaderJSON","../../support/FeatureSetReaderPBF"],(function(e,t,r,n,i,u,a,s,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createSourceAdapter=t.SourceAdapter=void 0;var c=function(){function e(e){this.service=e}return e.prototype.destroy=function(){},e}();t.SourceAdapter=c,t.createSourceAdapter=function(e){var t,r=e.capabilities;return(t=e.source)&&t.capabilities&&t.collectionId&&t.layerDefinition&&t.url?new f(e):function(e){return Array.isArray(e.source)}(e)?new p(e):r.query.supportsFormatPBF?new l(e):new d(e)};var p=function(e){function t(t){var r=e.call(this,t)||this;return r._portsOpen=n.openWithPorts(t.source).then((function(e){return r.client=e})),r}return r.__extends(t,e),t.prototype.destroy=function(){this.client.close(),this.client=null},t.prototype.executeQuery=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var n;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,this._portsOpen];case 1:return r.sent(),[4,this.client.invoke("queryFeatures",e.toJSON(),t)];case 2:return n=r.sent(),[2,s.FeatureSetReaderJSON.fromFeatureSet(n,this.service.objectIdField)]}}))}))},t}(c),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.executeQuery=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var n;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,a.executeQueryPBFBuffer(this.service.source,e,t)];case 1:return n=r.sent().data,[2,o.FeatureSetReaderPBF.fromBuffer(n,this.service.geometryType)]}}))}))},t}(c),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.executeQuery=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var n,u,o,c,p,l,d,f,h;return r.__generator(this,(function(r){switch(r.label){case 0:return n=this.service,u=n.source,o=n.capabilities,c=n.spatialReference,p=n.objectIdField,!e.quantizationParameters||o.query.supportsQuantization?[3,2]:((l=e.clone()).quantizationParameters=null,[4,a.executeQuery(u,l,c,t)]);case 1:return d=r.sent().data,f=i.convertFromFeatureSet(d,p),i.quantizeOptimizedFeatureSet(t.transform,f),[2,s.FeatureSetReaderJSON.fromOptimizedFeatureSet(f)];case 2:return[4,a.executeQuery(u,e,this.service.spatialReference,t)];case 3:return h=r.sent().data,[2,s.FeatureSetReaderJSON.fromFeatureSet(h,this.service.objectIdField)]}}))}))},t}(c),f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.executeQuery=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var n,a,o;return r.__generator(this,(function(r){switch(r.label){case 0:return n=this.service.capabilities,!e.quantizationParameters||n.query.supportsQuantization?[3,2]:(e.clone().quantizationParameters=null,[4,u.queryOptimizedFeatureSet(this.service.source,e,t)]);case 1:return a=r.sent(),i.quantizeOptimizedFeatureSet(t.transform,a),[2,s.FeatureSetReaderJSON.fromOptimizedFeatureSet(a)];case 2:return[4,u.queryOptimizedFeatureSet(this.service.source,e,t)];case 3:return o=r.sent(),[2,s.FeatureSetReaderJSON.fromOptimizedFeatureSet(o)]}}))}))},t}(c)}));