/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Collection","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./BuildingFilterAuthoringInfoType"],(function(e,r,o,t,s,n,p,c,i){"use strict";var u;const l=o.ofType(i);let a=u=function(r){function o(){return r.apply(this,arguments)||this}return e._inheritsLoose(o,r),o.prototype.clone=function(){return new u({filterTypes:s.clone(this.filterTypes)})},o}(t.JSONSupport);r.__decorate([n.property({type:l,json:{write:!0}})],a.prototype,"filterTypes",void 0),a=u=r.__decorate([c.subclass("esri.layers.support.BuildingFilterAuthoringInfoBlock")],a);return a}));
