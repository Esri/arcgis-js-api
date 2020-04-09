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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../support/debugFlags"],(function(e,t,i,n){Object.defineProperty(t,"__esModule",{value:!0});var l,o,a=!1,r=!1,s=!1,c=!1,u=null;function p(){u&&(u(),u=null)}function h(e,t,i,n,a){p();var r=l.height,s=o;s.beginPath(),s.lineWidth=1,s.strokeStyle=a,s.moveTo(e,r-i),s.lineTo(t,r-i),s.stroke(),s.lineTo(t,r-n),s.stroke(),s.lineTo(t,r-i),s.stroke(),s.lineTo(e,r-i),s.stroke(),s.lineTo(e,r-i),s.stroke(),s.closePath()}t.drawAccelerationStruct=function(e,t){if(r&&o){p();for(var i=o,n=0,l=0;l<e.accBinsNumX;l++)for(var a=0;a<e.accBinsNumY;a++){var s=e.accBins[l][e.accBinsNumY-1-a];n+=s.length;var c=l*e.accBinsSizeX,u=(l+1)*e.accBinsSizeX,d=a*e.accBinsSizeY,f=(a+1)*e.accBinsSizeY;i.fillText(s.length.toFixed(),c+5,d+15),h(c,u,d,f,"blue")}i.fillText("total totalShownLabels: "+n,70,40),i.fillText("total visible labels: "+t.size,70,50),i.fillText("total numTests: "+e.accNumTests,70,30)}},t.prepare=function(e){s=n.DECONFLICTOR_SHOW_OUTLINES,c=n.DECONFLICTOR_SHOW_OUTLINES_INVISIBLE,a=s||c,r=n.DECONFLICTOR_SHOW_GRID,u=null,a||r?u=function(){return function(e){null==l&&((l=document.createElement("canvas")).setAttribute("id","canvas2d"),e.surface.parentElement.style.position="relative",e.surface.parentElement.appendChild(l));var t=e.width*e.pixelRatio,i=e.height*e.pixelRatio;l.setAttribute("width",t+"px"),l.setAttribute("height",i+"px"),l.setAttribute("style","position:absolute;left:0px;top:0px;display:block;pointer-events:none;width:"+e.width+"px;height:"+e.height+"px"),(o=l.getContext("2d")).clearRect(0,0,e.width,e.height),o.font="12px Arial"}(e)}:l&&(l.parentElement.removeChild(l),l=null)},t.drawPoly=function(e,t){a&&(t&&s||!t&&c)&&h(e.xMin,e.xMax,e.yMin,e.yMax,t?"green":"red")}}));