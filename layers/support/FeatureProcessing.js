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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/lang","../../core/accessorSupport/decorators","../../layers/support/Field","../../layers/support/fieldUtils"],function(e,r,o,t,s,n,i,p,c){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}o(r,e),s=r,r.fromWorker=function(e){if(!e)return null;var r=JSON.parse(e),o=new s;return o.fields=r.fields&&r.fields.map(function(e){return p.fromJSON(e)}),o.options=r.options,o.process=new(Function.bind.apply(Function,[void 0].concat(r.process.args,[r.process.body]))),o},Object.defineProperty(r.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r.prototype.clone=function(){return new s(n.clone({fields:this.fields,options:this.options,process:this.process}))},r.prototype.getField=function(e){return c.getField(e,this.fields)},r.prototype.refresh=function(){this.notifyChange("version")},r.prototype.toWorker=function(){var e=this.process.toString();return JSON.stringify({fields:this.fields,options:this.options,process:{body:e.substring(e.indexOf("{")+1,e.lastIndexOf("}")),args:e.slice(e.indexOf("(")+1,e.indexOf(")")).match(/([^\s,]+)/g)}})};var s;return t([i.property({type:[p]})],r.prototype,"fields",void 0),t([i.property()],r.prototype,"options",void 0),t([i.property()],r.prototype,"process",void 0),t([i.property({readOnly:!0,dependsOn:["process","options","fields"]})],r.prototype,"version",null),r=s=t([i.subclass("esri.layers.support.FeatureProcessing")],r)}(i.declared(s))});