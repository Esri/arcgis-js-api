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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/Accessor","./MultipointDrawAction","./PointDrawAction","./PolygonDrawAction","./PolylineDrawAction","./RectangleDrawAction"],function(t,e,i,c,o,n,r,a,s,v,p){var l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.activeAction=null,e.view=null,e}return i(e,t),e.prototype.destroy=function(){this.activeAction&&(this.activeAction.destroy(),this.activeAction=null)},e.prototype.create=function(t){switch(this._clearActiveAction(),t){case"point":this.activeAction=new a({view:this.view});break;case"polygon":this.activeAction=new s({view:this.view});break;case"polyline":this.activeAction=new v({view:this.view});break;case"multipoint":this.activeAction=new r({view:this.view});break;case"rectangle":this.activeAction=new p({view:this.view})}return this.activeAction},e.prototype.reset=function(){this._clearActiveAction()},e.prototype._clearActiveAction=function(){this.activeAction&&(this.activeAction.destroy(),this.activeAction=null)},c([o.property()],e.prototype,"activeAction",void 0),c([o.property()],e.prototype,"view",void 0),e=c([o.subclass("esri.views.2d.draw.Draw")],e)}(o.declared(n));return l});