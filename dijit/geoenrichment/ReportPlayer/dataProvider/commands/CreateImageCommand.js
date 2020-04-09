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

define(["require","dojo/_base/declare","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","dojo/sniff","./CreateHTMLCommand","../../PlayerCommands","./supportClasses/ProgressSteps","./createHTML/CommandMode","esri/dijit/geoenrichment/ReportPlayer/config","dojo/i18n!esri/nls/jsapi"],(function(e,n,i,r,t,s,a,o,l,c,u){u=u.geoenrichment.dijit.ReportPlayer.ReportPlayer;var g,d,m,v;function p(){var n=new i;return e(["./imageUtils/ImageSaveUtil","./imageUtils/NodeToCanvasUtil","./imageUtils/ImagePrintUtil","./createHTML/CSSFilesLoader"],(function(e,i,r,t){g=e,d=i,m=r,v=t,n.resolve()})),n.promise}return n(s,{id:a.IMAGE,label:u.createImageCommandLabel,errorMessage:u.createImageError,_saveFiles:!1,_stopPrintableContainer:!1,_mode:l.SVG,_mergePageIndexes:!1,_convertUrlImages:!0,_hideUrlImages:!0,execute:function(e,n){var i=this,t=this.inherited(arguments);return p().then(function(){return r(t,(function(t){if(t&&t.svgStrings){var s=t.svgStrings.length,a=function(e){i._stepFinished(o.RENDER_IMAGE,e+1,s)};return t.svgStrings=i._preProcessSVGStrings(t.svgStrings),r(v.loadCssFontFiles(),(function(){return m.printImages({svgStrings:t.svgStrings,nodeToCanvasFunc:i._nodeToCanvasFunc.bind(i),onRenderImage:a,scale:3}).then((function(r){return g.saveImages(r,{reportTitle:e.getReportTitle(),analysisAreas:e.getAnalysisAreas(),numPages:i._printableContainer.getNumberOfPages(),confirmSaveFile:i._confirmSaveFile,skipSavingFile:n.skipSavingFile||c.createImageCommand.skipSavingFile,saveImageFunc:t.additionalFiles&&t.additionalFiles.length&&function(e){return i._saveMultipleFiles([e],t.additionalFiles)},saveMultipleImagesFunc:i._saveMultipleFiles&&function(e){return i._saveMultipleFiles(e,t.additionalFiles)}})})).otherwise(l).always((function(e){return r(i._printableContainer&&i._printableContainer.stop(),(function(){return e}))}))}))}function l(e){return!n.skipErrorNotification&&i._handleError(e)}}))}.bind(this))},_saveMultipleFiles:null,_stepFinished:function(e,n,i){if(this._currentProgressBack){var r=0;switch(e){case o.REPLACE_MAPS:r=10;break;case o.PREPARE_DOM:r=20;break;case o.RENDER_PAGE:r=20+40*n/i;break;case o.UNSET_LAYOUT:r=70;break;case o.RENDER_IMAGE:r=70+30*n/i}this._currentProgressBack(r/100)}},_preProcessSVGStrings:function(e){return e},_nodeToCanvasFunc:function(e,n,i){var r=e.children[0];return d.svgNodeToCanvasFunc(r,n,i)},isBrowserSupported:function(){return!(t("ie")||t("trident"))}})}));