/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import{ClonableMixin as r}from"../../core/Clonable.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import p from"./ExpressionInfo.js";let i=class extends(r(s)){constructor(o){super(o),this.expressionInfo=null,this.requestedActions=null}};o([e({type:p,json:{write:!0}})],i.prototype,"expressionInfo",void 0),o([e({type:[String],json:{write:!0}})],i.prototype,"requestedActions",void 0),i=o([t("esri.webdoc.geotriggersInfo.GeotriggerNotificationOptions")],i);const c=i;export{c as default};
