/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./FeatureSet"],(function(e,t,r,o,s,c,n,a){"use strict";var i;let u=i=function(t){function r(e){var r;return(r=t.call(this,e)||this).doNotLocateOnRestrictedElements=null,r}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new i({doNotLocateOnRestrictedElements:this.doNotLocateOnRestrictedElements,...this.cloneProperties()})},r}(a);t.__decorate([r.property({type:Boolean,json:{write:!0}})],u.prototype,"doNotLocateOnRestrictedElements",void 0),u=i=t.__decorate([n.subclass("esri.rest.support.NetworkFeatureSet")],u);return u}));
