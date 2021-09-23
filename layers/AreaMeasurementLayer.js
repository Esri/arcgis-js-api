/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/maybe","../core/accessorSupport/decorators/property","../core/has","../core/accessorSupport/ensureType","../core/Logger","../core/accessorSupport/decorators/subclass","./Layer"],(function(e,r,t,o,s,a,c,n,l){"use strict";let u=function(r){function o(e){var t;return(t=r.call(this,e)||this).type="area-measurement",t.fullExtent=null,t}return e._inheritsLoose(o,r),e._createClass(o,[{key:"geometry",set:function(e){this._set("geometry",t.applySome(e,(e=>e.clone())))}}]),o}(l);return r.__decorate([o.property({json:{read:!1},readOnly:!0})],u.prototype,"type",void 0),r.__decorate([o.property({value:null})],u.prototype,"geometry",null),u=r.__decorate([n.subclass("esri/layers/AreaMeasurementLayer")],u),u}));
