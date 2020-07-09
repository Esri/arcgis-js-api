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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../Color","../../core/maybe"],(function(e,r,t,n,a){function o(e){return t.__awaiter(this,void 0,void 0,(function(){var r,a,o,u,i,s,c,l,d,h,g,f,b,w,M,_,y,v;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,e.whenReady()];case 1:return t.sent(),(r=e.basemapView.baseLayerViews.map((function(e){return e.layer}))).length?[4,e.takeScreenshot({format:"png",layers:r.toArray()})]:(a=getComputedStyle(e.container).backgroundColor,o=a&&new n(a),[2,e.get("background.color")||(o&&0!==o.a?o:null)||null]);case 2:for(u=t.sent(),i=u.data.data,s=i.length,c=0,l=0,d=0,h=0,g=0,f=0,b=0;b<s;b+=4)w=i[b],M=i[b+1],_=i[b+2],y=i[b+3],c+=w*w*(v=y/255),l+=M*M*v,d+=_*_*v,g+=v,y&&(h+=y,f++);return c=Math.round(Math.sqrt(c/g)),l=Math.round(Math.sqrt(l/g)),d=Math.round(Math.sqrt(d/g)),[2,new n([c,l,d,h/f/255])]}}))}))}function u(e){return function(e){var r=e.r,t=e.g,a=e.b,o=e.a;o<1&&(r=Math.round(o*r+255*(1-o)),t=Math.round(o*t+255*(1-o)),a=Math.round(o*a+255*(1-o)));return new n({r:r,g:t,b:a})}(e).isBright?"light":"dark"}Object.defineProperty(r,"__esModule",{value:!0}),r.getBackgroundColor=o,r.getBackgroundColorTheme=function(e){return t.__awaiter(this,void 0,void 0,(function(){var r;return t.__generator(this,(function(t){switch(t.label){case 0:return e&&"3d"!==e.type?[4,o(e)]:[2,null];case 1:return r=t.sent(),[2,a.isSome(r)?u(r):null]}}))}))}}));