/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../../../chunks/tslib.es6.js";import r from"../../../../core/Accessor.js";import{property as t}from"../../../../core/accessorSupport/decorators/property.js";import"../../../../core/arrayUtils.js";import"../../../../core/has.js";import{cast as s}from"../../../../core/accessorSupport/decorators/cast.js";import{subclass as e}from"../../../../core/accessorSupport/decorators/subclass.js";import p from"./ButtonMenuItem.js";let c=class extends r{constructor(o){super(o),this.items=null,this.open=!1}castItems(o){return o?o.map((o=>o instanceof p?o:new p(o))):null}};o([t()],c.prototype,"items",void 0),o([s("items")],c.prototype,"castItems",null),o([t()],c.prototype,"open",void 0),c=o([e("esri.widgets.FeatureTable.Grid.support.ButtonMenuViewModel")],c);const i=c;export{i as default};
