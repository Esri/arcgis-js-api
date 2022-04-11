/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(r,e,o,t,s,p,c,i){"use strict";var n;let u=n=function(e){function o(r){var o;return(o=e.call(this,r)||this).field=null,o.order=null,o}return r._inheritsLoose(o,e),o.prototype.clone=function(){return new n({field:this.field,order:this.order})},o}(o.JSONSupport);e.__decorate([t.property({type:String,json:{write:!0}})],u.prototype,"field",void 0),e.__decorate([t.property({type:["asc","desc"],json:{write:!0}})],u.prototype,"order",void 0),u=n=e.__decorate([i.subclass("esri.popup.support.RelatedRecordsInfoFieldOrder")],u);return u}));
