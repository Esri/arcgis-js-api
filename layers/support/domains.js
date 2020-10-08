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

define(["require","exports","../../core/compilerUtils","./CodedValueDomain","./Domain","./InheritedDomain","./RangeDomain"],(function(e,a,n,i,r,o,t){"use strict";var u;function l(e,a){switch(e.type){case"range":var n="range"in e?e.range[0]:e.minValue,i="range"in e?e.range[1]:e.maxValue;if(+a<n||+a>i)return u.VALUE_OUT_OF_RANGE;break;case"coded-value":case"codedValue":if(null==e.codedValues||e.codedValues.every((function(e){return null==e||e.code!==a})))return u.INVALID_CODED_VALUE}return null}Object.defineProperty(a,"__esModule",{value:!0}),a.fromJSON=a.getDomainRange=a.types=a.validateDomainValue=a.isValidDomainValue=a.DomainValidationError=a.RangeDomain=a.InheritedDomain=a.DomainBase=a.CodedValueDomain=void 0,a.CodedValueDomain=i,a.DomainBase=r,a.InheritedDomain=o,a.RangeDomain=t,function(e){e.VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",e.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value"}(u=a.DomainValidationError||(a.DomainValidationError={})),a.isValidDomainValue=function(e,a){return null===l(e,a)},a.validateDomainValue=l,a.types={key:"type",base:r,typeMap:{range:t,"coded-value":i,inherited:o}},a.getDomainRange=function(e){if(e&&"range"===e.type)return{min:"range"in e?e.range[0]:e.minValue,max:"range"in e?e.range[1]:e.maxValue}},a.fromJSON=function(e){if(!e||!e.type)return null;switch(e.type){case"range":return t.fromJSON(e);case"codedValue":return i.fromJSON(e);case"inherited":return o.fromJSON(e);default:n.neverReached(e)}return null}}));