/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/JSONSupport","../../../core/screenUtils","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,s,p,l,c,u){"use strict";var i;let n=i=function(r){function t(e){var t;return(t=r.call(this,e)||this).label=null,t.size=null,t.value=null,t}return e._inheritsLoose(t,r),t.prototype.clone=function(){return new i({label:this.label,size:this.size,value:this.value})},t}(t.JSONSupport);return r.__decorate([s.property({type:String,json:{write:!0}})],n.prototype,"label",void 0),r.__decorate([s.property({type:Number,cast:o.toPt,json:{write:!0}})],n.prototype,"size",void 0),r.__decorate([s.property({type:Number,json:{write:!0}})],n.prototype,"value",void 0),n=i=r.__decorate([u.subclass("esri.renderers.visualVariables.support.SizeStop")],n),n}));
