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

define(["require","exports","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../support/fieldUtils","@dojo/framework/shim/Promise"],function(e,t,r,i,n){function o(e){return new h(e)}function u(e){return new p(e)}function l(e,t,r,i,u,l){void 0===u&&(u=!1),m.clear();for(var a in i){var c=e.get(a);if(c){var d=i[a],f=s(c,d);if(f!==d&&l&&l.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:c,originalValue:d,sanitizedValue:f}}),m.add(c.name),c&&(u||c.editable)){var h=n.validateFieldValue(c,f);if(h)return o(n.validationErrorToString(h,c,f));r[c.name]=f}}}for(var p=0,v=t;p<v.length;p++){var g=v[p];if(!m.has(g.name))return o('missing required field "'+g.name+'"')}return null}function s(e,t){var r=t;return"string"==typeof t&&n.isNumericField(e)?r=parseFloat(t):null!=t&&n.isStringField(e)&&"string"!=typeof t&&(r=String(t)),n.sanitizeNullFieldValue(r)}function a(e,t){if(!e)return e;if("rings"in e||"paths"in e){if(!v)throw new TypeError("geometry engine not loaded");e.spatialReference||(e.spatialReference=t);var r=v.simplify(e);return r?r.toJSON():null}return e}function c(){return i(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return v?[2,v]:[4,new Promise(function(t,r){e(["../../../../geometry/geometryEngine"],t,r)})];case 1:return v=t.sent(),[2,v]}})})}function d(e){return i(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return"esriGeometryPolygon"!==e&&"esriGeometryPolyline"!==e?[3,2]:[4,c()];case 1:t.sent(),t.label=2;case 2:return[2]}})})}Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(){this.code=null,this.description=null}return e}(),h=function(){function e(e){this.error=new f,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}return e}();t.createFeatureEditErrorResult=o;var p=function(){function e(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}return e}();t.createFeatureEditSuccessResult=u;var m=new Set;t.mixAttributes=l;var v;t.simplify=a,t.loadGeometryEngine=c,t.loadGeometryEngineForSimplify=d});