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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["../ElementBuilder"],function(e){var r={drawBackgroundImage:function(e,i){if(e.style.background.image&&-1!==e.style.background.image.indexOf("url")){var t=e.style.background.image.replace("url(","").replace(")","").replace(/"/g,"");return r._drawImage(t,e,i)}},drawImage:function(e,i,t){return r._drawImage(e.src,i,t)},_drawImage:function(r,i,t){var a=i.style.background.sizePx,n=a,o=i.style.background.positionXPx,d=i.style.background.positionYPx,l=-1!==i.style.background.positionX.indexOf("%"),s=-1!==i.style.background.positionY.indexOf("%"),c=0,u=0;a&&(c=l?(i.style.cw-a)*o/100:o,u=s?(i.style.ch-n)*d/100:d);var g;if(a||"contain"===i.style.background.size)g=void 0;else{var y,x;y=l?0===o?"xMin":100===o?"xMax":"xMid":"xMid",x=s?0===d?"YMin":100===d?"YMax":"YMid":"YMid",g=y+x+" slice"}return e.buildElement("image",{"xlink:href":r,x:i.box.x+i.style.border.l.width+c,y:i.box.y+i.style.border.t.width+u,width:a||i.style.cw,height:n||i.style.ch,opacity:i.style.opacity,clipParams:t,preserveAspectRatio:g,transform:i.style.transform})}};return r});