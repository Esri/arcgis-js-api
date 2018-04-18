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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/Deferred","dojo/when","dojo/dom-construct","dojo/dom-style","dojo/sniff","./CreateHTMLCommand","../../PlayerCommands","./supportClasses/ProgressSteps","./createHTML/CommandMode","esri/dijit/geoenrichment/utils/DelayUtil","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/SVGUtil","esri/dijit/geoenrichment/utils/async/AsyncQueue","./supportClasses/ImageSaveUtil","./createHTML/CSSFilesLoader","dojo/i18n!../../../../../nls/jsapi"],function(e,t,n,r,i,o,s,a,l,c,u,d,g,p,m,h,f){f=f.geoenrichment.dijit.ReportPlayer.ReportPlayer;var v=e(null,{_printNode:null,setUpDocument:function(){return this._printNode=r.create("div",{style:"display: inline-block; position: absolute; left: 0px; top: 0px; z-index: -1000;"},document.body)},unsetDocument:function(){r.destroy(this._printNode)}}),w={printImages:function(e,t,r,o){var s=[];return p.executeFunctions(e.map(function(e){return e=e.replace(/&nbsp;|&#160;/g," "),function(){t.innerHTML=e;var a=t.children[0];i.set(a,"width",3*i.get(a,"width")+"px"),i.set(a,"height",3*i.get(a,"height")+"px");var l=i.get(a,"width"),c=i.get(a,"height");return u.delay().then(function(){return n(r(t,l,c),function(e){var t=e.toDataURL("image/png");s.push(t),o(s.length-1)})})}}),0).then(function(){return s})}};return e(s,{id:a.IMAGE,label:f.createImageCommandLabel,errorMessage:f.createImageError,_saveFiles:!1,_stopPrintableContainer:!1,_mode:c.SVG,_mergePageIndexes:!1,execute:function(e,t){var r=this;return n(this.inherited(arguments),function(i){function o(e){t.skipErrorNotification||r._handleError(e)}if(i.svgStrings){var s=new v,a=s.setUpDocument(),c=i.svgStrings.length,u=function(e){r._stepFinished(l.RENDER_IMAGE,e+1,c)};return n(h.loadCssFontFiles(),function(){return w.printImages(i.svgStrings,a,r._nodeToCanvasFunc.bind(r),u).then(function(n){return m.saveImages(n,{reportTitle:e.getReportTitle(),analysisAreas:e.getAnalysisAreas(),allAreas:r._printableContainer.needExportAllAreas(),numPages:r._printableContainer.getNumberOfPages(),confirmSaveFile:r._confirmSaveFile,skipSavingFile:t.skipSavingFile,saveMultipleImages:r._saveMultipleImages&&r._saveMultipleImages.bind(r)})}).otherwise(o).always(function(e){return n(s.unsetDocument(),function(){return n(r._printableContainer&&r._printableContainer.stop(),function(){return e})})})})}})},_saveMultipleImages:null,_stepFinished:function(e,t,n){if(this._currentProgressBack){var r=0;switch(e){case l.REPLACE_MAPS:r=10;break;case l.PREPARE_DOM:r=20;break;case l.RENDER_PAGE:r=20+40*t/n;break;case l.UNSET_LAYOUT:r=70;break;case l.RENDER_IMAGE:r=70+30*t/n}this._currentProgressBack(r/100)}},_nodeToCanvasFunc:function(e,n,i){var o=h.loadCssFontFiles(),s=document.createElement("canvas");s.width=n,s.height=i;var a=s.getContext("2d"),l=e.children[0];o.forEach(function(e){var t=document.createElementNS("http://www.w3.org/2000/svg","defs"),n=document.createElementNS("http://www.w3.org/2000/svg","style");n.innerHTML=e,t.appendChild(n),l.insertBefore(t,l.firstElementChild)});var c=window.URL||window.webkitURL||window,u=new Image;u.width=n,u.height=i;var d=new Blob([g.getOuterHTML(l)],{type:"image/svg+xml"}),p=c.createObjectURL(d),m=new t;return u.onload=function(){a.drawImage(u,0,0,n,i),c.revokeObjectURL(p),r.destroy(u),m.resolve(s)},u.onerror=function(e){r.destroy(u),m.reject(e)},r.place(u,document.body),u.src=p,m.promise},isBrowserSupported:function(){return!(o("ie")||o("trident"))}})});