/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","./Column"],(function(e,r,t,o,s,c,u){"use strict";let a=function(r){function t(e){var t;return(t=r.call(this,e)||this).columns=null,t.sortable=!1,t}return e._inheritsLoose(t,r),e._createClass(t,[{key:"path",get:function(){return this.header},set:function(e){this.header=e}}]),t}(u);r.__decorate([t.property()],a.prototype,"columns",void 0),r.__decorate([t.property()],a.prototype,"path",null),r.__decorate([t.property({readOnly:!0})],a.prototype,"sortable",void 0),a=r.__decorate([c.subclass("esri.widgets.FeatureTable.Grid.GroupColumn")],a);return a}));
