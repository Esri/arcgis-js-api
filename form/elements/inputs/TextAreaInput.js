/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","./TextInput"],(function(e,t,r,o,s,n,c,p){"use strict";var a;let u=a=function(t){function r(e){var r;return(r=t.call(this,e)||this).type="text-area",r}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new a({maxLength:this.maxLength,minLength:this.minLength})},r}(p);return t.__decorate([r.property({type:["text-area"],json:{read:!1,write:!0}})],u.prototype,"type",void 0),u=a=t.__decorate([c.subclass("esri.form.elements.inputs.TextAreaInput")],u),u}));
