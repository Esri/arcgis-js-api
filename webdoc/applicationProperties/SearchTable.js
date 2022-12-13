/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./SearchTableField"],(function(e,r,o,t,i,s,c,p){"use strict";var n;let l=n=function(r){function o(e){var o;return(o=r.call(this,e)||this).field=null,o.id=null,o}return e._inheritsLoose(o,r),o.prototype.clone=function(){return new n(t.clone({field:this.field,id:this.id}))},o}(o.JSONSupport);r.__decorate([i.property({type:p,json:{write:{isRequired:!0}}})],l.prototype,"field",void 0),r.__decorate([i.property({type:String,json:{write:{isRequired:!0}}})],l.prototype,"id",void 0),l=n=r.__decorate([c.subclass("esri.webdoc.applicationProperties.SearchTable")],l);return l}));
