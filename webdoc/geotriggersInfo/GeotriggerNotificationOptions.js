/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Clonable","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","./ExpressionInfo"],(function(e,r,o,t,s,n,i,c,p){"use strict";let u=function(r){function o(e){var o;return(o=r.call(this,e)||this).expressionInfo=null,o.requestedActions=null,o}return e._inheritsLoose(o,r),o}(o.ClonableMixin(t.JSONSupport));r.__decorate([s.property({type:p,json:{write:!0}})],u.prototype,"expressionInfo",void 0),r.__decorate([s.property({type:[String],json:{write:!0}})],u.prototype,"requestedActions",void 0),u=r.__decorate([c.subclass("esri.webdoc.geotriggersInfo.GeotriggerNotificationOptions")],u);return u}));
