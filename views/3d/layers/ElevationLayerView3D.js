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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Error","../../../core/promiseUtils","../../../core/accessorSupport/decorators","./LayerView3D","./TiledLayerView3D","./support/tiledLayerUtils","../../layers/LayerView"],(function(e,r,i,t,a,l,o,s,n,y,p){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return i(r,e),r.prototype.initialize=function(){var e=this.get("view.map.allLayers"),r=e&&e.includes(this.layer),i=this.get("view.map.ground.layers"),t=i&&i.includes(this.layer);if(r&&!t){var o=new a("layerview:elevation-layer-only","3D elevation layer '"+this.layer.id+"' can only be added in the map ground");this.addResolvingPromise(l.reject(o))}this._addTilingSchemeMatchPromise(),this.addResolvingPromise(y.checkArcGISServiceVersionCompatibility(this.layer))},t([o.property({readOnly:!0,aliasOf:"layer.fullExtent"})],r.prototype,"fullExtent",void 0),t([o.property()],r.prototype,"layer",void 0),t([o.property({readOnly:!0,aliasOf:"layer.tileInfo"})],r.prototype,"tileInfo",void 0),r=t([o.subclass("esri.views.3d.layers.ElevationLayerView3D")],r)}(o.declared(n.TiledLayerView3D(s.LayerView3D(p))))}));