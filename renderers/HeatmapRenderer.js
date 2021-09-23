/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../Color","../core/lang","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/has","../core/Logger","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","../layers/support/fieldUtils","./Renderer","./support/HeatmapColorStop"],(function(e,t,r,o,i,n,s,p,l,a,c,u,d){"use strict";var y;let f=y=function(t){function i(e){var o;return(o=t.call(this,e)||this).blurRadius=10,o.colorStops=[new d({ratio:0,color:new r("rgba(255, 140, 0, 0)")}),new d({ratio:.75,color:new r("rgba(255, 140, 0, 1)")}),new d({ratio:.9,color:new r("rgba(255, 0,   0, 1)")})],o.field=null,o.fieldOffset=0,o.maxPixelIntensity=100,o.minPixelIntensity=0,o.type="heatmap",o}e._inheritsLoose(i,t);var n=i.prototype;return n.collectRequiredFields=function(){var t=e._asyncToGenerator((function*(e,t){const r=this.field;r&&"string"==typeof r&&c.collectField(e,t,r)}));function r(e,r){return t.apply(this,arguments)}return r}(),n.getAttributeHash=function(){return null},n.getMeshHash=function(){return`${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`},n.clone=function(){return new y({blurRadius:this.blurRadius,colorStops:o.clone(this.colorStops),field:this.field,maxPixelIntensity:this.maxPixelIntensity,minPixelIntensity:this.minPixelIntensity})},i}(u);return t.__decorate([i.property({type:Number,json:{write:!0}})],f.prototype,"blurRadius",void 0),t.__decorate([i.property({type:[d],json:{write:!0}})],f.prototype,"colorStops",void 0),t.__decorate([i.property({type:String,json:{write:!0}})],f.prototype,"field",void 0),t.__decorate([i.property({type:Number,json:{write:{overridePolicy:(e,t,r)=>({enabled:null==r})}}})],f.prototype,"fieldOffset",void 0),t.__decorate([i.property({type:Number,json:{write:!0}})],f.prototype,"maxPixelIntensity",void 0),t.__decorate([i.property({type:Number,json:{write:!0}})],f.prototype,"minPixelIntensity",void 0),t.__decorate([l.enumeration({heatmap:"heatmap"})],f.prototype,"type",void 0),f=y=t.__decorate([a.subclass("esri.renderers.HeatmapRenderer")],f),f}));
