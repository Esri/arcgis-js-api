/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,p){"use strict";let i=function(r){function t(e){var t;return(t=r.call(this,e)||this).description=null,t.label=null,t.type=null,t.visibilityExpression=null,t}return e._inheritsLoose(t,r),t}(t.JSONSupport);return r.__decorate([o.property({type:String,json:{write:!0}})],i.prototype,"description",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],i.prototype,"label",void 0),r.__decorate([o.property()],i.prototype,"type",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],i.prototype,"visibilityExpression",void 0),i=r.__decorate([p.subclass("esri.form.elements.Element")],i),i}));
