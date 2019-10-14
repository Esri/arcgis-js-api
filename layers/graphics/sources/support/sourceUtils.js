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

define(["require","exports","../../../support/fieldUtils"],function(e,t,i){function r(e){return new s}function n(e){return new o(e)}function u(e){return new d(e)}function a(e,t,r,u,a,s){void 0===a&&(a=!1),c.clear();for(var o in u){var d=e.get(o);if(d){var f=u[o],v=l(d,f);if(v!==f&&s&&s.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:d,originalValue:f,sanitizedValue:v}}),c.add(d.name),d&&(a||d.editable)){var h=i.validateFieldValue(d,v);if(h)return n(i.validationErrorToString(h,d,v));r[d.name]=v}}}for(var g=0,p=t;g<p.length;g++){var m=p[g];if(!c.has(m.name))return n('missing required field "'+m.name+'"')}return null}function l(e,t){var r=t;return"string"==typeof t&&i.isNumericField(e)?r=parseFloat(t):null!=t&&i.isStringField(e)&&"string"!=typeof t&&(r=String(t)),i.sanitizeNullFieldValue(r)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(){this.code=null,this.description=null}return e}();t.createFeatureEditError=r;var o=function(){function e(e){this.error=new s,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}return e}();t.createFeatureEditErrorResult=n;var d=function(){function e(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}return e}();t.createFeatureEditSuccessResult=u;var c=new Set;t.mixAttributes=a});