/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var e;function n(e,n){return null===a(e,n)}function a(n,a){switch(n.type){case"range":{const r="range"in n?n.range[0]:n.minValue,u="range"in n?n.range[1]:n.maxValue;if(+a<r||+a>u)return e.VALUE_OUT_OF_RANGE;break}case"coded-value":case"codedValue":if(null==n.codedValues||n.codedValues.every((e=>null==e||e.code!==a)))return e.INVALID_CODED_VALUE}return null}function r(e){if(!e||"range"!==e.type)return;return{min:"range"in e?e.range[0]:e.minValue,max:"range"in e?e.range[1]:e.maxValue}}!function(e){e.VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",e.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value"}(e||(e={}));export{e as DomainValidationError,r as getDomainRange,n as isValidDomainValue,a as validateDomainValue};
