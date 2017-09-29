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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/promise/all","dojo/when","dijit/Dialog","./createHTML/HTMLToSVGBuilder","./createHTML/HTMLStringBuilder","./createHTML/CommandMode","esri/dijit/geoenrichment/utils/FileUtil","./supportClasses/MapToImageUtil","./supportClasses/PlayerCommands","dojo/i18n!../../../../../nls/jsapi"],function(r,e,t,n,o,i,a,s,u,l,c,m){return m=m.geoenrichment.dijit.ReportPlayer.ReportPlayer,r(null,{id:c.HTML,errorMessage:m.createHTMLError,exportMapErrorMessage:m.exportMapError,_saveFiles:!0,_stopPrintableContainer:!0,_printableContainer:null,_mode:s.SVG_IN_HTML,_requestSizeLimit:0,execute:function(r,e){function o(){function o(){return t([g.getFitParams(),g.getHeaderFooterParams(),g.getDocumentOptions()]).then(function(r){return{fitParams:r[0],headerFooterParams:r[1],documentOptions:r[2]}})}return g=e.printableContainer,d._printableContainer=g,n(l.replaceMapWithImage(r,{saveImagesAsBase64:!0,printMapTaskUrl:e.printMapTaskUrl}),function(r){return p=r,o()})}function c(){return n(p&&p.undo(),function(){return d._stopPrintableContainer&&g&&g.stop()})}function m(r){d._handleError(r)}var g,p,d=this,f={svgInHtmlString:null,svgStrings:null,documentOptions:null};return n(o(),function(t){return g?n(a.buildHtmlStringForPlayer(g,t.headerFooterParams,t.documentOptions),function(o){function a(r,t){return!e.returnAsHtmlText&&!e.returnAsSvgText&&d._saveFiles&&r?d._confirmSaveFile(t,function(){u.saveTextFile(r,t)}):void 0}function l(){var r=m+".svg";return n(i.htmlToSvg(o.domString,t.fitParams,d._requestSizeLimit),function(e){return f.svgStrings=e,a(e[0],r)})}function c(){var r=m+".html";return n(i.htmlToSvgInHtml(o.domString,m,t.fitParams,d._requestSizeLimit),function(e){return f.svgInHtmlString=e,a(e,r)})}if(o.domString){var m=r.getReportTitle();f.documentOptions=t.documentOptions;var g=d._mode;switch(e.returnAsHtmlText&&(g=s.SVG_IN_HTML),e.returnAsSvgText&&(g=s.SVG),g){case s.SVG:return l(t);case s.SVG_IN_HTML:return c(t)}}},m):void 0},m).always(function(){return n(c(),function(){return p&&p.errors.length&&d._handleExportMapError(p.errors[0]),e.returnAsHtmlText?f.svgInHtmlString:e.returnAsSvgText?f.svgStrings:f})})},_handleError:function(r){console.log(r),new o({title:"Error",content:this.errorMessage}).show()},_handleExportMapError:function(r){console.log(r),new o({title:"Error",content:this.exportMapErrorMessage}).show()},_confirmSaveFile:function(r,e){return e()}})});