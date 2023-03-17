/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,s,c,p){"use strict";var n;let u=n=function(r){function t(){var e;return(e=r.apply(this,arguments)||this).text="",e}return e._inheritsLoose(t,r),t.prototype.clone=function(){return new n({text:this.text})},t}(t.JSONSupport);r.__decorate([o.property({type:String,json:{write:!0}})],u.prototype,"text",void 0),u=n=r.__decorate([p.subclass("esri.webscene.support.Description")],u);return u}));
