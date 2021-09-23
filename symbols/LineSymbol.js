/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/screenUtils","../core/accessorSupport/decorators/property","../core/has","../core/accessorSupport/ensureType","../core/Logger","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","./Symbol"],(function(e,r,o,t,s,c,i,n,p,u){"use strict";let a=function(r){function o(e){var o;return(o=r.call(this,e)||this).type="simple-line",o.width=.75,o}return e._inheritsLoose(o,r),o.prototype.hash=function(){return`${this.type}.${this.width}`},o}(u);return r.__decorate([n.enumeration({esriSLS:"simple-line"},{readOnly:!0})],a.prototype,"type",void 0),r.__decorate([t.property({type:Number,cast:o.toPt,json:{write:!0}})],a.prototype,"width",void 0),a=r.__decorate([p.subclass("esri.symbols.LineSymbol")],a),a}));
