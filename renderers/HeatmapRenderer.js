// COPYRIGHT © 2019 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../Color","../core/lang","../core/accessorSupport/decorators","../layers/support/fieldUtils","./Renderer","./support/HeatmapColorStop"],function(e,t,r,o,i,n,p,l,s,a,u,c){return function(e){function t(t){var r=e.call(this,t)||this;return r.blurRadius=10,r.colorStops=[new c.HeatmapColorStop({ratio:0,color:new p("rgba(255, 140, 0, 0)")}),new c.HeatmapColorStop({ratio:.75,color:new p("rgba(255, 140, 0, 1)")}),new c.HeatmapColorStop({ratio:.9,color:new p("rgba(255, 0,   0, 1)")})],r.field=null,r.fieldOffset=0,r.maxPixelIntensity=100,r.minPixelIntensity=0,r.type="heatmap",r}r(t,e),u=t,t.prototype.collectRequiredFields=function(e,t){return n(this,void 0,void 0,function(){var r;return i(this,function(o){return r=this.field,r&&"string"==typeof r&&a.collectField(e,t,r),[2]})})},t.prototype.getAttributeHash=function(){return null},t.prototype.getMeshHash=function(){return JSON.stringify(this.colorStops)+"."+this.blurRadius},t.prototype.clone=function(){return new u({blurRadius:this.blurRadius,colorStops:l.clone(this.colorStops),field:this.field,maxPixelIntensity:this.maxPixelIntensity,minPixelIntensity:this.minPixelIntensity})};var u;return o([s.property({type:Number,json:{write:!0}})],t.prototype,"blurRadius",void 0),o([s.property({type:[c.HeatmapColorStop],json:{write:!0}})],t.prototype,"colorStops",void 0),o([s.property({type:String,json:{write:!0}})],t.prototype,"field",void 0),o([s.property({type:Number,json:{write:{overridePolicy:function(e,t,r){return{enabled:null==r}}}}})],t.prototype,"fieldOffset",void 0),o([s.property({type:Number,json:{write:!0}})],t.prototype,"maxPixelIntensity",void 0),o([s.property({type:Number,json:{write:!0}})],t.prototype,"minPixelIntensity",void 0),o([s.enumeration.serializable()({heatmap:"heatmap"})],t.prototype,"type",void 0),t=u=o([s.subclass("esri.renderers.HeatmapRenderer")],t)}(s.declared(u))});