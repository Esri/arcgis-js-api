/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/has","../../core/Logger","../../core/accessorSupport/decorators/subclass","./Search"],(function(e,r,o,c,s,t,n,p,a,u){"use strict";var i;let l=i=function(r){function o(e){var o;return(o=r.call(this,e)||this).search=null,o}return e._inheritsLoose(o,r),o.prototype.clone=function(){return new i(c.clone({search:this.search}))},o}(o.JSONSupport);return r.__decorate([s.property({type:u,json:{write:!0}})],l.prototype,"search",void 0),l=i=r.__decorate([a.subclass("esri.webdoc.applicationProperties.Viewing")],l),l}));
