// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../Color","../core/lang","../core/accessorSupport/decorators","../layers/support/fieldUtils","./Renderer","./support/HeatmapColorStop"],(function(e,t,r,o,i,n,p,s,l){return function(e){function t(t){var r=e.call(this,t)||this;return r.blurRadius=10,r.colorStops=[new l({ratio:0,color:new o("rgba(255, 140, 0, 0)")}),new l({ratio:.75,color:new o("rgba(255, 140, 0, 1)")}),new l({ratio:.9,color:new o("rgba(255, 0,   0, 1)")})],r.field=null,r.fieldOffset=0,r.maxPixelIntensity=100,r.minPixelIntensity=0,r.type="heatmap",r}var s;return r.__extends(t,e),s=t,t.prototype.collectRequiredFields=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var o;return r.__generator(this,(function(r){return(o=this.field)&&"string"==typeof o&&p.collectField(e,t,o),[2]}))}))},t.prototype.getAttributeHash=function(){return null},t.prototype.getMeshHash=function(){return JSON.stringify(this.colorStops)+"."+this.blurRadius+"."+this.field},t.prototype.clone=function(){return new s({blurRadius:this.blurRadius,colorStops:i.clone(this.colorStops),field:this.field,maxPixelIntensity:this.maxPixelIntensity,minPixelIntensity:this.minPixelIntensity})},r.__decorate([n.property({type:Number,json:{write:!0}})],t.prototype,"blurRadius",void 0),r.__decorate([n.property({type:[l],json:{write:!0}})],t.prototype,"colorStops",void 0),r.__decorate([n.property({type:String,json:{write:!0}})],t.prototype,"field",void 0),r.__decorate([n.property({type:Number,json:{write:{overridePolicy:function(e,t,r){return{enabled:null==r}}}}})],t.prototype,"fieldOffset",void 0),r.__decorate([n.property({type:Number,json:{write:!0}})],t.prototype,"maxPixelIntensity",void 0),r.__decorate([n.property({type:Number,json:{write:!0}})],t.prototype,"minPixelIntensity",void 0),r.__decorate([n.enumeration({heatmap:"heatmap"})],t.prototype,"type",void 0),t=s=r.__decorate([n.subclass("esri.renderers.HeatmapRenderer")],t)}(s)}));