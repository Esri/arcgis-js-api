/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/maybe","../core/accessorSupport/decorators/property","../core/has","../core/accessorSupport/ensureType","../core/Logger","../core/accessorSupport/decorators/subclass","./Layer"],(function(e,r,o,t,s,a,c,n,p){"use strict";let u=function(r){function t(e){var o;return(o=r.call(this,e)||this).type="area-measurement",o}return e._inheritsLoose(t,r),e._createClass(t,[{key:"geometry",set:function(e){this._set("geometry",o.applySome(e,(e=>e.clone())))}}]),t}(p);return r.__decorate([t.property({json:{read:!1},readOnly:!0})],u.prototype,"type",void 0),r.__decorate([t.property({value:null})],u.prototype,"geometry",null),u=r.__decorate([n.subclass("esri/layers/AreaMeasurementLayer")],u),u}));
