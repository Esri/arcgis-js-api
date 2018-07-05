// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../support/debugFlags"],function(e,t,i,n){function l(e,t){if(p&&c){for(var i=c,n=0,l=0;l<e.accBinsNumX;l++)for(var o=0;o<e.accBinsNumY;o++){var r=e.accBins[l][o];n+=r.length;var s=l*e.accBinsSizeX,u=(l+1)*e.accBinsSizeX,d=o*e.accBinsSizeY,h=(o+1)*e.accBinsSizeY;i.fillText(r.length.toFixed(),s+5,d+15),a(s,u,d,h,"blue")}i.fillText("total totalShownLabels: "+n,70,40),i.fillText("total visible labels: "+t.length,70,50),i.fillText("total numTests: "+e.accNumTests,70,30)}}function o(e){u=n.DECONFLICTOR_SHOW_OUTLINES,p=n.DECONFLICTOR_SHOW_GRID,(u||p)&&(null==s&&(s=document.createElement("canvas"),s.setAttribute("id","canvas2d"),e.surface.parentElement.style.position="relative",e.surface.parentElement.appendChild(s)),s.setAttribute("width",e.width+"px"),s.setAttribute("height",e.height+"px"),s.setAttribute("style","position:absolute;left:0px;top:0px;display:block;pointer-events:none;"),c=s.getContext("2d"),c.clearRect(0,0,e.width,e.height),c.font="8px Arial")}function a(e,t,i,n,l){var o=s.height,a=c;a.beginPath(),a.lineWidth=1,a.strokeStyle=l,a.moveTo(e,o-i),a.lineTo(t,o-i),a.stroke(),a.lineTo(t,o-n),a.stroke(),a.lineTo(t,o-i),a.stroke(),a.lineTo(e,o-i),a.stroke(),a.lineTo(e,o-i),a.stroke(),a.closePath()}function r(e,t){u&&a(e.xMin,e.xMax,e.yMin,e.yMax,t)}Object.defineProperty(t,"__esModule",{value:!0});var s,c,u=!1,p=!1;t.drawAccelerationStruct=l,t.prepare=o,t.drawPoly=r});