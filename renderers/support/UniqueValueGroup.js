/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Clonable","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","./UniqueValueClass"],(function(e,r,o,s,t,c,n,p,u){"use strict";let l=function(r){function o(e){var o;return(o=r.call(this,e)||this).heading=null,o.classes=null,o}return e._inheritsLoose(o,r),o}(o.ClonableMixin(s.JSONSupport));r.__decorate([t.property({type:String,json:{write:!0}})],l.prototype,"heading",void 0),r.__decorate([t.property({type:[u],json:{write:!0}})],l.prototype,"classes",void 0),l=r.__decorate([p.subclass("esri.renderers.support.UniqueValueGroup")],l);return l}));
