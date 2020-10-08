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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../support/debugFlags"],(function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.drawPoly=t.prepare=t.drawAccelerationStruct=void 0;var n,l,a=!1,r=!1,o=!1,c=!1,s=null;function u(){s&&(s(),s=null)}function p(e,t,i,a,r){u();var o=n.height,c=l;c.beginPath(),c.lineWidth=1,c.strokeStyle=r,c.moveTo(e,o-i),c.lineTo(t,o-i),c.stroke(),c.lineTo(t,o-a),c.stroke(),c.lineTo(t,o-i),c.stroke(),c.lineTo(e,o-i),c.stroke(),c.lineTo(e,o-i),c.stroke(),c.closePath()}t.drawAccelerationStruct=function(e,t){if(r&&l){u();for(var i=l,n=0,a=0;a<e.accBinsNumX;a++)for(var o=0;o<e.accBinsNumY;o++){var c=e.accBins[a][e.accBinsNumY-1-o];n+=c.length;var s=a*e.accBinsSizeX,d=(a+1)*e.accBinsSizeX,h=o*e.accBinsSizeY,f=(o+1)*e.accBinsSizeY;i.fillText(c.length.toFixed(),s+5,h+15),p(s,d,h,f,"blue")}i.fillText("total totalShownLabels: "+n,70,40),i.fillText("total visible labels: "+t.size,70,50),i.fillText("total numTests: "+e.accNumTests,70,30)}},t.prepare=function(e){o=i.DECONFLICTOR_SHOW_VISIBLE,c=i.DECONFLICTOR_SHOW_INVISIBLE,a=o||c,r=i.DECONFLICTOR_SHOW_GRID,s=null,a||r?s=function(){return function(e){null==n&&((n=document.createElement("canvas")).setAttribute("id","canvas2d"),e.surface.parentElement.style.position="relative",e.surface.parentElement.appendChild(n));var t=e.width*e.pixelRatio,i=e.height*e.pixelRatio;n.setAttribute("width",t+"px"),n.setAttribute("height",i+"px"),n.setAttribute("style","position:absolute;left:0px;top:0px;display:block;pointer-events:none;width:"+e.width+"px;height:"+e.height+"px"),(l=n.getContext("2d")).clearRect(0,0,e.width,e.height),l.font="12px Arial"}(e)}:n&&(n.parentElement.removeChild(n),n=null)},t.drawPoly=function(e,t){a&&(t&&o||!t&&c)&&p(e.aabr[0],e.aabr[2],e.aabr[1],e.aabr[3],t?"green":"red")}}));