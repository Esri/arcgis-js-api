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

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/promiseUtils","../../../../core/Error","../../../../tasks/GenerateRendererTask","../../../../core/accessorSupport/decorators","../../statistics/support/utils","./LayerAdapter"],function(e,r,t,s,o,a,u,i,n,p){var c=/(https?:)?\/\/services.*\.arcgis\.com/i,l=function(e){function r(r){e.call(this),this._layer=r.layer}return t(r,e),r.prototype.getField=function(e){return this._layer.getField(e)},r.prototype.getFieldUsageInfo=function(e){var r=this._layer.getField(e);return r?{supportsLabelingInfo:!0,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:!0}:null},r.prototype.queryStatistics=function(e){var r=this._layer;if(this.hasLocalSource||!r.advancedQueryCapabilities.supportsStatistics)return o.reject(new a("feature-layer-adapter:not-supported","Layer does not support statistics query"));var t=r.createQuery();return t.outStatistics=e.outStatistics,t.groupByFieldsForStatistics=e.groupByFieldsForStatistics,t.orderByFields=e.orderByFields,t.where=n.mergeWhereClauses(t.where,e.where),t.sqlFormat=e.sqlFormat,r.queryFeatures(t)},r.prototype.queryFeatureCount=function(e){if(this.hasLocalSource)return o.reject(new a("feature-layer-adapter:not-supported","Layer does not support count query"));var r=this._layer,t=r.createQuery();return t.where=n.mergeWhereClauses(t.where,e),r.queryFeatureCount(t)},r.prototype.generateRenderer=function(e){var r=this._layer;if(this.hasLocalSource||r.version<10.1)return o.reject(new a("feature-layer-adapter:not-supported","Layer does not support generateRenderer operation (requires ArcGIS Server version 10.1+)"));var t=new u({url:r.parsedUrl.path,gdbVersion:r.gdbVersion}),s=r.createQuery();return s.where=n.mergeWhereClauses(s.where,e.where),t.execute(e)},r.prototype.getAllFeatures=function(e){return this.hasLocalSource||e?e?e.then(function(){return e.graphics}):this.hasLocalSource?o.resolve(this._layer.source):null:o.reject(new a("feature-layer-adapter:missing-parameters","View is required for service based layers"))},r.prototype.load=function(){var e=this,r=this._layer,t=r.load().then(function(){return e.geometryType=r.geometryType,e.objectIdField=r.objectIdField,e.supportsSQLExpression=c.test(r.url),e.hasLocalSource=!r.url&&!!r.source,e.hasLocalSource?o.reject(new a("feature-layer-adapter:not-supported","Feature collection is not supported")):void 0});return this.addResolvingPromise(t),this},r=s([i.subclass()],r)}(i.declared(p));return l});