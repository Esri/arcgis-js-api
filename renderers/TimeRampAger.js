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

define(["../core/declare","dojo/_base/Color","../symbols/support/jsonUtils","../Color","./SymbolAger"],function(a,e,t,r,o){var i=a(o,{declaredClass:"esri.renderer.TimeRampAger",constructor:function(a,e,t){this.colorRange=a,this.sizeRange=e,this.alphaRange=t},getAgedSymbol:function(a,r){var o=r.getLayer(),i=r.attributes;a=t.fromJSON(a.toJSON());var s=o._map.timeExtent,n=s.startTime,h=s.endTime;if(!n||!h)return a;n=n.getTime(),h=h.getTime();var g=new Date(i[o._startTimeField]);g=g.getTime(),n>g&&(g=n);var l,R,c=h===n?1:(g-n)/(h-n),b=this.sizeRange;if(b){var m=b[0],u=b[1];R=Math.abs(u-m)*c,this._setSymbolSize(a,u>m?m+R:m-R)}if(b=this.colorRange){var v=b[0],d=b[1],f=Math.round;l=new e;var p=v.r,M=d.r;R=Math.abs(M-p)*c,l.r=f(M>p?p+R:p-R);var S=v.g,T=d.g;R=Math.abs(T-S)*c,l.g=f(T>S?S+R:S-R);var z=v.b,y=d.b;R=Math.abs(y-z)*c,l.b=f(y>z?z+R:z-R);var J=v.a,N=d.a;R=Math.abs(N-J)*c,l.a=N>J?J+R:J-R,a.setColor(l)}if(l=a.color,b=this.alphaRange,b&&l){var O=b[0],C=b[1];R=Math.abs(C-O)*c,l.a=C>O?O+R:O-R}return a},toJSON:function(){var a={};return this.sizeRange&&(a.sizeRange=this.sizeRange),this.colorRange&&(a.colorRange=[r.toJSON(this.colorRange[0]),r.toJSON(this.colorRange[1])]),this.alphaRange&&(a.alphaRange=[Math.round(255*this.alphaRange[0]),Math.round(255*this.alphaRange[1])]),a}});return i});