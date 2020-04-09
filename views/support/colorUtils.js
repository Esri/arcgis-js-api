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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../Color","../../core/maybe","../../widgets/support/colorUtils"],(function(e,t,r,n,o,a,u){function s(e){return n(this,void 0,void 0,(function(){var t,n,a,u,s,l,i,c,d,h,p,g,f,w,y,b,m,v;return r(this,(function(r){switch(r.label){case 0:return[4,e.whenReady()];case 1:return r.sent(),(t=e.basemapView.baseLayerViews.map((function(e){return e.layer}))).length?[4,e.takeScreenshot({format:"png",layers:t.toArray()})]:(n=getComputedStyle(e.container).backgroundColor,a=n&&new o(n),[2,e.get("background.color")||(a&&0!==a.a?a:null)||null]);case 2:for(u=r.sent(),s=u.data.data,l=s.length,i=0,c=0,d=0,h=0,p=0,g=0,f=0;f<l;f+=4)w=s[f],y=s[f+1],b=s[f+2],m=s[f+3],i+=w*w*(v=m/255),c+=y*y*v,d+=b*b*v,p+=v,m&&(h+=m,g++);return i=Math.round(Math.sqrt(i/p)),c=Math.round(Math.sqrt(c/p)),d=Math.round(Math.sqrt(d/p)),[2,new o([i,c,d,h/g/255])]}}))}))}Object.defineProperty(t,"__esModule",{value:!0}),t.getBackgroundColor=s,t.getBackgroundColorTheme=function(e){return n(this,void 0,void 0,(function(){var t;return r(this,(function(r){switch(r.label){case 0:return e&&"3d"!==e.type?[4,s(e)]:[2,null];case 1:return t=r.sent(),[2,a.isSome(t)?u.getColorTheme(t):null]}}))}))}}));