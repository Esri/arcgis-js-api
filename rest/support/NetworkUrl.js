/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Clonable","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,c,n,p){"use strict";let l=function(r){function o(e){var o;return(o=r.call(this,e)||this).doNotLocateOnRestrictedElements=null,o.url=null,o}return e._inheritsLoose(o,r),o}(o.ClonableMixin(t.JSONSupport));r.__decorate([s.property({type:Boolean,json:{write:!0}})],l.prototype,"doNotLocateOnRestrictedElements",void 0),r.__decorate([s.property({type:String,json:{write:!0}})],l.prototype,"url",void 0),l=r.__decorate([p.subclass("esri.rest.support.NetworkUrl")],l);return l}));
