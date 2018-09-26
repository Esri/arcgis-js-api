// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../Color","../core/lang","../core/accessorSupport/decorators","./Renderer","./support/HeatmapColorStop"],function(e,t,r,o,i,p,n,l,a){return function(e){function t(t){var r=e.call(this)||this;return r.blurRadius=10,r.colorStops=[new a.HeatmapColorStop({ratio:0,color:new i("rgba(255, 140, 0, 0)")}),new a.HeatmapColorStop({ratio:.75,color:new i("rgba(255, 140, 0, 1)")}),new a.HeatmapColorStop({ratio:.9,color:new i("rgba(255, 0,   0, 1)")})],r.field=null,r.fieldOffset=0,r.maxPixelIntensity=100,r.minPixelIntensity=0,r.type="heatmap",r}r(t,e),l=t,t.prototype.clone=function(){return new l({blurRadius:this.blurRadius,colorStops:p.clone(this.colorStops),field:this.field,maxPixelIntensity:this.maxPixelIntensity,minPixelIntensity:this.minPixelIntensity})};var l;return o([n.property({type:Number,json:{write:!0}})],t.prototype,"blurRadius",void 0),o([n.property({type:[a.HeatmapColorStop],json:{write:!0}})],t.prototype,"colorStops",void 0),o([n.property({type:String,json:{write:!0}})],t.prototype,"field",void 0),o([n.property({type:Number,json:{write:{overridePolicy:function(e,t,r){return{enabled:null==r}}}}})],t.prototype,"fieldOffset",void 0),o([n.property({type:Number,json:{write:!0}})],t.prototype,"maxPixelIntensity",void 0),o([n.property({type:Number,json:{write:!0}})],t.prototype,"minPixelIntensity",void 0),o([n.property({dependsOn:["field"],readOnly:!0})],t.prototype,"requiredFields",void 0),o([n.enumeration.serializable()({heatmap:"heatmap"})],t.prototype,"type",void 0),t=l=o([n.subclass("esri.renderers.HeatmapRenderer")],t)}(n.declared(l))});