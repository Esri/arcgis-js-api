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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/sniff","dojox/gfx/_base","../kernel","../lang","../urlUtils","./MarkerSymbol","./Font"],function(t,e,i,h,s,n,o,r,l){var a={url:"",width:12,height:12,angle:0,xoffset:0,yoffset:0},u=t(r,{declaredClass:"esri.symbol.ShieldLabelSymbol",type:"shieldlabelsymbol",color:[255,255,255,1],width:32,height:32,font:h.defaultFont,constructor:function(t,s,n,o,r){if(t)if(e.isString(t))this.url=t,s&&(this.color=s),n&&(this.width=n),o&&(this.height=o),void 0!==r&&(this.font=r);else{this.width=h.pt2px(t.width),this.height=h.pt2px(t.height);var l=t.imageData;if(!(i("ie")<9)&&l){var u=this.url;this.url="data:"+(t.contentType||"image")+";base64,"+l,this.imageData=u}}else e.mixin(this,a)},getStroke:function(){return null},getFill:function(){return this.color},setWidth:function(t){return this.width=t,this},setHeight:function(t){return this.height=t,this},setUrl:function(t){return t!==this.url&&(delete this.imageData,delete this.contentType),this.url=t,this},setFont:function(t){return this.font=t,this},setText:function(t){return this.text=t,this},getWidth:function(){return this.width},getHeight:function(){return this.height},getShapeDescriptors:function(){return{defaultShape:{type:"image",x:-Math.round(this.width/2),y:-Math.round(this.height/2),width:this.width,height:this.height,src:this.url||""},fill:null,stroke:null}},toJson:function(){var t=this.url,i=this.imageData;if(0===t.indexOf("data:")){var s=t;t=i;var r=s.indexOf(";base64,")+8;i=s.substr(r)}t=o.getAbsoluteUrl(t);var a=h.px2pt(this.width);a=isNaN(a)?void 0:a;var u=h.px2pt(this.height);u=isNaN(u)?void 0:u;var d=n.fixJson(e.mixin(this.inherited("toJson",arguments),{type:"esriSHD",url:t,imageData:i,contentType:this.contentType,width:a,height:u}));if(this.font){var f=new l(this.font);d.font=f.toJson()}else d.font=null;return delete d.size,d.imageData||delete d.imageData,d}});return u.defaultProps=a,i("extend-esri")&&(e.setObject("symbol.ShieldLabelSymbol",u,s),s.symbol.defaultShieldLabelSymbol=a),u});