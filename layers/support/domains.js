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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","./CodedValueDomain","./Domain","./InheritedDomain","./RangeDomain"],function(e,a,n,i,o,r){function u(e,a){return null===l(e,a)}function l(e,a){switch(e.type){case"range":var n="range"in e?e.range[0]:e.minValue,i="range"in e?e.range[1]:e.maxValue;if(+a<n||+a>i)return m.VALUE_OUT_OF_RANGE;break;case"coded-value":case"codedValue":if(null==e.codedValues||e.codedValues.every(function(e){return null==e||e.code!==a}))return m.INVALID_CODED_VALUE}return null}function d(e){if(e&&"range"===e.type){return{min:"range"in e?e.range[0]:e.minValue,max:"range"in e?e.range[1]:e.maxValue}}}function t(e){return e&&e.type?"range"===e.type?a.RangeDomain.fromJSON(e):"codedValue"===e.type?a.CodedValueDomain.fromJSON(e):null:null}Object.defineProperty(a,"__esModule",{value:!0}),a.CodedValueDomain=n,a.DomainBase=i,a.InheritedDomain=o,a.RangeDomain=r;var m;!function(e){e.VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",e.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value"}(m=a.DomainValidationError||(a.DomainValidationError={})),a.isValidDomainValue=u,a.validateDomainValue=l,a.types={key:"type",base:a.DomainBase,typeMap:{range:a.RangeDomain,"coded-value":a.CodedValueDomain}},a.getDomainRange=d,a.fromJSON=t});