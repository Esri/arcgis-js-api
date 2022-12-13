/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","./ColumnTemplateBase","./EditableColumnTemplateMixin"],(function(e,r,t,o,s,a,c,l){"use strict";let n=function(r){function t(e){var t;return(t=r.call(this,e)||this).type="column",t}return e._inheritsLoose(t,r),t}(l.EditableColumnTemplateMixin(c));r.__decorate([t.property({type:String,json:{read:!1,write:!0}})],n.prototype,"type",void 0),n=r.__decorate([a.subclass("esri.widgets.FeatureTable.support.ColumnTemplate")],n);return n}));
