/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/accessorSupport/decorators/subclass"],(function(r,e,o,t,s,n,c){"use strict";var p;let u=p=function(e){function o(r){var o;return(o=e.call(this,r)||this).linkURL=null,o.sourceURL=null,o}return r._inheritsLoose(o,e),o.prototype.clone=function(){return new p({linkURL:this.linkURL,sourceURL:this.sourceURL})},o}(o.JSONSupport);e.__decorate([t.property({type:String,json:{write:!0}})],u.prototype,"linkURL",void 0),e.__decorate([t.property({type:String,json:{write:!0}})],u.prototype,"sourceURL",void 0),u=p=e.__decorate([c.subclass("esri.popup.content.support.ImageMediaInfoValue")],u);return u}));
