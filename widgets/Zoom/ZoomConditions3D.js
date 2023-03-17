/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,c,n){"use strict";let a=function(r){function o(){return r.apply(this,arguments)||this}return e._inheritsLoose(o,r),e._createClass(o,[{key:"canZoomIn",get:function(){return!!this.view.ready}},{key:"canZoomOut",get:function(){return!!this.view.ready}}]),o}(o);r.__decorate([t.property({readOnly:!0})],a.prototype,"canZoomIn",null),r.__decorate([t.property({readOnly:!0})],a.prototype,"canZoomOut",null),r.__decorate([t.property()],a.prototype,"view",void 0),a=r.__decorate([n.subclass("esri.widgets.Zoom.ZoomConditions3D")],a);return a}));
