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

define(["require","exports","tslib","../../../core/Error","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../../statistics/support/utils","../utils","./FeatureLayerAdapter","./support/utils","../../../tasks/support/generateRendererUtils"],(function(e,t,r,a,n,i,s,o,l,u,c){"use strict";function d(e){return"esri.tasks.support.ClassBreaksDefinition"===e.declaredClass}function p(e){return"esri.tasks.support.UniqueValueDefinition"===e.declaredClass}return function(e){function t(t){return e.call(this,t)||this}return r.__extends(t,e),t.prototype._createGenerateRendererResult=function(e,t,n,i,s){return r.__awaiter(this,void 0,void 0,(function(){var o,l,f,h;return r.__generator(this,(function(r){switch(r.label){case 0:if(o=e&&e.features,!(o&&o.length))throw new a("csv-layer-adapter:insufficient-data","No features are available to calculate statistics");return l=null,"percent-of-total"!==i?[3,2]:[4,u.calculateStatsFromMemory({field:t},o)];case 1:if(f=r.sent(),null==(l=f.sum))throw new a("csv-layer-adapter:invalid","invalid normalizationTotal");r.label=2;case 2:return d(s)?[4,u.getDataValues({field:t,normalizationType:i,normalizationField:n,normalizationTotal:l},o)]:[3,4];case 3:return h=r.sent().filter((function(e){return null!=e&&u.isValidNumber(e)})),[2,c.createGenerateRendererClassBreaks({definition:s,values:h,normalizationTotal:l})];case 4:return p(s)?[4,u.getDataValues({field:t},o)]:[3,6];case 5:return h=r.sent().filter((function(e){return null!=e&&"string"==typeof e&&""!==e.trim()})),[2,c.createGenerateRendererUniqueValues(h)];case 6:return[2,void 0]}}))}))},t.prototype.generateRenderer=function(e,t){var r=this,a=e.classificationDefinition,n=null,i=null,l=null;d(a)?(n=a.classificationField,i=a.normalizationField,l=a.normalizationType):p(a)&&(n=a.attributeField);var u=this.layer;return o.getFieldsList({field:n,normalizationField:i}).then((function(o){var c=u.createQuery();return c.returnGeometry=!1,c.outFields=o,c.where=s.mergeWhereClauses(c.where,e.where),u.queryFeatures(c,{signal:t}).then((function(e){return r._createGenerateRendererResult(e,n,i,l,a)}))}))},t.prototype.load=function(e){var t=this,r=this.layer.load(e).then((function(e){t.geometryType=e.geometryType,t.objectIdField=e.objectIdField,t.supportsSQLExpression=!0,t._hasLocalSource=!1,t.hasQueryEngine=!0}));return this.addResolvingPromise(r),n.resolve(this)},t=r.__decorate([i.subclass("esri.smartMapping.support.adapters.CSVLayerAdapter")],t)}(l)}));