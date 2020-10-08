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

define(["require","exports","tslib","../../../core/Error","../../../core/promiseUtils","../../../core/accessorSupport/decorators","./LayerView3D","./TiledLayerView3D","./support/tiledLayerUtils","../../layers/LayerView"],(function(e,r,i,t,a,o,l,s,n,y){"use strict";return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(r,e),r.prototype.initialize=function(){var e=this.get("view.map.allLayers"),r=e&&e.includes(this.layer),i=this.get("view.map.ground.layers"),o=i&&i.includes(this.layer);if(r&&!o){var l=new t("layerview:elevation-layer-only","3D elevation layer '"+this.layer.id+"' can only be added in the map ground");this.addResolvingPromise(a.reject(l))}this._addTilingSchemeMatchPromise(),this.addResolvingPromise(n.checkArcGISServiceVersionCompatibility(this.layer))},i.__decorate([o.property({readOnly:!0,aliasOf:"layer.fullExtent"})],r.prototype,"fullExtent",void 0),i.__decorate([o.property()],r.prototype,"layer",void 0),i.__decorate([o.property({readOnly:!0,aliasOf:"layer.tileInfo"})],r.prototype,"tileInfo",void 0),r=i.__decorate([o.subclass("esri.views.3d.layers.ElevationLayerView3D")],r)}(s.TiledLayerView3D(l.LayerView3D(y)))}));