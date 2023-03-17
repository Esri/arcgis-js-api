/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","./mixins/ChartMediaInfo","./support/chartMediaInfoUtils"],(function(e,t,r,o,i,s,a,c){"use strict";var n;let p=n=function(t){function r(e){var r;return(r=t.call(this,e)||this).type="pie-chart",r}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new n({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})},r}(a);t.__decorate([r.property({type:["pie-chart"],readOnly:!0,json:{type:["piechart"],read:!1,write:c.chartTypeKebabDict.write}})],p.prototype,"type",void 0),p=n=t.__decorate([s.subclass("esri.popup.content.PieChartMediaInfo")],p);return p}));
