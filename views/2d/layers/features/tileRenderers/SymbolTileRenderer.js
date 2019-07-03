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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/tsSupport/decorateHelper","../../../../../core/tsSupport/assignHelper","../../../../../core/Accessor","../../../../../core/accessorSupport/decorators","../../../../../geometry/support/aaBoundingRect","../../../engine","../support/rendererUtils","./BaseTileRenderer","./support/visualVariablesUtils","./support/WGLFeatureView"],function(e,t,i,r,s,a,o,n,l,u,p,f,c){Object.defineProperty(t,"__esModule",{value:!0});var d=function(e){function t(t){return e.call(this)||this}return i(t,e),t.prototype.install=function(e){var t=new c.WGLFeatureView({tileInfoView:this.tileInfoView,layer:this.layer,layerView:this.layerView});this.featuresView=t,e.addChild(t)},t.prototype.uninstall=function(e){e.removeChild(this.featuresView),this.featuresView.dispose(),this.featuresView=null},t.prototype.updateHighlight=function(){this.featuresView.updateHighlight()},t.prototype.hitTest=function(e,t){return this.featuresView.hitTest(e,t)},t.prototype.supportsRenderer=function(e){return null!=e&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(e.type)},t.prototype.clear=function(){this.featuresView.disposeWebGLResources()},t.prototype.onConfigUpdate=function(){if("visualVariables"in this.layer.renderer){var e=u.simplifyVVRenderer(this.layer.renderer),t=(e.visualVariables||[]).map(function(e){var t=e.clone();return"normalizationField"in e&&(t.normalizationField=null),e.valueExpression&&"$view.scale"!==e.valueExpression&&(t.valueExpression=null,t.field="nop"),t});this.featuresView.visualVariablesInfo=f.convertVisualVariables(t)}},t.prototype.onTileData=function(e){var t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileData(t,e.data)},t.prototype.onTileError=function(e){var t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileError(t)},t.prototype.getMaterialItems=function(e){return this.featuresView.getMaterialItems(e)},t.prototype.invalidateLabels=function(){this.layer.labelingInfo&&this.layer.labelsVisible&&(this.tiles.forEach(function(e){return e.isDirty=!0}),this.layerView.view.labelManager.requestUpdate())},t.prototype.createTile=function(e){var t=n.create();return this.tileInfoView.getTileBounds(t,e),new l.WGLTile(e,t)},t.prototype.disposeTile=function(e){this.featuresView.removeChild(e)},t=r([o.subclass("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],t)}(o.declared(a,p.default));t.default=d});