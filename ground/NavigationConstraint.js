/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import{JSONSupport as r}from"../core/JSONSupport.js";import"../core/Logger.js";import"../core/accessorSupport/ensureType.js";import"../core/arrayUtils.js";import"../core/has.js";import"../core/accessorSupport/set.js";import{enumeration as e}from"../core/accessorSupport/decorators/enumeration.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";var t;let p=t=class extends r{constructor(o){super(o),this.type="none"}clone(){return new t({type:this.type})}};o([e({none:"none",stayAbove:"stay-above"})],p.prototype,"type",void 0),p=t=o([s("esri.ground.NavigationConstraint")],p);export{p as NavigationConstraint};
