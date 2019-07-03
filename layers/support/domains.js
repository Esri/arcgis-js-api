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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/compilerUtils","./CodedValueDomain","./Domain","./InheritedDomain","./RangeDomain"],function(e,n,a,r,i,o,u){function t(e,n){return null===d(e,n)}function d(e,n){switch(e.type){case"range":var a="range"in e?e.range[0]:e.minValue,r="range"in e?e.range[1]:e.maxValue;if(+n<a||+n>r)return c.VALUE_OUT_OF_RANGE;break;case"coded-value":case"codedValue":if(null==e.codedValues||e.codedValues.every(function(e){return null==e||e.code!==n}))return c.INVALID_CODED_VALUE}return null}function l(e){if(e&&"range"===e.type){return{min:"range"in e?e.range[0]:e.minValue,max:"range"in e?e.range[1]:e.maxValue}}}function m(e){if(!e||!e.type)return null;switch(e.type){case"range":return n.RangeDomain.fromJSON(e);case"codedValue":return n.CodedValueDomain.fromJSON(e);case"inherited":return n.InheritedDomain.fromJSON(e);default:a.neverReached(e)}return null}Object.defineProperty(n,"__esModule",{value:!0}),n.CodedValueDomain=r,n.DomainBase=i,n.InheritedDomain=o,n.RangeDomain=u;var c;!function(e){e.VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",e.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value"}(c=n.DomainValidationError||(n.DomainValidationError={})),n.isValidDomainValue=t,n.validateDomainValue=d,n.types={key:"type",base:n.DomainBase,typeMap:{range:n.RangeDomain,"coded-value":n.CodedValueDomain,inherited:n.InheritedDomain}},n.getDomainRange=l,n.fromJSON=m});