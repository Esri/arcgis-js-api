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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","./DocumentTypes","./Logger","../../../kernel"],function(e,t,o,n,l,s,a){var i=e(null,{allowedTypeKeys:["arcgis"],allowView:!1,allowViewXml:!1,allowDownload:!1,allowDraft:!0,allowSaveAndClose:!0,arcgisMode:!0,showValidateButton:!0,validateOnSave:!1,startupTypeKey:"arcgis",filePromptText:null,asTemplateText:null,xmlViewOnlyText:null,defaultArcGISStyle:"ISO 19139 Metadata Implementation Specification GML3.2",forceDefaultArcGISStyle:!0,arcgisGeocoder:null,geocoders:null,basemap:"streets",basemapUrl:null,showMapAttribution:!1,showMapLogo:!0,wrapAround180:!1,gemetUrl:"http://www.eionet.europa.eu/gemet",gemetConceptThesaurus:"http://www.eionet.europa.eu/gemet/concept/",gemetInspireThemeThesaurus:"http://inspire.ec.europa.eu/theme/",documentTypes:null,logger:null,session:null,constructor:function(e){t.mixin(this,e),this.session={},this.documentTypes=new l,this.logger=new s({debugEnabled:!0})},filterDocumentTypes:function(){var e=[];return o.forEach(this.documentTypes.list,function(t){o.some(this.allowedTypeKeys,function(o){return t.key===o?(e.push(t),!0):void 0})},this),e},setAllowedTypeKeys:function(e){var n=[],l=[];"undefined"!=typeof e&&null!==e&&("string"==typeof e?n=e.split(","):e.push&&(n=e),o.forEach(this.documentTypes.list,function(e){o.some(n,function(o){return e.key===t.trim(o)?(l.push(e.key),!0):void 0})}),l.length>0&&(this.allowedTypeKeys=l))}});return n("extend-esri")&&t.setObject("dijit.metadata.context.GxeContext",i,a),i});