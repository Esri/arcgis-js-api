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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["require","dojo/_base/declare","esri/dijit/geoenrichment/promise/all","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","./createHTML/CommandMode","../../PlayerCommands","./supportClasses/ProgressSteps","dojo/i18n!esri/nls/jsapi"],function(e,r,t,n,i,o,s,a,u){function l(){var r=new n;return e(["dijit/Dialog","./createHTML/HTMLToSVGBuilder","./createHTML/HTMLStringBuilder","esri/dijit/geoenrichment/utils/FileUtil","./mapToImage/MapToImageUtil"],function(e,t,n,i,o){c=e,g=t,m=n,p=i,d=o,r.resolve()}),r.promise}u=u.geoenrichment.dijit.ReportPlayer.ReportPlayer;var c,g,m,p,d;return r(null,{id:s.HTML,errorMessage:u.exportInfographicError,exportMapErrorMessage:u.exportMapError,_player:null,_saveFiles:!0,_stopPrintableContainer:!0,_printableContainer:null,_mode:o.SVG_IN_HTML,_requestSizeLimit:0,_mergePageIndexes:!0,_currentProgressBack:null,execute:function(e,r,n){var s=this;return l().then(function(){function u(){return i(_&&_.undo(),function(){return i(s._stopPrintableContainer&&c&&c.stop(),function(e){return s._stepFinished(a.UNSET_LAYOUT),e})})}function l(e){return!r.skipErrorNotification&&s._handleError(e)}this._player=e;var c,_;this._currentProgressBack=n;var f={svgInHtmlString:null,svgStrings:null,documentOptions:null,additionalFiles:null};return i(function(){function n(){return t([c.getFitParams(),c.getHeaderFooterParams(),c.getDocumentOptions()]).then(function(e){return{fitParams:e[0],headerFooterParams:e[1],documentOptions:e[2]}})}return c=r.printableContainer,s._printableContainer=c,d.enableCaching(),i(d.replaceMapWithImage(e,{saveImagesAsDataUrl:!0,printMapTaskUrl:r.printMapTaskUrl}),function(e){return _=e,d.clearCaching(),s._stepFinished(a.REPLACE_MAPS),n()})}(),function(t){if(c)return i(m.buildHtmlStringForPlayer(c,t.headerFooterParams,t.documentOptions,s._mergePageIndexes),function(n){function u(e,t){if(!r.returnAsHtmlText&&!r.returnAsSvgText&&s._saveFiles&&e)return s._confirmSaveFile(t,function(){return p.saveTextFile(e,t)})}if(n.domString){s._stepFinished(a.PREPARE_DOM);var l=e.getReportTitle(),c=function(e,r){s._stepFinished(a.RENDER_PAGE,e+1,r)};f.documentOptions=t.documentOptions;var m=s._mode;switch(r.returnAsHtmlText&&(m=o.SVG_IN_HTML),r.returnAsSvgText&&(m=o.SVG),m){case o.SVG:return function(){var e=l+".svg";return i(g.htmlToSvg(n.domString,t.fitParams,s._requestSizeLimit,c),function(r){return f.svgStrings=r,u(r[0],e)})}();case o.SVG_IN_HTML:return function(){var e=l+".html";return i(g.htmlToSvgInHtml(n.domString,l,t.fitParams,s._requestSizeLimit,c),function(r){return f.svgInHtmlString=r,u(r,e)})}()}}})}).otherwise(l).always(function(){return i(u(),function(){return _&&_.errors.length?(!r.skipErrorNotification&&s._handleExportMapError(_.errors[0]),null):r.returnAsHtmlText?f.svgInHtmlString:r.returnAsSvgText?f.svgStrings:f})})}.bind(this))},_stepFinished:function(e,r,t){if(this._currentProgressBack){var n=0;switch(e){case a.REPLACE_MAPS:n=10;break;case a.PREPARE_DOM:n=20;break;case a.RENDER_PAGE:n=20+70*r/t;break;case a.UNSET_LAYOUT:n=100}this._currentProgressBack(n/100)}},_handleError:function(e){console.log(e),new c({title:"Error",content:this.errorMessage}).show()},_handleExportMapError:function(e){console.log(e),new c({title:"Error",content:this.exportMapErrorMessage}).show()},_confirmSaveFile:function(e,r,t){return r()}})});