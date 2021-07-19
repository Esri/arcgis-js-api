/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Color","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/has","../../core/Logger","../../core/accessorSupport/decorators/subclass"],(function(o,r,e,c,t,s,n,p,u,l){"use strict";var a;let i=a=function(r){function c(o){var c;return(c=r.call(this,o)||this).color=new e([0,0,0,1]),c}return o._inheritsLoose(c,r),c.prototype.clone=function(){return new a(t.clone({color:this.color}))},c}(c.JSONSupport);return r.__decorate([s.property({type:e,json:{write:!0}})],i.prototype,"color",void 0),i=a=r.__decorate([l.subclass("esri.webmap.background.ColorBackground")],i),i}));
