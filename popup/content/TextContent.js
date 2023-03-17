/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","./Content"],(function(t,e,r,o,n,s,p){"use strict";var c;let u=c=function(e){function r(t){var r;return(r=e.call(this,t)||this).text=null,r.type="text",r}return t._inheritsLoose(r,e),r.prototype.clone=function(){return new c({text:this.text})},r}(p);e.__decorate([r.property({type:String,json:{write:!0}})],u.prototype,"text",void 0),e.__decorate([r.property({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],u.prototype,"type",void 0),u=c=e.__decorate([s.subclass("esri.popup.content.TextContent")],u);return u}));
