/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Color","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(o,r,e,c,t,s,n,p){"use strict";var u;let l=u=function(r){function c(o){var c;return(c=r.call(this,o)||this).color=new e([0,0,0,1]),c}return o._inheritsLoose(c,r),c.prototype.clone=function(){return new u(t.clone({color:this.color}))},c}(c.JSONSupport);r.__decorate([s.property({type:e,json:{write:!0}})],l.prototype,"color",void 0),l=u=r.__decorate([p.subclass("esri.webmap.background.ColorBackground")],l);return l}));
