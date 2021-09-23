/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass"],(function(e,t,r,o,p,c,i,n){"use strict";let s=function(t){function r(e){var r;return(r=t.call(this,e)||this).altText=null,r.caption="",r.title="",r.type=null,r}return e._inheritsLoose(r,t),r}(r.JSONSupport);return t.__decorate([o.property({type:String,json:{write:!0}})],s.prototype,"altText",void 0),t.__decorate([o.property({type:String,json:{write:!0}})],s.prototype,"caption",void 0),t.__decorate([o.property({type:String,json:{write:!0}})],s.prototype,"title",void 0),t.__decorate([o.property({type:["image","bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],s.prototype,"type",void 0),s=t.__decorate([n.subclass("esri.popup.content.mixins.MediaInfo")],s),s}));
