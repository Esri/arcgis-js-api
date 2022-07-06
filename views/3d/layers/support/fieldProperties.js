/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{fixFields as e,unpackFieldNames as r}from"../../../../layers/support/fieldUtils.js";function i(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,get:function(){const{layer:i,layer:{fieldsIndex:t},requiredFields:l}=this;return i.outFields?e(t,[...r(t,i.outFields),...l]):e(t,l)}}}}export{i as defineFieldProperties};
