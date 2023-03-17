// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/when","../ElementBuilder","esri/dijit/geoenrichment/ReportPlayer/dataProvider/commands/mapToImage/LegendToLayerUtil","esri/dijit/geoenrichment/utils/DataUtil","esri/dijit/geoenrichment/utils/ImageInfoUtil","esri/dijit/geoenrichment/utils/ImageUtil","esri/dijit/geoenrichment/utils/FitUtil","esri/dijit/geoenrichment/utils/ObjectUtil"],(function(e,t,r,i,n,a,o,s){var l={drawBackgroundImage:function(e,t){if(e.style.getBackground().image&&-1!==e.style.getBackground().image.indexOf("url")){var r=e.style.getBackground().image.replace("url(","").replace(")","").replace(/"/g,"");return l._drawImage(r,e,t,!1)}},drawImage:function(e,t,r,i){return e._webMapJsonInfo?l._drawMap(e._webMapJsonInfo,t,i):0===e.src.indexOf("data:application/json")?l._drawMap({url:e.src},t,i):l._drawImage(e.src,t,r,!0)},_drawImage:function(r,i,n,a){return e(this._preProcessImage(r,i,a),(function(e){var a=e&&e.w||i.style.getBackground().sizePx,o=e&&e.h||a,s=i.style.getBackground().positionXPx,l=i.style.getBackground().positionYPx,c=-1!==i.style.getBackground().positionX.indexOf("%"),u=-1!==i.style.getBackground().positionY.indexOf("%");c&&(s=Number(i.style.getBackground().positionX.replace("%",""))),u&&(l=Number(i.style.getBackground().positionY.replace("%","")));var g,d=i.style.getBackground().repeatX,f=i.style.getBackground().repeatY,h=0,y=0;(a&&(h=c?(i.style.cw-a)*s/100:s,y=u?(i.style.ch-o)*l/100:l),a||"contain"===i.style.getBackground().size)?g=void 0:g=(c?0===s?"xMin":100===s?"xMax":"xMid":"xMid")+(u?0===l?"YMin":100===l?"YMax":"YMid":"YMid")+" slice";var p=a||i.style.cw,m=o||i.style.ch;if(p<=0||m<=0)return null;function w(e,a){return t.buildElement("image",{"xlink:href":r,x:i.box.x+i.style.getBorder().l.width+e,y:i.box.y+i.style.getBorder().t.width+a,width:p,height:m,opacity:i.style.opacity,clipParams:n,preserveAspectRatio:g,transform:i.style.transform})}if(d||f){var x,B,k,v,I=[],b=function(e,t){I.push(w(e,t))};if(h<=0)x=h;else for(x=h;x>0;)x-=p;var M=x;for(B=0;M<i.style.cw;)M+=p,B++;if(y<=0)k=y;else for(k=y;k>0;)k-=m;var _=k;for(v=0;_<i.style.ch;)_+=m,v++;if(d&&!f)for(var j=0;j<B;j++)b(x+j*p,y);else if(!d&&f)for(var P=0;P<v;P++)b(h,k+P*m);else for(var Y=0;Y<B;Y++)for(var U=0;U<v;U++)b(x+Y*p,k+U*m);return I}return[w(h,y)]}))},_preProcessImage:function(t,r,i){if(i)return null;if("cover"===r.style.getBackground().size)return null;if("auto"===r.style.getBackground().size)return e(n.getImageInfo(t),(function(e){return{w:e.width,h:e.height}})).otherwise((function(){return null}));var a=r.style.getBackground().sizePx;return r.style.getBackground().repeatX||r.style.getBackground().repeatY||a?e(n.getImageInfo(t),(function(e){var t=e.width/e.height;return o.fitBox({w:e.width,h:e.height},{w:a||r.style.cw,h:a?a/t:r.style.ch})})).otherwise((function(){return null})):null},_drawMap:function(e,r,i){return[t.buildElement("map",{id:e.id,"xlink:href":this._correctJsonUrlForScale(e.url,i),x:r.box.x+r.style.getBorder().l.width,y:r.box.y+r.style.getBorder().t.width,width:r.style.cw,height:r.style.ch,preserveAspectRatio:"xMinYMin slice"})]},_correctJsonUrlForScale:function(e,t){var n=t||1;if(s.compareEqual(n,1,2))return e;var o=i.base64ToJson(a.base64DataFromDataURL(e));return o.mapOptions.scale/=n,r.correctLegendPositionByScale(o,n),"data:application/json;base64,"+i.base64FromJson(o)}};return l}));