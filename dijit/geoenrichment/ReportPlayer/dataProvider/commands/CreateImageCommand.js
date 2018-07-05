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

define(["dojo/_base/declare","dojo/when","dojo/sniff","./CreateHTMLCommand","../../PlayerCommands","../../config","./supportClasses/ProgressSteps","./createHTML/CommandMode","./imageUtils/ImageSaveUtil","./imageUtils/NodeToCanvasUtil","./imageUtils/ImagePrintUtil","./createHTML/CSSFilesLoader","dojo/i18n!esri/nls/jsapi"],function(e,n,i,r,a,s,t,o,l,c,u,g,d){d=d.geoenrichment.dijit.ReportPlayer.ReportPlayer;return e(r,{id:a.IMAGE,label:d.createImageCommandLabel,errorMessage:d.createImageError,_saveFiles:!1,_stopPrintableContainer:!1,_mode:o.SVG,_mergePageIndexes:!1,execute:function(e,i){var r=this;return n(this.inherited(arguments),function(a){function o(e){if(!i.skipErrorNotification)return r._handleError(e)}if(a&&a.svgStrings){var c=a.svgStrings.length,d=function(e){r._stepFinished(t.RENDER_IMAGE,e+1,c)};return a.svgStrings=r._preProcessSVGStrings(a.svgStrings),n(g.loadCssFontFiles(),function(){return u.printImages({svgStrings:a.svgStrings,nodeToCanvasFunc:r._nodeToCanvasFunc.bind(r),onRenderImage:d,scale:3}).then(function(n){return l.saveImages(n,{reportTitle:e.getReportTitle(),analysisAreas:e.getAnalysisAreas(),allAreas:r._printableContainer.needExportAllAreas(),numPages:r._printableContainer.getNumberOfPages(),confirmSaveFile:r._confirmSaveFile,skipSavingFile:i.skipSavingFile||s.createImageCommand.skipSavingFile,saveImageFunc:a.additionalFiles&&a.additionalFiles.length&&function(e){return r._saveMultipleFiles([e],a.additionalFiles)},saveMultipleImagesFunc:r._saveMultipleFiles&&function(e){return r._saveMultipleFiles(e,a.additionalFiles)}})}).otherwise(o).always(function(e){return n(r._printableContainer&&r._printableContainer.stop(),function(){return e})})})}})},_saveMultipleFiles:null,_stepFinished:function(e,n,i){if(this._currentProgressBack){var r=0;switch(e){case t.REPLACE_MAPS:r=10;break;case t.PREPARE_DOM:r=20;break;case t.RENDER_PAGE:r=20+40*n/i;break;case t.UNSET_LAYOUT:r=70;break;case t.RENDER_IMAGE:r=70+30*n/i}this._currentProgressBack(r/100)}},_preProcessSVGStrings:function(e){return e},_nodeToCanvasFunc:function(e,n,i){var r=e.children[0];return c.svgNodeToCanvasFunc(r,n,i)},isBrowserSupported:function(){return!(i("ie")||i("trident"))}})});