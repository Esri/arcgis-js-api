/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../Color","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","../../../core/accessorSupport/decorators/writer"],(function(e,r,o,t,l,s,c,p,u,a){"use strict";var n;let i=n=function(r){function o(e){var o;return(o=r.call(this,e)||this).color=null,o.label=null,o.value=null,o}e._inheritsLoose(o,r);var t=o.prototype;return t.writeValue=function(e,r,o){r[o]=null==e?0:e},t.clone=function(){return new n({color:this.color&&this.color.clone(),label:this.label,value:this.value})},o}(t.JSONSupport);return r.__decorate([l.property({type:o,json:{type:[c.Integer],write:!0}})],i.prototype,"color",void 0),r.__decorate([l.property({type:String,json:{write:!0}})],i.prototype,"label",void 0),r.__decorate([l.property({type:Number,json:{write:{allowNull:!0}}})],i.prototype,"value",void 0),r.__decorate([a.writer("value")],i.prototype,"writeValue",null),i=n=r.__decorate([u.subclass("esri.renderers.visualVariables.support.ColorStop")],i),i}));
