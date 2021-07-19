/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,s,c,p,n){"use strict";var u;let i=u=function(r){function t(){var e;return(e=r.apply(this,arguments)||this).text="",e}return e._inheritsLoose(t,r),t.prototype.clone=function(){return new u({text:this.text})},t}(t.JSONSupport);return r.__decorate([o.property({type:String,json:{write:!0}})],i.prototype,"text",void 0),i=u=r.__decorate([n.subclass("esri.webscene.support.Description")],i),i}));
