// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/Color","dojo/has","../kernel","../symbols/jsonUtils","../Color","./SymbolAger"],function(e,a,r,t,o,s,n,i){var h=e(i,{declaredClass:"esri.renderer.TimeRampAger",constructor:function(e,a,r){this.colorRange=e,this.sizeRange=a,this.alphaRange=r},getAgedSymbol:function(e,a){var t=a.getLayer(),o=a.attributes;e=s.fromJson(e.toJson());var n=t._map.timeExtent,i=n.startTime,h=n.endTime;if(!i||!h)return e;i=i.getTime(),h=h.getTime();var g=new Date(o[t._startTimeField]);g=g.getTime(),i>g&&(g=i);var l,R,b=h===i?1:(g-i)/(h-i),d=this.sizeRange;if(d){var m=d[0],c=d[1];R=Math.abs(c-m)*b,this._setSymbolSize(e,c>m?m+R:m-R)}if(d=this.colorRange){var u=d[0],v=d[1],f=Math.round;l=new r;var p=u.r,M=v.r;R=Math.abs(M-p)*b,l.r=f(M>p?p+R:p-R);var T=u.g,j=v.g;R=Math.abs(j-T)*b,l.g=f(j>T?T+R:T-R);var z=u.b,C=v.b;R=Math.abs(C-z)*b,l.b=f(C>z?z+R:z-R);var _=u.a,y=v.a;R=Math.abs(y-_)*b,l.a=y>_?_+R:_-R,e.setColor(l)}if(l=e.color,d=this.alphaRange,d&&l){var J=d[0],A=d[1];R=Math.abs(A-J)*b,l.a=A>J?J+R:J-R}return e},toJson:function(){var e={};return this.sizeRange&&(e.sizeRange=this.sizeRange),this.colorRange&&(e.colorRange=[n.toJsonColor(this.colorRange[0]),n.toJsonColor(this.colorRange[1])]),this.alphaRange&&(e.alphaRange=[Math.round(255*this.alphaRange[0]),Math.round(255*this.alphaRange[1])]),e}});return t("extend-esri")&&a.setObject("renderer.TimeRampAger",h,o),h});