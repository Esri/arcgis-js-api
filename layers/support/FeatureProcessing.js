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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/lang","../../core/accessorSupport/decorators","../../layers/support/Field"],function(e,o,r,s,t,n,p,i){return function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return r(o,e),t=o,o.fromWorker=function(e){if(!e)return null;var o=new t;return o.fields=e.fields&&e.fields.map(function(e){return i.fromJSON(e)}),o.options=e.options,o.process=new(Function.bind.apply(Function,[void 0].concat(e.process.args,[e.process.body]))),o},o.prototype.clone=function(){return new t(n.clone({fields:this.fields,options:this.options,process:this.process}))},o.prototype.toWorker=function(){var e=this.process.toString();return{fields:this.fields,options:this.options,process:{body:e.substring(e.indexOf("{")+1,e.lastIndexOf("}")),args:e.slice(e.indexOf("(")+1,e.indexOf(")")).match(/([^\s,]+)/g)}}},s([p.property({type:[i]})],o.prototype,"fields",void 0),s([p.property()],o.prototype,"options",void 0),s([p.property()],o.prototype,"process",void 0),o=t=s([p.subclass("esri.layers.support.FeatureProcessing")],o);var t}(p.declared(t))});