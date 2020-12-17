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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["esri/symbols/jsonUtils","esri/symbols/PictureFillSymbol","esri/symbols/PictureMarkerSymbol","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol","../ReportPlayer/dataProvider/commands/imageUtils/NodeToCanvasUtil","./ColorUtil","./PatternLibrary","./ImageUtil"],(function(e,t,o,r,l,i,n,s,a,c){var u={simpleFillSymbolToPictureFillSymbol:function(e){if(!e)return null;var o=a.createSvgForPictureFillSymbol({fillStyle:e.style,fillColor:e.color.toCss(!1),fillAlpha:e.color.a});return n.svgNodeToCanvasFunc(o,10,10).then((function(o){try{var r=new t(o.toDataURL("image/png"),e.outline,10,10);return r.contentType="image/png",r}catch(e){return console.log(e),null}})).otherwise((function(e){return console.log(e),null}))},prepareGraphicSymbol:function(e,t){if(!e)return{symbol:null};var n=!1,a=null;e=u.copySymbol(e),t&&t.forEach((function(t){switch(t.variable.type){case"sizeInfo":a=t.value;break;case"colorInfo":e.color&&(e.color.r=t.value.r,e.color.g=t.value.g,e.color.b=t.value.b,e.color.a*=t.value.a);break;case"opacityInfo":e.color&&(e.color.a=t.value);break;case"rotationInfo":e.setAngle&&e.setAngle(t.value)}})),e instanceof l?n=!0:(e instanceof r?(null!=a&&e.setSize(a),n=!0):e instanceof o?null!=a&&u.setMarkerSymbolSize(e,a):a=!1,!1!==a&&(a=u.getMarkerSymbolSize(e))),n&&!e.getStroke()&&(e.setOutline(new i(i.STYLE_SOLID,s.toColor(0))),e.outline.setWidth(0));var c={symbol:e,isSimple:n};return a&&(c.size=a),c},copySymbol:function(t){if(t instanceof o){var r=new o;r.setUrl(t.url),r.setAngle(t.angle),r.setWidth(t.width),r.setHeight(t.height),r.setOffset(t.xoffset,t.yoffset);var l=c.getContentType(r.url);return l&&(r.contentType=l,r.imageData=t.imageData),t.pictureId&&(r.pictureId=t.pictureId),r}return t&&t.toJson?e.fromJson(t.toJson()):null},getMarkerSymbolSize:function(e){if(e instanceof r){var t=e.getStroke();return e.size+(t?"x"==e.style?1.414*t.width:t.width:0)}return Math.max(e.height,e.width)||0},setMarkerSymbolSize:function(e,t){var l=u.getMarkerSymbolSize(e);if(!t)return e;var i=t/l;if(e instanceof o)e.setWidth(e.width*i),e.setHeight(e.height*i),e.setOffset(e.xoffset*i,e.yoffset*i);else if(e instanceof r){e.setSize(e.size*i);var n=e.getStroke();n&&n.setWidth&&n.setWidth(n.width*i)}return e}};return u}));