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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/Accessor","../../core/Handles","../../core/watchUtils","../../core/accessorSupport/decorators"],(function(t,e,o,r,i,n,s){return function(t){function e(e){var o=t.call(this,e)||this;return o._handles=new i,o.state="pending",o.url="",o}return o.__extends(e,t),e.prototype.initialize=function(){var t=this;this._handles.add([n.init(this,["extension","name"],(function(){return t._setFormattedFileName()}))])},e.prototype.destroy=function(){this._handles.destroy()},e.prototype._setFormattedFileName=function(){if(this.name&&this.extension){var t=this.name+"."+this.extension;this.count&&(t=this.name+"("+this.count+")."+this.extension),this.formattedName=t}},o.__decorate([s.property()],e.prototype,"count",void 0),o.__decorate([s.property()],e.prototype,"error",void 0),o.__decorate([s.property()],e.prototype,"extension",void 0),o.__decorate([s.property()],e.prototype,"formattedName",void 0),o.__decorate([s.property()],e.prototype,"name",void 0),o.__decorate([s.property()],e.prototype,"state",void 0),o.__decorate([s.property()],e.prototype,"url",void 0),e=o.__decorate([s.subclass("esri.widgets.print.FileLink")],e)}(r)}));