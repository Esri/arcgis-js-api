// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","./createHTML/CommandMode","../../PlayerCommands","./supportClasses/ProgressSteps","../../core/supportClasses/images/ImageDataHolder","../supportClasses/GEUtil","dojo/i18n!esri/nls/jsapi"],(function(e,r,t,n,i,a,s,o,l,u,c){var g,p,m,_,h;return c=c.geoenrichment.dijit.ReportPlayer.ReportPlayer,r(null,{id:s.HTML,errorMessage:c.exportInfographicError,exportMapErrorMessage:c.exportMapError,_player:null,_saveFiles:!0,_stopPrintableContainer:!0,_printableContainer:null,_mode:a.SVG_IN_HTML,_requestSizeLimit:0,_mergePageIndexes:!0,_convertUrlImages:!1,_hideUrlImages:!1,_replaceImagesWithItemResources:!1,_replaceMapsWithJson:!1,_currentProgressBack:null,execute:function(r,s,c){var d,f=this;return(d=new n,e(["dijit/Dialog","./createHTML/HTMLToSVGBuilder","./createHTML/HTMLStringBuilder","esri/dijit/geoenrichment/utils/FileUtil","./mapToImage/MapToImageUtil"],(function(e,r,t,n,i){g=e,p=r,m=t,_=n,h=i,d.resolve()})),d.promise).then(function(){var e,n;this._player=r,r.isPlayerOnServer&&(this._requestSizeLimit=0),this._currentProgressBack=c;var g={svgInHtmlString:null,svgStrings:null,documentOptions:null,additionalFiles:null};return i(function(){e=s.printableContainer,f._printableContainer=e,h.enableCaching();var t=f._replaceMapsWithJson&&u.getClient().hasCapability("FormatInfographicsMaps");return i(h.replaceMapWithImage(r,{replaceWithJson:t,saveImagesAsDataUrl:!t,printMapTaskUrl:s.printMapTaskUrl}),(function(e){n=e,h.clearCaching(),f._stepFinished(o.REPLACE_MAPS)}))}(),(function(){if(e)return i(m.buildHtmlStringForPlayer(e,t.mixin({mergePageIndexes:f._mergePageIndexes},s.pageNumerationInfo)),(function(t){if(t.domString){f._stepFinished(o.PREPARE_DOM);var n=r.getReportTitle(),c=f._convertUrlImages||!u.getClient().hasCapability("FormatInfographicsImageUrls"),m=f._replaceImagesWithItemResources&&u.getClient().hasCapability("FormatInfographicsImageUrls"),h=function(e,r){f._stepFinished(o.RENDER_PAGE,e+1,r)},d=function(e){var t=l.findFileNameByData(e),n=r.getReportData().reportObject;return t&&n.templateData&&n.templateData.getItemResourceUrl(t,!0)};g.documentOptions=e.getDocumentOptions();var S,v=f._mode;switch(s.returnAsHtmlText&&(v=a.SVG_IN_HTML),s.returnAsSvgText&&(v=a.SVG),v){case a.SVG:return S=n+".svg",i(p.htmlToSvg(t.domString,e.getFitParams(),f._requestSizeLimit,h,c,f._hideUrlImages,m&&d),(function(e){return g.svgStrings=e,I(e[0],S)}));case a.SVG_IN_HTML:return function(){var r=n+".html";return i(p.htmlToSvgInHtml(t.domString,n,e.getFitParams(),f._requestSizeLimit,h,c,f._hideUrlImages,m&&d),(function(e){return g.svgInHtmlString=e,I(e,r)}))}()}}function I(e,r){if(!s.returnAsHtmlText&&!s.returnAsSvgText&&f._saveFiles&&e)return f._confirmSaveFile(r,(function(){return _.saveTextFile(e,r)}))}}))})).otherwise((function(e){return!s.skipErrorNotification&&f._handleError(e)})).always((function(){return i(i(n&&n.undo(),(function(){return i(f._stopPrintableContainer&&e&&e.stop(),(function(e){return f._stepFinished(o.UNSET_LAYOUT),e}))})),(function(){return n&&n.errors.length?(!s.skipErrorNotification&&f._handleExportMapError(n.errors[0]),null):s.returnAsHtmlText?g.svgInHtmlString:s.returnAsSvgText?g.svgStrings:g}))}))}.bind(this))},_stepFinished:function(e,r,t){if(this._currentProgressBack){var n=0;switch(e){case o.REPLACE_MAPS:n=10;break;case o.PREPARE_DOM:n=20;break;case o.RENDER_PAGE:n=20+70*r/t;break;case o.UNSET_LAYOUT:n=100}this._currentProgressBack(n/100)}},_handleError:function(e){console.log(e),new g({title:"Error",content:this.errorMessage}).show()},_handleExportMapError:function(e){console.log(e),new g({title:"Error",content:this.exportMapErrorMessage}).show()},_confirmSaveFile:function(e,r,t){return r()}})}));