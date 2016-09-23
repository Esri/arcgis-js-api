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

define(["../core/declare","dojo/_base/lang","dojo/sniff","dojox/gfx/_base","../core/lang","../core/screenUtils","../core/urlUtils","./MarkerSymbol","./Font"],function(t,i,e,h,n,s,o,r,a){var l={url:"",width:12,height:12,angle:0,xoffset:0,yoffset:0},u=t(r,{declaredClass:"esri.symbol.ShieldLabelSymbol",type:"shield-label-symbol",color:[255,255,255,1],width:24,height:24,font:h.defaultFont,constructor:function(t,n,o,r,a){if(t)if(i.isString(t))this.url=t,n&&(this.color=n),o&&(this.width=s.toPt(o)),r&&(this.height=s.toPt(r)),void 0!==a&&(this.font=a);else{this.width=h.pt2px(t.width),this.height=h.pt2px(t.height);var u=t.imageData;if(e("ie")>=9&&u){var f=this.url;this.url="data:"+(t.contentType||"image")+";base64,"+u,this.imageData=f}}else i.mixin(this,l)},getStroke:function(){return null},getFill:function(){return this.color},setWidth:function(t){return this.width=s.toPt(t),this},setHeight:function(t){return this.height=s.toPt(t),this},setUrl:function(t){return t!==this.url&&(delete this.imageData,delete this.contentType),this.url=t,this},setFont:function(t){return this.font=t,this},setText:function(t){return this.text=t,this},getWidth:function(){return this.width},getHeight:function(){return this.height},getShapeDescriptors:function(){var t={type:"image",x:-Math.round(this.width/2),y:-Math.round(this.height/2),width:this.width,height:this.height,src:this.url||""};return{defaultShape:t,fill:null,stroke:null}},toJSON:function(){var t=this.url,e=this.imageData;if(0===t.indexOf("data:")){var h=t;t=e;var s=h.indexOf(";base64,")+8;e=h.substr(s)}t=o.makeAbsolute(t);var r=n.fixJson(i.mixin(this.inherited(arguments),{url:t,imageData:e,contentType:this.contentType,width:this.width,height:this.height}));if(this.font){var l=new a(this.font);r.font=l.toJSON()}else r.font=null;return delete r.size,r.imageData||delete r.imageData,r},clone:function(){return new u({color:n.clone(this.color),font:n.clone(this.font),height:this.height,url:this.url,width:this.width,imageData:this.imageData,contentType:this.contentType})}});return u.defaultProps=l,u});