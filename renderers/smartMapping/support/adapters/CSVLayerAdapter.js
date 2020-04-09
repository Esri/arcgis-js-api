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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/Error","../../../../core/promiseUtils","../../../../core/accessorSupport/decorators","../../statistics/support/utils","../utils","./FeatureLayerAdapter","./support/utils","../../../../tasks/support/generateRendererUtils"],(function(e,r,t,a,n,i,s,o,l,u,c,d,p,f){function h(e){return"esri.tasks.support.ClassBreaksDefinition"===e.declaredClass}function y(e){return"esri.tasks.support.UniqueValueDefinition"===e.declaredClass}return function(e){function r(r){return e.call(this,r)||this}return t(r,e),r.prototype._createGenerateRendererResult=function(e,r,t,a,o){return i(this,void 0,void 0,(function(){var i,l,u,c;return n(this,(function(n){switch(n.label){case 0:if(i=e&&e.features,!(i&&i.length))throw new s("csv-layer-adapter:insufficient-data","No features are available to calculate statistics");return l=null,"percent-of-total"!==a?[3,2]:[4,p.calculateStatsFromMemory({field:r},i)];case 1:if(u=n.sent(),null==(l=u.sum))throw new s("csv-layer-adapter:invalid","invalid normalizationTotal");n.label=2;case 2:return h(o)?[4,p.getDataValues({field:r,normalizationType:a,normalizationField:t,normalizationTotal:l},i)]:[3,4];case 3:return c=n.sent().filter((function(e){return null!=e&&p.isValidNumber(e)})),[2,f.createGenerateRendererClassBreaks({definition:o,values:c,normalizationTotal:l})];case 4:return y(o)?[4,p.getDataValues({field:r},i)]:[3,6];case 5:return c=n.sent().filter((function(e){return null!=e&&"string"==typeof e&&""!==e.trim()})),[2,f.createGenerateRendererUniqueValues(c)];case 6:return[2,void 0]}}))}))},r.prototype.generateRenderer=function(e,r){var t=this,a=e.classificationDefinition,n=null,i=null,s=null;h(a)?(n=a.classificationField,i=a.normalizationField,s=a.normalizationType):y(a)&&(n=a.attributeField);var o=this.layer;return c.getFieldsList({field:n,normalizationField:i}).then((function(l){var c=o.createQuery();return c.returnGeometry=!1,c.outFields=l,c.where=u.mergeWhereClauses(c.where,e.where),o.queryFeatures(c,{signal:r}).then((function(e){return t._createGenerateRendererResult(e,n,i,s,a)}))}))},r.prototype.load=function(e){var r=this,t=this.layer.load(e).then((function(e){r.geometryType=e.geometryType,r.objectIdField=e.objectIdField,r.supportsSQLExpression=!0,r._hasLocalSource=!1,r.hasQueryEngine=!0}));return this.addResolvingPromise(t),o.resolve(this)},r=a([l.subclass("esri.renderers.smartMapping.support.adapters.CSVLayerAdapter")],r)}(l.declared(d))}));