/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/accessorSupport/decorators/subclass","./MediaInfo","../support/ChartMediaInfoValue"],(function(e,r,t,o,s,a,c,p){"use strict";let n=function(r){function t(e){var t;return(t=r.call(this,e)||this).type=null,t.value=null,t}return e._inheritsLoose(t,r),t}(c);r.__decorate([t.property({type:["bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],n.prototype,"type",void 0),r.__decorate([t.property({type:p,json:{write:!0}})],n.prototype,"value",void 0),n=r.__decorate([a.subclass("esri.popup.content.mixins.ChartMediaInfo")],n);return n}));
