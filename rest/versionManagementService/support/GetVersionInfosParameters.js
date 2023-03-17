/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,n,c){"use strict";let i=function(r){function o(e){var o;return(o=r.call(this,e)||this).ownerFilter=null,o.includeHidden=!1,o}return e._inheritsLoose(o,r),o}(o.JSONSupport);r.__decorate([t.property({type:String,json:{write:!0}})],i.prototype,"ownerFilter",void 0),r.__decorate([t.property({type:Boolean,json:{write:!0}})],i.prototype,"includeHidden",void 0),i=r.__decorate([c.subclass("esri.rest.versionManagementService.support.GetVersionInfosParameters")],i);return i}));
