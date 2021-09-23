/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","./Content"],(function(e,t,r,o,n,s,c,p){"use strict";var u;let i=u=function(t){function r(e){var r;return(r=t.call(this,e)||this).text=null,r.type="text",r}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new u({text:this.text})},r}(p);return t.__decorate([r.property({type:String,json:{write:!0}})],i.prototype,"text",void 0),t.__decorate([r.property({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],i.prototype,"type",void 0),i=u=t.__decorate([c.subclass("esri.popup.content.TextContent")],i),i}));
