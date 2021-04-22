/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/JSONSupport"],(function(e,r,t,o,p){"use strict";let i=function(r){function t(e){var t;return(t=r.call(this,e)||this).description=null,t.label=null,t.type=null,t.visibilityExpression=null,t}return e._inheritsLoose(t,r),t}(p.JSONSupport);return r.__decorate([t.property({type:String,json:{write:!0}})],i.prototype,"description",void 0),r.__decorate([t.property({type:String,json:{write:!0}})],i.prototype,"label",void 0),r.__decorate([t.property()],i.prototype,"type",void 0),r.__decorate([t.property({type:String,json:{write:!0}})],i.prototype,"visibilityExpression",void 0),i=r.__decorate([o.subclass("esri.form.elements.Element")],i),i}));
