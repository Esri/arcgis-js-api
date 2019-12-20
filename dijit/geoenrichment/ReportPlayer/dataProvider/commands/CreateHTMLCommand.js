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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["require","dojo/_base/declare","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","./createHTML/CommandMode","../../PlayerCommands","./supportClasses/ProgressSteps","dojo/i18n!esri/nls/jsapi"],function(e,r,t,n,i,o,s,a){function u(){var r=new t;return e(["dijit/Dialog","./createHTML/HTMLToSVGBuilder","./createHTML/HTMLStringBuilder","esri/dijit/geoenrichment/utils/FileUtil","./mapToImage/MapToImageUtil"],function(e,t,n,i,o){l=e,c=t,g=n,p=i,_=o,r.resolve()}),r.promise}a=a.geoenrichment.dijit.ReportPlayer.ReportPlayer;var l,c,g,p,_;return r(null,{id:o.HTML,errorMessage:a.exportInfographicError,exportMapErrorMessage:a.exportMapError,_player:null,_saveFiles:!0,_stopPrintableContainer:!0,_printableContainer:null,_mode:i.SVG_IN_HTML,_requestSizeLimit:0,_mergePageIndexes:!0,_currentProgressBack:null,execute:function(e,r,t){var o=this;return u().then(function(){function a(){return n(m&&m.undo(),function(){return n(o._stopPrintableContainer&&l&&l.stop(),function(e){return o._stepFinished(s.UNSET_LAYOUT),e})})}function u(e){return!r.skipErrorNotification&&o._handleError(e)}this._player=e;var l,m;this._currentProgressBack=t;var d={svgInHtmlString:null,svgStrings:null,documentOptions:null,additionalFiles:null};return n(function(){return l=r.printableContainer,o._printableContainer=l,_.enableCaching(),n(_.replaceMapWithImage(e,{saveImagesAsDataUrl:!0,printMapTaskUrl:r.printMapTaskUrl}),function(e){m=e,_.clearCaching(),o._stepFinished(s.REPLACE_MAPS)})}(),function(){if(l)return n(g.buildHtmlStringForPlayer(l,o._mergePageIndexes),function(t){function a(e,t){if(!r.returnAsHtmlText&&!r.returnAsSvgText&&o._saveFiles&&e)return o._confirmSaveFile(t,function(){return p.saveTextFile(e,t)})}if(t.domString){o._stepFinished(s.PREPARE_DOM);var u=e.getReportTitle(),g=function(e,r){o._stepFinished(s.RENDER_PAGE,e+1,r)};d.documentOptions=l.getDocumentOptions();var _=o._mode;switch(r.returnAsHtmlText&&(_=i.SVG_IN_HTML),r.returnAsSvgText&&(_=i.SVG),_){case i.SVG:return function(){var e=u+".svg";return n(c.htmlToSvg(t.domString,l.getFitParams(),o._requestSizeLimit,g),function(r){return d.svgStrings=r,a(r[0],e)})}();case i.SVG_IN_HTML:return function(){var e=u+".html";return n(c.htmlToSvgInHtml(t.domString,u,l.getFitParams(),o._requestSizeLimit,g),function(r){return d.svgInHtmlString=r,a(r,e)})}()}}})}).otherwise(u).always(function(){return n(a(),function(){return m&&m.errors.length?(!r.skipErrorNotification&&o._handleExportMapError(m.errors[0]),null):r.returnAsHtmlText?d.svgInHtmlString:r.returnAsSvgText?d.svgStrings:d})})}.bind(this))},_stepFinished:function(e,r,t){if(this._currentProgressBack){var n=0;switch(e){case s.REPLACE_MAPS:n=10;break;case s.PREPARE_DOM:n=20;break;case s.RENDER_PAGE:n=20+70*r/t;break;case s.UNSET_LAYOUT:n=100}this._currentProgressBack(n/100)}},_handleError:function(e){console.log(e),new l({title:"Error",content:this.errorMessage}).show()},_handleExportMapError:function(e){console.log(e),new l({title:"Error",content:this.exportMapErrorMessage}).show()},_confirmSaveFile:function(e,r,t){return r()}})});