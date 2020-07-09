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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../support/debugFlags"],(function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var n,l,a=!1,o=!1,r=!1,s=!1,c=null;function u(){c&&(c(),c=null)}function h(e,t,i,a,o){u();var r=n.height,s=l;s.beginPath(),s.lineWidth=1,s.strokeStyle=o,s.moveTo(e,r-i),s.lineTo(t,r-i),s.stroke(),s.lineTo(t,r-a),s.stroke(),s.lineTo(t,r-i),s.stroke(),s.lineTo(e,r-i),s.stroke(),s.lineTo(e,r-i),s.stroke(),s.closePath()}t.drawAccelerationStruct=function(e,t){if(o&&l){u();for(var i=l,n=0,a=0;a<e.accBinsNumX;a++)for(var r=0;r<e.accBinsNumY;r++){var s=e.accBins[a][e.accBinsNumY-1-r];n+=s.length;var c=a*e.accBinsSizeX,p=(a+1)*e.accBinsSizeX,d=r*e.accBinsSizeY,f=(r+1)*e.accBinsSizeY;i.fillText(s.length.toFixed(),c+5,d+15),h(c,p,d,f,"blue")}i.fillText("total totalShownLabels: "+n,70,40),i.fillText("total visible labels: "+t.size,70,50),i.fillText("total numTests: "+e.accNumTests,70,30)}},t.prepare=function(e){r=i.DECONFLICTOR_SHOW_VISIBLE,s=i.DECONFLICTOR_SHOW_INVISIBLE,a=r||s,o=i.DECONFLICTOR_SHOW_GRID,c=null,a||o?c=function(){return function(e){null==n&&((n=document.createElement("canvas")).setAttribute("id","canvas2d"),e.surface.parentElement.style.position="relative",e.surface.parentElement.appendChild(n));var t=e.width*e.pixelRatio,i=e.height*e.pixelRatio;n.setAttribute("width",t+"px"),n.setAttribute("height",i+"px"),n.setAttribute("style","position:absolute;left:0px;top:0px;display:block;pointer-events:none;width:"+e.width+"px;height:"+e.height+"px"),(l=n.getContext("2d")).clearRect(0,0,e.width,e.height),l.font="12px Arial"}(e)}:n&&(n.parentElement.removeChild(n),n=null)},t.drawPoly=function(e,t){a&&(t&&r||!t&&s)&&h(e.aabr[0],e.aabr[2],e.aabr[1],e.aabr[3],t?"green":"red")}}));