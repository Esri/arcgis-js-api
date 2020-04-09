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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/assignHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../Color","../core/lang","../core/accessorSupport/decorators","../layers/support/fieldUtils","./Renderer","./mixins/VisualVariablesMixin","./support/AttributeColorInfo","./support/DotDensityLegendOptions","../symbols/SimpleFillSymbol","../symbols/SimpleLineSymbol"],(function(e,t,o,r,n,i,l,s,p,u,a,d,c,y,h,b,f){return function(e){function t(t){var o=e.call(this,t)||this;return o.attributes=null,o.backgroundColor=new s([0,0,0,0]),o.blendDots=!0,o.dotBlendingEnabled=!0,o.dotShape="square",o.dotSize=1,o.legendOptions=null,o.outline=new f,o.dotValue=null,o.referenceDotValue=null,o.referenceScale=null,o.seed=1,o.type="dot-density",o}var n;return o(t,e),n=t,t.prototype.calculateDotValue=function(e){if(null==this.referenceScale)return this.dotValue;var t=e/this.referenceScale*this.dotValue;return t<1?1:t},t.prototype.getSymbol=function(){return new b({outline:this.outline})},t.prototype.getSymbolAsync=function(){return l(this,void 0,void 0,(function(){return i(this,(function(e){return[2,this.getSymbol()]}))}))},t.prototype.getSymbols=function(){return[this.getSymbol()]},t.prototype.getAttributeHash=function(){return this.attributes&&this.attributes.reduce((function(e,t){return e+t.getAttributeHash()}),"")},t.prototype.getMeshHash=function(){return JSON.stringify(this.outline)},t.prototype.clone=function(){return new n({attributes:p.clone(this.attributes),backgroundColor:p.clone(this.backgroundColor),dotBlendingEnabled:p.clone(this.dotBlendingEnabled),dotShape:p.clone(this.dotShape),dotSize:p.clone(this.dotSize),dotValue:p.clone(this.dotValue),legendOptions:p.clone(this.legendOptions),outline:p.clone(this.outline),referenceScale:p.clone(this.referenceScale),visualVariables:p.clone(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})},t.prototype.getControllerHash=function(){return this.attributes.map((function(e){return e.field||e.valueExpression||""}))+"-"+(this.outline&&JSON.stringify(this.outline.toJSON())||"")},t.prototype.collectRequiredFields=function(e,t){return l(this,void 0,void 0,(function(){var o,r,n;return i(this,(function(i){switch(i.label){case 0:return[4,this.collectVVRequiredFields(e,t)];case 1:i.sent(),o=0,r=this.attributes,i.label=2;case 2:return o<r.length?(n=r[o]).valueExpression?[4,a.collectArcadeFieldNames(e,t,n.valueExpression)]:[3,4]:[3,6];case 3:i.sent(),i.label=4;case 4:n.field&&e.add(n.field),i.label=5;case 5:return o++,[3,2];case 6:return[2]}}))}))},r([u.property({type:[y],json:{write:!0}})],t.prototype,"attributes",void 0),r([u.property({type:s,json:{write:!0}})],t.prototype,"backgroundColor",void 0),r([u.property({type:Boolean}),u.aliasOf("dotBlendingEnabled")],t.prototype,"blendDots",void 0),r([u.property({type:Boolean,json:{write:!0}})],t.prototype,"dotBlendingEnabled",void 0),r([u.property({type:String,json:{write:!0}})],t.prototype,"dotShape",void 0),r([u.property({type:Number,json:{write:!0}})],t.prototype,"dotSize",void 0),r([u.property({type:h,json:{write:!0}})],t.prototype,"legendOptions",void 0),r([u.property({type:f,json:{default:null,write:!0}})],t.prototype,"outline",void 0),r([u.property({type:Number,json:{write:!0}})],t.prototype,"dotValue",void 0),r([u.property({type:Number}),u.aliasOf("dotValue")],t.prototype,"referenceDotValue",void 0),r([u.property({type:Number,json:{write:!0}})],t.prototype,"referenceScale",void 0),r([u.property({type:Number,json:{write:!0}})],t.prototype,"seed",void 0),r([u.enumeration.serializable()({dotDensity:"dot-density"})],t.prototype,"type",void 0),t=n=r([u.subclass("esri.renderers.DotDensityRenderer")],t)}(u.declared(c.VisualVariablesMixin(d)))}));