/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./AlgorithmicColorRamp","./ColorRamp"],(function(r,o,e,t,p,s,c,l){"use strict";var a;let n=a=function(o){function t(r){var e;return(e=o.call(this,r)||this).colorRamps=null,e.type="multipart",e}return r._inheritsLoose(t,o),t.prototype.clone=function(){return new a({colorRamps:e.clone(this.colorRamps)})},t}(l);o.__decorate([t.property({type:[c],json:{write:!0}})],n.prototype,"colorRamps",void 0),o.__decorate([t.property({type:["multipart"]})],n.prototype,"type",void 0),n=a=o.__decorate([s.subclass("esri.rest.support.MultipartColorRamp")],n);return n}));
