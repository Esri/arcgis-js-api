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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["require","dojo/_base/declare","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","./createHTML/CommandMode","../../PlayerCommands","./supportClasses/ProgressSteps","../../core/supportClasses/images/ImageDataHolder","../supportClasses/GEUtil","dojo/i18n!esri/nls/jsapi"],(function(e,r,t,n,i,a,s,o,l,u){var c,g,p,m,_;return u=u.geoenrichment.dijit.ReportPlayer.ReportPlayer,r(null,{id:a.HTML,errorMessage:u.exportInfographicError,exportMapErrorMessage:u.exportMapError,_player:null,_saveFiles:!0,_stopPrintableContainer:!0,_printableContainer:null,_mode:i.SVG_IN_HTML,_requestSizeLimit:0,_mergePageIndexes:!0,_convertUrlImages:!1,_hideUrlImages:!1,_replaceImagesWithItemResources:!1,_replaceMapsWithJson:!1,_currentProgressBack:null,execute:function(r,a,u){var h,d=this;return(h=new t,e(["dijit/Dialog","./createHTML/HTMLToSVGBuilder","./createHTML/HTMLStringBuilder","esri/dijit/geoenrichment/utils/FileUtil","./mapToImage/MapToImageUtil"],(function(e,r,t,n,i){c=e,g=r,p=t,m=n,_=i,h.resolve()})),h.promise).then(function(){var e,t;this._player=r,this._currentProgressBack=u;var c={svgInHtmlString:null,svgStrings:null,documentOptions:null,additionalFiles:null};return n(function(){e=a.printableContainer,d._printableContainer=e,_.enableCaching();var i=d._replaceMapsWithJson&&(r.isPlayerOnServer||l.getClient().hasCapability("FormatInfographicsMaps"));return n(_.replaceMapWithImage(r,{replaceWithJson:i,saveImagesAsDataUrl:!i,printMapTaskUrl:a.printMapTaskUrl}),(function(e){t=e,_.clearCaching(),d._stepFinished(s.REPLACE_MAPS)}))}(),(function(){if(e)return n(p.buildHtmlStringForPlayer(e,d._mergePageIndexes),(function(t){if(t.domString){d._stepFinished(s.PREPARE_DOM);var u=r.getReportTitle(),p=d._convertUrlImages||!l.getClient().hasCapability("FormatInfographicsImageUrls"),_=d._replaceImagesWithItemResources&&l.getClient().hasCapability("FormatInfographicsImageUrls"),h=function(e,r){d._stepFinished(s.RENDER_PAGE,e+1,r)},f=function(e){var t=o.findFileNameByData(e),n=r.getReportData().reportObject;return t&&n.templateData&&n.templateData.getItemResourceUrl(t,!0)};c.documentOptions=e.getDocumentOptions();var S,v=d._mode;switch(a.returnAsHtmlText&&(v=i.SVG_IN_HTML),a.returnAsSvgText&&(v=i.SVG),v){case i.SVG:return S=u+".svg",n(g.htmlToSvg(t.domString,e.getFitParams(),d._requestSizeLimit,h,p,d._hideUrlImages,_&&f),(function(e){return c.svgStrings=e,E(e[0],S)}));case i.SVG_IN_HTML:return function(){var r=u+".html";return n(g.htmlToSvgInHtml(t.domString,u,e.getFitParams(),d._requestSizeLimit,h,p,d._hideUrlImages,_&&f),(function(e){return c.svgInHtmlString=e,E(e,r)}))}()}}function E(e,r){if(!a.returnAsHtmlText&&!a.returnAsSvgText&&d._saveFiles&&e)return d._confirmSaveFile(r,(function(){return m.saveTextFile(e,r)}))}}))})).otherwise((function(e){return!a.skipErrorNotification&&d._handleError(e)})).always((function(){return n(n(t&&t.undo(),(function(){return n(d._stopPrintableContainer&&e&&e.stop(),(function(e){return d._stepFinished(s.UNSET_LAYOUT),e}))})),(function(){return t&&t.errors.length?(!a.skipErrorNotification&&d._handleExportMapError(t.errors[0]),null):a.returnAsHtmlText?c.svgInHtmlString:a.returnAsSvgText?c.svgStrings:c}))}))}.bind(this))},_stepFinished:function(e,r,t){if(this._currentProgressBack){var n=0;switch(e){case s.REPLACE_MAPS:n=10;break;case s.PREPARE_DOM:n=20;break;case s.RENDER_PAGE:n=20+70*r/t;break;case s.UNSET_LAYOUT:n=100}this._currentProgressBack(n/100)}},_handleError:function(e){console.log(e),new c({title:"Error",content:this.errorMessage}).show()},_handleExportMapError:function(e){console.log(e),new c({title:"Error",content:this.exportMapErrorMessage}).show()},_confirmSaveFile:function(e,r,t){return r()}})}));