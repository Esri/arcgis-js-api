/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","./mixins/ChartMediaInfo","./support/chartMediaInfoUtils"],(function(t,e,r,o,a,s,c,i){"use strict";var n;let p=n=function(e){function r(t){var r;return(r=e.call(this,t)||this).type="bar-chart",r}return t._inheritsLoose(r,e),r.prototype.clone=function(){return new n({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})},r}(c);e.__decorate([r.property({type:["bar-chart"],readOnly:!0,json:{type:["barchart"],read:!1,write:i.chartTypeKebabDict.write}})],p.prototype,"type",void 0),p=n=e.__decorate([s.subclass("esri.popup.content.BarChartMediaInfo")],p);return p}));
