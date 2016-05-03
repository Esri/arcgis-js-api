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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../../../../core/declare","../../../../core/Logger","dojo/_base/lang","../../support/PromiseLightweight","./ElevationInfo","../../../../Color"],function(t,e,o,r,i,n){var a=new i,s=e.getLogger("esri.symbols.Symbol3D"),l=t([r.Promise],{constructor:function(t,e,o){this.symbol=t,this._context=e,this._symbolLayerOrder=e.layerOrder,this._symbolLayerOrderDelta=e.layerOrderDelta,this._elevationInfo=new i,this._updateDrivenProperties(o),this._updateElevationInfo(),this._prepareResources()},_logWarning:function(t){s.warn(t)},_prepareResources:function(){throw new Error("This is an abstract base class")},_defaultElevationInfoNoZ:{mode:i.MODES.ON_THE_GROUND,offset:0},_defaultElevationInfoZ:{mode:i.MODES.ABSOLUTE_HEIGHT,offset:0},_updateElevationInfo:function(){for(var t in this._elevationInfo)this._elevationInfo[t]=void 0;var e=this._context.layer.elevationInfo;e&&(this._elevationInfo=o.mixin(this._elevationInfo,e));var r=this.symbol.elevationInfo;r&&(this._elevationInfo=o.mixin(this._elevationInfo,this.symbol.elevationInfo))},_getGraphicElevationInfo:function(t){var e=t.geometry.hasZ?this._defaultElevationInfoZ:this._defaultElevationInfoNoZ;return a.mode=this._elevationInfo.mode||e.mode,a.offset=null!=this._elevationInfo.offset?this._elevationInfo.offset:e.offset,a.featureExpression=this._elevationInfo.featureExpression,a.offset=a.offset/this._context.renderCoordsHelper.unitInMeters,a},_getDrapedZ:function(){return-2},_updateDrivenProperties:function(t){var e={color:!1,opacity:!1,size:!1};if(!t){var o=this._context.renderer;o&&(e.color=!!o.colorInfo,e.size=!!o.sizeInfo,o.visualVariables&&o.visualVariables.forEach(function(t){switch(t.type){case"color":var o,r;if(e.color=!0,t.colors)for(o=0;o<t.colors.length;o++)r=t.colors[o],r&&(Array.isArray(r)&&r.length>3&&255!==r[3]||void 0!==r.a&&255!==r.a)&&(e.opacity=!0);if(t.stops)for(o=0;o<t.stops.length;o++)r=t.stops[o].color,r&&(Array.isArray(r)&&r.length>3&&255!==r[3]||void 0!==r.a&&255!==r.a)&&(e.opacity=!0);break;case"opacity":case"transparencyInfo":e.opacity=!0;break;case"size":e.size=!0}}))}this._drivenProperties=e},_isPropertyDriven:function(t){return this._drivenProperties[t]},_getLayerOpacity:function(){var t=this._context.layer.opacity;return null!=t?t:1},_getMaterialOpacity:function(){var t=1;t*=this._getLayerOpacity();var e=this.symbol.material;return e&&!this._isPropertyDriven("opacity")&&(t*=e.color.a),t},_getMaterialOpacityAndColor:function(){var t=this.symbol.material,e=this._getMaterialOpacity(),o=this._isPropertyDriven("color")||!t?null:n.toUnitRGB(t.color);return this._mixinColorAndOpacity(o,e)},_getVertexOpacityAndColor:function(t,e,o){var r=this._isPropertyDriven("color")?t.color:null,i=this._isPropertyDriven("opacity")?t.opacity:null,n=this._mixinColorAndOpacity(r,i);return o&&(n[0]*=o,n[1]*=o,n[2]*=o,n[3]*=o),e?new e(n):n},_mixinColorAndOpacity:function(t,e){var o=[1,1,1,1];return null!=t&&(o[0]=t[0],o[1]=t[1],o[2]=t[2]),null!=e?o[3]=e:null!=t&&t.length>3&&(o[3]=t[3]),o},_getStageIdHint:function(){return this._context.layer.id+"_symbol"},setDrawOrder:function(t,e,o){this._material&&(this._material.setRenderPriority(t),o[this._material.getId()]=!0)},createGraphics3DGraphic:function(){throw new Error("This is an abstract base class")},destroy:function(){throw new Error("This is an abstract base class")}});return l});