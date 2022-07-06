/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../../chunks/tslib.es6.js";import{property as o}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as e}from"../../../core/accessorSupport/decorators/subclass.js";import s from"./ColumnTemplateBase.js";import{EditableColumnTemplateMixin as t}from"./EditableColumnTemplateMixin.js";let p=class extends(t(s)){constructor(r){super(r),this.type="column"}};r([o({type:String,json:{read:!1,write:!0}})],p.prototype,"type",void 0),p=r([e("esri.widgets.FeatureTable.support.ColumnTemplate")],p);const a=p;export{a as default};
