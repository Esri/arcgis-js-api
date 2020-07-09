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

define(["require","exports","tslib","../../../../Graphic","../../../../symbols","../../../../core/HandleOwner","../../../../core/watchUtils","../../../../core/accessorSupport/decorators","../../../../geometry/support/aaBoundingRect","../../support/debugFlags","../tileUtils"],(function(e,t,r,n,a,i,o,l,p,s,c){Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.initialize=function(){var e=this;this.handles.add(this.surface.view.on("click",this._clickEvent.bind(this))),s.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!0,this.surface.view.popup.autoOpenEnabled=!1,o.whenFalse(this.surface.view.popup,"visible",(function(){e._removeTileBoundaryGraphic()}))},t.prototype.destroy=function(){this.surface.view.popup.autoOpenEnabled=!0},t.prototype._clickEvent=function(e){var t=this;this.surface.view.hitTest(e).then((function(r){var n=r.intersector.results.min;if("TerrainRenderer"===n.intersector){var a=t.surface.getTile(n.name);t.surface.view.popup.actions.removeAll(),t.surface.view.popup.open({title:"Tile "+n.name,location:e.mapPoint,content:t._createTileDataTable(a)}),t._removeTileBoundaryGraphic(),t.tileBoundaryGraphic=t._createTileBoundaryGraphic(a),t.surface.view.graphics.add(t.tileBoundaryGraphic)}}))},t.prototype._createTileDataTable=function(e){var t=document.createElement("table");t.innerHTML="<tr>\n                             <th style='text-align:center;font-weight:bold'>type&nbsp;&nbsp;&nbsp;</th>\n                             <th style='text-align:center;font-weight:bold'>layer&nbsp;&nbsp;&nbsp;</th>\n                             <th style='text-align:center;font-weight:bold'>data from tile&nbsp;&nbsp;&nbsp;</th>\n                           </tr>";for(var r=0;r<e.layerInfo.length;r++)for(var n=e.layerInfo[r],a=0;a<n.length;a++){var i=n[a],o=document.createElement("tr"),l=void 0;(l=document.createElement("td")).textContent=0===a?d[r]:"",o.appendChild(l),(l=document.createElement("td")).textContent=a.toString(),o.appendChild(l);var p=i.data?e:i.upsampleInfo?i.upsampleInfo.tile:null;(l=document.createElement("td")).textContent=p?c.tile2str(p):"no data",o.appendChild(l),t.appendChild(o)}return t},t.prototype._removeTileBoundaryGraphic=function(){this.tileBoundaryGraphic&&(this.surface.view.graphics.remove(this.tileBoundaryGraphic),this.tileBoundaryGraphic=null)},t.prototype._createTileBoundaryGraphic=function(e){var t=p.toExtent(e.extent,this.surface.spatialReference),r=new a.PolygonSymbol3D({symbolLayers:[new a.FillSymbol3DLayer({material:{color:"rgba(0, 0, 0, 0)"},outline:{size:"3px",color:"red"}})]});return new n({geometry:t,symbol:r})},r.__decorate([l.property({constructOnly:!0})],t.prototype,"surface",void 0),t=r.__decorate([l.subclass("esri.views.3d.terrain.support.TerrainDebugPopupOpener")],t)}(i.HandleOwner);t.TerrainDebugPopupOpener=u;var d=["elev","map"]}));