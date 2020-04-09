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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/when","../ElementBuilder","esri/dijit/geoenrichment/utils/ImageInfoUtil","esri/dijit/geoenrichment/utils/FitUtil"],(function(e,t,r,i){var n={drawBackgroundImage:function(e,t){if(e.style.getBackground().image&&-1!==e.style.getBackground().image.indexOf("url")){var r=e.style.getBackground().image.replace("url(","").replace(")","").replace(/"/g,"");return n._drawImage(r,e,t,!1)}},drawImage:function(e,t,r){return-1!==e.src.indexOf("application/json")?n._drawMap(e.src,t):n._drawImage(e.src,t,r,!0)},_drawImage:function(r,i,n,o){return e(this._preProcessImage(r,i,o),(function(e){var o=e&&e.w||i.style.getBackground().sizePx,a=e&&e.h||o,l=i.style.getBackground().positionXPx,s=i.style.getBackground().positionYPx,g=-1!==i.style.getBackground().positionX.indexOf("%"),u=-1!==i.style.getBackground().positionY.indexOf("%");g&&(l=Number(i.style.getBackground().positionX.replace("%",""))),u&&(s=Number(i.style.getBackground().positionY.replace("%","")));var c,d=i.style.getBackground().repeatX,f=i.style.getBackground().repeatY,y=0,h=0;(o&&(y=g?(i.style.cw-o)*l/100:l,h=u?(i.style.ch-a)*s/100:s),o||"contain"===i.style.getBackground().size)?c=void 0:c=(g?0===l?"xMin":100===l?"xMax":"xMid":"xMid")+(u?0===s?"YMin":100===s?"YMax":"YMid":"YMid")+" slice";var p=o||i.style.cw,w=a||i.style.ch;if(p<=0||w<=0)return null;function m(e,o){return t.buildElement("image",{"xlink:href":r,x:i.box.x+i.style.getBorder().l.width+e,y:i.box.y+i.style.getBorder().t.width+o,width:p,height:w,opacity:i.style.opacity,clipParams:n,preserveAspectRatio:c,transform:i.style.transform})}if(d||f){var x,B,k,v,I=[];function M(e,t){I.push(m(e,t))}if(y<=0)x=y;else for(x=y;x>0;)x-=p;var Y=x;for(B=0;Y<i.style.cw;)Y+=p,B++;if(h<=0)k=h;else for(k=h;k>0;)k-=w;var b=k;for(v=0;b<i.style.ch;)b+=w,v++;if(d&&!f)for(var P=0;P<B;P++)M(x+P*p,h);else if(!d&&f)for(var _=0;_<v;_++)M(y,k+_*w);else for(var z=0;z<B;z++)for(var X=0;X<v;X++)M(x+z*p,k+X*w);return I}return[m(y,h)]}))},_preProcessImage:function(t,n,o){if(o)return null;if("cover"===n.style.getBackground().size)return null;if("auto"===n.style.getBackground().size)return e(r.getImageInfo(t),(function(e){return{w:e.width,h:e.height}})).otherwise((function(){return null}));var a=n.style.getBackground().sizePx;return n.style.getBackground().repeatX||n.style.getBackground().repeatY||a?e(r.getImageInfo(t),(function(e){var t=e.width/e.height;return i.fitBox({w:e.width,h:e.height},{w:a||n.style.cw,h:a?a/t:n.style.ch})})).otherwise((function(){return null})):null},_drawMap:function(e,r){return[t.buildElement("map",{"xlink:href":e,x:r.box.x+r.style.getBorder().l.width,y:r.box.y+r.style.getBorder().t.width,width:r.style.cw,height:r.style.ch,preserveAspectRatio:"xMinYMin slice"})]}};return n}));