/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","./TextInput"],(function(e,r,t,n,o,s,c,a){"use strict";var p;let u=p=function(r){function t(e){var t;return(t=r.call(this,e)||this).type="barcode-scanner",t}return e._inheritsLoose(t,r),t.prototype.clone=function(){return new p({maxLength:this.maxLength,minLength:this.minLength})},t}(a);r.__decorate([t.property({type:["barcode-scanner"],json:{read:!1,write:!0}})],u.prototype,"type",void 0),u=p=r.__decorate([c.subclass("esri.form.elements.inputs.BarcodeScannerInput")],u);return u}));
