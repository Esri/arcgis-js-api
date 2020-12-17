/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","../core/JSONSupport","../webdoc/applicationProperties/Viewing"],(function(e,r,o,t,i,s,c,n,p,u,l,a){"use strict";var w;let g=w=function(r){function o(e){var o;return(o=r.call(this,e)||this).viewing=null,o}return e._inheritsLoose(o,r),o.prototype.clone=function(){return new w({viewing:this.viewing?this.viewing.clone():null})},o}(l.JSONSupport);return r.__decorate([s.property({type:a,json:{write:!0}})],g.prototype,"viewing",void 0),g=w=r.__decorate([c.subclass("esri.webscene.ApplicationProperties")],g),g}));
