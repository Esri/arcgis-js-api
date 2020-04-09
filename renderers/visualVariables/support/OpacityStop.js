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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/JSONSupport","../../../core/accessorSupport/decorators","../../../core/accessorSupport/ensureType","../../../webdoc/support/opacityUtils"],(function(e,r,t,p,o,a,n,c){return function(e){function r(r){var t=e.call(this,r)||this;return t.label=null,t.opacity=null,t.value=null,t}var o;return t(r,e),o=r,r.prototype.readOpacity=function(e,r){return c.transparencyToOpacity(r.transparency)},r.prototype.writeOpacity=function(e,r,t){r[t]=c.opacityToTransparency(e)},r.prototype.clone=function(){return new o({label:this.label,opacity:this.opacity,value:this.value})},p([a.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),p([a.property({type:Number,json:{type:n.Integer,write:{target:"transparency"}}})],r.prototype,"opacity",void 0),p([a.reader("opacity",["transparency"])],r.prototype,"readOpacity",null),p([a.writer("opacity")],r.prototype,"writeOpacity",null),p([a.property({type:Number,json:{write:!0}})],r.prototype,"value",void 0),r=o=p([a.subclass("esri.renderers.visualVariables.support.OpacityStop")],r)}(a.declared(o.JSONSupport))}));