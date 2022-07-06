/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import o from"./mixins/ChartMediaInfo.js";import{chartTypeKebabDict as s}from"./support/chartMediaInfoUtils.js";var p;let i=p=class extends o{constructor(t){super(t),this.type="pie-chart"}clone(){return new p({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};t([r({type:["pie-chart"],readOnly:!0,json:{type:["piechart"],read:!1,write:s.write}})],i.prototype,"type",void 0),i=p=t([e("esri.popup.content.PieChartMediaInfo")],i);const a=i;export{a as default};
