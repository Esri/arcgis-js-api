/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/jsonMap","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,p,i,n){"use strict";const u=new o.JSONMap({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let c=function(r){function o(){return r.apply(this,arguments)||this}return e._inheritsLoose(o,r),o}(t.JSONSupport);r.__decorate([s.property({type:u.apiValues,readOnly:!0,nonNullable:!0,json:{type:u.jsonValues,read:!1,write:u.write}})],c.prototype,"type",void 0),c=r.__decorate([n.subclass("esri.renderers.support.pointCloud.PointSizeAlgorithm")],c);return c}));
