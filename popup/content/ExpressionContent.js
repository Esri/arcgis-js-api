/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import s from"../ElementExpressionInfo.js";import t from"./Content.js";var p;let n=p=class extends t{constructor(o){super(o),this.expressionInfo=null,this.type="expression"}clone(){return new p({expressionInfo:this.expressionInfo?.clone()})}};o([e({type:s,json:{write:!0}})],n.prototype,"expressionInfo",void 0),o([e({type:["expression"],readOnly:!0,json:{read:!1,write:!0}})],n.prototype,"type",void 0),n=p=o([r("esri.popup.content.ExpressionContent")],n);const i=n;export{i as default};
