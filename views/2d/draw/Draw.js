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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/Accessor","./PointDrawAction","./PolygonDrawAction","./PolylineDrawAction"],function(t,e,i,o,c,r,n,s,a){var p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.activeAction=null,e.view=null,e}return i(e,t),e.prototype.destroy=function(){this.activeAction&&(this.activeAction.destroy(),this.activeAction=null)},e.prototype.create=function(t){switch(this.activeAction&&(this.activeAction.destroy(),this.activeAction=null),t){case"point":this.activeAction=new n({view:this.view});break;case"polygon":this.activeAction=new s({view:this.view});break;case"polyline":this.activeAction=new a({view:this.view})}return this.activeAction},o([c.property()],e.prototype,"activeAction",void 0),o([c.property()],e.prototype,"view",void 0),e=o([c.subclass("esri.views.2d.draw.Draw")],e)}(c.declared(r));return p});