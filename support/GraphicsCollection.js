/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import o from"../Graphic.js";import"../core/Logger.js";import{ensureType as e}from"../core/accessorSupport/ensureType.js";import"../core/arrayUtils.js";import"../core/has.js";import"../core/accessorSupport/set.js";import{shared as s}from"../core/accessorSupport/decorators/shared.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import{OwningCollection as p}from"../core/support/OwningCollection.js";let c=class extends p{_own(r){r.layer&&"remove"in r.layer&&r.layer!==this.owner&&r.layer.remove(r),r.layer=this.owner}_release(r){r.layer===this.owner&&(r.layer=null)}};r([s({Type:o,ensureType:e(o)})],c.prototype,"itemType",void 0),c=r([t("esri.support.GraphicsCollection")],c);export{c as GraphicsCollection};
