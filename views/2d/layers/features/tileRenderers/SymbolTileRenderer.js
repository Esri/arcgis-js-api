// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/tsSupport/decorateHelper","../../../../../core/tsSupport/assignHelper","../../../../../core/tsSupport/generatorHelper","../../../../../core/tsSupport/awaiterHelper","../../../../../core/accessorSupport/decorators","../../../../../geometry/support/aaBoundingRect","../../../engine","../support/rendererUtils","./BaseTileRenderer","./support/visualVariablesUtils","./support/WGLFeatureView"],function(e,t,i,r,a,s,l,o,n,u,p,f,d,c){Object.defineProperty(t,"__esModule",{value:!0});var y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.install=function(e){var t=new c.WGLFeatureView(this.tileInfoView,this.layerView,this.layer);this.featuresView=t,e.addChild(t)},t.prototype.uninstall=function(e){e.removeChild(this.featuresView),this.featuresView.destroy()},t.prototype.hitTest=function(e,t){return this.featuresView.hitTest(e,t)},t.prototype.supportsRenderer=function(e){return null!=e&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(e.type)},t.prototype.onConfigUpdate=function(e,t){var i=null;if("visualVariables"in e){var r=p.simplifyVVRenderer(e),a=(r.visualVariables||[]).map(function(e){var t=e.clone();return"normalizationField"in e&&(t.normalizationField=null),e.valueExpression&&"$view.scale"!==e.valueExpression&&(t.valueExpression=null,t.field="nop"),t});i=d.convertVisualVariables(a)}this.featuresView.setRendererInfo(e,i,this.layerView.effects),this.featuresView.setClips(this.layerView.clips)},t.prototype.onTileData=function(e){var t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileData(t,e.data),this.layerView.view.labelManager.requestUpdate()},t.prototype.onTileError=function(e){var t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileError(t)},t.prototype.forceAttributeTextureUpload=function(){this.featuresView.attributeView.forceTextureUpload()},t.prototype.lockAttributeTextureUpload=function(){this.featuresView.attributeView.lockTextureUpload()},t.prototype.unlockAttributeTextureUpload=function(){this.featuresView.attributeView.unlockTextureUpload()},t.prototype.getMaterialItems=function(e){return l(this,void 0,void 0,function(){return s(this,function(t){return[2,this.featuresView.getMaterialItems(e)]})})},t.prototype.invalidateLabels=function(){this.layer.labelingInfo&&this.layer.labelsVisible&&(this.tiles.forEach(function(e){return e.isDirty=!0}),this.layerView.view.labelManager.requestUpdate())},t.prototype.createTile=function(e){var t=this.tileInfoView.getTileBounds(n.create(),e),i=new u.WGLTile(e,t);return this.layer.labelingInfo&&this.layerView.view.labelManager.addTile(this.layerView,i),i},t.prototype.disposeTile=function(e){this.featuresView.removeChild(e),this.layer.labelingInfo&&this.layerView.view.labelManager.removeTile(this.layerView,e.key.id),e.destroy(),this.layerView.view.labelManager.requestUpdate()},t=r([o.subclass("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],t)}(o.declared(f.default));t.default=y});