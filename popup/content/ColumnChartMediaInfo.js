/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import e from"./mixins/ChartMediaInfo.js";import{chartTypeKebabDict as s}from"./support/chartMediaInfoUtils.js";var a;let p=a=class extends e{constructor(t){super(t),this.type="column-chart"}clone(){return new a({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};t([r({type:["column-chart"],readOnly:!0,json:{type:["columnchart"],read:!1,write:s.write}})],p.prototype,"type",void 0),p=a=t([o("esri.popup.content.ColumnChartMediaInfo")],p);const c=p;export{c as default};
