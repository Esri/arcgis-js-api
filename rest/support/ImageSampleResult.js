/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","./ImageSample"],(function(e,r,s,o,t,p,c,u,a){"use strict";let l=function(r){function s(){var e;return(e=r.apply(this,arguments)||this).samples=null,e}return e._inheritsLoose(s,r),s}(s.JSONSupport);return r.__decorate([o.property({type:[a],json:{write:!0}})],l.prototype,"samples",void 0),l=r.__decorate([u.subclass("esri.rest.support.ImageSampleResult")],l),l}));
