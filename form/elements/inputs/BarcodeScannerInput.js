/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","./Input"],(function(e,r,o,t,s,c,n,u,p,a,i){"use strict";var l;let d=l=function(r){function o(e){var o;return(o=r.call(this,e)||this).type="barcode-scanner",o}return e._inheritsLoose(o,r),o.prototype.clone=function(){return new l},o}(i);return r.__decorate([c.property({type:["barcode-scanner"],json:{read:!1,write:!0}})],d.prototype,"type",void 0),d=l=r.__decorate([n.subclass("esri.form.elements.inputs.BarcodeScannerInput")],d),d}));
