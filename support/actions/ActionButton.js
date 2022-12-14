/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./ActionBase"],(function(t,e,i,s,r,o,c){"use strict";var a;let n=a=function(e){function i(t){var i;return(i=e.call(this,t)||this).image=null,i.type="button",i}return t._inheritsLoose(i,e),i.prototype.clone=function(){return new a({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image})},i}(c);e.__decorate([i.property()],n.prototype,"image",void 0),n=a=e.__decorate([o.subclass("esri.support.Action.ActionButton")],n);return n}));
