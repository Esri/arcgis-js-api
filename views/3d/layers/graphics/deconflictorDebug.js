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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../support/debugFlags"],function(e,t,i,n){function l(e,t){if(d&&p){r();for(var i=p,n=0,l=0;l<e.accBinsNumX;l++)for(var o=0;o<e.accBinsNumY;o++){var a=e.accBins[l][e.accBinsNumY-1-o];n+=a.length;var c=l*e.accBinsSizeX,u=(l+1)*e.accBinsSizeX,h=o*e.accBinsSizeY,f=(o+1)*e.accBinsSizeY;i.fillText(a.length.toFixed(),c+5,h+15),s(c,u,h,f,"blue")}i.fillText("total totalShownLabels: "+n,70,40),i.fillText("total visible labels: "+t.length,70,50),i.fillText("total numTests: "+e.accNumTests,70,30)}}function o(e){if(f=n.DECONFLICTOR_SHOW_OUTLINES,x=n.DECONFLICTOR_SHOW_OUTLINES_INVISIBLE,h=f||x,d=n.DECONFLICTOR_SHOW_GRID,T=null,!h&&!d)return void(u&&(u.parentElement.removeChild(u),u=null));T=function(){return a(e)}}function r(){T&&(T(),T=null)}function a(e){null==u&&(u=document.createElement("canvas"),u.setAttribute("id","canvas2d"),e.surface.parentElement.style.position="relative",e.surface.parentElement.appendChild(u));var t=e.width*e.pixelRatio,i=e.height*e.pixelRatio;u.setAttribute("width",t+"px"),u.setAttribute("height",i+"px"),u.setAttribute("style","position:absolute;left:0px;top:0px;display:block;pointer-events:none;width:"+e.width+"px;height:"+e.height+"px"),p=u.getContext("2d"),p.clearRect(0,0,e.width,e.height),p.font="12px Arial"}function s(e,t,i,n,l){r();var o=u.height,a=p;a.beginPath(),a.lineWidth=1,a.strokeStyle=l,a.moveTo(e,o-i),a.lineTo(t,o-i),a.stroke(),a.lineTo(t,o-n),a.stroke(),a.lineTo(t,o-i),a.stroke(),a.lineTo(e,o-i),a.stroke(),a.lineTo(e,o-i),a.stroke(),a.closePath()}function c(e,t){h&&(t&&f||!t&&x)&&s(e.xMin,e.xMax,e.yMin,e.yMax,t?"green":"red")}Object.defineProperty(t,"__esModule",{value:!0});var u,p,h=!1,d=!1,f=!1,x=!1,T=null;t.drawAccelerationStruct=l,t.prepare=o,t.drawPoly=c});