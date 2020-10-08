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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../Color","../../core/maybe"],(function(e,r,t,n,o){"use strict";function a(e){return t.__awaiter(this,void 0,void 0,(function(){var r,o,a,u,i,c,s,l,d,h,g,f,b,w,M,_,v,y;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,e.whenReady()];case 1:return t.sent(),(r=e.basemapView.baseLayerViews.map((function(e){return e.layer}))).length?[4,e.takeScreenshot({format:"png",layers:r.toArray()})]:(o=getComputedStyle(e.container).backgroundColor,a=o&&new n(o),[2,e.get("background.color")||(a&&0!==a.a?a:null)||null]);case 2:for(u=t.sent(),i=u.data.data,c=i.length,s=0,l=0,d=0,h=0,g=0,f=0,b=0;b<c;b+=4)w=i[b],M=i[b+1],_=i[b+2],v=i[b+3],s+=w*w*(y=v/255),l+=M*M*y,d+=_*_*y,g+=y,v&&(h+=v,f++);return s=Math.round(Math.sqrt(s/g)),l=Math.round(Math.sqrt(l/g)),d=Math.round(Math.sqrt(d/g)),[2,new n([s,l,d,h/f/255])]}}))}))}function u(e){return function(e){var r=e.r,t=e.g,o=e.b,a=e.a;a<1&&(r=Math.round(a*r+255*(1-a)),t=Math.round(a*t+255*(1-a)),o=Math.round(a*o+255*(1-a)));return new n({r:r,g:t,b:o})}(e).isBright?"light":"dark"}Object.defineProperty(r,"__esModule",{value:!0}),r.getBackgroundColorTheme=r.getBackgroundColor=void 0,r.getBackgroundColor=a,r.getBackgroundColorTheme=function(e){return t.__awaiter(this,void 0,void 0,(function(){var r;return t.__generator(this,(function(t){switch(t.label){case 0:return e&&"3d"!==e.type?[4,a(e)]:[2,null];case 1:return r=t.sent(),[2,o.isSome(r)?u(r):null]}}))}))}}));