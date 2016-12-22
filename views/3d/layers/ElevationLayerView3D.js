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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../../../core/declare","../../../core/promiseUtils","../../../core/Error","./TiledLayerView3D"],function(e,r,i,a){var n=e(a,{declaredClass:"esri.views.3d.layers.ElevationLayerView3D",properties:{isTransparent:{readOnly:!0,get:function(){return!0}}},initialize:function(){var e=this.get("view.map.ground.layers");e&&-1!==e.indexOf(this.layer)||this.addResolvingPromise(r.reject(new i("layerview:elevation-layer-only","3D elevation layer '"+this.layer.id+"' can only be added in the map ground")))}});return n});