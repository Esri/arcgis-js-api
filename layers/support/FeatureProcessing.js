// COPYRIGHT © 2017 Esri
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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/Accessor","../../core/lang","../../layers/support/Field"],function(e,r,o,s,t,n,p,i){var c=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return o(r,e),n=r,r.fromWorker=function(e){if(!e)return null;var r=new n;return r.fields=e.fields&&e.fields.map(function(e){return i.fromJSON(e)}),r.options=e.options,r.process=new(Function.bind.apply(Function,[void 0].concat(e.process.args,[e.process.body]))),r},r.prototype.clone=function(){return new n(p.clone({fields:this.fields,options:this.options,process:this.process}))},r.prototype.toWorker=function(){var e=this.process.toString();return{fields:this.fields,options:this.options,process:{body:e.substring(e.indexOf("{")+1,e.lastIndexOf("}")),args:e.slice(e.indexOf("(")+1,e.indexOf(")")).match(/([^\s,]+)/g)}}},s([t.property({type:[i]})],r.prototype,"fields",void 0),s([t.property()],r.prototype,"options",void 0),s([t.property()],r.prototype,"process",void 0),r=n=s([t.subclass("esri.layers.support.FeatureProcessing")],r);var n}(t.declared(n));return c});