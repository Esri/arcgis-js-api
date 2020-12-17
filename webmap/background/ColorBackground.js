/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/lang","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport","../../Color"],(function(r,o,e,c,t,s,n,u,p,l,a,i,d){"use strict";var h;let S=h=function(o){function e(r){var e;return(e=o.call(this,r)||this).color=new d([0,0,0,1]),e}return r._inheritsLoose(e,o),e.prototype.clone=function(){return new h(c.clone({color:this.color}))},e}(i.JSONSupport);return o.__decorate([n.property({type:d,json:{write:!0}})],S.prototype,"color",void 0),S=h=o.__decorate([u.subclass("esri.webmap.background.ColorBackground")],S),S}));
