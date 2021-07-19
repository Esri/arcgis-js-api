/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,p,i,c){"use strict";let n=function(r){function o(e){var o;return(o=r.call(this,e)||this).layerId=null,o.siteIdField=null,o.nameField=null,o}return e._inheritsLoose(o,r),o}(o.JSONSupport);return r.__decorate([t.property({type:String,json:{write:!0}})],n.prototype,"layerId",void 0),r.__decorate([t.property({type:String,json:{write:!0}})],n.prototype,"siteIdField",void 0),r.__decorate([t.property({type:String,json:{write:!0}})],n.prototype,"nameField",void 0),n=r.__decorate([c.subclass("esri.layers.support.SiteLayerInfo")],n),n}));
