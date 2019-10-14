// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/tsSupport/decorateHelper","../../../../../renderers","../../../../../core/Accessor","../../../../../core/accessorSupport/decorators","../../../../../geometry/support/aaBoundingRect","../../../../../renderers/support/diffUtils","../../../engine/webgl/rendererInfoUtils","../../../engine/webgl/visualVariablesUtils","../../../engine/webgl/WGLFeatureView","../../../engine/webgl/WGLTile","./BaseTileRenderer"],function(e,i,t,r,n,o,s,a,l,u,f,p,d,c){function h(e){for(var i in e.diff){var t=e.diff[i];if("collection"===t.type){if(0!==t.changed.length||0!==t.added.length||0!==t.removed.length)return!0}else if("visualVariables"!==i&&"authoringInfo"!==i)return!0}return!1}Object.defineProperty(i,"__esModule",{value:!0});var g=function(e){function i(i){return e.call(this)||this}return t(i,e),i.prototype.initialize=function(){},i.prototype.createTile=function(e){var i=a.create();return this.tileInfoView.getTileBounds(i,e),new d(e,i)},i.prototype.disposeTile=function(e){this._featuresView.removeChild(e)},i.prototype.highlight=function(e){return this._featuresView.highlight(e)},i.prototype.hitTest=function(e,i){return this._featuresView.hitTest(e,i)},i.prototype.supportsRenderer=function(e){return null!=e&&u.isRendererWebGLCompatible(e)&&-1!==["simple","class-breaks","unique-value"].indexOf(e.type)},i.prototype.getProcessorConfiguration=function(){var e=this.layer;return{type:"symbol",renderer:e.renderer.toJSON(),devicePixelRatio:window.devicePixelRatio||1,definitionExpression:e.definitionExpression,outFields:e.outFields.slice().sort(),gdbVersion:e.gdbVersion,historicMoment:e.historicMoment&&e.historicMoment.getTime(),labelingInfo:e.labelingInfo&&e.labelingInfo.map(function(e){return e.toJSON()})}},i.prototype.needsProcessorReconfiguration=function(e){var i=this.configuration;if(!i||i.definitionExpression!==e.definitionExpression||i.outFields.join()!==e.outFields.join())return!0;var t=this.configuration&&n.fromJSON(this.configuration.renderer)||null,r=e&&n.fromJSON(e.renderer)||null,o=l.diff(t,r);if(!o)return!1;switch(o.type){case"complete":return!0;case"partial":if(h(o))return!0;if(o.diff.visualVariables){var s=this._featuresView.visualVariablesInfo,a=this.tileInfoView.tileInfo.spatialReference,p={fields:this.layer.fields.map(function(e){return e.toJSON()})},d=u.getNormalizedRenderer(r,a,p),c=f.convertVisualVariables(d.visualVariables).vvFields;return!!l.diff(s.vvFields,c)}}},i.prototype.applyConfiguration=function(e,i){var t=n.fromJSON(e.renderer),r={fields:this.layer.fields.map(function(e){return e.toJSON()})},o=u.getNormalizedRenderer(t,this.tileInfoView.tileInfo.spatialReference,r);this.configuration=e,this._featuresView.visualVariablesInfo=f.convertVisualVariables(o.visualVariables),i&&this._featuresView.disposeWebGLResources()},i.prototype.install=function(e){var i=new p.default({highlightOptions:this.highlightOptions,tileInfoView:this.tileInfoView,layer:this.layer,layerView:this.layerView});this._featuresView=i,i.install(e)},i.prototype.uninstall=function(e){this._featuresView.uninstall(e)},i.prototype.onTileData=function(e){var i=this.tiles.get(e.tileKey);i&&(this._featuresView.onTileData(i,e.data),this.requestUpdate())},i.prototype.onTileDataUpdate=function(e){var i=this.tiles.get(e.tileId);i&&(this._featuresView.onTileDataUpdate(i,e.data),this.requestUpdate())},i.prototype.onTileError=function(e){var i=this.tiles.get(e.tileKey);i&&(this._featuresView.onTileError(i),this.requestUpdate())},i.prototype.getMaterialItems=function(e){return this._featuresView.getMaterialItems(e)},i=r([s.subclass()],i)}(s.declared(o,c.default));i.default=g});