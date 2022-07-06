/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import s from"./WGLDisplayRecord.js";import{serializeList as i,deserializeList as t}from"./util/serializationUtils.js";class e{constructor(s){this.insertAfter=null,this.id=s,this.displayRecords=[]}copy(){const s=new e(this.id);return s.set(this),s}clone(){const s=new e(this.id);return s.displayRecords=this.displayRecords.map((s=>s.clone())),s.insertAfter=this.insertAfter,s}set(s){this.id=s.id,this.displayRecords=s.displayRecords,this.insertAfter=s.insertAfter}serialize(s){return s.push(this.id),i(s,this.displayRecords),s}static deserialize(i){const r=i.readInt32(),d=new e(r),o={id:r};return d.displayRecords=t(i,s,o),d}}export{e as default};
