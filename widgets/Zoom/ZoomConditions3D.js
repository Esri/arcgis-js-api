/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass"],(function(e,o,r,t,s,c,n,p){"use strict";let u=function(o){function r(){return o.apply(this,arguments)||this}return e._inheritsLoose(r,o),e._createClass(r,[{key:"canZoomIn",get:function(){return!!this.get("view.ready")}},{key:"canZoomOut",get:function(){return!!this.get("view.ready")}}]),r}(r);return o.__decorate([t.property({readOnly:!0})],u.prototype,"canZoomIn",null),o.__decorate([t.property({readOnly:!0})],u.prototype,"canZoomOut",null),o.__decorate([t.property()],u.prototype,"view",void 0),u=o.__decorate([p.subclass("esri.widgets.Zoom.ZoomConditions3D")],u),u}));
