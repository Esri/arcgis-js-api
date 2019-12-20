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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/Error","../../../../core/accessorSupport/decorators","../../statistics/support/utils","../utils","./FeatureLayerAdapter","./support/utils","../../../../tasks/support/generateRendererUtils"],function(e,r,t,a,n,i,s,o,l,u,c,d,p){function f(e){return"esri.tasks.support.ClassBreaksDefinition"===e.declaredClass}function h(e){return"esri.tasks.support.UniqueValueDefinition"===e.declaredClass}return function(e){function r(r){return e.call(this,r)||this}return t(r,e),r.prototype._createGenerateRendererResult=function(e,r,t,a,o){return i(this,void 0,void 0,function(){var i,l,u,c,y,y;return n(this,function(n){switch(n.label){case 0:if(i=e&&e.features,!(l=i&&i.length))throw new s("csv-layer-adapter:insufficient-data","No features are available to calculate statistics");return u=null,"percent-of-total"!==a?[3,2]:[4,d.calculateStatsFromMemory({field:r},i)];case 1:if(c=n.sent(),null==(u=c.sum))throw new s("csv-layer-adapter:invalid","invalid normalizationTotal");n.label=2;case 2:return f(o)?[4,d.getDataValues({field:r,normalizationType:a,normalizationField:t,normalizationTotal:u},i)]:[3,4];case 3:return y=n.sent().filter(function(e){return null!=e&&d.isValidNumber(e)}),[2,p.createGenerateRendererClassBreaks({definition:o,values:y,normalizationTotal:u})];case 4:return h(o)?[4,d.getDataValues({field:r},i)]:[3,6];case 5:return y=n.sent().filter(function(e){return null!=e&&"string"==typeof e&&""!==e.trim()}),[2,p.createGenerateRendererUniqueValues(y)];case 6:return[2,void 0]}})})},r.prototype.generateRenderer=function(e){var r=this,t=e.classificationDefinition,a=null,n=null,i=null;f(t)?(a=t.classificationField,n=t.normalizationField,i=t.normalizationType):h(t)&&(a=t.attributeField);var s=this.layer;return u.getFieldsList({field:a,normalizationField:n}).then(function(o){var u=s.createQuery();return u.returnGeometry=!1,u.outFields=o,u.where=l.mergeWhereClauses(u.where,e.where),s.queryFeatures(u).then(function(e){return r._createGenerateRendererResult(e,a,n,i,t)})})},r.prototype.load=function(e){var r=this,t=this.layer.load(e).then(function(e){r.geometryType=e.geometryType,r.objectIdField=e.objectIdField,r.supportsSQLExpression=!0,r._hasLocalSource=!1,r.hasQueryEngine=!0});return this.addResolvingPromise(t),this.when()},r=a([o.subclass("esri.renderers.smartMapping.support.adapters.CSVLayerAdapter")],r)}(o.declared(c))});