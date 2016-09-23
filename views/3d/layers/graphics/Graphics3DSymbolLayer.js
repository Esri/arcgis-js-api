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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["../../../../core/declare","../../../../core/Logger","dojo/_base/lang","../../support/PromiseLightweight","./ElevationInfo","../../../../Color","./graphicUtils"],function(e,t,o,i,r,n,a){var s=new r,l=t.getLogger("esri.symbols.Symbol3D"),c=e([i.Promise],{constructor:function(e,t,o){this.symbol=e,this._context=t,this._symbolLayerOrder=t.layerOrder,this._symbolLayerOrderDelta=t.layerOrderDelta,this._elevationInfo=new r,this._updateDrivenProperties(o),this._updateElevationInfo(),this._prepareResources()},_logWarning:function(e){l.warn(e)},_prepareResources:function(e){throw new Error("This is an abstract base class")},_defaultElevationInfoNoZ:{mode:r.MODES.ON_THE_GROUND,offset:0},_defaultElevationInfoZ:{mode:r.MODES.ABSOLUTE_HEIGHT,offset:0},_updateElevationInfo:function(){for(var e in this._elevationInfo)this._elevationInfo[e]=void 0;var t=this._context.layer.elevationInfo;t&&(this._elevationInfo=o.mixin(this._elevationInfo,t));var i=this.symbol.elevationInfo;i&&(this._elevationInfo=o.mixin(this._elevationInfo,this.symbol.elevationInfo))},_getGraphicElevationInfo:function(e){var t=e.geometry.hasZ?this._defaultElevationInfoZ:this._defaultElevationInfoNoZ;return s.mode=this._elevationInfo.mode||t.mode,s.offset=null!=this._elevationInfo.offset?this._elevationInfo.offset:t.offset,s.featureExpression=this._elevationInfo.featureExpression,s.offset=s.offset/this._context.renderCoordsHelper.unitInMeters,s},_getDrapedZ:function(){return-2},_updateDrivenProperties:function(e){var t={color:!1,opacity:!1,size:!1};if(!e){var o=this._context.renderer;o&&(t.color=!!o.colorInfo,t.size=!!o.sizeInfo,o.visualVariables&&o.visualVariables.forEach(function(e){switch(e.type){case"color":var o,i;if(t.color=!0,e.colors)for(o=0;o<e.colors.length;o++)i=e.colors[o],i&&(Array.isArray(i)&&i.length>3&&255!==i[3]||void 0!==i.a&&255!==i.a)&&(t.opacity=!0);if(e.stops)for(o=0;o<e.stops.length;o++)i=e.stops[o].color,i&&(Array.isArray(i)&&i.length>3&&255!==i[3]||void 0!==i.a&&255!==i.a)&&(t.opacity=!0);break;case"opacity":case"transparencyInfo":t.opacity=!0;break;case"size":t.size=!0}}))}this._drivenProperties=t},_isPropertyDriven:function(e){return this._drivenProperties[e]},_getLayerOpacity:function(){if(this._context.layerView&&"fullOpacity"in this._context.layerView)return this._context.layerView.fullOpacity;var e=this._context.layer.opacity;return null==e?1:e},_getMaterialOpacity:function(){var e=1;e*=this._getLayerOpacity();var t=this.symbol.material;return t&&!this._isPropertyDriven("opacity")&&(e*=t.color.a),e},_getMaterialOpacityAndColor:function(){var e=this.symbol.material,t=this._getMaterialOpacity(),o=this._isPropertyDriven("color")||!e?null:n.toUnitRGB(e.color);return a.mixinColorAndOpacity(o,t)},_getVertexOpacityAndColor:function(e,t,o){var i=this._isPropertyDriven("color")?e.color:null,r=this._isPropertyDriven("opacity")?e.opacity:null,n=a.mixinColorAndOpacity(i,r);return o&&(n[0]*=o,n[1]*=o,n[2]*=o,n[3]*=o),t?new t(n):n},_getStageIdHint:function(){return this._context.layer.id+"_symbol"},setDrawOrder:function(e,t,o){this._material&&(this._material.setRenderPriority(e),o[this._material.getId()]=!0)},createGraphics3DGraphic:function(e,t){throw new Error("This is an abstract base class")},destroy:function(){throw new Error("This is an abstract base class")}});return c});