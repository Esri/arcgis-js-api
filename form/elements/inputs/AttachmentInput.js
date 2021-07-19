/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass"],(function(e,t,r,o,s,c,n,p){"use strict";var u;let i=u=function(t){function r(e){var r;return(r=t.call(this,e)||this).type=null,r}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new u({type:this.type})},r}(r.JSONSupport);return t.__decorate([o.property({type:["attachment","audio","document","image","signature","video"],json:{write:!0}})],i.prototype,"type",void 0),i=u=t.__decorate([p.subclass("esri.form.elements.inputs.AttachmentInput")],i),i}));
