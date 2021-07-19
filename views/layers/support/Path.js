/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","./ClipArea"],(function(e,r,t,o,s,p,c,n){"use strict";let a=function(r){function t(){var e;return(e=r.apply(this,arguments)||this).type="path",e.path=[],e}return e._inheritsLoose(t,r),e._createClass(t,[{key:"version",get:function(){return(this._get("version")||0)+1}}]),t}(n);return r.__decorate([t.property({type:[[[Number]]],json:{write:!0}})],a.prototype,"path",void 0),r.__decorate([t.property({readOnly:!0})],a.prototype,"version",null),a=r.__decorate([c.subclass("esri.views.layers.support.Path")],a),a}));
