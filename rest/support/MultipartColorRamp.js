/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/has","../../core/Logger","../../core/accessorSupport/decorators/subclass","./AlgorithmicColorRamp","./ColorRamp"],(function(r,o,e,t,p,s,c,l,a,n){"use strict";var u;let i=u=function(o){function t(r){var e;return(e=o.call(this,r)||this).colorRamps=null,e.type="multipart",e}return r._inheritsLoose(t,o),t.prototype.clone=function(){return new u({colorRamps:e.clone(this.colorRamps)})},t}(n);return o.__decorate([t.property({type:[a],json:{write:!0}})],i.prototype,"colorRamps",void 0),o.__decorate([t.property({type:["multipart"]})],i.prototype,"type",void 0),i=u=o.__decorate([l.subclass("esri.rest.support.MultipartColorRamp")],i),i}));
