// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/JSONSupport","../../core/lang"],function(e,t,o,l,r,s,p){var i=function(e){function t(t){e.call(this,t),this.level=0,this.levelValue=null,this.resolution=0,this.scale=0}return o(t,e),t.prototype.clone=function(){return new t({level:this.level,levelValue:this.levelValue,resolution:this.resolution,scale:this.scale})},t.prototype.toJSON=function(){return p.fixJson({level:this.level,levelValue:this.levelValue,resolution:this.resolution,scale:this.scale})},l([r.property()],t.prototype,"level",void 0),l([r.property()],t.prototype,"levelValue",void 0),l([r.property()],t.prototype,"resolution",void 0),l([r.property()],t.prototype,"scale",void 0),t=l([r.subclass("esri.layers.support.LOD")],t)}(r.declared(s));return i});