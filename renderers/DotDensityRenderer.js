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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../Color","../core/lang","../core/accessorSupport/decorators","../layers/support/fieldUtils","./Renderer","./mixins/VisualVariablesMixin","./support/AttributeColorInfo","./support/DotDensityLegendOptions","../symbols/SimpleFillSymbol","../symbols/SimpleLineSymbol"],(function(e,t,o,r,n,i,l,s,a,u,p,d,c){"use strict";return function(e){function t(t){var o=e.call(this,t)||this;return o.attributes=null,o.backgroundColor=new r([0,0,0,0]),o.blendDots=!0,o.dotBlendingEnabled=!0,o.dotShape="square",o.dotSize=1,o.legendOptions=null,o.outline=new c,o.dotValue=null,o.referenceDotValue=null,o.referenceScale=null,o.seed=1,o.type="dot-density",o}var s;return o.__extends(t,e),s=t,t.prototype.calculateDotValue=function(e){if(null==this.referenceScale)return this.dotValue;var t=e/this.referenceScale*this.dotValue;return t<1?1:t},t.prototype.getSymbol=function(){return new d({outline:this.outline})},t.prototype.getSymbolAsync=function(){return o.__awaiter(this,void 0,void 0,(function(){return o.__generator(this,(function(e){return[2,this.getSymbol()]}))}))},t.prototype.getSymbols=function(){return[this.getSymbol()]},t.prototype.getAttributeHash=function(){return this.attributes&&this.attributes.reduce((function(e,t){return e+t.getAttributeHash()}),"")},t.prototype.getMeshHash=function(){return JSON.stringify(this.outline)},t.prototype.clone=function(){return new s({attributes:n.clone(this.attributes),backgroundColor:n.clone(this.backgroundColor),dotBlendingEnabled:n.clone(this.dotBlendingEnabled),dotShape:n.clone(this.dotShape),dotSize:n.clone(this.dotSize),dotValue:n.clone(this.dotValue),legendOptions:n.clone(this.legendOptions),outline:n.clone(this.outline),referenceScale:n.clone(this.referenceScale),visualVariables:n.clone(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})},t.prototype.getControllerHash=function(){return this.attributes.map((function(e){return e.field||e.valueExpression||""}))+"-"+(this.outline&&JSON.stringify(this.outline.toJSON())||"")},t.prototype.collectRequiredFields=function(e,t){return o.__awaiter(this,void 0,void 0,(function(){var r,n,i;return o.__generator(this,(function(o){switch(o.label){case 0:return[4,this.collectVVRequiredFields(e,t)];case 1:o.sent(),r=0,n=this.attributes,o.label=2;case 2:return r<n.length?(i=n[r]).valueExpression?[4,l.collectArcadeFieldNames(e,t,i.valueExpression)]:[3,4]:[3,6];case 3:o.sent(),o.label=4;case 4:i.field&&e.add(i.field),o.label=5;case 5:return r++,[3,2];case 6:return[2]}}))}))},o.__decorate([i.property({type:[u],json:{write:!0}})],t.prototype,"attributes",void 0),o.__decorate([i.property({type:r,json:{write:!0}})],t.prototype,"backgroundColor",void 0),o.__decorate([i.property({type:Boolean}),i.aliasOf("dotBlendingEnabled")],t.prototype,"blendDots",void 0),o.__decorate([i.property({type:Boolean,json:{write:!0}})],t.prototype,"dotBlendingEnabled",void 0),o.__decorate([i.property({type:String,json:{write:!0}})],t.prototype,"dotShape",void 0),o.__decorate([i.property({type:Number,json:{write:!0}})],t.prototype,"dotSize",void 0),o.__decorate([i.property({type:p,json:{write:!0}})],t.prototype,"legendOptions",void 0),o.__decorate([i.property({type:c,json:{default:null,write:!0}})],t.prototype,"outline",void 0),o.__decorate([i.property({type:Number,json:{write:!0}})],t.prototype,"dotValue",void 0),o.__decorate([i.property({type:Number}),i.aliasOf("dotValue")],t.prototype,"referenceDotValue",void 0),o.__decorate([i.property({type:Number,json:{write:!0}})],t.prototype,"referenceScale",void 0),o.__decorate([i.property({type:Number,json:{write:!0}})],t.prototype,"seed",void 0),o.__decorate([i.enumeration({dotDensity:"dot-density"})],t.prototype,"type",void 0),t=s=o.__decorate([i.subclass("esri.renderers.DotDensityRenderer")],t)}(a.VisualVariablesMixin(s))}));