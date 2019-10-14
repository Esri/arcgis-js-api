// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../Color","../../core/maybe","../../widgets/support/colorUtils"],function(e,t,r,n,o,a,u){function s(e){return n(this,void 0,void 0,function(){var t,n,a,u,s,l,i,c,d,h,p,g,f,w,y,b,m,v,M,C,k;return r(this,function(r){switch(r.label){case 0:return[4,e.whenReady()];case 1:return r.sent(),t=e.basemapView.baseLayerViews.map(function(e){return e.layer}),t.length?[4,e.takeScreenshot({format:"png",layers:t.toArray()})]:(n=getComputedStyle(e.container).backgroundColor,a=n&&new o(n),u=e.get("background.color")||(a&&0!==a.a?a:null),[2,u||null]);case 2:for(s=r.sent(),l=s.data.data,i=l.length,c=0,d=0,h=0,p=0,g=0,f=0,w=0;w<i;w+=4)y=l[w],b=l[w+1],m=l[w+2],v=l[w+3],M=v/255,c+=y*y*M,d+=b*b*M,h+=m*m*M,g+=M,v&&(p+=v,f++);return c=Math.round(Math.sqrt(c/g)),d=Math.round(Math.sqrt(d/g)),h=Math.round(Math.sqrt(h/g)),C=p/f/255,k=new o([c,d,h,C]),[2,k]}})})}function l(e){return n(this,void 0,void 0,function(){var t;return r(this,function(r){switch(r.label){case 0:return e&&"3d"!==e.type?[4,s(e)]:[2,null];case 1:return t=r.sent(),[2,a.isSome(t)?u.getColorTheme(t):null]}})})}Object.defineProperty(t,"__esModule",{value:!0}),t.getBackgroundColor=s,t.getBackgroundColorTheme=l});