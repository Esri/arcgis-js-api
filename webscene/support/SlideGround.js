/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport","../../webdoc/support/opacityUtils","../../Ground"],(function(r,e,o,t,c,n,p,s,a,u,i,y,l){"use strict";var d;let h=d=function(e){function o(){var r;return(r=e.apply(this,arguments)||this).opacity=null,r}r._inheritsLoose(o,e);var t=o.prototype;return t.clone=function(){return new d({opacity:this.opacity})},t.cloneAndApplyTo=function(r){return null==this.opacity||((r=null!=r?r.clone():new l).opacity=this.opacity),r},o.fromGround=function(r){return new d({opacity:r.opacity})},o}(i.JSONSupport);return e.__decorate([n.property({type:Number,json:{type:c.Integer,read:{reader:y.transparencyToOpacity,source:"transparency"},write:{writer:(r,e)=>{e.transparency=y.opacityToTransparency(r)},target:"transparency"}}})],h.prototype,"opacity",void 0),h=d=e.__decorate([p.subclass("esri.webscene.support.SlideGround")],h),h}));
