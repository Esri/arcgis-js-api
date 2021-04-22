/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","./TextInput"],(function(e,r,t,o,s,n,c,u,p,a,i){"use strict";var l;let h=l=function(r){function t(e){var t;return(t=r.call(this,e)||this).type="text-area",t}return e._inheritsLoose(t,r),t.prototype.clone=function(){return new l({maxLength:this.maxLength,minLength:this.minLength})},t}(i);return r.__decorate([n.property({type:["text-area"],json:{read:!1,write:!0}})],h.prototype,"type",void 0),h=l=r.__decorate([c.subclass("esri.form.elements.inputs.TextAreaInput")],h),h}));
