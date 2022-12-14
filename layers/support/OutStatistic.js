/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";var r;let e=r=class extends s{constructor(){super(...arguments),this.statisticType=null,this.onStatisticField=null,this.onStatisticValueExpression=null}clone(){return new r({statisticType:this.statisticType,onStatisticField:this.onStatisticField,onStatisticValueExpression:this.onStatisticValueExpression})}};t([i({type:String,json:{write:!0}})],e.prototype,"statisticType",void 0),t([i({type:String,json:{write:!0}})],e.prototype,"onStatisticField",void 0),t([i({type:String,json:{write:!0}})],e.prototype,"onStatisticValueExpression",void 0),e=r=t([o("esri.layers.support.OutStatistic")],e);const p=e;export{p as default};