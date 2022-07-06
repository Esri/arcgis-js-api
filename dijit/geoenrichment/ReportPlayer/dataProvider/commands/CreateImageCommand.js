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

define(["require","dojo/_base/declare","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","dojo/sniff","./CreateHTMLCommand","../../PlayerCommands","./supportClasses/ProgressSteps","./createHTML/CommandMode","esri/dijit/geoenrichment/ReportPlayer/config","dojo/i18n!esri/nls/jsapi"],(function(e,i,n,r,t,a,s,o,l,c,u){u=u.geoenrichment.dijit.ReportPlayer.ReportPlayer;var g,d,m,v;function f(){var i=new n;return e(["./imageUtils/ImageSaveUtil","./imageUtils/NodeToCanvasUtil","./imageUtils/ImagePrintUtil","./createHTML/CSSFilesLoader"],(function(e,n,r,t){g=e,d=n,m=r,v=t,i.resolve()})),i.promise}return i(a,{id:s.IMAGE,label:u.createImageCommandLabel,errorMessage:u.createImageError,_saveFiles:!1,_stopPrintableContainer:!1,_mode:l.SVG,_mergePageIndexes:!1,_convertUrlImages:!0,_hideUrlImages:!0,execute:function(e,i){var n=this,t=this.inherited(arguments);return f().then(function(){return r(t,(function(t){if(t&&t.svgStrings){var a=t.svgStrings.length,s=function(e){n._stepFinished(o.RENDER_IMAGE,e+1,a)};return t.svgStrings=n._preProcessSVGStrings(t.svgStrings),r(v.loadCssFontFiles(),(function(){return m.printImages({svgStrings:t.svgStrings,nodeToCanvasFunc:n._nodeToCanvasFunc.bind(n),onRenderImage:s,scale:3}).then((function(r){return g.saveImages(r,{fileName:i.fileName,reportTitle:e.getReportTitle(),analysisAreas:e.getAnalysisAreas(),numPages:n._printableContainer.getNumberOfPages(),confirmSaveFile:n._confirmSaveFile,skipSavingFile:i.skipSavingFile||c.createImageCommand.skipSavingFile,saveImageFunc:t.additionalFiles&&t.additionalFiles.length&&function(e){return n._saveMultipleFiles([e],t.additionalFiles,i.fileName)},saveMultipleImagesFunc:n._saveMultipleFiles&&function(e){return n._saveMultipleFiles(e,t.additionalFiles,i.fileName)}})})).otherwise(l).always((function(e){return r(n._printableContainer&&n._printableContainer.stop(),(function(){return e}))}))}))}function l(e){return!i.skipErrorNotification&&n._handleError(e)}}))}.bind(this))},_saveMultipleFiles:null,_stepFinished:function(e,i,n){if(this._currentProgressBack){var r=0;switch(e){case o.REPLACE_MAPS:r=10;break;case o.PREPARE_DOM:r=20;break;case o.RENDER_PAGE:r=20+40*i/n;break;case o.UNSET_LAYOUT:r=70;break;case o.RENDER_IMAGE:r=70+30*i/n}this._currentProgressBack(r/100)}},_preProcessSVGStrings:function(e){return e},_nodeToCanvasFunc:function(e,i,n){var r=e.children[0];return d.svgNodeToCanvasFunc(r,i,n)},isBrowserSupported:function(){return!(t("ie")||t("trident"))}})}));