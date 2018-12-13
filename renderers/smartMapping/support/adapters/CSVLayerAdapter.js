// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/Error","../../../../core/promiseUtils","../../../../core/accessorSupport/decorators","../../statistics/support/utils","../utils","./FeatureLayerAdapter","./support/utils","../../../../tasks/support/generateRendererUtils"],function(e,r,t,i,a,n,l,s,o,u,c,d){function p(e){return"esri.tasks.support.ClassBreaksDefinition"===e.declaredClass}function f(e){return"esri.tasks.support.UniqueValueDefinition"===e.declaredClass}return function(e){function r(r){return e.call(this,r)||this}return t(r,e),r.prototype.generateRenderer=function(e){var r=e.classificationDefinition,t=null,i=null,l=null;p(r)?(t=r.classificationField,i=r.normalizationField,l=r.normalizationType):f(r)&&(t=r.attributeField);var u=this.layer,y=o.getFieldsList({field:t,normalizationField:i}),m=u.createQuery();return m.returnGeometry=!1,m.outFields=y,m.where=s.mergeWhereClauses(m.where,e.where),this.layer.queryFeatures(m).then(function(e){var s=e&&e.features;if(!s||!s.length)return n.reject(new a("csv-layer-adapter:insufficient-data","No features are available to calculate statistics"));var o=null;if("percent-of-total"===l&&null==(o=c.calculateStatsFromMemory({field:t},s).sum))return n.reject(new a("csv-layer-adapter:invalid","invalid normalizationTotal"));if(p(r)){var u=c.getDataValues({field:t,normalizationType:l,normalizationField:i,normalizationTotal:o},s).filter(function(e){return null!=e&&c.isValidNumber(e)});return d.createGenerateRendererClassBreaks({definition:r,values:u,normalizationTotal:o})}if(f(r)){var u=c.getDataValues({field:t},s).filter(function(e){return null!=e&&"string"==typeof e&&""!==e.trim()});return d.createGenerateRendererUniqueValues(u)}})},r.prototype.load=function(){var e=this,r=this.layer,t=r.load().then(function(){e.geometryType=r.geometryType,e.objectIdField=r.objectIdField,e.supportsSQLExpression=!0,e._hasLocalSource=!1,e.hasQueryEngine=!0});return this.addResolvingPromise(t),this.when()},r=i([l.subclass()],r)}(l.declared(u))});