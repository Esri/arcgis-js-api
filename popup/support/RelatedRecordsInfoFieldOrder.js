/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,p,c,n){"use strict";var i;let u=i=function(r){function o(e){var o;return(o=r.call(this,e)||this).field=null,o.order=null,o}return e._inheritsLoose(o,r),o.prototype.clone=function(){return new i({field:this.field,order:this.order})},o}(o.JSONSupport);return r.__decorate([t.property({type:String,json:{write:!0}})],u.prototype,"field",void 0),r.__decorate([t.property({type:["asc","desc"],json:{write:!0}})],u.prototype,"order",void 0),u=i=r.__decorate([n.subclass("esri.popup.support.RelatedRecordsInfoFieldOrder")],u),u}));
