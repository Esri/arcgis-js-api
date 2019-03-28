// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/when","../ElementBuilder","esri/dijit/geoenrichment/utils/ImageInfoUtil","esri/dijit/geoenrichment/utils/FitUtil"],function(e,t,r,n){var i={drawBackgroundImage:function(e,t){if(e.style.getBackground().image&&-1!==e.style.getBackground().image.indexOf("url")){var r=e.style.getBackground().image.replace("url(","").replace(")","").replace(/"/g,"");return i._drawImage(r,e,t,!1)}},drawImage:function(e,t,r){return i._drawImage(e.src,t,r,!0)},_preProcessImage:function(t,i,o){if(o)return null;if("cover"===i.style.getBackground().size)return null;if("auto"===i.style.getBackground().size)return e(r.getImageInfo(t),function(e){return{w:e.width,h:e.height}}).otherwise(function(){return null});var a=i.style.getBackground().sizePx,l=a;return i.style.getBackground().repeatX||i.style.getBackground().repeatY?e(r.getImageInfo(t),function(e){return n.fitBox({w:e.width,h:e.height},{w:a||i.style.cw,h:l||i.style.ch})}).otherwise(function(){return null}):null},_drawImage:function(r,n,i,o){return e(this._preProcessImage(r,n,o),function(e){function o(e,o){return t.buildElement("image",{"xlink:href":r,x:n.box.x+n.style.getBorder().l.width+e,y:n.box.y+n.style.getBorder().t.width+o,width:x,height:k,opacity:n.style.opacity,clipParams:i,preserveAspectRatio:w,transform:n.style.transform})}function a(e,t){P.push(o(e,t))}var l=e&&e.w||n.style.getBackground().sizePx,s=e&&e.h||l,u=n.style.getBackground().positionXPx,g=n.style.getBackground().positionYPx,c=-1!==n.style.getBackground().positionX.indexOf("%"),d=-1!==n.style.getBackground().positionY.indexOf("%"),f=n.style.getBackground().repeatX,y=n.style.getBackground().repeatY,h=0,m=0;l&&(h=c?(n.style.cw-l)*u/100:u,m=d?(n.style.ch-s)*g/100:g);var w;if(l||"contain"===n.style.getBackground().size)w=void 0;else{var B,p;B=c?0===u?"xMin":100===u?"xMax":"xMid":"xMid",p=d?0===g?"YMin":100===g?"YMax":"YMid":"YMid",w=B+p+" slice"}var x=l||n.style.cw,k=s||n.style.ch;if(x<=0||k<=0)return null;if(f||y){var v,I,M,Y,P=[];if(h<=0)v=h;else for(v=h;v>0;)v-=x;var z=v;for(I=0;z<n.style.cw;)z+=x,I++;if(m<=0)M=m;else for(M=m;M>0;)M-=k;var _=M;for(Y=0;_<n.style.ch;)_+=k,Y++;if(f&&!y)for(var X=0;X<I;X++)a(v+X*x,m);else if(!f&&y)for(var b=0;b<Y;b++)a(h,M+b*k);else for(var j=0;j<I;j++)for(var O=0;O<Y;O++)a(v+j*x,M+O*k);return P}return[o(h,m)]})}};return i});