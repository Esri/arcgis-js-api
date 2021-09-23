/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Collection","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/has","../../core/Logger","../../core/accessorSupport/decorators/subclass","./BuildingFilterAuthoringInfoType"],(function(e,r,o,t,s,c,n,p,i,u,l){"use strict";var a;const y=o.ofType(l);let f=a=function(r){function o(){return r.apply(this,arguments)||this}return e._inheritsLoose(o,r),o.prototype.clone=function(){return new a({filterTypes:s.clone(this.filterTypes)})},o}(t.JSONSupport);return r.__decorate([c.property({type:y,json:{write:!0}})],f.prototype,"filterTypes",void 0),f=a=r.__decorate([u.subclass("esri.layers.support.BuildingFilterAuthoringInfoBlock")],f),f}));
