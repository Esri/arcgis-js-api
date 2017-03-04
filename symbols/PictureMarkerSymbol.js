// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/sniff","dojox/gfx/_base","../kernel","../lang","../urlUtils","./MarkerSymbol"],function(t,e,i,h,s,r,a,n){var l={url:"",width:12,height:12,angle:0,xoffset:0,yoffset:0},o=t(n,{declaredClass:"esri.symbol.PictureMarkerSymbol",type:"picturemarkersymbol",constructor:function(t,s,r){if(t)if(e.isString(t))this.url=t,s&&(this.width=s),r&&(this.height=r);else{this.width=h.pt2px(t.width),this.height=h.pt2px(t.height);var a=t.imageData;if(!(i("ie")<9)&&a){var n=this.url;this.url="data:"+(t.contentType||"image")+";base64,"+a,this.imageData=n}}else e.mixin(this,l),this.width=h.pt2px(this.width),this.height=h.pt2px(this.height)},getStroke:function(){return null},getFill:function(){return null},setWidth:function(t){return this.width=t,this},setHeight:function(t){return this.height=t,this},setUrl:function(t){return t!==this.url&&(delete this.imageData,delete this.contentType),this.url=t,this},getShapeDescriptors:function(){var t={type:"image",x:-Math.round(this.width/2),y:-Math.round(this.height/2),width:this.width,height:this.height,src:this.url||""};return{defaultShape:t,fill:null,stroke:null}},toJson:function(){var t=this.url,i=this.imageData;if(0===t.indexOf("data:")){var s=t;t=i;var n=s.indexOf(";base64,")+8;i=s.substr(n)}!e.isString(t)||0!==t.indexOf("/")&&0!==t.indexOf("//")&&0!==t.indexOf("./")&&0!==t.indexOf("../")||(t=a.getAbsoluteUrl(t));var l=h.px2pt(this.width);l=isNaN(l)?void 0:l;var o=h.px2pt(this.height);o=isNaN(o)?void 0:o;var u=r.fixJson(e.mixin(this.inherited("toJson",arguments),{type:"esriPMS",url:t,imageData:i,contentType:this.contentType,width:l,height:o}));return delete u.color,delete u.size,u.imageData||delete u.imageData,u}});return o.defaultProps=l,i("extend-esri")&&(e.setObject("symbol.PictureMarkerSymbol",o,s),s.symbol.defaultPictureMarkerSymbol=l),o});