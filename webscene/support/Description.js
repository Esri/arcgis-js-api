/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport"],(function(e,r,t,o,s,c,p,u,n,i,a){"use strict";var l;let S=l=function(r){function t(){var e;return(e=r.apply(this,arguments)||this).text="",e}return e._inheritsLoose(t,r),t.prototype.clone=function(){return new l({text:this.text})},t}(a.JSONSupport);return r.__decorate([c.property({type:String,json:{write:!0}})],S.prototype,"text",void 0),S=l=r.__decorate([p.subclass("esri.webscene.support.Description")],S),S}));
