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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/promise/all","./drawing/SVGDrawer","./Clipper","./VisualsCollector"],(function(e,n,r,t){return{processNode:function(n,r){var t={numIterations:0,lines:[],globalBoostIndex:0,promises:[]};return this._processNode(n,null,null,null,0,r,t),e(t.promises).then((function(){var e=[];return t.lines.forEach((function(n){var r=n.subLines;delete n.subLines,e.push(n),r&&r.forEach((function(n){e.push(n)}))})),e.sort((function(e,n){return e.stackIndex-n.stackIndex})),e}))},_processNode:function(e,s,i,o,a,d,l){var u=0;if("#comment"===e.nodeName)return u;var c,f=t.getNodeVisuals(e,o);if(!f)return u;function g(e,n){if(e)if(Array.isArray(e))e.forEach((function(e){g(e)}));else{if(n=n||1,e&&e.then){var r=l.lines.length;l.lines.push({text:"",stackIndex:++a,subLines:null}),l.promises.push(e.then((function(e){var n=l.lines[r];if(Array.isArray(e)){n.text=e[0],e.shift();var t=n.stackIndex;n.subLines=e.map((function(e){return{text:e,stackIndex:++t}}))}else n.text=e})))}else l.lines.push({text:e,stackIndex:++a});u+=n,a+=n-1}}if(f.style.isRelAbs&&(l.globalBoostIndex+=1e6,a=l.globalBoostIndex),"svg"===e.nodeName)return g(n.drawSVG(e,f,s)),u;if("IMG"===e.nodeName)return g(n.drawImage(e,f,s),100),u;f.style.getBackground().image&&"none"!==f.style.getBackground().image&&g(n.drawBackgroundImage(f,(c=f.style).getBorder().radius||"auto"===c.getBackground().size||c.getBackground().repeatX||c.getBackground().repeatY?r.addClipping(f,d.definitions):s),100),g(n.drawRect(f,s)),g(n.drawBorder(f,s),4);if(e.childNodes.length){var p;if("hidden"===f.style.overflow){p=d.clipFunc&&d.clipFunc(e);var h=i||d.useClipping||p;s=h&&r.addClipping(f,d.definitions,s)||s}for(var m=0,x=e.childNodes.length;m<x;m++){var v=e.childNodes[m];if("#text"===v.nodeName)g(n.drawText(v,e,f,s));else{var I=this._processNode(v,s,p,f,a,d,l);a+=I}}}return u}}}));