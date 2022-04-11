/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","./TextInput"],(function(e,t,r,o,s,n,c,p){"use strict";var u;let i=u=function(t){function r(e){var r;return(r=t.call(this,e)||this).type="text-box",r}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new u({maxLength:this.maxLength,minLength:this.minLength})},r}(p);t.__decorate([r.property({type:["text-box"],json:{read:!1,write:!0}})],i.prototype,"type",void 0),i=u=t.__decorate([c.subclass("esri.form.elements.inputs.TextBoxInput")],i);return i}));
