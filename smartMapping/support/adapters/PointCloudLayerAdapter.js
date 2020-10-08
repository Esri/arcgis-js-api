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

define(["require","exports","tslib","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../../../layers/support/fieldUtils","./SceneLayerAdapter"],(function(e,t,r,s,o,i,n){"use strict";return function(e){function t(t){return e.call(this,t)||this}return r.__extends(t,e),t.prototype.getField=function(e){return void 0===e&&(e=""),i.getField(this.layer.fields,e)},t.prototype.getFieldUsageInfo=function(e){var t=this.getField(e);if(!t)return null;var r=this._hasCachedStatistics(t.name);return{supportsLabelingInfo:r,supportsPopupTemplate:r,supportsRenderer:r,supportsLayerQuery:!1,supportsStatistics:r}},t.prototype.getFieldDomain=function(){return null},t.prototype.load=function(e){var t=this,r=this.layer.load(e).then((function(){t.geometryType="point",t.objectIdField=null,t.supportsSQLExpression=!1,t.hasQueryEngine=!1}));return this.addResolvingPromise(r),s.resolve(this)},t=r.__decorate([o.subclass("esri.smartMapping.support.adapters.PointCloudLayerAdapter")],t)}(n)}));