/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,c,p,n){"use strict";let u=function(r){function o(e){var o;return(o=r.call(this,e)||this).doNotLocateOnRestrictedElements=null,o.url=null,o}return e._inheritsLoose(o,r),o}(o.JSONSupport);return r.__decorate([t.property({type:Boolean,json:{write:!0}})],u.prototype,"doNotLocateOnRestrictedElements",void 0),r.__decorate([t.property({type:String,json:{write:!0}})],u.prototype,"url",void 0),u=r.__decorate([n.subclass("esri.rest.support.NetworkUrl")],u),u}));
