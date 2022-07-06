/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import{JSONSupport as r}from"../core/JSONSupport.js";import{clone as e}from"../core/lang.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/accessorSupport/ensureType.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import p from"./support/RelatedRecordsInfoFieldOrder.js";var d;let c=d=class extends r{constructor(o){super(o),this.showRelatedRecords=null,this.orderByFields=null}clone(){return new d({showRelatedRecords:this.showRelatedRecords,orderByFields:this.orderByFields?e(this.orderByFields):null})}};o([s({type:Boolean,json:{write:!0}})],c.prototype,"showRelatedRecords",void 0),o([s({type:[p],json:{write:!0}})],c.prototype,"orderByFields",void 0),c=d=o([t("esri.popup.RelatedRecordsInfo")],c);const l=c;export{l as default};
