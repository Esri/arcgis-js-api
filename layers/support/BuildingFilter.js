/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import r from"../../core/Collection.js";import{JSONSupport as t}from"../../core/JSONSupport.js";import{clone as e}from"../../core/lang.js";import{generateUUID as i}from"../../core/uuid.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/accessorSupport/ensureType.js";import{subclass as n}from"../../core/accessorSupport/decorators/subclass.js";import p from"./BuildingFilterAuthoringInfo.js";import l from"./BuildingFilterAuthoringInfoCheckbox.js";import c from"./BuildingFilterBlock.js";var u;const d=r.ofType(c);let m=u=class extends t{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=i(),this.name=null}clone(){return new u({description:this.description,filterBlocks:e(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:e(this.filterAuthoringInfo)})}};o([s({type:String,json:{write:!0}})],m.prototype,"description",void 0),o([s({type:d,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"filterBlocks",void 0),o([s({types:{key:"type",base:p,typeMap:{checkbox:l}},json:{read:o=>"checkbox"===(o&&o.type)?l.fromJSON(o):null,write:!0}})],m.prototype,"filterAuthoringInfo",void 0),o([s({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"id",void 0),o([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"name",void 0),m=u=o([n("esri.layers.support.BuildingFilter")],m);const f=m;export{f as default};