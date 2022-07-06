/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import o from"../core/Logger.js";import{isNone as r}from"../core/maybe.js";import"../core/accessorSupport/ensureType.js";import"../core/arrayUtils.js";import"../core/has.js";import"../core/accessorSupport/set.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import{OwningCollection as t}from"../core/support/OwningCollection.js";const i=o.getLogger("esri.support.AnalysesCollection");let n=class extends t{constructor(e){super(e),this.handles.add(this.on("before-add",(e=>{r(e.item)||e.item.parent===this.owner&&(i.warn("Analysis inside the collection must be unique. Not adding this element again."),e.preventDefault())})))}_own(e){e.parent=this.owner}_release(e){e.parent=null}};n=e([s("esri.support.AnalysesCollection")],n);export{n as AnalysesCollection};
