/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import{JSONSupport as r}from"../core/JSONSupport.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/arrayUtils.js";import"../core/has.js";import"../core/accessorSupport/ensureType.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";var e;let p=e=class extends r{constructor(o){super(o),this.returnTopmostRaster=null,this.showNoDataRecords=null}clone(){return new e({showNoDataRecords:this.showNoDataRecords,returnTopmostRaster:this.returnTopmostRaster})}};o([s({type:Boolean,json:{write:!0}})],p.prototype,"returnTopmostRaster",void 0),o([s({type:Boolean,json:{write:!0}})],p.prototype,"showNoDataRecords",void 0),p=e=o([t("esri.popup.LayerOptions")],p);const a=p;export{a as default};
