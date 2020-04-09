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

define(["../dataCollections/DataCollectionsLoader"],(function(e){var t={preprocessVariables:function(i,r){var a=t.convertForEnrich(t._splitVariables(i)).filter((function(e){return e.itemid}));return e.loadCustomDataVariables(a,{forceLowerCase:!0,portalUrl:r}).then((function(e){return t._splitVariables(i,e)}))},_splitVariables:function(e,t){var i=[],r={};return e.forEach((function(e){"string"==typeof e?i.push(e.toLowerCase()):e&&e.outFields&&e.outFields.forEach((function(a,o){var n=e.itemid+"."+a;n=n.toLowerCase(),i.push(n),r[n]={itemid:e.itemid,url:e.url,token:e.token,variable:t?t.fullNameToVariableCache[n]:{id:a}}}))})),{fullNames:i,customDataMapping:r}},convertForEnrich:function(e){var t={},i=[];return e.fullNames.forEach((function(r){var a=e.customDataMapping[r];if(a){var o=t[a.itemid];o||((o={itemid:a.itemid,url:a.url,token:a.token,outFields:[]}).url||delete o.url,o.token||delete o.token),o.outFields.push(a.variable.id),t[o.itemid]||(t[o.itemid]=o,i.push(o))}else i.push(r)})),i}};return t}));