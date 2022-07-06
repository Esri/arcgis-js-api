/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../../chunks/tslib.es6.js";import s from"../../../Basemap.js";import o from"../../../core/Accessor.js";import e from"../../../core/Collection.js";import{property as t}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as p}from"../../../core/accessorSupport/decorators/subclass.js";const a=e.ofType(s);let c=class extends o{constructor(r){super(r),this.basemaps=new a}get state(){return"ready"}refresh(){}};r([t({type:a})],c.prototype,"basemaps",void 0),r([t({readOnly:!0})],c.prototype,"state",null),c=r([p("esri.widgets.BasemapGallery.support.LocalBasemapsSource")],c);const m=c;export{m as default};
