/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/JSONSupport","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,s,c,p){"use strict";let n=function(r){function t(e){var t;return(t=r.call(this,e)||this).moment=null,t.success=!1,t}return e._inheritsLoose(t,r),t}(t.JSONSupport);r.__decorate([o.property({type:Date,json:{type:Number,write:{writer:(e,r)=>{r.moment=e?e.getTime():null}}}})],n.prototype,"moment",void 0),r.__decorate([o.property({type:Boolean,json:{write:!0}})],n.prototype,"success",void 0),n=r.__decorate([p.subclass("esri.rest.versionManagementService.gdbVersion.support.PostResult")],n);return n}));
