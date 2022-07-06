/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import o from"./mixins/ChartMediaInfo.js";import{chartTypeKebabDict as s}from"./support/chartMediaInfoUtils.js";var i;let a=i=class extends o{constructor(t){super(t),this.type="line-chart"}clone(){return new i({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};t([r({type:["line-chart"],readOnly:!0,json:{type:["linechart"],read:!1,write:s.write}})],a.prototype,"type",void 0),a=i=t([e("esri.popup.content.LineChartMediaInfo")],a);const p=a;export{p as default};
