/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","./TextInput"],(function(e,t,r,o,s,n,c,u,p,i,a){"use strict";var l;let h=l=function(t){function r(e){var r;return(r=t.call(this,e)||this).type="text-box",r}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new l({maxLength:this.maxLength,minLength:this.minLength})},r}(a);return t.__decorate([n.property({type:["text-box"],json:{read:!1,write:!0}})],h.prototype,"type",void 0),h=l=t.__decorate([c.subclass("esri.form.elements.inputs.TextBoxInput")],h),h}));
