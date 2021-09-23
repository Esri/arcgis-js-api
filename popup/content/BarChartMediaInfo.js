/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","./mixins/ChartMediaInfo","./support/chartMediaInfoUtils"],(function(e,t,r,o,a,s,c,i,n){"use strict";var p;let u=p=function(t){function r(e){var r;return(r=t.call(this,e)||this).type="bar-chart",r}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new p({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})},r}(i);return t.__decorate([r.property({type:["bar-chart"],readOnly:!0,json:{type:["barchart"],read:!1,write:n.chartTypeKebabDict.write}})],u.prototype,"type",void 0),u=p=t.__decorate([c.subclass("esri.popup.content.BarChartMediaInfo")],u),u}));
