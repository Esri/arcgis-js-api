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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../support/debugFlags"],function(e,t,i,n){function l(e,t){if(u&&c){for(var i=c,n=0,l=0;l<e.accBinsNumX;l++)for(var a=0;a<e.accBinsNumY;a++){var r=e.accBins[l][e.accBinsNumY-1-a];n+=r.length;var s=l*e.accBinsSizeX,p=(l+1)*e.accBinsSizeX,h=a*e.accBinsSizeY,d=(a+1)*e.accBinsSizeY;i.fillText(r.length.toFixed(),s+5,h+15),o(s,p,h,d,"blue")}i.fillText("total totalShownLabels: "+n,70,40),i.fillText("total visible labels: "+t.length,70,50),i.fillText("total numTests: "+e.accNumTests,70,30)}}function a(e){if(p=n.DECONFLICTOR_SHOW_OUTLINES,u=n.DECONFLICTOR_SHOW_GRID,p||u){null==s&&(s=document.createElement("canvas"),s.setAttribute("id","canvas2d"),e.surface.parentElement.style.position="relative",e.surface.parentElement.appendChild(s));var t=e.width*e.pixelRatio,i=e.height*e.pixelRatio;s.setAttribute("width",t+"px"),s.setAttribute("height",i+"px"),s.setAttribute("style","position:absolute;left:0px;top:0px;display:block;pointer-events:none;width:"+e.width+"px;height:"+e.height+"px"),c=s.getContext("2d"),c.clearRect(0,0,e.width,e.height),c.font="12px Arial"}}function o(e,t,i,n,l){var a=s.height,o=c;o.beginPath(),o.lineWidth=1,o.strokeStyle=l,o.moveTo(e,a-i),o.lineTo(t,a-i),o.stroke(),o.lineTo(t,a-n),o.stroke(),o.lineTo(t,a-i),o.stroke(),o.lineTo(e,a-i),o.stroke(),o.lineTo(e,a-i),o.stroke(),o.closePath()}function r(e,t){p&&o(e.xMin,e.xMax,e.yMin,e.yMax,t)}Object.defineProperty(t,"__esModule",{value:!0});var s,c,p=!1,u=!1;t.drawAccelerationStruct=l,t.prepare=a,t.drawPoly=r});