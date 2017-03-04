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

define(["dojo/_base/declare","dojo/_base/lang","dojo/sniff","dojox/gfx/_base","../kernel","../lang","../urlUtils","./MarkerSymbol","./Font"],function(t,e,i,h,s,n,r,o,a){var l={url:"",width:12,height:12,angle:0,xoffset:0,yoffset:0},u=t(o,{declaredClass:"esri.symbol.ShieldLabelSymbol",type:"shieldlabelsymbol",color:[255,255,255,1],width:32,height:32,font:h.defaultFont,constructor:function(t,s,n,r,o){if(t)if(e.isString(t))this.url=t,s&&(this.color=s),n&&(this.width=n),r&&(this.height=r),void 0!==o&&(this.font=o);else{this.width=h.pt2px(t.width),this.height=h.pt2px(t.height);var a=t.imageData;if(!(i("ie")<9)&&a){var u=this.url;this.url="data:"+(t.contentType||"image")+";base64,"+a,this.imageData=u}}else e.mixin(this,l)},getStroke:function(){return null},getFill:function(){return this.color},setWidth:function(t){return this.width=t,this},setHeight:function(t){return this.height=t,this},setUrl:function(t){return t!==this.url&&(delete this.imageData,delete this.contentType),this.url=t,this},setFont:function(t){return this.font=t,this},setText:function(t){return this.text=t,this},getWidth:function(){return this.width},getHeight:function(){return this.height},getShapeDescriptors:function(){var t={type:"image",x:-Math.round(this.width/2),y:-Math.round(this.height/2),width:this.width,height:this.height,src:this.url||""};return{defaultShape:t,fill:null,stroke:null}},toJson:function(){var t=this.url,i=this.imageData;if(0===t.indexOf("data:")){var s=t;t=i;var o=s.indexOf(";base64,")+8;i=s.substr(o)}t=r.getAbsoluteUrl(t);var l=h.px2pt(this.width);l=isNaN(l)?void 0:l;var u=h.px2pt(this.height);u=isNaN(u)?void 0:u;var d=n.fixJson(e.mixin(this.inherited("toJson",arguments),{type:"esriSHD",url:t,imageData:i,contentType:this.contentType,width:l,height:u}));if(this.font){var f=new a(this.font);d.font=f.toJson()}else d.font=null;return delete d.size,d.imageData||delete d.imageData,d}});return u.defaultProps=l,i("extend-esri")&&(e.setObject("symbol.ShieldLabelSymbol",u,s),s.symbol.defaultShieldLabelSymbol=l),u});