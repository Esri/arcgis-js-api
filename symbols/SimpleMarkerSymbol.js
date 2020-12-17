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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/Color","dojo/has","dojox/gfx/_base","../kernel","../lang","./MarkerSymbol","./SimpleLineSymbol"],(function(t,e,i,s,r,l,o,h,a){var S={STYLE_CIRCLE:"circle",STYLE_SQUARE:"square",STYLE_TRIANGLE:"triangle",STYLE_CROSS:"cross",STYLE_X:"x",STYLE_DIAMOND:"diamond",STYLE_PATH:"path",STYLE_TARGET:"target"},n={style:S.STYLE_CIRCLE,color:[255,255,255,.25],size:12,angle:0,xoffset:0,yoffset:0},c=t(h,{declaredClass:"esri.symbol.SimpleMarkerSymbol",type:"simplemarkersymbol",_styles:{circle:"esriSMSCircle",square:"esriSMSSquare",triangle:"esriSMSTriangle",cross:"esriSMSCross",x:"esriSMSX",diamond:"esriSMSDiamond",path:"esriSMSPath"},constructor:function(t,s,l,h){t?e.isString(t)?(this.style=t,s&&(this.size=s),l&&(this.outline=l),h&&(this.color=h)):(this.style=o.valueOf(this._styles,this.style),t.outline&&(this.outline=new a(t.outline))):(e.mixin(this,n),this.size=r.pt2px(this.size),this.outline=new a(this.outline),this.color=new i(this.color)),this.style||(this.style=S.STYLE_CIRCLE)},setStyle:function(t){return this.style=t,this},setPath:function(t){return this.path=t,this.setStyle(S.STYLE_PATH),this},setOutline:function(t){return this.outline=t,this},getStroke:function(){return this.outline&&this.outline.getStroke()},getFill:function(){return this.color},_setDim:function(t,e,i){this._targetWidth=t,this._targetHeight=e,this._spikeSize=i},getShapeDescriptors:function(){var t,e,i,s=this.style,l=(this.size||r.pt2px(n.size))/2,o=0-l,h=0+l,a=0-l,c=0+l;switch(s){case S.STYLE_CIRCLE:t={type:"circle",cx:0,cy:0,r:l},e=this.getFill(),(i=this.getStroke())&&(i.style=i.style||"Solid");break;case S.STYLE_CROSS:t={type:"path",path:"M "+o+",0 L "+h+",0 M 0,"+a+" L 0,"+c+" E"},e=null,i=this.getStroke();break;case S.STYLE_DIAMOND:t={type:"path",path:"M "+o+",0 L 0,"+a+" L "+h+",0 L 0,"+c+" L "+o+",0 Z"},e=this.getFill(),i=this.getStroke();break;case S.STYLE_SQUARE:t={type:"path",path:"M "+o+","+c+" L "+o+","+a+" L "+h+","+a+" L "+h+","+c+" L "+o+","+c+" Z"},e=this.getFill(),i=this.getStroke();break;case S.STYLE_TRIANGLE:t={type:"path",path:"M "+o+","+c+" L 0,"+a+" L "+h+","+c+" L "+o+","+c+" Z"},e=this.getFill(),i=this.getStroke();break;case S.STYLE_X:t={type:"path",path:"M "+o+","+c+" L "+h+","+a+" M "+o+","+a+" L "+h+","+c+" E"},e=null,i=this.getStroke();break;case S.STYLE_PATH:t={type:"path",path:this.path||""},e=this.getFill(),i=this.getStroke()}return{defaultShape:t,fill:e,stroke:i}},toJson:function(){var t=this.style,i=this.outline,s=e.mixin(this.inherited("toJson",arguments),{type:"esriSMS",style:this._styles[t]||"esriSMSCircle"});return i&&(s.outline=i.toJson()),"x"===t||"cross"===t?delete s.color:"target"===t&&(s.style="esriSMSSquare",delete s.color,this._targetHeight>0&&this._targetWidth>0&&(s.size=r.px2pt(Math.max(this._targetHeight,this._targetWidth)))),s.path=this.path,o.fixJson(s)}});return e.mixin(c,S),c.defaultProps=n,s("extend-esri")&&(e.setObject("symbol.SimpleMarkerSymbol",c,l),l.symbol.defaultSimpleMarkerSymbol=n),c}));