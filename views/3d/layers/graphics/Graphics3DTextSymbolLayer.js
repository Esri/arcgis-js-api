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

define(["../../../../core/declare","../../../../core/screenUtils","../../../../Color","./Graphics3DSymbolLayer","./Graphics3DGraphicLayer","./ElevationAligners","./Graphics3DSymbolCommonCode","./Graphics3DIconSymbolLayer","../../webgl-engine/lib/Geometry","../../webgl-engine/lib/GeometryUtil","../../webgl-engine/lib/TextTexture","../../webgl-engine/materials/HUDMaterial"],function(e,t,n,r,o,i,l,a,s,c,f,h){var u=[1,1,1],p=[0,0,1],y=i.perObjectElevationAligner,d=e([r],{_prepareResources:function(){var e=this.symbol;this._anchor=a.VALID_ANCHOR_STRINGS.indexOf(e.anchor)>-1?e.anchor:"center",this.resolve()},destroy:function(){this.isFulfilled()||this.reject()},createGraphics3DGraphic:function(e,t,n,r){var o=e.geometry,i=!1;if("polyline"===o.type)o=l.placePointOnPolyline(o),i=!0;else if("polygon"===o.type)o=l.placePointOnPolygon(o);else if("extent"===o.type)o=o.get("center");else if("point"!==o.type)return this._logWarning("unsupported geometry type for text symbol: "+o.type),null;var a=this._context.layer.id+"_label_"+e.uid,s=t.text||this.symbol.text;if(!s||s.length<1)return null;var c=this._getGraphicElevationInfo(e);return this._createAs3DShape(this.symbol,o,s,c,a,e.uid,t,n,r,i)},layerPropertyChanged:function(e,t,n){if("opacity"===e)console.warn("layer opacity change not yet implemented in Graphics3DTextSymbolLayer");else if("elevationInfo"===e){if(this._updateElevationInfo(),t)for(var r in t){var o=t[r],i=o._graphics[n];i&&this.updateGraphicElevationInfo(o.graphic,i)}return!0}return!1},updateGraphicElevationInfo:function(e,t){var n=this._context,r=this._getGraphicElevationInfo(e);t.elevationAligner=r.mode!==l.ELEV_MODES.ABSOLUTE_HEIGHT?y:null,t.elevationInfo.set(r),y(t,n.elevationProvider,n.renderCoordsHelper)},_defaultElevationInfoNoZ:function(){return g},_getGraphicElevationInfo:function(e){var t=this.inherited(arguments);return t.mode===l.ELEV_MODES.ON_THE_GROUND?(t.mode=l.ELEV_MODES.RELATIVE_TO_GROUND,t.offset=1/this._context.renderCoordsHelper.unitInMeters,t.featureExpression={value:0}):t.mode!==l.ELEV_MODES.RELATIVE_TO_GROUND||0!==t.offset||e.geometry.get("hasZ")||(t.offset=1/this._context.renderCoordsHelper.unitInMeters),t},_createAs3DShape:function(e,r,a,y,d,g,E,_,v,m){var O=E.centerOffset||[0,0,0,1],x=E.screenOffset||[0,0],G=E.translation||[0,0,0,0],I=E.anchor||this._anchor||"center";this._anchor=I;var T=e.material?n.toUnitRGB(e.material.color):u,D=.299*T[0]+.587*T[1]+.114*T[2],S=D>.35?"black":"white",b={shadowColor:S,shadowBlur:1},w=null!=v,L=new f(a,{size:t.pt2px(e.size)||12,color:T,font:{family:e.font&&e.font.family?e.font.family:"Arial",weight:e.font&&e.font.weight?e.font.weight:"normal",style:e.font&&e.font.style?e.font.style:"normal"},canvasStyle:b},d,w),A=w?v.addTextTexture(L):null,M=this._getMaterialOpacity(),P={textureId:w?A.texture.getId():L.getId(),texCoordScale:L.getTexcoordScale(),occlusionTest:!0,screenOffset:x,anchorPos:I,polygonOffset:!0,color:[1,1,1,M],transparent:1>M};m&&(P.shaderPolygonOffset=1e-4);var H=null,R=JSON.stringify(P);null!=_?(H=_.getMaterial(R),null==H?(H=new h(P,d),_.addMaterial(R,H)):w&&H.setTextureDirty()):H=new h(P,d);var C=[H],U=[L.getTextWidth(),L.getTextHeight()],V=c.createPointGeometry(p,G,void 0,U,!1,O,A?A.uvMinMax:null),N=[new s(V,d)],j=this._context.layer.id,B=l.createStageObjectForPoint.call(this,r,N,[C],null,null,y,d,j,g,!0),z=null;y.mode!==l.ELEV_MODES.ABSOLUTE_HEIGHT&&(z=i.perObjectElevationAligner);var F=new o(this,B,N,null==_?C:null,null==v?[L]:null,z,y);return l.extendPointGraphicElevationInfo(F,r,this._context.elevationProvider),F}}),g={mode:l.ELEV_MODES.RELATIVE_TO_GROUND,offset:0};return d});