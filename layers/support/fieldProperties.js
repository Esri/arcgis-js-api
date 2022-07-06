/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../core/Logger.js";import i from"./Field.js";import t from"./FieldsIndex.js";import{fixFields as r}from"./fieldUtils.js";const s=e.getLogger("esri.layers.support.fieldProperties");function l(){return{fields:{type:[i],value:null},fieldsIndex:{readOnly:!0,get(){return new t(this.fields||[])}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){const e=this._userOutFields;if(!e||!e.length)return null;if(e.includes("*"))return["*"];if(!this.fields)return e;for(const i of e){this.fieldsIndex.has(i)||s.error("field-attributes-layer:invalid-field",`Invalid field ${i} found in outFields`,{layer:this,outFields:e})}return r(this.fieldsIndex,e)}}}}export{l as defineFieldProperties};
