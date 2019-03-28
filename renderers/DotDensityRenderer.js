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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/assignHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../Color","../core/lang","../core/accessorSupport/decorators","./Renderer","./mixins/VisualVariablesRenderer","./support/AttributeColorInfo","./support/DotDensityLegendOptions","../support/arcadeUtils","../symbols/SimpleFillSymbol","../symbols/SimpleLineSymbol"],function(e,t,o,r,n,i,l,s,p,u,a,c,d,y,f,h,b){return function(e){function t(t){var o=e.call(this,t)||this;return o.attributes=null,o.backgroundColor=new s([0,0,0,0]),o.blendDots=!0,o.dotShape="square",o.dotSize=1,o.legendOptions=null,o.outline=new b,o.referenceDotValue=null,o.referenceScale=null,o.seed=1,o.type="dot-density",o}o(t,e),n=t,t.prototype.calculateDotValue=function(e){if(null==this.referenceScale)return this.referenceDotValue;var t=e/this.referenceScale*this.referenceDotValue;return t<1?1:t},t.prototype.getSymbol=function(e,t){return new h({outline:this.outline})},t.prototype.getSymbols=function(){return[this.getSymbol(null)]},t.prototype.clone=function(){return new n({attributes:p.clone(this.attributes),backgroundColor:p.clone(this.backgroundColor),blendDots:p.clone(this.blendDots),dotShape:p.clone(this.dotShape),dotSize:p.clone(this.dotSize),legendOptions:p.clone(this.legendOptions),outline:p.clone(this.outline),referenceScale:p.clone(this.referenceScale),referenceDotValue:p.clone(this.referenceDotValue),visualVariables:p.clone(this.visualVariables)})},t.prototype.getControllerHash=function(){return this.attributes.map(function(e){return e.field||e.valueExpression||""})+"-"+(this.outline&&JSON.stringify(this.outline.toJSON())||"")},t.prototype.collectRequiredFields=function(e,t){return l(this,void 0,void 0,function(){var o,r,n;return i(this,function(i){switch(i.label){case 0:return[4,this.collectVVRequiredFields(e,t)];case 1:for(i.sent(),o=0,r=this.attributes;o<r.length;o++)n=r[o],n.valueExpression&&f.extractFieldNames(n.valueExpression).forEach(function(t){e.add(t)}),n.field&&e.add(n.field);return[2]}})})};var n;return r([u.property({type:[d],json:{write:!0}})],t.prototype,"attributes",void 0),r([u.property({type:s,json:{write:!0}})],t.prototype,"backgroundColor",void 0),r([u.property({type:Boolean,json:{write:!0}})],t.prototype,"blendDots",void 0),r([u.property({type:String,json:{write:!0}})],t.prototype,"dotShape",void 0),r([u.property({type:Number,json:{write:!0}})],t.prototype,"dotSize",void 0),r([u.property({type:y,json:{write:!0}})],t.prototype,"legendOptions",void 0),r([u.property({type:b,json:{default:null,write:!0}})],t.prototype,"outline",void 0),r([u.property({type:Number,json:{write:!0}})],t.prototype,"referenceDotValue",void 0),r([u.property({type:Number,json:{write:!0}})],t.prototype,"referenceScale",void 0),r([u.property({type:Number,json:{write:!0}})],t.prototype,"seed",void 0),r([u.enumeration.serializable()({dotDensity:"dot-density"})],t.prototype,"type",void 0),t=n=r([u.subclass("esri.renderers.DotDensityRenderer")],t)}(u.declared(a,c))});