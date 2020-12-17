/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport"],(function(r,e,o,t,s,u,c,p,n,i,l){"use strict";var a;let d=a=function(e){function o(){var r;return(r=e.apply(this,arguments)||this).url="",r}r._inheritsLoose(o,e);var t=o.prototype;return t.destroy=function(){this.url=""},t.clone=function(){return new a({url:this.url})},o}(l.JSONSupport);return e.__decorate([u.property({type:String,json:{write:{isRequired:!0}}})],d.prototype,"url",void 0),d=a=e.__decorate([c.subclass("esri.webdoc.support.Thumbnail")],d),d}));
