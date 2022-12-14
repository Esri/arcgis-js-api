/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","./TextInput"],(function(e,t,r,o,s,n,c){"use strict";var a;let p=a=function(t){function r(e){var r;return(r=t.call(this,e)||this).type="text-area",r}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new a({maxLength:this.maxLength,minLength:this.minLength})},r}(c);t.__decorate([r.property({type:["text-area"],json:{read:!1,write:!0}})],p.prototype,"type",void 0),p=a=t.__decorate([n.subclass("esri.form.elements.inputs.TextAreaInput")],p);return p}));
