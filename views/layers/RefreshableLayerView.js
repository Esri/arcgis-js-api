/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Logger","../../core/promiseUtils","../../core/reactiveUtils","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,r,s,o,t,i,c,a,n){"use strict";const l=c=>{let a=function(r){function i(){return r.apply(this,arguments)||this}return e._inheritsLoose(i,r),i.prototype.initialize=function(){this.handles.add(t.on((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{o.isAbortError(e)||s.getLogger(this.declaredClass).error(e)}))})),"RefreshableLayerView")},i}(c);return r.__decorate([i.property()],a.prototype,"layer",void 0),a=r.__decorate([n.subclass("esri.layers.mixins.RefreshableLayerView")],a),a};return l}));
