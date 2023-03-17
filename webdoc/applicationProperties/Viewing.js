/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./Search"],(function(e,r,o,t,c,s,n,p){"use strict";var u;let a=u=function(r){function o(e){var o;return(o=r.call(this,e)||this).search=null,o}return e._inheritsLoose(o,r),o.prototype.clone=function(){return new u(t.clone({search:this.search}))},o}(o.JSONSupport);r.__decorate([c.property({type:p,json:{write:!0}})],a.prototype,"search",void 0),a=u=r.__decorate([n.subclass("esri.webdoc.applicationProperties.Viewing")],a);return a}));
