/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(r,e,o,t,s,p,c){"use strict";var i;let n=i=function(e){function o(r){var o;return(o=e.call(this,r)||this).field=null,o.order=null,o}return r._inheritsLoose(o,e),o.prototype.clone=function(){return new i({field:this.field,order:this.order})},o}(o.JSONSupport);e.__decorate([t.property({type:String,json:{write:!0}})],n.prototype,"field",void 0),e.__decorate([t.property({type:["asc","desc"],json:{write:!0}})],n.prototype,"order",void 0),n=i=e.__decorate([c.subclass("esri.popup.support.RelatedRecordsInfoFieldOrder")],n);return n}));
