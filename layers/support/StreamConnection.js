/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Error","../../core/Evented","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(r,e,t,o,n,s,c,i){"use strict";let u=function(e){function o(){return e.apply(this,arguments)||this}return r._inheritsLoose(o,e),o.prototype.onFeature=function(r){this.emit("data-received",r)},r._createClass(o,[{key:"connectionError",get:function(){return this.errorString?new t("stream-connection",this.errorString):null}}]),o}(o.EventedAccessor);e.__decorate([n.property({readOnly:!0})],u.prototype,"connectionError",null),u=e.__decorate([i.subclass("esri.layers.support.StreamConnection")],u);return u}));
