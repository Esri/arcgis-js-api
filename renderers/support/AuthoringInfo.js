/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/jsonMap","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/has","../../core/Logger","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","./AuthoringInfoFieldInfo","./AuthoringInfoVisualVariable","../../rest/support/colorRamps"],(function(e,t,i,s,r,a,o,l,n,u,c,p,d,y){"use strict";var h;const f=new i.JSONMap({esriClassifyDefinedInterval:"defined-interval",esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation"}),v=new i.JSONMap({classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density"}),m=["inches","feet","yards","miles","nautical-miles","millimeters","centimeters","decimeters","meters","kilometers","decimal-degrees"],_=["high-to-low","above-and-below","above","below","90-10"],b=["caret","circle-caret","arrow","circle-arrow","plus-minus","circle-plus-minus","square","circle","triangle","happy-sad","thumb","custom"];let g=h=function(t){function i(e){var i;return(i=t.call(this,e)||this).colorRamp=null,i.lengthUnit=null,i.maxSliderValue=null,i.minSliderValue=null,i.visualVariables=null,i}e._inheritsLoose(i,t);var s=i.prototype;return s.readColorRamp=function(e){if(e)return y.fromJSON(e)},s.clone=function(){return new h({classificationMethod:this.classificationMethod,colorRamp:r.clone(this.colorRamp),fields:this.fields&&this.fields.slice(0),field1:r.clone(this.field1),field2:r.clone(this.field2),focus:this.focus,numClasses:this.numClasses,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,lengthUnit:this.lengthUnit,statistics:this.statistics,standardDeviationInterval:this.standardDeviationInterval,type:this.type,visualVariables:this.visualVariables&&this.visualVariables.map((e=>e.clone())),univariateSymbolStyle:this.univariateSymbolStyle,univariateTheme:this.univariateTheme})},e._createClass(i,[{key:"classificationMethod",get:function(){const e=this._get("classificationMethod"),t=this.type;return t&&"relationship"!==t?"class-breaks-size"===t||"class-breaks-color"===t?e||"manual":null:e},set:function(e){this._set("classificationMethod",e)}},{key:"fields",get:function(){return this.type&&"predominance"!==this.type?null:this._get("fields")},set:function(e){this._set("fields",e)}},{key:"field1",get:function(){return this.type&&"relationship"!==this.type?null:this._get("field1")},set:function(e){this._set("field1",e)}},{key:"field2",get:function(){return this.type&&"relationship"!==this.type?null:this._get("field2")},set:function(e){this._set("field2",e)}},{key:"focus",get:function(){return this.type&&"relationship"!==this.type?null:this._get("focus")},set:function(e){this._set("focus",e)}},{key:"numClasses",get:function(){return this.type&&"relationship"!==this.type?null:this._get("numClasses")},set:function(e){this._set("numClasses",e)}},{key:"statistics",get:function(){return"univariate-color-size"===this.type&&"above-and-below"===this.univariateTheme?this._get("statistics"):null},set:function(e){this._set("statistics",e)}},{key:"standardDeviationInterval",get:function(){const e=this.type;return e&&"relationship"!==e&&"class-breaks-size"!==e&&"class-breaks-color"!==e||this.classificationMethod&&"standard-deviation"!==this.classificationMethod?null:this._get("standardDeviationInterval")},set:function(e){this._set("standardDeviationInterval",e)}},{key:"type",get:function(){return this._get("type")},set:function(e){let t=e;"classed-size"===e?t="class-breaks-size":"classed-color"===e&&(t="class-breaks-color"),this._set("type",t)}},{key:"univariateSymbolStyle",get:function(){return"univariate-color-size"===this.type&&"above-and-below"===this.univariateTheme?this._get("univariateSymbolStyle"):null},set:function(e){this._set("univariateSymbolStyle",e)}},{key:"univariateTheme",get:function(){return"univariate-color-size"===this.type?this._get("univariateTheme"):null},set:function(e){this._set("univariateTheme",e)}}]),i}(s.JSONSupport);return t.__decorate([a.property({type:f.apiValues,value:null,json:{type:f.jsonValues,read:f.read,write:f.write,origins:{"web-document":{default:"manual",type:f.jsonValues,read:f.read,write:f.write}}}})],g.prototype,"classificationMethod",null),t.__decorate([a.property({types:y.types,json:{write:!0}})],g.prototype,"colorRamp",void 0),t.__decorate([u.reader("colorRamp")],g.prototype,"readColorRamp",null),t.__decorate([a.property({type:[String],value:null,json:{write:!0}})],g.prototype,"fields",null),t.__decorate([a.property({type:p.default,value:null,json:{write:!0}})],g.prototype,"field1",null),t.__decorate([a.property({type:p.default,value:null,json:{write:!0}})],g.prototype,"field2",null),t.__decorate([a.property({type:["HH","HL","LH","LL"],value:null,json:{write:!0}})],g.prototype,"focus",null),t.__decorate([a.property({type:Number,value:null,json:{type:o.Integer,write:!0}})],g.prototype,"numClasses",null),t.__decorate([a.property({type:m,json:{type:m,read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],g.prototype,"lengthUnit",void 0),t.__decorate([a.property({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],g.prototype,"maxSliderValue",void 0),t.__decorate([a.property({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],g.prototype,"minSliderValue",void 0),t.__decorate([a.property({type:Object,value:null,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],g.prototype,"statistics",null),t.__decorate([a.property({type:[.25,.33,.5,1],value:null,json:{type:[.25,.33,.5,1],write:!0}})],g.prototype,"standardDeviationInterval",null),t.__decorate([a.property({type:v.apiValues,value:null,json:{type:v.jsonValues,read:v.read,write:v.write}})],g.prototype,"type",null),t.__decorate([a.property({type:[d],json:{write:!0}})],g.prototype,"visualVariables",void 0),t.__decorate([a.property({type:b,value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],g.prototype,"univariateSymbolStyle",null),t.__decorate([a.property({type:_,value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],g.prototype,"univariateTheme",null),g=h=t.__decorate([c.subclass("esri.renderers.support.AuthoringInfo")],g),g}));
