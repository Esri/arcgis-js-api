/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../core/Logger","./Field","./FieldsIndex","./fieldUtils"],(function(e,i,t,s,n){"use strict";function r(){return{fields:{type:[t],value:null},fieldsIndex:{readOnly:!0,get(){return new s(this.fields||[])}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){const e=this._userOutFields;if(!e||!e.length)return null;if(e.includes("*"))return["*"];if(!this.fields)return e;for(const t of e){const s=this.fieldsIndex?.has(t);s||i.getLogger("esri.layers.support.fieldProperties").error("field-attributes-layer:invalid-field",`Invalid field ${t} found in outFields`,{layer:this,outFields:e})}return n.fixFields(this.fieldsIndex,e)}}}}e.defineFieldProperties=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
