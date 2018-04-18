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

define(["require","../core/Accessor","../core/Collection","../core/promiseUtils","./Layer","./mixins/ScaleRangeLayer","../Graphic","dojo/_base/lang"],function(e,r,i,a,t,n,s,c){var l=r.createSubclass({properties:{layer:null,layerView:null,graphics:null}});return t.createSubclass([n],{declaredClass:"esri.layers.GraphicsLayer",getDefaults:function(e){return c.mixin(this.inherited(arguments),{graphics:[]})},destroy:function(){this.removeAll()},_gfxHdl:null,properties:{elevationInfo:null,graphics:{type:i.ofType(s),set:function(e){var r=this._get("graphics");r||(e.forEach(function(e){e.layer=this},this),this._gfxHdl=e.on("change",function(e){var r,i,a;for(a=e.added,r=0;i=a[r];r++)i.layer=this;for(a=e.removed,r=0;i=a[r];r++)i.layer=null}.bind(this)),this._set("graphics",e),r=e),r.removeAll(),r.addMany(e)}},screenSizePerspectiveEnabled:!0,type:{readOnly:!0,value:"graphics"}},add:function(e){return this.graphics.add(e),this},addMany:function(e){return this.graphics.addMany(e),this},removeAll:function(){return this.graphics.removeAll(),this},createGraphicsController:function(e){return a.resolve(new l({layer:this,layerView:e.layerView,graphics:this.graphics}))},remove:function(e){this.graphics.remove(e)},removeMany:function(e){this.graphics.removeMany(e)},importLayerViewModule:function(r){switch(r.type){case"2d":return a.create(function(r){e(["../views/2d/layers/GraphicsLayerView2D"],r)});case"3d":return a.create(function(r){e(["../views/3d/layers/FeatureLayerView3D"],r)})}},graphicChanged:function(e){this.emit("graphic-update",e)}})});