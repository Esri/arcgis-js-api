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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/promise/all","dojo/when","dijit/Dialog","./createHTML/HTMLToSVGBuilder","./createHTML/HTMLStringBuilder","./createHTML/CommandMode","esri/dijit/geoenrichment/utils/FileUtil","./mapToImage/MapToImageUtil","../../PlayerCommands","./supportClasses/ProgressSteps","dojo/i18n!esri/nls/jsapi"],function(r,e,t,n,i,o,s,a,l,u,c,g,p){return p=p.geoenrichment.dijit.ReportPlayer.ReportPlayer,r(null,{id:c.HTML,errorMessage:p.exportInfographicError,exportMapErrorMessage:p.exportMapError,_player:null,_saveFiles:!0,_stopPrintableContainer:!0,_printableContainer:null,_mode:a.SVG_IN_HTML,_requestSizeLimit:0,_mergePageIndexes:!0,_currentProgressBack:null,execute:function(r,e,i){function c(){return n(d&&d.undo(),function(){return n(m._stopPrintableContainer&&_&&_.stop(),function(r){return m._stepFinished(g.UNSET_LAYOUT),r})})}function p(r){if(!e.skipErrorNotification)return m._handleError(r)}var m=this;this._player=r;var _,d;this._currentProgressBack=i;var f={svgInHtmlString:null,svgStrings:null,documentOptions:null,additionalFiles:null};return n(function(){function i(){return t([_.getFitParams(),_.getHeaderFooterParams(),_.getDocumentOptions()]).then(function(r){return{fitParams:r[0],headerFooterParams:r[1],documentOptions:r[2]}})}return _=e.printableContainer,m._printableContainer=_,u.enableCaching(),n(u.replaceMapWithImage(r,{saveImagesAsDataUrl:!0,printMapTaskUrl:e.printMapTaskUrl,allAreas:_.needExportAllAreas()}),function(r){return d=r,u.clearCaching(),m._stepFinished(g.REPLACE_MAPS),i()})}(),function(t){if(_)return n(s.buildHtmlStringForPlayer(_,t.headerFooterParams,t.documentOptions,m._mergePageIndexes),function(i){function s(r,t){if(!e.returnAsHtmlText&&!e.returnAsSvgText&&m._saveFiles&&r)return m._confirmSaveFile(t,function(){return l.saveTextFile(r,t)})}if(i.domString){m._stepFinished(g.PREPARE_DOM);var u=r.getReportTitle(),c=function(r,e){m._stepFinished(g.RENDER_PAGE,r+1,e)};f.documentOptions=t.documentOptions;var p=m._mode;switch(e.returnAsHtmlText&&(p=a.SVG_IN_HTML),e.returnAsSvgText&&(p=a.SVG),p){case a.SVG:return function(){var r=u+".svg";return n(o.htmlToSvg(i.domString,t.fitParams,m._requestSizeLimit,c),function(e){return f.svgStrings=e,s(e[0],r)})}();case a.SVG_IN_HTML:return function(){var r=u+".html";return n(o.htmlToSvgInHtml(i.domString,u,t.fitParams,m._requestSizeLimit,c),function(e){return f.svgInHtmlString=e,s(e,r)})}()}}})}).otherwise(p).always(function(){return n(c(),function(){return d&&d.errors.length?(!e.skipErrorNotification&&m._handleExportMapError(d.errors[0]),null):e.returnAsHtmlText?f.svgInHtmlString:e.returnAsSvgText?f.svgStrings:f})})},_stepFinished:function(r,e,t){if(this._currentProgressBack){var n=0;switch(r){case g.REPLACE_MAPS:n=10;break;case g.PREPARE_DOM:n=20;break;case g.RENDER_PAGE:n=20+70*e/t;break;case g.UNSET_LAYOUT:n=100}this._currentProgressBack(n/100)}},_handleError:function(r){console.log(r),new i({title:"Error",content:this.errorMessage}).show()},_handleExportMapError:function(r){console.log(r),new i({title:"Error",content:this.exportMapErrorMessage}).show()},_confirmSaveFile:function(r,e,t){return e()}})});