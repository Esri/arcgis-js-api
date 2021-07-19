/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","./MediaInfo","../support/ChartMediaInfoValue"],(function(e,r,o,t,s,c,a,p,n){"use strict";let u=function(r){function o(e){var o;return(o=r.call(this,e)||this).type=null,o.value=null,o}return e._inheritsLoose(o,r),o}(p);return r.__decorate([o.property({type:["bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],u.prototype,"type",void 0),r.__decorate([o.property({type:n,json:{write:!0}})],u.prototype,"value",void 0),u=r.__decorate([a.subclass("esri.popup.content.mixins.ChartMediaInfo")],u),u}));
