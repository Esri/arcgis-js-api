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

define(["../../core/Accessor","../../core/Evented","../../layers/support/LOD","./constraints/ZoomConstraint","./constraints/RotationConstraint"],function(o,e,n,i,t){return o.createSubclass([e],{declaredClass:"esri.views.2d.MapViewConstraints",destroy:function(){this.view=null},initialize:function(){this.watch("_zoom, _rotation",this.emit.bind(this,"update"),!0)},properties:{effectiveLODs:{readOnly:!0,aliasOf:"_zoom.effectiveLODs"},effectiveMinScale:{readOnly:!0,aliasOf:"_zoom.effectiveMinScale"},effectiveMaxScale:{readOnly:!0,aliasOf:"_zoom.effectiveMaxScale"},effectiveMinZoom:{readOnly:!0,aliasOf:"_zoom.effectiveMinZoom"},effectiveMaxZoom:{readOnly:!0,aliasOf:"_zoom.effectiveMaxZoom"},enabled:!0,lods:{value:null,type:[n]},minScale:0,maxScale:0,minZoom:-1,maxZoom:-1,rotationEnabled:!0,snapToZoom:!0,view:{value:null},_zoom:{type:i,dependsOn:["lods","minZoom","maxZoom","minScale","maxScale","snapToZoom","view.tileInfo"],get:function(){return new i({lods:this.lods||this.view&&this.view.tileInfo&&this.view.tileInfo.lods,minZoom:this.minZoom,maxZoom:this.maxZoom,minScale:this.minScale,maxScale:this.maxScale,snapToZoom:this.snapToZoom})}},_rotation:{type:t,dependsOn:["rotationEnabled"],get:function(){return new t({rotationEnabled:this.rotationEnabled})}}},constrain:function(o,e){return this.enabled?(this._zoom.constrain(o,e),this._rotation.constrain(o,e),o):o},zoomToScale:function(o){return this._zoom.zoomToScale(o)},scaleToZoom:function(o){return this._zoom.scaleToZoom(o)},snapScale:function(o,e){return this._zoom.snapScale(o,e)}})});