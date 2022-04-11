/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,c,n,a){"use strict";let p=function(r){function o(){return r.apply(this,arguments)||this}return e._inheritsLoose(o,r),e._createClass(o,[{key:"canZoomIn",get:function(){return!!this.get("view.ready")}},{key:"canZoomOut",get:function(){return!!this.get("view.ready")}}]),o}(o);r.__decorate([t.property({readOnly:!0})],p.prototype,"canZoomIn",null),r.__decorate([t.property({readOnly:!0})],p.prototype,"canZoomOut",null),r.__decorate([t.property()],p.prototype,"view",void 0),p=r.__decorate([a.subclass("esri.widgets.Zoom.ZoomConditions3D")],p);return p}));
