/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../layers/support/fieldUtils"],(function(e,i){"use strict";e.defineFieldProperties=function(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,dependsOn:["layer.fields","layer.outFields","requiredFields"],get:function(){const{layer:e,layer:{fields:l},requiredFields:r}=this;return e.outFields?i.fixFields(l,[...i.unpackFieldNames(l,e.outFields),...r]):i.fixFields(l,r)}}}},Object.defineProperty(e,"__esModule",{value:!0})}));
