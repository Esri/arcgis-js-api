/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,c,n,a,p,u){"use strict";const i=new o.JSONMap({inherited:"inherited",codedValue:"coded-value",range:"range"});let l=function(r){function o(e){var o;return(o=r.call(this,e)||this).name=null,o.type=null,o}return e._inheritsLoose(o,r),o}(t.JSONSupport);r.__decorate([s.property({type:String,json:{write:!0}})],l.prototype,"name",void 0),r.__decorate([p.enumeration(i)],l.prototype,"type",void 0),l=r.__decorate([u.subclass("esri.layers.support.Domain")],l);return l}));
