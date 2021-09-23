// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/sniff","dojox/gfx/_base","../kernel","../lang","../urlUtils","./MarkerSymbol"],(function(t,i,e,h,s,r,n,a){var l={url:"",width:12,height:12,angle:0,xoffset:0,yoffset:0},o=t(a,{declaredClass:"esri.symbol.PictureMarkerSymbol",type:"picturemarkersymbol",constructor:function(t,s,r){if(t)if(i.isString(t))this.url=t,s&&(this.width=s),r&&(this.height=r);else{this.width=h.pt2px(null==t.width?l.width:t.width),this.height=h.pt2px(null==t.height?l.height:t.height);var n=t.imageData;if(!(e("ie")<9)&&n){var a=this.url;this.url="data:"+(t.contentType||"image")+";base64,"+n,this.imageData=a}}else i.mixin(this,l),this.width=h.pt2px(this.width),this.height=h.pt2px(this.height)},getStroke:function(){return null},getFill:function(){return null},setWidth:function(t){return this.width=t,this},setHeight:function(t){return this.height=t,this},setUrl:function(t){return t!==this.url&&(delete this.imageData,delete this.contentType),this.url=t,this},getShapeDescriptors:function(){return{defaultShape:{type:"image",x:-Math.round(this.width/2),y:-Math.round(this.height/2),width:this.width,height:this.height,src:this.url||""},fill:null,stroke:null}},toJson:function(){var t=this.url,e=this.imageData;if(0===t.indexOf("data:")){var s=t;t=e;var a=s.indexOf(";base64,")+8;e=s.substr(a)}!i.isString(t)||0!==t.indexOf("/")&&0!==t.indexOf("//")&&0!==t.indexOf("./")&&0!==t.indexOf("../")||(t=n.getAbsoluteUrl(t));var l=h.px2pt(this.width);l=isNaN(l)?void 0:l;var o=h.px2pt(this.height);o=isNaN(o)?void 0:o;var d=r.fixJson(i.mixin(this.inherited("toJson",arguments),{type:"esriPMS",url:t,imageData:e,contentType:this.contentType,width:l,height:o}));return delete d.color,delete d.size,d.imageData||delete d.imageData,d}});return o.defaultProps=l,e("extend-esri")&&(i.setObject("symbol.PictureMarkerSymbol",o,s),s.symbol.defaultPictureMarkerSymbol=l),o}));