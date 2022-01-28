/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","./TextInput"],(function(e,t,r,o,s,n,c,a){"use strict";var p;let u=p=function(t){function r(e){var r;return(r=t.call(this,e)||this).type="text-area",r}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new p({maxLength:this.maxLength,minLength:this.minLength})},r}(a);t.__decorate([r.property({type:["text-area"],json:{read:!1,write:!0}})],u.prototype,"type",void 0),u=p=t.__decorate([c.subclass("esri.form.elements.inputs.TextAreaInput")],u);return u}));
