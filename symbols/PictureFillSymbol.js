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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/sniff","dojox/gfx/_base","../kernel","../lang","../urlUtils","./FillSymbol"],function(t,i,e,s,h,a,o,n){var r={xoffset:0,yoffset:0,width:12,height:12},f=t(n,{declaredClass:"esri.symbol.PictureFillSymbol",type:"picturefillsymbol",xscale:1,yscale:1,xoffset:0,yoffset:0,constructor:function(t,h,a,o){if(t)if(i.isString(t))this.url=t,void 0!==h&&(this.outline=h),void 0!==a&&(this.width=a),void 0!==o&&(this.height=o);else{this.xoffset=s.pt2px(t.xoffset),this.yoffset=s.pt2px(t.yoffset),this.width=s.pt2px(t.width),this.height=s.pt2px(t.height);var n=t.imageData;if(!(e("ie")<9)&&n){var f=this.url;this.url="data:"+(t.contentType||"image")+";base64,"+n,this.imageData=f}}else i.mixin(this,r),this.width=s.pt2px(this.width),this.height=s.pt2px(this.height)},setWidth:function(t){return this.width=t,this},setHeight:function(t){return this.height=t,this},setOffset:function(t,i){return this.xoffset=t,this.yoffset=i,this},setUrl:function(t){return t!==this.url&&(delete this.imageData,delete this.contentType),this.url=t,this},setXScale:function(t){return this.xscale=t,this},setYScale:function(t){return this.yscale=t,this},getStroke:function(){return this.outline&&this.outline.getStroke()},getFill:function(){return i.mixin({},s.defaultPattern,{src:this.url,width:this.width*this.xscale,height:this.height*this.yscale,x:this.xoffset,y:this.yoffset})},getShapeDescriptors:function(){return{defaultShape:{type:"path",path:"M -10,-10 L 10,0 L 10,10 L -10,10 L -10,-10 Z"},fill:this.getFill(),stroke:this.getStroke()}},toJson:function(){var t=this.url,e=this.imageData;if(0===t.indexOf("data:")){var h=t;t=e;var n=h.indexOf(";base64,")+8;e=h.substr(n)}!i.isString(t)||0!==t.indexOf("/")&&0!==t.indexOf("//")&&0!==t.indexOf("./")&&0!==t.indexOf("../")||(t=o.getAbsoluteUrl(t));var r=s.px2pt(this.width);r=isNaN(r)?void 0:r;var f=s.px2pt(this.height);f=isNaN(f)?void 0:f;var l=s.px2pt(this.xoffset);l=isNaN(l)?void 0:l;var u=s.px2pt(this.yoffset);u=isNaN(u)?void 0:u;var d=a.fixJson(i.mixin(this.inherited("toJson",arguments),{type:"esriPFS",url:t,imageData:e,contentType:this.contentType,width:r,height:f,xoffset:l,yoffset:u,xscale:this.xscale,yscale:this.yscale}));return d.imageData||delete d.imageData,d}});return f.defaultProps=r,e("extend-esri")&&(i.setObject("symbol.PictureFillSymbol",f,h),h.symbol.defaultPictureFillSymbol=r),f});