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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/Color","dojo/has","dojox/gfx/_base","../kernel","../lang","./MarkerSymbol","./SimpleLineSymbol"],function(t,e,s,i,r,l,o,h,a){var n={STYLE_CIRCLE:"circle",STYLE_SQUARE:"square",STYLE_CROSS:"cross",STYLE_X:"x",STYLE_DIAMOND:"diamond",STYLE_PATH:"path",STYLE_TARGET:"target"},S={style:n.STYLE_CIRCLE,color:[255,255,255,.25],size:12,angle:0,xoffset:0,yoffset:0},c=t(h,{declaredClass:"esri.symbol.SimpleMarkerSymbol",type:"simplemarkersymbol",_styles:{circle:"esriSMSCircle",square:"esriSMSSquare",cross:"esriSMSCross",x:"esriSMSX",diamond:"esriSMSDiamond",path:"esriSMSPath"},constructor:function(t,i,l,h){t?e.isString(t)?(this.style=t,i&&(this.size=i),l&&(this.outline=l),h&&(this.color=h)):(this.style=o.valueOf(this._styles,this.style),t.outline&&(this.outline=new a(t.outline))):(e.mixin(this,S),this.size=r.pt2px(this.size),this.outline=new a(this.outline),this.color=new s(this.color)),this.style||(this.style=n.STYLE_CIRCLE)},setStyle:function(t){return this.style=t,this},setPath:function(t){return this.path=t,this.setStyle(n.STYLE_PATH),this},setOutline:function(t){return this.outline=t,this},getStroke:function(){return this.outline&&this.outline.getStroke()},getFill:function(){return this.color},_setDim:function(t,e,s){this._targetWidth=t,this._targetHeight=e,this._spikeSize=s},getShapeDescriptors:function(){var t,e,s,i=this.style,l=this.size||r.pt2px(S.size),o=0,h=0,a=l/2,c=o-a,u=o+a,p=h-a,y=h+a;switch(i){case n.STYLE_CIRCLE:t={type:"circle",cx:o,cy:h,r:a},e=this.getFill(),s=this.getStroke(),s&&(s.style=s.style||"Solid");break;case n.STYLE_CROSS:t={type:"path",path:"M "+c+",0 L "+u+",0 M 0,"+p+" L 0,"+y+" E"},e=null,s=this.getStroke();break;case n.STYLE_DIAMOND:t={type:"path",path:"M "+c+",0 L 0,"+p+" L "+u+",0 L 0,"+y+" L "+c+",0 Z"},e=this.getFill(),s=this.getStroke();break;case n.STYLE_SQUARE:t={type:"path",path:"M "+c+","+y+" L "+c+","+p+" L "+u+","+p+" L "+u+","+y+" L "+c+","+y+" Z"},e=this.getFill(),s=this.getStroke();break;case n.STYLE_X:t={type:"path",path:"M "+c+","+y+" L "+u+","+p+" M "+c+","+p+" L "+u+","+y+" E"},e=null,s=this.getStroke();break;case n.STYLE_PATH:t={type:"path",path:this.path||""},e=this.getFill(),s=this.getStroke()}return{defaultShape:t,fill:e,stroke:s}},toJson:function(){var t=this.style,s=this.outline,i=e.mixin(this.inherited("toJson",arguments),{type:"esriSMS",style:this._styles[t]||"esriSMSCircle"});return s&&(i.outline=s.toJson()),"x"===t||"cross"===t?delete i.color:"target"===t&&(i.style="esriSMSSquare",delete i.color,this._targetHeight>0&&this._targetWidth>0&&(i.size=r.px2pt(Math.max(this._targetHeight,this._targetWidth)))),i.path=this.path,o.fixJson(i)}});return e.mixin(c,n),c.defaultProps=S,i("extend-esri")&&(e.setObject("symbol.SimpleMarkerSymbol",c,l),l.symbol.defaultSimpleMarkerSymbol=S),c});