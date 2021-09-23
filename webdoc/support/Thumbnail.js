/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass"],(function(r,e,o,t,s,u,c,p){"use strict";var n;let i=n=function(e){function o(){var r;return(r=e.apply(this,arguments)||this).url="",r}r._inheritsLoose(o,e);var t=o.prototype;return t.destroy=function(){this.url=""},t.clone=function(){return new n({url:this.url})},o}(o.JSONSupport);return e.__decorate([t.property({type:String,json:{write:{isRequired:!0}}})],i.prototype,"url",void 0),i=n=e.__decorate([p.subclass("esri.webdoc.support.Thumbnail")],i),i}));
