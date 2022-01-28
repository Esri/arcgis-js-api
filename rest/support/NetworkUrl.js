/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,s,c,p,n){"use strict";let u=function(r){function t(e){var t;return(t=r.call(this,e)||this).doNotLocateOnRestrictedElements=null,t.url=null,t}return e._inheritsLoose(t,r),t}(t.JSONSupport);r.__decorate([o.property({type:Boolean,json:{write:!0}})],u.prototype,"doNotLocateOnRestrictedElements",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],u.prototype,"url",void 0),u=r.__decorate([n.subclass("esri.rest.support.NetworkUrl")],u);return u}));
