/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/lang","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/jsonMap","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","../Color","./SimpleLineSymbol","./FillSymbol"],(function(o,r,e,t,s,i,l,n,a,c,p,u,S,d,y,h){"use strict";var f;const g=new n.JSONMap({esriSFSSolid:"solid",esriSFSNull:"none",esriSFSHorizontal:"horizontal",esriSFSVertical:"vertical",esriSFSForwardDiagonal:"forward-diagonal",esriSFSBackwardDiagonal:"backward-diagonal",esriSFSCross:"cross",esriSFSDiagonalCross:"diagonal-cross"});let F=f=function(r){function e(...o){var e;return(e=r.call(this,...o)||this).color=new d([0,0,0,.25]),e.outline=new y,e.type="simple-fill",e.style="solid",e}o._inheritsLoose(e,r);var s=e.prototype;return s.normalizeCtorArgs=function(o,r,e){if(o&&"string"!=typeof o)return o;const t={};return o&&(t.style=o),r&&(t.outline=r),e&&(t.color=e),t},s.clone=function(){return new f({color:t.clone(this.color),outline:this.outline&&this.outline.clone(),style:this.style})},s.hash=function(){return`${r.prototype.hash.call(this)}${this.style}.${this.color&&this.color.hash()}`},e}(h);return r.__decorate([l.property()],F.prototype,"color",void 0),r.__decorate([l.property()],F.prototype,"outline",void 0),r.__decorate([a.enumeration({esriSFS:"simple-fill"},{readOnly:!0})],F.prototype,"type",void 0),r.__decorate([l.property({type:g.apiValues,json:{read:g.read,write:g.write}})],F.prototype,"style",void 0),F=f=r.__decorate([c.subclass("esri.symbols.SimpleFillSymbol")],F),F}));
