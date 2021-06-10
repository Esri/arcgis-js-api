/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","./Input"],(function(e,r,t,o,s,n,c,u,p,i,a){"use strict";let l=function(r){function t(e){var t;return(t=r.call(this,e)||this).maxLength=null,t.minLength=0,t}return e._inheritsLoose(t,r),t}(a);return r.__decorate([n.property({type:Number,json:{write:!0}})],l.prototype,"maxLength",void 0),r.__decorate([n.property({type:Number,json:{write:!0}})],l.prototype,"minLength",void 0),l=r.__decorate([c.subclass("esri.form.elements.inputs.TextInput")],l),l}));
