/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","./MediaInfo","../support/ChartMediaInfoValue"],(function(e,r,t,o,s,a,c,p,n){"use strict";let u=function(r){function t(e){var t;return(t=r.call(this,e)||this).type=null,t.value=null,t}return e._inheritsLoose(t,r),t}(p);r.__decorate([t.property({type:["bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],u.prototype,"type",void 0),r.__decorate([t.property({type:n,json:{write:!0}})],u.prototype,"value",void 0),u=r.__decorate([c.subclass("esri.popup.content.mixins.ChartMediaInfo")],u);return u}));
