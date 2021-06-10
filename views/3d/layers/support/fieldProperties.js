/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../layers/support/fieldUtils"],(function(e,i){"use strict";function r(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,get:function(){const{layer:e,layer:{fields:r},requiredFields:t}=this;return e.outFields?i.fixFields(r,[...i.unpackFieldNames(r,e.outFields),...t]):i.fixFields(r,t)}}}}e.defineFieldProperties=r,Object.defineProperty(e,"__esModule",{value:!0})}));
