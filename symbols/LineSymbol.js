/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/screenUtils","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","./Symbol"],(function(e,r,t,o,s,c,i,n,p){"use strict";let u=function(r){function t(e){var t;return(t=r.call(this,e)||this).type="simple-line",t.width=.75,t}return e._inheritsLoose(t,r),t.prototype.hash=function(){return`${this.type}.${this.width}`},t}(p);r.__decorate([i.enumeration({esriSLS:"simple-line"},{readOnly:!0})],u.prototype,"type",void 0),r.__decorate([o.property({type:Number,cast:t.toPt,json:{write:!0}})],u.prototype,"width",void 0),u=r.__decorate([n.subclass("esri.symbols.LineSymbol")],u);return u}));
