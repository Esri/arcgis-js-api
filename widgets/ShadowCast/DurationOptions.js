/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Color","../../core/Accessor","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","./DurationMode"],(function(o,r,e,t,s,c,p,n,u){"use strict";let i=function(r){function t(){var o;return(o=r.apply(this,arguments)||this).color=new e([0,0,255,.7]),o.mode=u.DurationMode.Continuous,o}return o._inheritsLoose(t,r),t}(t);r.__decorate([s.property({type:e})],i.prototype,"color",void 0),r.__decorate([s.property()],i.prototype,"mode",void 0),i=r.__decorate([n.subclass("esri.widgets.ShadowCast.DurationOptions")],i);return i}));
