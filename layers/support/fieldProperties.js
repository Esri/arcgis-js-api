/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../core/Logger","./Field","./FieldsIndex","./fieldUtils"],(function(e,i,t,s,n){"use strict";const r=i.getLogger("esri.layers.support.fieldProperties");function l(){return{fields:{type:[t],value:null},fieldsIndex:{readOnly:!0,get(){return new s(this.fields||[])}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){const e=this._userOutFields;if(!e||!e.length)return null;if(e.includes("*"))return["*"];if(!this.fields)return e;for(const i of e){this.fieldsIndex.has(i)||r.error("field-attributes-layer:invalid-field",`Invalid field ${i} found in outFields`,{layer:this,outFields:e})}return n.fixFields(this.fieldsIndex,e)}}}}e.defineFieldProperties=l,Object.defineProperty(e,"__esModule",{value:!0})}));
