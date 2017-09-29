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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../lib/glMatrix","../../support/debugFlags"],function(e,t,i,a,l){function n(e,t){if(d&&s){for(var i=s,a=[u.create(),u.create(),u.create(),u.create()],l=0,n=0;n<e.accBinsNumX;n++)for(var r=0;r<e.accBinsNumY;r++){var c=e.accBins[n][r];l+=c.length;var p=n*e.accBinsSizeX,f=(n+1)*e.accBinsSizeX,h=r*e.accBinsSizeY,v=(r+1)*e.accBinsSizeY;a[0][0]=p,a[0][1]=h,a[1][0]=f,a[1][1]=h,a[2][0]=f,a[2][1]=v,a[3][0]=p,a[3][1]=v,i.fillText(c.length.toFixed(),p+5,h+15),o(a,"blue")}i.fillText("total totalShownLabels: "+l,70,40),i.fillText("total visible labels: "+t.length,70,50),i.fillText("total numTests: "+e.accNumTests,70,30)}}function r(e){p=l.DECONFLICTOR_SHOW_OUTLINES,d=l.DECONFLICTOR_SHOW_GRID,(p||d)&&(null==c&&(c=document.createElement("canvas"),c.setAttribute("id","canvas2d"),e.surface.parentElement.style.position="relative",e.surface.parentElement.appendChild(c)),c.setAttribute("width",e.width+"px"),c.setAttribute("height",e.height+"px"),c.setAttribute("style","position:absolute;left:0px;top:0px;display:block;pointer-events:none;"),s=c.getContext("2d"),s.clearRect(0,0,e.width,e.height),s.font="8px Arial")}function o(e,t){if(p){var i=c.height,a=s;a.beginPath(),a.lineWidth=1,a.strokeStyle=t,a.moveTo(e[0][0],i-e[0][1]);for(var l=1;4>l;l++)a.lineTo(e[l][0],i-e[l][1]),a.stroke();a.lineTo(e[0][0],i-e[0][1]),a.stroke(),a.closePath()}}Object.defineProperty(t,"__esModule",{value:!0});var c,s,u=a.vec2d,p=!1,d=!1;t.drawAccelerationStruct=n,t.prepare=r,t.drawPoly=o});