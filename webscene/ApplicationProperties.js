/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/JSONSupport","../core/accessorSupport/decorators/property","../core/has","../core/accessorSupport/ensureType","../core/Logger","../core/accessorSupport/decorators/subclass","../webdoc/applicationProperties/Viewing"],(function(e,r,o,t,i,s,n,c,p){"use strict";var u;let l=u=function(r){function o(e){var o;return(o=r.call(this,e)||this).viewing=null,o}return e._inheritsLoose(o,r),o.prototype.clone=function(){return new u({viewing:this.viewing?this.viewing.clone():null})},o}(o.JSONSupport);return r.__decorate([t.property({type:p,json:{write:!0}})],l.prototype,"viewing",void 0),l=u=r.__decorate([c.subclass("esri.webscene.ApplicationProperties")],l),l}));
