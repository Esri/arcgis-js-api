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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/string","./utils","esri/dijit/geoenrichment/utils/JsonXmlConverter","dojo/i18n!../../../../../../../nls/jsapi"],function(i,e,r,n){n=n.geoenrichment.dijit.ReportPlayer.FieldInfoDescriptions;var s={};return s._buildMissingLabel=function(r){return i.substitute(n.missingVariableTooltip,{name:(r.variable.isScript?e.name.renderScriptName(r.variable.name):r.variable.id)||"",alias:r.alias||""})},s.renderFieldInfoTooltipInTableCell=function(r){var t;return r&&r.triggerJson&&r.triggerJson.fieldInfo&&(r=r.triggerJson.fieldInfo),r.isMissing?s._buildMissingLabel(r):(t=e.fields.getTooltip(r.name),t||(r.script?t=i.substitute(n.fieldDescriptionScript,{scriptName:e.name.renderScriptName(r.script.name),scriptAlias:r.script.alias}):r.hasVariable&&(t=i.substitute(n.fieldDescriptionVariable,{variableName:r.alias}))),t)},s.renderFieldInfoHoverTooltipInTableCell=function(t){return t&&t.triggerJson&&t.triggerJson.fieldInfo&&(t=t.triggerJson.fieldInfo),t.isMissing?s._buildMissingLabel(t):t.script?i.substitute(n.fieldDescriptionScriptShort,{scriptName:e.name.renderScriptName(t.script.name),scriptAlias:t.script.alias}):t.hasVariable?t.alias:t.isRichText?r.unrichHTML(t.richTextJson.xmlString):null},s});