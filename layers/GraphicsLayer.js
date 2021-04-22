/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","./Layer","../symbols/support/ElevationInfo","./mixins/BlendLayer","./mixins/ScaleRangeLayer","../support/GraphicsCollection"],(function(e,r,o,t,i,s,n,p,a,c,l,u,d,y,h){"use strict";let v=function(r){function o(e){var o;return(o=r.call(this,e)||this).elevationInfo=null,o.graphics=new h.default,o.screenSizePerspectiveEnabled=!0,o.type="graphics",o.internal=!1,o}e._inheritsLoose(o,r);var t=o.prototype;return t.destroy=function(){this.removeAll(),this.graphics.destroy()},t.add=function(e){return this.graphics.add(e),this},t.addMany=function(e){return this.graphics.addMany(e),this},t.removeAll=function(){return this.graphics.removeAll(),this},t.remove=function(e){this.graphics.remove(e)},t.removeMany=function(e){this.graphics.removeMany(e)},t.on=function(e,o){return r.prototype.on.call(this,e,o)},t.graphicChanged=function(e){this.emit("graphic-update",e)},o}(d.BlendLayer(y.ScaleRangeLayer(l)));return r.__decorate([s.property({type:u})],v.prototype,"elevationInfo",void 0),r.__decorate([s.property(h.graphicsCollectionProperty())],v.prototype,"graphics",void 0),r.__decorate([s.property({type:["show","hide"]})],v.prototype,"listMode",void 0),r.__decorate([s.property()],v.prototype,"screenSizePerspectiveEnabled",void 0),r.__decorate([s.property({readOnly:!0})],v.prototype,"type",void 0),r.__decorate([s.property({constructOnly:!0})],v.prototype,"internal",void 0),v=r.__decorate([n.subclass("esri.layers.GraphicsLayer")],v),v}));
