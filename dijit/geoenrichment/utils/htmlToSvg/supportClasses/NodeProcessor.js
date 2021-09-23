// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/promise/all","./drawing/SVGDrawer","./Clipper","./VisualsCollector"],(function(e,n,r,t){return{processNode:function(n,r){var t={numIterations:0,lines:[],globalBoostIndex:0,promises:[]};return this._processNode(n,null,null,null,0,r,t),e(t.promises).then((function(){var e=[];return t.lines.forEach((function(n){var r=n.subLines;delete n.subLines,e.push(n),r&&r.forEach((function(n){e.push(n)}))})),e.sort((function(e,n){return e.stackIndex-n.stackIndex})),e}))},_processNode:function(e,i,s,a,o,d,l){var u=0;if("#comment"===e.nodeName)return u;var c=t.getNodeVisuals(e,a);if(!c)return u;function f(e,n){if(e)if(Array.isArray(e))e.forEach((function(e){f(e)}));else{if(n=n||1,e&&e.then){var r=l.lines.length;l.lines.push({text:"",stackIndex:++o,subLines:null}),l.promises.push(e.then((function(e){var n=l.lines[r];if(Array.isArray(e)){n.text=e[0],e.shift();var t=n.stackIndex;n.subLines=e.map((function(e){return{text:e,stackIndex:++t}}))}else n.text=e})))}else l.lines.push({text:e,stackIndex:++o});u+=n,o+=n-1}}if(c.style.isRelAbs&&(l.globalBoostIndex+=1e6,o=l.globalBoostIndex),"svg"===e.nodeName)return f(n.drawSVG(e,c,i)),u;if("IMG"===e.nodeName)return f(n.drawImage(e,c,i,d.fitScale),100),u;var g;if(c.style.getBackground().image&&"none"!==c.style.getBackground().image&&f(n.drawBackgroundImage(c,(g=c.style).getBorder().radius||"auto"===g.getBackground().size||g.getBackground().repeatX||g.getBackground().repeatY?r.addClipping(c,d.definitions):i),100),f(n.drawRect(c,i)),f(n.drawBorder(c,i),4),e.childNodes.length){var p;if("hidden"===c.style.overflow){p=d.clipFunc&&d.clipFunc(e);var h=s||d.useClipping||p;i=h&&r.addClipping(c,d.definitions,i)||i}for(var m=0,v=e.childNodes.length;m<v;m++){var x=e.childNodes[m];if("#text"===x.nodeName)f(n.drawText(x,e,c,i));else{var I=this._processNode(x,i,p,c,o,d,l);o+=I}}}return u}}}));