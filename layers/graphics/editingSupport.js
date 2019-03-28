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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/tsSupport/assignHelper","../../Graphic","../../core/Error","../../core/lang","../../core/promiseUtils","../../geometry/support/normalizeUtils"],function(e,t,r,a,u,s,n,i,d,o){function l(e){return!0===e.get("capabilities.operations.supportsEditing")}function p(e){return e&&null!=e.applyEdits}function c(e,t){return a(this,void 0,void 0,function(){var a,u,s,o,l,c,f,y,g;return r(this,function(r){switch(r.label){case 0:return s={edits:t,result:d.create(function(e,t){a=e,u=t})},e.emit("apply-edits",s),[4,e.load()];case 1:return r.sent(),o=e.source,p(o)?e.editingEnabled?[4,F(e,t)]:[2,d.reject(new n(e.type+"-layer:editing-disabled","Editing is disabled for layer",{layer:e}))]:[2,d.reject(new n(e.type+"-layer:no-editing-support","Layer source does not support applyEdits capability",{layer:e}))];case 2:l=r.sent(),r.label=3;case 3:return r.trys.push([3,5,,6]),[4,o.applyEdits(l)];case 4:return c=r.sent(),f=function(e){return e.filter(function(e){return!e.error}).map(i.clone)},y={addedFeatures:f(c.addFeatureResults),updatedFeatures:f(c.updateFeatureResults),deletedFeatures:f(c.deleteFeatureResults)},(y.addedFeatures.length||y.updatedFeatures.length||y.deletedFeatures.length)&&e.emit("edits",y),a(y),[2,c];case 5:throw g=r.sent(),u(g),g;case 6:return[2]}})})}function F(e,t){return a(this,void 0,void 0,function(){var a;return r(this,function(r){return a="'addFeatures', 'updateFeatures' or 'deleteFeatures' parameter is required",t&&(t.addFeatures||t.deleteFeatures||t.updateFeatures||t.addFeatures.length||t.deleteFeatures.length||t.updateFeatures.length)?(t=u({},t),t.addFeatures=t.addFeatures||[],t.updateFeatures=t.updateFeatures||[],t.deleteFeatures=t.deleteFeatures||[],t.addFeatures=t.addFeatures.map(y),t.updateFeatures=t.updateFeatures.map(y),[2,f(t)]):[2,d.reject(new n(e.type+"-layer:missing-parameters",a))]})})}function f(e){return a(this,void 0,void 0,function(){var t,a,u,s,n,i;return r(this,function(r){switch(r.label){case 0:return t=e.addFeatures,a=e.updateFeatures,u=t.concat(a).map(function(e){return e.geometry}),[4,o.normalizeCentralMeridian(u)];case 1:return s=r.sent(),n=t.length,i=a.length,s.slice(0,n).forEach(function(t,r){e.addFeatures[r].geometry=t}),s.slice(n,n+i).forEach(function(t,r){e.updateFeatures[r].geometry=t}),[2,e]}})})}function y(e){var t=new s;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}Object.defineProperty(t,"__esModule",{value:!0}),t.isEditableLayer=l,t.applyEdits=c});