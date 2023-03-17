/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","../ElementExpressionInfo","./Content"],(function(e,o,r,s,t,n,p,c){"use strict";var i;let u=i=function(o){function r(e){var r;return(r=o.call(this,e)||this).expressionInfo=null,r.type="expression",r}return e._inheritsLoose(r,o),r.prototype.clone=function(){return new i({expressionInfo:this.expressionInfo?.clone()})},r}(c);o.__decorate([r.property({type:p,json:{write:!0}})],u.prototype,"expressionInfo",void 0),o.__decorate([r.property({type:["expression"],readOnly:!0,json:{read:!1,write:!0}})],u.prototype,"type",void 0),u=i=o.__decorate([n.subclass("esri.popup.content.ExpressionContent")],u);return u}));
