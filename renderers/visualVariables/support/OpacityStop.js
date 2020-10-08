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

define(["require","exports","tslib","../../../core/JSONSupport","../../../core/accessorSupport/decorators","../../../core/accessorSupport/ensureType","../../../webdoc/support/opacityUtils"],(function(t,e,r,o,p,a,c){"use strict";return function(t){function e(e){var r=t.call(this,e)||this;return r.label=null,r.opacity=null,r.value=null,r}var o;return r.__extends(e,t),o=e,e.prototype.readOpacity=function(t,e){return c.transparencyToOpacity(e.transparency)},e.prototype.writeOpacity=function(t,e,r){e[r]=c.opacityToTransparency(t)},e.prototype.clone=function(){return new o({label:this.label,opacity:this.opacity,value:this.value})},r.__decorate([p.property({type:String,json:{write:!0}})],e.prototype,"label",void 0),r.__decorate([p.property({type:Number,json:{type:a.Integer,write:{target:"transparency"}}})],e.prototype,"opacity",void 0),r.__decorate([p.reader("opacity",["transparency"])],e.prototype,"readOpacity",null),r.__decorate([p.writer("opacity")],e.prototype,"writeOpacity",null),r.__decorate([p.property({type:Number,json:{write:!0}})],e.prototype,"value",void 0),e=o=r.__decorate([p.subclass("esri.renderers.visualVariables.support.OpacityStop")],e)}(o.JSONSupport)}));