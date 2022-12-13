/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../layers/support/fieldUtils"],(function(e,i){"use strict";function l(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,get:function(){const{layer:e,layer:{fieldsIndex:l},requiredFields:t}=this;return e.outFields?i.fixFields(l,[...i.unpackFieldNames(l,e.outFields),...t]):i.fixFields(l,t)}}}}e.defineFieldProperties=l,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
