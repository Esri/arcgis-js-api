/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/accessorSupport/decorators/subclass","./TextInput"],(function(e,r,t,n,o,s,c){"use strict";var a;let p=a=function(r){function t(e){var t;return(t=r.call(this,e)||this).type="barcode-scanner",t}return e._inheritsLoose(t,r),t.prototype.clone=function(){return new a({maxLength:this.maxLength,minLength:this.minLength})},t}(c);r.__decorate([t.property({type:["barcode-scanner"],json:{read:!1,write:!0}})],p.prototype,"type",void 0),p=a=r.__decorate([s.subclass("esri.form.elements.inputs.BarcodeScannerInput")],p);return p}));
