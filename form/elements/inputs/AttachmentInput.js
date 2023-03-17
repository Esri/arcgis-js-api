/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/accessorSupport/decorators/subclass"],(function(e,t,r,o,s,c,n){"use strict";var p;let u=p=function(t){function r(e){var r;return(r=t.call(this,e)||this).type=null,r}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new p({type:this.type})},r}(r.JSONSupport);t.__decorate([o.property({type:["attachment","audio","document","image","signature","video"],json:{write:!0}})],u.prototype,"type",void 0),u=p=t.__decorate([n.subclass("esri.form.elements.inputs.AttachmentInput")],u);return u}));
