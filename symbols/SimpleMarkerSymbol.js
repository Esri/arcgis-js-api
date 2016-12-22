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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/Color","dojo/has","dojox/gfx/_base","../kernel","../lang","./MarkerSymbol","./SimpleLineSymbol"],function(t,e,s,i,r,o,l,h,n){var a={STYLE_CIRCLE:"circle",STYLE_SQUARE:"square",STYLE_CROSS:"cross",STYLE_X:"x",STYLE_DIAMOND:"diamond",STYLE_PATH:"path",STYLE_TARGET:"target"},S={style:a.STYLE_CIRCLE,color:[255,255,255,.25],size:12,angle:0,xoffset:0,yoffset:0},c=t(h,{declaredClass:"esri.symbol.SimpleMarkerSymbol",type:"simplemarkersymbol",_styles:{circle:"esriSMSCircle",square:"esriSMSSquare",cross:"esriSMSCross",x:"esriSMSX",diamond:"esriSMSDiamond",path:"esriSMSPath"},constructor:function(t,i,o,h){t?e.isString(t)?(this.style=t,i&&(this.size=i),o&&(this.outline=o),h&&(this.color=h)):(this.style=l.valueOf(this._styles,this.style),t.outline&&(this.outline=new n(t.outline))):(e.mixin(this,S),this.size=r.pt2px(this.size),this.outline=new n(this.outline),this.color=new s(this.color)),this.style||(this.style=a.STYLE_CIRCLE)},setStyle:function(t){return this.style=t,this},setPath:function(t){return this.path=t,this.setStyle(a.STYLE_PATH),this},setOutline:function(t){return this.outline=t,this},getStroke:function(){return this.outline&&this.outline.getStroke()},getFill:function(){return this.color},_setDim:function(t,e,s){this._targetWidth=t,this._targetHeight=e,this._spikeSize=s},getShapeDescriptors:function(){var t,e,s,i=this.style,o=this.size||r.pt2px(S.size),l=0,h=0,n=o/2,c=l-n,u=l+n,p=h-n,y=h+n;switch(i){case a.STYLE_CIRCLE:t={type:"circle",cx:l,cy:h,r:n},e=this.getFill(),s=this.getStroke(),s&&(s.style=s.style||"Solid");break;case a.STYLE_CROSS:t={type:"path",path:"M "+c+",0 L "+u+",0 M 0,"+p+" L 0,"+y+" E"},e=null,s=this.getStroke();break;case a.STYLE_DIAMOND:t={type:"path",path:"M "+c+",0 L 0,"+p+" L "+u+",0 L 0,"+y+" L "+c+",0 Z"},e=this.getFill(),s=this.getStroke();break;case a.STYLE_SQUARE:t={type:"path",path:"M "+c+","+y+" L "+c+","+p+" L "+u+","+p+" L "+u+","+y+" L "+c+","+y+" Z"},e=this.getFill(),s=this.getStroke();break;case a.STYLE_X:t={type:"path",path:"M "+c+","+y+" L "+u+","+p+" M "+c+","+p+" L "+u+","+y+" E"},e=null,s=this.getStroke();break;case a.STYLE_PATH:t={type:"path",path:this.path||""},e=this.getFill(),s=this.getStroke()}return{defaultShape:t,fill:e,stroke:s}},toJson:function(){var t=this.style,s=this.outline,i=e.mixin(this.inherited("toJson",arguments),{type:"esriSMS",style:this._styles[t]});return s&&(i.outline=s.toJson()),("x"===t||"cross"===t)&&delete i.color,i.path=this.path,l.fixJson(i)}});return e.mixin(c,a),c.defaultProps=S,i("extend-esri")&&(e.setObject("symbol.SimpleMarkerSymbol",c,o),o.symbol.defaultSimpleMarkerSymbol=S),c});