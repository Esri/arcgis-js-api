/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/accessorSupport/decorators/subclass","./ClipArea"],(function(r,e,t,o,s,p,c){"use strict";let i=function(e){function t(r){var t;return(t=e.call(this,r)||this).type="path",t.path=[],t}return r._inheritsLoose(t,e),t.prototype.commitVersionProperties=function(){this.commitProperty("path")},t}(c);e.__decorate([t.property({type:[[[Number]]],json:{write:!0}})],i.prototype,"path",void 0),i=e.__decorate([p.subclass("esri.views.layers.support.Path")],i);return i}));
