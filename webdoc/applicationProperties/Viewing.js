/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/lang","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport","./Search"],(function(r,e,o,c,s,t,n,p,u,i,a,l,h){"use strict";var d;let S=d=function(e){function o(r){var o;return(o=e.call(this,r)||this).search=null,o}return r._inheritsLoose(o,e),o.prototype.clone=function(){return new d(c.clone({search:this.search}))},o}(l.JSONSupport);return e.__decorate([n.property({type:h,json:{write:!0}})],S.prototype,"search",void 0),S=d=e.__decorate([p.subclass("esri.webdoc.applicationProperties.Viewing")],S),S}));
