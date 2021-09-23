/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","./Input"],(function(e,r,t,o,s,n,c,p){"use strict";let u=function(r){function t(e){var t;return(t=r.call(this,e)||this).maxLength=null,t.minLength=0,t}return e._inheritsLoose(t,r),t}(p);return r.__decorate([t.property({type:Number,json:{write:!0}})],u.prototype,"maxLength",void 0),r.__decorate([t.property({type:Number,json:{write:!0}})],u.prototype,"minLength",void 0),u=r.__decorate([c.subclass("esri.form.elements.inputs.TextInput")],u),u}));
