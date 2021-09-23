/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Collection","../core/lang","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/has","../core/Logger","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","./LineSymbol3DLayer","./PathSymbol3DLayer","./Symbol3D"],(function(e,o,r,t,n,s,l,y,c,i,a,p,u){"use strict";var b;const m=r.ofType({base:null,key:"type",typeMap:{line:a,path:p}}),h=r.ofType({base:null,key:"type",typeMap:{line:a,path:p}});let L=b=function(o){function r(e){var r;return(r=o.call(this,e)||this).symbolLayers=new m,r.type="line-3d",r}return e._inheritsLoose(r,o),r.prototype.clone=function(){return new b({styleOrigin:t.clone(this.styleOrigin),symbolLayers:t.clone(this.symbolLayers),thumbnail:t.clone(this.thumbnail)})},r.fromSimpleLineSymbol=function(e){return new b({symbolLayers:[a.fromSimpleLineSymbol(e)]})},r}(u);return o.__decorate([n.property({type:m,json:{type:h}})],L.prototype,"symbolLayers",void 0),o.__decorate([c.enumeration({LineSymbol3D:"line-3d"},{readOnly:!0})],L.prototype,"type",void 0),L=b=o.__decorate([i.subclass("esri.symbols.LineSymbol3D")],L),L}));
