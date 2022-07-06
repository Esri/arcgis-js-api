/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{clone as e}from"./lang.js";import t from"./Logger.js";import r from"./Message.js";class s extends r{constructor(e,t,r){if(super(e,t,r),!(this instanceof s))return new s(e,t,r)}toJSON(){if(null!=this.details)try{return{name:this.name,message:this.message,details:JSON.parse(JSON.stringify(this.details,((t,r)=>{if(r&&"object"==typeof r&&"function"==typeof r.toJSON)return r;try{return e(r)}catch(s){return"[object]"}})))}}catch(r){throw t.getLogger("esri.core.Error").error(r),r}return{name:this.name,message:this.message,details:this.details}}static fromJSON(e){return new s(e.name,e.message,e.details)}}s.prototype.type="error";export{s as default};
