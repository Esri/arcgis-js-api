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

define([],function(){var n={},e={provideParentInfo:function(n,e,o,t,s,r){function i(n,e){n.style.fields=n.style.fields||{};var o=n.style.fields[e]=n.style.fields[e]||{};return o.backgroundColor}function a(){switch(r){case"floating":return e.style.left}return 0}function f(){switch(r){case"floating":return e.style.spaceBefore}return 0}function l(){function n(n,e){n.style.fields=n.style.fields||{};var o=n.style.fields[e.field]=n.style.fields[e.field]||{};return o.width||e.style.width}var e=n(o,d[s]),t=o.columnSpans&&o.columnSpans[s]||1;if(t>1)for(var r,i=0;t-1>i;i++)r=y[r?r.field:s],e+=n(o,r);return e}function c(){function n(n,e){n.style.fields=n.style.fields||{};var o=n.style.fields[e]=n.style.fields[e]||{};return o.height||n.style.height}var r=n(o,s),i=o.rowSpans&&o.rowSpans[s]||1;if(i>1)for(var a,f=t+1,l=0;i-1>l;l++)a=e.data.data[f++],r+=n(a,s);return r}if(!e._measureInfo){var u,d={},y={};e.data.columns.forEach(function(n){u&&(y[u.field]=n),u=n,d[n.field]=n}),e._measureInfo={columnsHash:d,nextColumnHash:y}}d=e._measureInfo.columnsHash,y=e._measureInfo.nextColumnHash,n._parentBox={x:a(),y:f(),w:l(),h:c()},n._parentStyle={backgroundColor:i(o,s)}},sanitize:function(n){delete n._measureInfo}};return n.collectSectionJsons=function(e,o){o=o||{};var t=[];return e?e.sections?e.sections:e.sectionsTables?(e.sectionsTables.forEach(function(e){n._processTableJson(e,t,"page",o),o.backgroundForeground!==!1&&(e.backgroundSectionJson&&t.push(e.backgroundSectionJson),e.foregroundSectionJson&&t.push(e.foregroundSectionJson)),o.floatingTables!==!1&&e.floatingTablesSectionJson&&e.floatingTablesSectionJson.stack.forEach(function(e){"table"===e.id&&n._processTableJson(e,t,"floating",o)})}),t.filter(function(n){return!!n.stack})):[]:[]},n._processTableJson=function(n,o,t,s){n.data.data.forEach(function(r,i){r.fieldInfos&&Object.keys(r.fieldInfos).forEach(function(a){var f=r.fieldInfos[a];s.processFieldInfoFunc&&s.processFieldInfoFunc(f);r.style.fields;f&&f.sectionJson&&(s.saveParentInfo!==!1&&e.provideParentInfo(f.sectionJson,n,r,i,a,t),o.push(f.sectionJson))})}),e.sanitize(n)},n.getParentBox=function(n){return n&&n._parentBox},n.getParentStyle=function(n){return n&&n._parentStyle},n});