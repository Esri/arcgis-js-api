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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/promise/all","dojo/when","dijit/Dialog","./createHTML/HTMLToSVGBuilder","./createHTML/HTMLStringBuilder","./createHTML/CommandMode","esri/dijit/geoenrichment/utils/FileUtil","./supportClasses/MapToImageUtil","./supportClasses/PlayerCommands","./supportClasses/ProgressSteps","dojo/i18n!../../../../../nls/jsapi"],function(r,e,t,n,i,o,s,a,u,l,c,p,g){return g=g.geoenrichment.dijit.ReportPlayer.ReportPlayer,r(null,{id:c.HTML,errorMessage:g.exportInfographicError,exportMapErrorMessage:g.exportMapError,_player:null,_saveFiles:!0,_stopPrintableContainer:!0,_printableContainer:null,_mode:a.SVG_IN_HTML,_requestSizeLimit:0,_mergePageIndexes:!0,_currentProgressBack:null,execute:function(r,e,i){function c(){function i(){return t([d.getFitParams(),d.getHeaderFooterParams(),d.getDocumentOptions()]).then(function(r){return{fitParams:r[0],headerFooterParams:r[1],documentOptions:r[2]}})}return d=e.printableContainer,_._printableContainer=d,n(l.replaceMapWithImage(r,{saveImagesAsBase64:!0,printMapTaskUrl:e.printMapTaskUrl,allAreas:d.needExportAllAreas()}),function(r){return f=r,_._stepFinished(p.REPLACE_MAPS),i()})}function g(){return n(f&&f.undo(),function(){return n(_._stopPrintableContainer&&d&&d.stop(),function(r){return _._stepFinished(p.UNSET_LAYOUT),r})})}function m(r){e.skipErrorNotification||_._handleError(r)}var _=this;this._player=r;var d,f;this._currentProgressBack=i;var h={svgInHtmlString:null,svgStrings:null,documentOptions:null};return n(c(),function(t){return d?n(s.buildHtmlStringForPlayer(d,t.headerFooterParams,t.documentOptions,_._mergePageIndexes),function(i){function s(r,t){return!e.returnAsHtmlText&&!e.returnAsSvgText&&_._saveFiles&&r?_._confirmSaveFile(t,function(){return u.saveTextFile(r,t)}):void 0}function l(){var r=g+".svg";return n(o.htmlToSvg(i.domString,t.fitParams,_._requestSizeLimit,m),function(e){return h.svgStrings=e,s(e[0],r)})}function c(){var r=g+".html";return n(o.htmlToSvgInHtml(i.domString,g,t.fitParams,_._requestSizeLimit,m),function(e){return h.svgInHtmlString=e,s(e,r)})}if(i.domString){_._stepFinished(p.PREPARE_DOM);var g=r.getReportTitle(),m=function(r,e){_._stepFinished(p.RENDER_PAGE,r+1,e)};h.documentOptions=t.documentOptions;var d=_._mode;switch(e.returnAsHtmlText&&(d=a.SVG_IN_HTML),e.returnAsSvgText&&(d=a.SVG),d){case a.SVG:return l(t);case a.SVG_IN_HTML:return c(t)}}}):void 0}).otherwise(m).always(function(){return n(g(),function(){return f&&f.errors.length&&!e.skipErrorNotification&&_._handleExportMapError(f.errors[0]),e.returnAsHtmlText?h.svgInHtmlString:e.returnAsSvgText?h.svgStrings:h})})},_stepFinished:function(r,e,t){if(this._currentProgressBack){var n=0;switch(r){case p.REPLACE_MAPS:n=10;break;case p.PREPARE_DOM:n=20;break;case p.RENDER_PAGE:n=20+70*e/t;break;case p.UNSET_LAYOUT:n=100}this._currentProgressBack(n/100)}},_handleError:function(r){console.log(r),new i({title:"Error",content:this.errorMessage}).show()},_handleExportMapError:function(r){console.log(r),new i({title:"Error",content:this.exportMapErrorMessage}).show()},_confirmSaveFile:function(r,e){return e()}})});