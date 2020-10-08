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

define(["require","exports","tslib","../../../../geometry/support/spatialReferenceUtils","../../../support/fieldUtils","@dojo/framework/shim/Promise"],(function(e,i,t,r,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.loadGeometryEngineForSimplify=i.loadGeometryEngine=i.simplify=i.mixAttributes=i.createFeatureEditSuccessResult=i.createFeatureEditErrorResult=void 0;var s=function(){this.code=null,this.description=null},o=function(e){this.error=new s,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e};function a(e){return new o(e)}i.createFeatureEditErrorResult=a;var l=function(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e};i.createFeatureEditSuccessResult=function(e){return new l(e)};var u,d=new Set;function c(e,i){var t=i;return"string"==typeof i&&n.isNumericField(e)?t=parseFloat(i):null!=i&&n.isStringField(e)&&"string"!=typeof i&&(t=String(i)),n.sanitizeNullFieldValue(t)}function f(){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(i){switch(i.label){case 0:return u?[2,u]:[4,new Promise((function(i,t){e(["../../../../geometry/geometryEngineJSON"],i,t)}))];case 1:return[2,u=i.sent()]}}))}))}i.mixAttributes=function(e,i,t,r,s,o){for(var l in void 0===s&&(s=!1),d.clear(),r){var u=e.get(l);if(u){var f=r[l],m=c(u,f);if(m!==f&&o&&o.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:u,originalValue:f,sanitizedValue:m}}),d.add(u.name),u&&(s||u.editable)){var g=n.validateFieldValue(u,m);if(g)return a(n.validationErrorToString(g,u,m));t[u.name]=m}}}for(var h=0,v=i;h<v.length;h++){var y=v[h];if(!d.has(y.name))return a('missing required field "'+y.name+'"')}return null},i.simplify=function(e,i){if(!e||!r.isValid(i))return e;if("rings"in e||"paths"in e){if(!u)throw new TypeError("geometry engine not loaded");return u.simplify(i,e)}return e},i.loadGeometryEngine=f,i.loadGeometryEngineForSimplify=function(e,i){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){switch(t.label){case 0:return!r.isValid(e)||"esriGeometryPolygon"!==i&&"esriGeometryPolyline"!==i?[3,2]:[4,f()];case 1:t.sent(),t.label=2;case 2:return[2]}}))}))}}));