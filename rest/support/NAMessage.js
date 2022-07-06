/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{JSONMap as s}from"../../core/jsonMap.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import t from"./GPMessage.js";const p=new s({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let c=class extends t{constructor(r){super(r),this.type=null}};r([o({type:String,json:{read:p.read,write:p.write}})],c.prototype,"type",void 0),c=r([e("esri.rest.support.NAMessage")],c);const a=c;export{a as default};
