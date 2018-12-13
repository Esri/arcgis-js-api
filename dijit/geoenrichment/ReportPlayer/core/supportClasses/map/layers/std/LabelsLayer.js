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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/Color","dojo/_base/declare","dojo/_base/lang","esri/layers/GraphicsLayer","esri/renderers/SimpleRenderer","esri/symbols/TextSymbol","esri/graphic","esri/geometry/Polygon","esri/geometry/Point","esri/dijit/geoenrichment/utils/InvokeUtil"],function(e,t,i,n,r,o,s,a,l,c){function u(e){return g[e]||"#005500"}function h(e){return{fontSize:13,fontFamily:"Arial",isBold:!1,isItalic:!1,isUnderlined:!1,color:u(e)}}function f(t){var i=(new o).setColor(new e(t.color));return i.font.setSize(t.fontSize+"px"),i.font.setFamily(t.fontFamily),i.font.setStyle(t.isItalic?"italic":"normal"),i.font.setWeight(t.isBold?"bold":"normal"),i.font.setDecoration(t.isUnderlined?"underline":"none"),i}function d(e){return{color:e.color.toCss(!0),fontSize:e.font.size,fontFamily:e.font.family,isItalic:"italic"===e.font.style,isBold:"bold"===e.font.weight,isUnderlined:"underline"===e.font.decoration}}var g={"US.States":"#000000","US.Counties":"#40B25F","US.ZIP5":"#B8482C","US.Tracts":"#C6C346","US.BlockGroups":"#717A32","US.CBSA":"#32A6A1","US.DMA":"#9F2D28","US.Places":"#66665E","US.CD":"#DD6D27","US.CSD":"#3C3534","CAN.PR":"#787365","CAN.FED":"#4DA10C","CAN.CD":"#AC7A17","CAN.CSD":"#3A5731","CAN.CMACA":"#83211A","CAN.CT":"#B1A618","CAN.FSA":"#504F49","CAN.DA":"#5F7C16"},b=t(n,{isLabelsLayer:!0,labelField:"name",_graphics:null,_sourceLayer:null,_handle:null,setLabelField:function(e){this.labelField=e},setSourceGraphicsLayer:function(e){this._handle&&this._handle.remove(),this._sourceLayer=e,this._sourceLayer&&(this._handle=this._sourceLayer.on("graphic-add, graphic-remove, graphics-clear",function(){this.createLabels(null)}.bind(this)))},createLabels:function(e){return this._graphics=e,c.invoke(this,"_doCreateLabels",100)},_doCreateLabels:function(){this.clear(),this._collectLabels(this._graphics||this._sourceLayer.graphics).forEach(function(e){this.add(new s(e.point,e.symbol,e.g.attributes))},this),this.redraw()},_collectLabels:function(e){function t(e){var t=n.renderer.getSymbol(e);return t=new o(t.toJson()),t.setVerticalAlignment("baseline"),t.setHorizontalAlignment("center"),t.setText(e.attributes[n.labelField]||""),t}function i(e){return!r.some(function(t){var i=t.rect;if(!(i.X2<e.X1||i.X1>e.X2||i.Y2<e.Y1||i.Y1>e.Y2))return!0})}var n=this,r=[];return e.forEach(function(e){function o(e,o,a){var f=o.getExtent(),d=n.getMap();if(a){var g=new l(f.xmin,f.ymin,f.spatialReference),b=new l(f.xmax,f.ymax,f.spatialReference),m=d.toScreen(g),y=d.toScreen(b),C=Math.abs(y.x-m.x),_=Math.abs(y.y-m.y);if(C<4*u||_<4*h)return}var S=f.getCenter(),A=d.toScreen(S),p={X1:A.x-u/2,Y1:A.y-h/2,X2:A.x+u/2,Y2:A.y+h/2};i(p)&&(s=s||t(e),r.push({symbol:s,point:S,rect:p,g:e}),c=!0)}var s,c,u,h;if(e.attributes.__hasCachedLabelDimensions?(u=e.attributes.__w,h=e.attributes.__h):(s=t(e),u=s.getWidth(),h=s.getHeight(),e.attributes.__w=u,e.attributes.__h=h,e.attributes.__hasCachedLabelDimensions=!0),e.geometry.rings&&e.geometry.rings.length>1){for(var f=0;f<e.geometry.rings.length;f++){var d=e.geometry.rings[f];if(e.geometry.isClockwise(d)){var g=new a(e.geometry.spatialReference);g.addRing(d),o(e,g,!0)}}c||o(e,e.geometry,!1)}else o(e,e.geometry,!1)}),r},clearCache:function(e){e.forEach(function(e){e.attributes.__hasCachedLabelDimensions=!1})},setVisualSettings:function(e){e=i.mixin(h(),e),this.setRenderer(new r(f(e)))}});return b.getLevelColor=u,b.getDefaultVisualSettings=h,b.labelPropertiesToSymbol=f,b.symbolToLabelProperties=d,b});