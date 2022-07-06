/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{ClonableMixin as o}from"../../core/Clonable.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";let p=class extends(o(e)){constructor(r){super(r),this.expression=null,this.returnType="string",this.title=null}};r([s({type:String,json:{write:{isRequired:!0}}})],p.prototype,"expression",void 0),r([s({type:["number","string"],json:{write:!0}})],p.prototype,"returnType",void 0),r([s({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=r([t("esri.webdoc.geotriggersInfo.ExpressionInfo")],p);const i=p;export{i as default};
