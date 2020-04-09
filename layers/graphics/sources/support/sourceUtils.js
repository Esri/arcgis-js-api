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

define(["require","exports","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../support/fieldUtils","@dojo/framework/shim/Promise"],(function(e,t,i,r,n){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){this.code=null,this.description=null},l=function(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e};function u(e){return new l(e)}t.createFeatureEditErrorResult=u;var s=function(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e};t.createFeatureEditSuccessResult=function(e){return new s(e)};var a,c=new Set;function d(e,t){var i=t;return"string"==typeof t&&n.isNumericField(e)?i=parseFloat(t):null!=t&&n.isStringField(e)&&"string"!=typeof t&&(i=String(t)),n.sanitizeNullFieldValue(i)}function f(){return r(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return a?[2,a]:[4,new Promise((function(t,i){e(["../../../../geometry/geometryEngine"],t,i)}))];case 1:return[2,a=t.sent()]}}))}))}t.mixAttributes=function(e,t,i,r,o,l){for(var s in void 0===o&&(o=!1),c.clear(),r){var a=e.get(s);if(a){var f=r[s],h=d(a,f);if(h!==f&&l&&l.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:a,originalValue:f,sanitizedValue:h}}),c.add(a.name),a&&(o||a.editable)){var p=n.validateFieldValue(a,h);if(p)return u(n.validationErrorToString(p,a,h));i[a.name]=h}}}for(var m=0,v=t;m<v.length;m++){var g=v[m];if(!c.has(g.name))return u('missing required field "'+g.name+'"')}return null},t.simplify=function(e,t){if(!e)return e;if("rings"in e||"paths"in e){if(!a)throw new TypeError("geometry engine not loaded");e.spatialReference||(e.spatialReference=t);var i=a.simplify(e);return i?i.toJSON():null}return e},t.loadGeometryEngine=f,t.loadGeometryEngineForSimplify=function(e){return r(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return"esriGeometryPolygon"!==e&&"esriGeometryPolyline"!==e?[3,2]:[4,f()];case 1:t.sent(),t.label=2;case 2:return[2]}}))}))}}));