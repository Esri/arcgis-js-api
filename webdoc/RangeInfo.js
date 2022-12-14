/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{JSONSupport as t}from"../core/JSONSupport.js";import{clone as r}from"../core/lang.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/accessorSupport/ensureType.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";var s;let a=s=class extends t{constructor(e){super(e),this.activeRange=null,this.currentRangeExtent=null,this.fullRangeExtent=null}clone(){return new s(r({activeRange:this.activeRange,currentRangeExtent:this.currentRangeExtent,fullRangeExtent:this.fullRangeExtent}))}};e([o({type:String,nonNullable:!0,json:{read:{source:"activeRangeName"},write:{target:"activeRangeName",isRequired:!0}}})],a.prototype,"activeRange",void 0),e([o({type:[Number],json:{write:!0}})],a.prototype,"currentRangeExtent",void 0),e([o({type:[Number],json:{write:!0}})],a.prototype,"fullRangeExtent",void 0),a=s=e([n("esri.webdoc.RangeInfo")],a);const c=a;export{c as default};