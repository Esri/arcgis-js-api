/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../../chunks/tslib.es6.js";import{property as o}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as t}from"../../../core/accessorSupport/decorators/subclass.js";import e from"./MediaInfo.js";import s from"../support/ChartMediaInfoValue.js";let p=class extends e{constructor(r){super(r),this.type=null,this.value=null}};r([o({type:["bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],p.prototype,"type",void 0),r([o({type:s,json:{write:!0}})],p.prototype,"value",void 0),p=r([t("esri.popup.content.mixins.ChartMediaInfo")],p);const a=p;export{a as default};
