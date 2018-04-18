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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/Handles","../../core/watchUtils","../../core/accessorSupport/decorators"],function(t,e,o,r,i,n,s,p){return function(t){function e(e){var o=t.call(this)||this;return o._handles=new n,o.state="pending",o.url="",o}return o(e,t),e.prototype.initialize=function(){var t=this;this._handles.add([s.init(this,["extension","name"],function(){return t._setFormattedFileName()})])},e.prototype.destroy=function(){this._handles.destroy()},e.prototype._setFormattedFileName=function(){if(this.name&&this.extension){var t=this.name+"."+this.extension,e=t;this.count&&(e=this.name+"("+this.count+")."+this.extension),this.formattedName=e}},r([p.property()],e.prototype,"count",void 0),r([p.property()],e.prototype,"extension",void 0),r([p.property()],e.prototype,"formattedName",void 0),r([p.property()],e.prototype,"name",void 0),r([p.property()],e.prototype,"state",void 0),r([p.property()],e.prototype,"url",void 0),e=r([p.subclass("esri.widgets.print.FileLink")],e)}(p.declared(i))});