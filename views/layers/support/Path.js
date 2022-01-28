/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","./ClipArea"],(function(e,r,t,s,o,p,c,a){"use strict";let n=function(r){function t(){var e;return(e=r.apply(this,arguments)||this).type="path",e.path=[],e}return e._inheritsLoose(t,r),e._createClass(t,[{key:"version",get:function(){return(this._get("version")||0)+1}}]),t}(a);r.__decorate([t.property({type:[[[Number]]],json:{write:!0}})],n.prototype,"path",void 0),r.__decorate([t.property({readOnly:!0})],n.prototype,"version",null),n=r.__decorate([c.subclass("esri.views.layers.support.Path")],n);return n}));
