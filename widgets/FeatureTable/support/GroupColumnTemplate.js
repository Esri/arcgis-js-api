/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../../chunks/tslib.es6.js";import{property as r}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as e}from"../../../core/accessorSupport/decorators/subclass.js";import s from"./ColumnTemplateBase.js";let t=class extends s{constructor(o){super(o),this.columnTemplates=null,this.type="group"}};o([r({json:{write:!0}})],t.prototype,"columnTemplates",void 0),o([r({type:String,json:{read:!1,write:!0}})],t.prototype,"type",void 0),t=o([e("esri.widgets.FeatureTable.GroupColumnTemplate")],t);const p=t;export{p as default};
