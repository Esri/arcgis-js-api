/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import{featureReferenceEquals as r,featureReferenceProperty as e}from"./featureReferenceUtils.js";import s from"../core/Accessor.js";import{ClonableMixin as t}from"../core/Clonable.js";import{JSONSupportMixin as i}from"../core/JSONSupport.js";import{equalsMaybe as p}from"../core/maybe.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import"../core/arrayUtils.js";import"../core/has.js";import"../core/accessorSupport/ensureType.js";import{subclass as c}from"../core/accessorSupport/decorators/subclass.js";import{persistable as n}from"../core/accessorSupport/decorators/persistable.js";import m from"../geometry/Point.js";import l from"../symbols/support/ElevationInfo.js";let f=class extends(i(t(s))){constructor(o){super(o),this.position=null,this.elevationInfo=null,this.feature=null}equals(o){return p(this.position,o.position)&&p(this.elevationInfo,o.elevationInfo)&&r(this.feature,o.feature)}};o([a({type:m}),n()],f.prototype,"position",void 0),o([a({type:l}),n()],f.prototype,"elevationInfo",void 0),o([a(e)],f.prototype,"feature",void 0),f=o([c("esri.analysis.LineOfSightAnalysisObserver")],f);const u=f;export{u as default};