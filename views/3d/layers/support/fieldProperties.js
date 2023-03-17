/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../layers/support/fieldUtils"],(function(e,i){"use strict";function t(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,get:function(){const{layer:e,layer:{fieldsIndex:t},requiredFields:r}=this;return e.outFields?i.fixFields(t,[...i.unpackFieldNames(t,e.outFields),...r]):i.fixFields(t,r)}}}}e.defineFieldProperties=t,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
