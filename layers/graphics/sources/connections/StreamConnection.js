/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../../../chunks/tslib.es6.js";import e from"../../../../core/Evented.js";import{HandleOwner as s}from"../../../../core/HandleOwner.js";import"../../../../core/Logger.js";import"../../../../core/accessorSupport/ensureType.js";import"../../../../core/arrayUtils.js";import"../../../../core/has.js";import"../../../../core/accessorSupport/set.js";import{subclass as o}from"../../../../core/accessorSupport/decorators/subclass.js";let t=class extends(e.EventedMixin(s)){onFeature(r){this.emit("feature",r)}};t=r([o("esri.layers.graphics.sources.connections.StreamConnection")],t);const c=t;export{c as default};
