// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/asyncUtils","../../../../core/Error","../../../../core/promiseUtils","../../../../core/accessorSupport/decorators","../../statistics/support/utils","../utils","./FeatureLayerAdapter","./support/utils","../../../../tasks/support/generateRendererUtils"],function(e,r,t,a,n,i,s,o,l,u,c,d,p,f,h){function y(e){return"esri.tasks.support.ClassBreaksDefinition"===e.declaredClass}function m(e){return"esri.tasks.support.UniqueValueDefinition"===e.declaredClass}return function(e){function r(r){return e.call(this,r)||this}return t(r,e),r.prototype._createGenerateRendererResult=function(e,r,t,a,s){return i(this,void 0,void 0,function(){var i,u,c,d,p,p;return n(this,function(n){switch(n.label){case 0:return i=e&&e.features,(u=i&&i.length)?(c=null,"percent-of-total"!==a?[3,2]:[4,f.calculateStatsFromMemory({field:r},i)]):[2,l.reject(new o("csv-layer-adapter:insufficient-data","No features are available to calculate statistics"))];case 1:if(d=n.sent(),null==(c=d.sum))return[2,l.reject(new o("csv-layer-adapter:invalid","invalid normalizationTotal"))];n.label=2;case 2:return y(s)?[4,f.getDataValues({field:r,normalizationType:a,normalizationField:t,normalizationTotal:c},i)]:[3,4];case 3:return p=n.sent().filter(function(e){return null!=e&&f.isValidNumber(e)}),[2,h.createGenerateRendererClassBreaks({definition:s,values:p,normalizationTotal:c})];case 4:return m(s)?[4,f.getDataValues({field:r},i)]:[3,6];case 5:return p=n.sent().filter(function(e){return null!=e&&"string"==typeof e&&""!==e.trim()}),[2,h.createGenerateRendererUniqueValues(p)];case 6:return[2,void 0]}})})},r.prototype.generateRenderer=function(e){var r=this,t=e.classificationDefinition,a=null,n=null,i=null;y(t)?(a=t.classificationField,n=t.normalizationField,i=t.normalizationType):m(t)&&(a=t.attributeField);var o=this.layer;return s.safeCast(d.getFieldsList({field:a,normalizationField:n})).then(function(l){var u=o.createQuery();return u.returnGeometry=!1,u.outFields=l,u.where=c.mergeWhereClauses(u.where,e.where),o.queryFeatures(u).then(function(e){return s.safeCast(r._createGenerateRendererResult(e,a,n,i,t))})})},r.prototype.load=function(e){var r=this,t=this.layer.load(e).then(function(e){r.geometryType=e.geometryType,r.objectIdField=e.objectIdField,r.supportsSQLExpression=!0,r._hasLocalSource=!1,r.hasQueryEngine=!0});return this.addResolvingPromise(t),this.when()},r=a([u.subclass("esri.renderers.smartMapping.support.adapters.CSVLayerAdapter")],r)}(u.declared(p))});