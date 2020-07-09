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

define(["require","exports","tslib","../../core/Accessor","../../core/accessorSupport/decorators","./MultipointDrawAction","./PointDrawAction","./PolygonDrawAction","./PolylineDrawAction","./SegmentDrawAction"],(function(t,e,i,o,c,n,r,a,s,p){return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.activeAction=null,e.type="draw",e.view=null,e}return i.__extends(e,t),e.prototype.destroy=function(){this.activeAction&&(this.activeAction.destroy(),this.activeAction=null)},e.prototype.create=function(t,e){this.reset();var o=i.__assign({view:this.view},e);switch(t){case"point":this.activeAction=new r.PointDrawAction(o);break;case"polygon":this.activeAction=new a.PolygonDrawAction(o);break;case"polyline":this.activeAction=new s.PolylineDrawAction(o);break;case"multipoint":this.activeAction=new n.MultipointDrawAction(o);break;case"rectangle":case"circle":case"ellipse":case"triangle":this.activeAction=new p.SegmentDrawAction(o)}return this.activeAction},e.prototype.complete=function(){this.activeAction&&this.activeAction.complete(),this.activeAction=null},e.prototype.reset=function(){this.activeAction&&this.activeAction.destroy(),this.activeAction=null},i.__decorate([c.property()],e.prototype,"activeAction",void 0),i.__decorate([c.property({readOnly:!0})],e.prototype,"type",void 0),i.__decorate([c.property()],e.prototype,"view",void 0),e=i.__decorate([c.subclass("esri.views.draw.Draw")],e)}(o)}));