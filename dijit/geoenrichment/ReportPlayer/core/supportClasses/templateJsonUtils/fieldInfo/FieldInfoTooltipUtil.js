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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/string","./utils","esri/dijit/geoenrichment/utils/JsonXmlConverter","dojo/i18n!../../../../../../../nls/jsapi"],function(i,e,r,t){t=t.geoenrichment.dijit.ReportPlayer.ReportPlayer;var n={};return n._buildMissingLabel=function(r){return i.substitute(t.missingVariableTooltip,{name:(r.variable.isScript?e.name.renderScriptName(r.variable.name):r.variable.id)||"",alias:r.alias||""})},n.renderFieldInfoTooltipInTableCell=function(r){var s;return r&&r.triggerJson&&r.triggerJson.fieldInfo&&(r=r.triggerJson.fieldInfo),r.isMissing?n._buildMissingLabel(r):(s=e.fields.getTooltip(r.name),s||(r.script?s=i.substitute(t.fieldDescriptionScript,{scriptName:e.name.renderScriptName(r.script.name),scriptAlias:r.script.alias}):r.hasVariable&&(s=i.substitute(t.fieldDescriptionVariable,{variableName:r.alias}))),s)},n.renderFieldInfoHoverTooltipInTableCell=function(s){return s&&s.triggerJson&&s.triggerJson.fieldInfo&&(s=s.triggerJson.fieldInfo),s.isMissing?n._buildMissingLabel(s):s.script?i.substitute(t.fieldDescriptionScriptShort,{scriptName:e.name.renderScriptName(s.script.name),scriptAlias:s.script.alias}):s.hasVariable?s.alias:s.isRichText?r.unrichHTML(s.richTextJson.xmlString):null},n});