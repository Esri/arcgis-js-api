/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport","./materialUtils"],(function(e,r,t,o,s,c,n,l,p,i,a,u,f){"use strict";var y;e.Symbol3DVerticalOffset=y=function(e){function t(){var r;return(r=e.apply(this,arguments)||this).screenLength=0,r.minWorldLength=0,r}return r._inheritsLoose(t,e),t.prototype.clone=function(){return new y({screenLength:this.screenLength,minWorldLength:this.minWorldLength,maxWorldLength:this.maxWorldLength})},t}(u.JSONSupport),t.__decorate([n.property(f.screenSizeProperty)],e.Symbol3DVerticalOffset.prototype,"screenLength",void 0),t.__decorate([n.property({type:Number,json:{write:!0,default:0}})],e.Symbol3DVerticalOffset.prototype,"minWorldLength",void 0),t.__decorate([n.property({type:Number,json:{write:!0}})],e.Symbol3DVerticalOffset.prototype,"maxWorldLength",void 0),e.Symbol3DVerticalOffset=y=t.__decorate([l.subclass("esri.symbols.support.Symbol3DVerticalOffset")],e.Symbol3DVerticalOffset);var d=e.Symbol3DVerticalOffset;e.default=d,Object.defineProperty(e,"__esModule",{value:!0})}));
