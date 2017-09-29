// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/dom-style","../ElementBuilder"],function(e,t){var i={drawBackgroundImage:function(e,t){if(e.style.background.image&&-1!=e.style.background.image.indexOf("url")){var r=e.style.background.image.replace("url(","").replace(")","").replace(/"/g,"");return i._drawImage(r,e,t)}},drawImage:function(e,t,r){return i._drawImage(e.src,t,r)},_drawImage:function(i,r,a){var o=e.toPixelValue(document.body,r.style.background.size),n=o,d=e.toPixelValue(document.body,r.style.background.positionX),l=e.toPixelValue(document.body,r.style.background.positionY),s=-1!=r.style.background.positionX.indexOf("%"),c=-1!=r.style.background.positionY.indexOf("%"),u=0,y=0;o&&(u=s?(r.style.cw-o)*d/100:d,y=c?(r.style.ch-n)*l/100:l);var g;if(o||"contain"==r.style.background.size)g=void 0;else{var m,b;m=s?0==d?"xMin":100==d?"xMax":"xMid":"xMid",b=c?0==l?"YMin":100==l?"YMax":"YMid":"YMid",g=m+b+" slice"}return t.buildElement("image",{"xlink:href":i,x:r.box.x+r.style.border.l.width+u,y:r.box.y+r.style.border.t.width+y,width:o||r.style.cw,height:n||r.style.ch,opacity:r.style.opacity,clipParams:a,preserveAspectRatio:g,transform:r.style.transform})}};return i});