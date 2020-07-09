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

define(["require","exports","tslib","../../../../../core/accessorSupport/decorators","../../../../../geometry/support/aaBoundingRect","../../../engine","../support/rendererUtils","./BaseTileRenderer","./support/visualVariablesUtils","./support/WGLFeatureView"],(function(e,t,i,r,a,s,o,n,l,u){Object.defineProperty(t,"__esModule",{value:!0});var p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),t.prototype.install=function(e){var t=new u.WGLFeatureView(this.tileInfoView,this.layerView,this.layer);this.featuresView=t,e.addChild(t)},t.prototype.uninstall=function(e){e.removeChild(this.featuresView),this.featuresView.destroy()},t.prototype.hitTest=function(e,t){return this.featuresView.hitTest(e,t)},t.prototype.supportsRenderer=function(e){return null!=e&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(e.type)},t.prototype.onConfigUpdate=function(e){var t=null;if("visualVariables"in e){var i=(o.simplifyVVRenderer(e).visualVariables||[]).map((function(e){var t=e.clone();return"normalizationField"in e&&(t.normalizationField=null),e.valueExpression&&"$view.scale"!==e.valueExpression&&(t.valueExpression=null,t.field="nop"),t}));t=l.convertVisualVariables(i)}this.featuresView.setRendererInfo(e,t,this.layerView.effects)},t.prototype.onTileData=function(e){var t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileData(t,e.data),this.layerView.view.labelManager.requestUpdate()},t.prototype.onTileError=function(e){var t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileError(t)},t.prototype.forceAttributeTextureUpload=function(){this.featuresView.attributeView.forceTextureUpload()},t.prototype.lockAttributeTextureUpload=function(){this.featuresView.attributeView.lockTextureUpload()},t.prototype.unlockAttributeTextureUpload=function(){this.featuresView.attributeView.unlockTextureUpload()},t.prototype.getMaterialItems=function(e){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(t){return[2,this.featuresView.getMaterialItems(e)]}))}))},t.prototype.invalidateLabels=function(){this.featuresView.hasLabels&&(this.tiles.forEach((function(e){return e.isDirty=!0})),this.layerView.view.labelManager.requestUpdate())},t.prototype.createTile=function(e){var t=this.tileInfoView.getTileBounds(a.create(),e),i=new s.WGLTile(e,t);return this.featuresView.hasLabels&&this.layerView.view.labelManager.addTile(this.layerView,i),i},t.prototype.disposeTile=function(e){this.featuresView.removeChild(e),this.featuresView.hasLabels&&this.layerView.view.labelManager.removeTile(this.layerView,e.key.id),e.destroy(),this.layerView.view.labelManager.requestUpdate()},t=i.__decorate([r.subclass("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],t)}(n.default);t.default=p}));