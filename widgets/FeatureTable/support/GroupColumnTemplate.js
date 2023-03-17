/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/accessorSupport/decorators/subclass","./ColumnTemplateBase"],(function(e,r,t,o,s,p,c){"use strict";let u=function(r){function t(e){var t;return(t=r.call(this,e)||this).columnTemplates=null,t.type="group",t}return e._inheritsLoose(t,r),t}(c);r.__decorate([t.property({json:{write:!0}})],u.prototype,"columnTemplates",void 0),r.__decorate([t.property({type:String,json:{read:!1,write:!0}})],u.prototype,"type",void 0),u=r.__decorate([p.subclass("esri.widgets.FeatureTable.GroupColumnTemplate")],u);return u}));
