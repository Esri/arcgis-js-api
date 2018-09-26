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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/promise/all","dojo/Deferred","dojo/when","./createHTML/CommandMode","../../PlayerCommands","./supportClasses/ProgressSteps","dojo/i18n!esri/nls/jsapi"],function(r,e,t,n,i,o,s,a,u){function l(){var e=new n;return r(["dijit/Dialog","./createHTML/HTMLToSVGBuilder","./createHTML/HTMLStringBuilder","esri/dijit/geoenrichment/utils/FileUtil","./mapToImage/MapToImageUtil"],function(r,t,n,i,o){c=r,g=t,p=n,m=i,d=o,e.resolve()}),e.promise}u=u.geoenrichment.dijit.ReportPlayer.ReportPlayer;var c,g,p,m,d;return e(null,{id:s.HTML,errorMessage:u.exportInfographicError,exportMapErrorMessage:u.exportMapError,_player:null,_saveFiles:!0,_stopPrintableContainer:!0,_printableContainer:null,_mode:o.SVG_IN_HTML,_requestSizeLimit:0,_mergePageIndexes:!0,_currentProgressBack:null,execute:function(r,e,n){var s=this;return l().then(function(){function u(){return i(_&&_.undo(),function(){return i(s._stopPrintableContainer&&c&&c.stop(),function(r){return s._stepFinished(a.UNSET_LAYOUT),r})})}function l(r){if(!e.skipErrorNotification)return s._handleError(r)}this._player=r;var c,_;this._currentProgressBack=n;var f={svgInHtmlString:null,svgStrings:null,documentOptions:null,additionalFiles:null};return i(function(){function n(){return t([c.getFitParams(),c.getHeaderFooterParams(),c.getDocumentOptions()]).then(function(r){return{fitParams:r[0],headerFooterParams:r[1],documentOptions:r[2]}})}return c=e.printableContainer,s._printableContainer=c,d.enableCaching(),i(d.replaceMapWithImage(r,{saveImagesAsDataUrl:!0,printMapTaskUrl:e.printMapTaskUrl}),function(r){return _=r,d.clearCaching(),s._stepFinished(a.REPLACE_MAPS),n()})}(),function(t){if(c)return i(p.buildHtmlStringForPlayer(c,t.headerFooterParams,t.documentOptions,s._mergePageIndexes),function(n){function u(r,t){if(!e.returnAsHtmlText&&!e.returnAsSvgText&&s._saveFiles&&r)return s._confirmSaveFile(t,function(){return m.saveTextFile(r,t)})}if(n.domString){s._stepFinished(a.PREPARE_DOM);var l=r.getReportTitle(),c=function(r,e){s._stepFinished(a.RENDER_PAGE,r+1,e)};f.documentOptions=t.documentOptions;var p=s._mode;switch(e.returnAsHtmlText&&(p=o.SVG_IN_HTML),e.returnAsSvgText&&(p=o.SVG),p){case o.SVG:return function(){var r=l+".svg";return i(g.htmlToSvg(n.domString,t.fitParams,s._requestSizeLimit,c),function(e){return f.svgStrings=e,u(e[0],r)})}();case o.SVG_IN_HTML:return function(){var r=l+".html";return i(g.htmlToSvgInHtml(n.domString,l,t.fitParams,s._requestSizeLimit,c),function(e){return f.svgInHtmlString=e,u(e,r)})}()}}})}).otherwise(l).always(function(){return i(u(),function(){return _&&_.errors.length?(!e.skipErrorNotification&&s._handleExportMapError(_.errors[0]),null):e.returnAsHtmlText?f.svgInHtmlString:e.returnAsSvgText?f.svgStrings:f})})}.bind(this))},_stepFinished:function(r,e,t){if(this._currentProgressBack){var n=0;switch(r){case a.REPLACE_MAPS:n=10;break;case a.PREPARE_DOM:n=20;break;case a.RENDER_PAGE:n=20+70*e/t;break;case a.UNSET_LAYOUT:n=100}this._currentProgressBack(n/100)}},_handleError:function(r){console.log(r),new c({title:"Error",content:this.errorMessage}).show()},_handleExportMapError:function(r){console.log(r),new c({title:"Error",content:this.exportMapErrorMessage}).show()},_confirmSaveFile:function(r,e,t){return e()}})});