/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/Logger","./fieldUtils","./Field"],(function(e,i,t,s){"use strict";const l=i.getLogger("esri.layers.support.fieldProperties");e.defineFieldProperties=function(){return{fields:{type:[s],value:null},outFields:{type:[String],dependsOn:["fields"],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){const e=this._userOutFields;if(!e||!e.length)return null;if(e.includes("*"))return["*"];if(!this.fields)return e;for(const i of e){t.hasField(this.fields,i)||l.error("field-attributes-layer:invalid-field",`Invalid field ${i} found in outFields`,{layer:this,outFields:e})}return t.fixFields(this.fields,e)}}}},Object.defineProperty(e,"__esModule",{value:!0})}));
