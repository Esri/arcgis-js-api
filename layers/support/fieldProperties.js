/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../core/Logger","./Field","./FieldsIndex","./fieldUtils"],(function(e,i,t,s,l){"use strict";const n=i.getLogger("esri.layers.support.fieldProperties");function r(){return{fields:{type:[t],value:null},fieldsIndex:{readOnly:!0,get(){return new s(this.fields||[])}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){const e=this._userOutFields;if(!e||!e.length)return null;if(e.includes("*"))return["*"];if(!this.fields)return e;for(const i of e){this.fieldsIndex.has(i)||n.error("field-attributes-layer:invalid-field",`Invalid field ${i} found in outFields`,{layer:this,outFields:e})}return l.fixFields(this.fieldsIndex,e)}}}}e.defineFieldProperties=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
