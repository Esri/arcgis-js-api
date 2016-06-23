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
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/Color","dojo/has","dojox/gfx/_base","../kernel","../lang","./MarkerSymbol","./SimpleLineSymbol"],function(t,e,s,i,r,l,o,h,n){var a={STYLE_CIRCLE:"circle",STYLE_SQUARE:"square",STYLE_CROSS:"cross",STYLE_X:"x",STYLE_DIAMOND:"diamond",STYLE_PATH:"path",STYLE_TARGET:"target"},S={style:a.STYLE_CIRCLE,color:[255,255,255,.25],size:12,angle:0,xoffset:0,yoffset:0},u=t(h,{declaredClass:"esri.symbol.SimpleMarkerSymbol",type:"simplemarkersymbol",_styles:{circle:"esriSMSCircle",square:"esriSMSSquare",cross:"esriSMSCross",x:"esriSMSX",diamond:"esriSMSDiamond",path:"esriSMSPath"},constructor:function(t,i,l,h){t?e.isString(t)?(this.style=t,i&&(this.size=i),l&&(this.outline=l),h&&(this.color=h)):(this.style=o.valueOf(this._styles,this.style),t.outline&&(this.outline=new n(t.outline))):(e.mixin(this,S),this.size=r.pt2px(this.size),this.outline=new n(this.outline),this.color=new s(this.color)),this.style||(this.style=a.STYLE_CIRCLE)},setStyle:function(t){return this.style=t,this},setPath:function(t){return this.path=t,this.setStyle(a.STYLE_PATH),this},setOutline:function(t){return this.outline=t,this},getStroke:function(){return this.outline&&this.outline.getStroke()},getFill:function(){return this.color},_setDim:function(t,e,s){this._targetWidth=t,this._targetHeight=e,this._spikeSize=s},getShapeDescriptors:function(){var t,e,s,i=this.style,l=this.size||r.pt2px(S.size),o=0,h=0,n=l/2,u=o-n,c=o+n,p=h-n,y=h+n;switch(i){case a.STYLE_CIRCLE:t={type:"circle",cx:o,cy:h,r:n},e=this.getFill(),s=this.getStroke(),s&&(s.style=s.style||"Solid");break;case a.STYLE_CROSS:t={type:"path",path:"M "+u+",0 L "+c+",0 M 0,"+p+" L 0,"+y+" E"},e=null,s=this.getStroke();break;case a.STYLE_DIAMOND:t={type:"path",path:"M "+u+",0 L 0,"+p+" L "+c+",0 L 0,"+y+" L "+u+",0 Z"},e=this.getFill(),s=this.getStroke();break;case a.STYLE_SQUARE:t={type:"path",path:"M "+u+","+y+" L "+u+","+p+" L "+c+","+p+" L "+c+","+y+" L "+u+","+y+" Z"},e=this.getFill(),s=this.getStroke();break;case a.STYLE_X:t={type:"path",path:"M "+u+","+y+" L "+c+","+p+" M "+u+","+p+" L "+c+","+y+" E"},e=null,s=this.getStroke();break;case a.STYLE_PATH:t={type:"path",path:this.path||""},e=this.getFill(),s=this.getStroke()}return{defaultShape:t,fill:e,stroke:s}},toJson:function(){var t=e.mixin(this.inherited("toJson",arguments),{type:"esriSMS",style:this._styles[this.style]}),s=this.outline;return s&&(t.outline=s.toJson()),t.path=this.path,o.fixJson(t)}});return e.mixin(u,a),u.defaultProps=S,i("extend-esri")&&(e.setObject("symbol.SimpleMarkerSymbol",u,l),l.symbol.defaultSimpleMarkerSymbol=S),u});