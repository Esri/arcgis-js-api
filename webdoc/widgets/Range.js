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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(e,r,t,o,n,i,p){var s=new n.default({slider:"slider",picker:"picker"});return function(e){function r(r){var t=e.call(this,r)||this;return t.interactionMode=null,t.numStops=null,t.stopInterval=null,t}t(r,e),n=r,r.prototype.clone=function(){return new n({interactionMode:this.interactionMode,numStops:this.numStops,stopInterval:this.stopInterval})};var n;return o([p.property({type:s.apiValues,nonNullable:!0,json:{type:s.jsonValues,default:null,read:{reader:s.read},write:{isRequired:!0,writer:s.write}}})],r.prototype,"interactionMode",void 0),o([p.property({type:Number,json:{read:{source:"numberOfStops"},write:{target:"numberOfStops",overridePolicy:function(){var e=null!=this.stopInterval;return{enabled:!e,isRequired:!e}}}}})],r.prototype,"numStops",void 0),o([p.property({type:Number,json:{write:{overridePolicy:function(){return{isRequired:null==this.numStops}}}}})],r.prototype,"stopInterval",void 0),r=n=o([p.subclass("esri.webdoc.widgets.Range")],r)}(p.declared(i.JSONSupport))});