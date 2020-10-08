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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/Color","dojo/_base/declare","dojo/_base/lang","esri/layers/GraphicsLayer","esri/renderers/SimpleRenderer","esri/symbols/TextSymbol","esri/graphic","esri/geometry/Polygon","esri/geometry/Point","esri/dijit/geoenrichment/utils/InvokeUtil"],(function(e,t,i,n,r,s,a,o,l,c){var h={"US.States":"#000000","US.Counties":"#40B25F","US.ZIP5":"#B8482C","US.Tracts":"#C6C346","US.BlockGroups":"#717A32","US.CBSA":"#32A6A1","US.DMA":"#9F2D28","US.Places":"#66665E","US.CD":"#DD6D27","US.CSD":"#3C3534","CAN.PR":"#787365","CAN.FED":"#4DA10C","CAN.CD":"#AC7A17","CAN.CSD":"#3A5731","CAN.CMACA":"#83211A","CAN.CT":"#B1A618","CAN.FSA":"#504F49","CAN.DA":"#5F7C16"};function u(e){return h[e]||"#005500"}function f(e){return{fontSize:13,fontFamily:"Arial",isBold:!1,isItalic:!1,isUnderlined:!1,color:u(e)}}function d(t){var i=(new s).setColor(new e(t.color));return i.font.setSize(t.fontSize+"px"),i.font.setFamily(t.fontFamily),i.font.setStyle(t.isItalic?"italic":"normal"),i.font.setWeight(t.isBold?"bold":"normal"),i.font.setDecoration(t.isUnderlined?"underline":"none"),i}var b=t(n,{isLabelsLayer:!0,labelField:"name",_graphics:null,_sourceLayer:null,_handle:null,setLabelField:function(e){this.labelField=e},setSourceGraphicsLayer:function(e){this._handle&&this._handle.remove(),this._sourceLayer=e,this._sourceLayer&&(this._handle=this._sourceLayer.on("graphic-add, graphic-remove, graphics-clear",function(){this.createLabels(null)}.bind(this)))},createLabels:function(e){return this._graphics=e,c.invoke(this,"_doCreateLabels",100)},_doCreateLabels:function(){this.clear(),this._collectLabels(this._graphics||this._sourceLayer.graphics).forEach((function(e){this.add(new a(e.point,e.symbol,e.g.attributes))}),this),this.redraw()},_collectLabels:function(e){var t=this,i=[];function n(e){var i=t.renderer.getSymbol(e);return(i=new s(i.toJson())).setVerticalAlignment("baseline"),i.setHorizontalAlignment("center"),i.setText(e.attributes[t.labelField]||""),i}return e.forEach((function(e){function r(e,r,o){var u=r.getExtent(),f=t.getMap();if(o){var d=new l(u.xmin,u.ymin,u.spatialReference),b=new l(u.xmax,u.ymax,u.spatialReference),g=f.toScreen(d),y=f.toScreen(b),m=Math.abs(y.x-g.x),C=Math.abs(y.y-g.y);if(m<4*c||C<4*h)return}var S,_=u.getCenter(),A=f.toScreen(_),p={X1:A.x-c/2,Y1:A.y-h/2,X2:A.x+c/2,Y2:A.y+h/2};S=p,i.some((function(e){var t=e.rect;if(!(t.X2<S.X1||t.X1>S.X2||t.Y2<S.Y1||t.Y1>S.Y2))return!0}))||(s=s||n(e),i.push({symbol:s,point:_,rect:p,g:e}),a=!0)}var s,a,c,h;if(e.attributes.__hasCachedLabelDimensions?(c=e.attributes.__w,h=e.attributes.__h):(s=n(e),c=s.getWidth(),h=s.getHeight(),e.attributes.__w=c,e.attributes.__h=h,e.attributes.__hasCachedLabelDimensions=!0),e.geometry.rings&&e.geometry.rings.length>1){for(var u=0;u<e.geometry.rings.length;u++){var f=e.geometry.rings[u];if(e.geometry.isClockwise(f)){var d=new o(e.geometry.spatialReference);d.addRing(f),r(e,d,!0)}}a||r(e,e.geometry,!1)}else r(e,e.geometry,!1)})),i},clearCache:function(e){e.forEach((function(e){e.attributes.__hasCachedLabelDimensions=!1}))},setVisualSettings:function(e){e=i.mixin(f(),e),this.setRenderer(new r(d(e)))},_setMap:function(){return this.visibleAtMapScale=!0,this.inherited(arguments)},_isMapAtVisibleScale:function(){return this.visibleAtMapScale},emitAvailabilityChanged:function(e){this.visibleAtMapScale=e,this.onScaleVisibilityChange()}});return b.getLevelColor=u,b.getDefaultVisualSettings=f,b.labelPropertiesToSymbol=d,b.symbolToLabelProperties=function(e){return{color:e.color.toCss(!0),fontSize:e.font.size,fontFamily:e.font.family,isItalic:"italic"===e.font.style,isBold:"bold"===e.font.weight,isUnderlined:"underline"===e.font.decoration}},b}));