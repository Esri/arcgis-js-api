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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/lang","../../core/accessorSupport/decorators","./Field","./fieldUtils"],function(e,o,r,t,s,n,i,p,c){return function(e){function o(){return null!==e&&e.apply(this,arguments)||this}r(o,e),s=o,o.fromWorker=function(e){if(!e)return null;var o=JSON.parse(e),r=new s;return r.fields=o.fields&&o.fields.map(function(e){return p.fromJSON(e)}),r.options=o.options,r.process=new(Function.bind.apply(Function,[void 0].concat(o.process.args,[o.process.body]))),r},Object.defineProperty(o.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),o.prototype.clone=function(){return new s(n.clone({fields:this.fields,options:this.options,process:this.process}))},o.prototype.getField=function(e){return c.getField(e,this.fields)},o.prototype.refresh=function(){this.notifyChange("version")},o.prototype.toWorker=function(){var e=this.process.toString();return JSON.stringify({fields:this.fields,options:this.options,process:{body:e.substring(e.indexOf("{")+1,e.lastIndexOf("}")),args:e.slice(e.indexOf("(")+1,e.indexOf(")")).match(/([^\s,]+)/g)}})};var s;return t([i.property({type:[p]})],o.prototype,"fields",void 0),t([i.property()],o.prototype,"options",void 0),t([i.property()],o.prototype,"process",void 0),t([i.property({readOnly:!0,dependsOn:["process","options","fields"]})],o.prototype,"version",null),o=s=t([i.subclass("esri.layers.support.FeatureProcessing")],o)}(i.declared(s))});