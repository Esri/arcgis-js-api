/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/JSONSupport","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/accessorSupport/decorators/subclass","../webdoc/applicationProperties/Viewing"],(function(e,r,o,t,i,s,n,c){"use strict";var p;let u=p=function(r){function o(e){var o;return(o=r.call(this,e)||this).viewing=null,o}return e._inheritsLoose(o,r),o.prototype.clone=function(){return new p({viewing:this.viewing?this.viewing.clone():null})},o}(o.JSONSupport);r.__decorate([t.property({type:c,json:{write:!0}})],u.prototype,"viewing",void 0),u=p=r.__decorate([n.subclass("esri.webscene.ApplicationProperties")],u);return u}));
