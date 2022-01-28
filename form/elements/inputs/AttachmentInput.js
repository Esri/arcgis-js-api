/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass"],(function(e,t,r,o,s,c,n,p){"use strict";var u;let a=u=function(t){function r(e){var r;return(r=t.call(this,e)||this).type=null,r}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new u({type:this.type})},r}(r.JSONSupport);t.__decorate([o.property({type:["attachment","audio","document","image","signature","video"],json:{write:!0}})],a.prototype,"type",void 0),a=u=t.__decorate([p.subclass("esri.form.elements.inputs.AttachmentInput")],a);return a}));
