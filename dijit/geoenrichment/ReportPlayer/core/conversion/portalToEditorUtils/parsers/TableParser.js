// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/JsonXmlConverter","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/RichTextJsonUtil","../../../supportClasses/DocumentOptions","../../ConversionUtil","../../../sections/SectionTypes","./AlignParser","./_HiddenCellsCollector","esri/dijit/geoenrichment/utils/ColorUtil"],(function(e,t,r,a,i,n,s,o,l,u){var g={parseTableCellAttributes:function(t,r,a){var i=a.tableDefaultStyles;if(r=r||{},t.overrideStyle&&(r.overrideStyle=t.overrideStyle),t.pad&&(r.horizontalPadding=n.ptToPx(t.pad)),t.vpad&&(r.verticalPadding=n.ptToPx(t.vpad)),t.angle&&(r.angle=Number(t.angle)||0),o.parseAlign(t,r),t.width&&(r.width=n.ptToPx(t.width)),t.height&&(r.height=n.ptToPx(t.height)),e.mixin(r,n.ptToPxObj(n.parseStyleString(t.style))),r.overrideStyle&&i){var s=i.getStyle(r.overrideStyle);for(var l in s)delete r[l]}return g._parseBorderProperties(t,r),r},_SIDES:["Top","Right","Bottom","Left"],_parseBorderProperties:function(e,t){g._SIDES.forEach((function(r){if(e["border"+r+"Width"]){e["border"+r+"Color"]&&(t["border"+r+"Color"]=e["border"+r+"Color"]),e["border"+r+"Width"]&&(t["border"+r+"Width"]=n.ptToPx(e["border"+r+"Width"])),e["border"+r+"Style"]&&(t["border"+r+"Style"]=e["border"+r+"Style"]);var a=e["border"+r+"Opacity"];t["border"+r+"Opacity"]=a?Number(a):1}}))}},d={getElement:function(e,t,r){var a=d._processTableColumns(e,t.templateJson,r),i=Number(e.attributes.fixedColumns)||0,s=Number(e.attributes.dynamicColumns)||0,o=d._getTableOuterTags(e,t),u=o.trTags,p=o.bgTag,f=o.fgTag,c=o.backgroundFloatingPanelsTag,b=o.foregroundFloatingPanelsTag,T=o.filterTag,h=o.sortingTag;if(u){var m=u.map((function(){return{style:{fields:{}},fieldInfos:{}}})),y=l.collectHiddenCells(u,t);u.forEach((function(e,r){var o=m[r];if(e.attributes&&e.attributes.height&&(o.style.height=n.ptToPx(e.attributes.height)),e.tags&&e.tags.length){var u=0;if(s){var p=[],f=[],c=0;e.tags.forEach((function(e){for(;l.isHidden(y,c,r);)c++;c<i?p.push(e):f.push(e),c++}));var b=Math.round((a.length-i)/s);e.tags=p;for(var T=0;T<b;T++)e.tags=e.tags.concat(f)}e.tags.forEach((function(e){for(;l.isHidden(y,u,r);)u++;if(a[u]){var i=a[u].field,n=e.attributes||{},s=o.style.fields[i]={};g.parseTableCellAttributes(n,s,t),n.width&&d._parseSpannedCellsDimentions(n,m,a,r,u),n.editable&&(o.editInfo=o.editInfo||{},o.editInfo[i]=!0);var p=Number(n.colspan),f=Number(n.rowspan);p&&(o.columnSpans=o.columnSpans||{},o.columnSpans[i]=p),f&&(o.rowSpans=o.rowSpans||{},o.rowSpans[i]=f);try{d._parseCellContent(e,o,i,s,t)}catch(e){console.log(e)}u++}}))}}))}var P,C={id:"table",customName:e.attributes.customName,backgroundSectionJson:p&&d._parseTableBackgroundForeground(p,t,!0),foregroundSectionJson:f&&d._parseTableBackgroundForeground(f,t,!1),backgroundFloatingTablesSectionJson:c&&d._parseFloatingPanels(c,t,!0),foregroundFloatingTablesSectionJson:b&&d._parseFloatingPanels(b,t,!1),columns:a,rows:m||[],style:{width:n.ptToPx(e.attributes.width),left:n.ptToPx(e.attributes.left),top:n.ptToPx(e.attributes.spaceBefore),spaceAfter:n.ptToPx(e.attributes.spaceAfter),alternatingStyle:e.attributes.alternatingStyle,opacity:e.attributes.opacity?Number(e.attributes.opacity):void 0,fixedCellsOpacity:e.attributes.fixedCellsOpacity?Number(e.attributes.fixedCellsOpacity):void 0},attributes:{},presetFilter:T&&t.parsers.getParser("filter").getFilter(T),noChartView:!!e.attributes.noChartView},S=h&&t.parsers.getParser("sorting").getSorting(h);S&&(a.some((function(e,t){if(t===S.columnIndex)return P=e.field,!0})),P&&(S.field=P,delete S.columnIndex,C.presetSorting=S));return i&&(C.attributes.fixedColumns=i),s&&(C.attributes.dynamicColumns=s),e.attributes.fixedRows&&(C.attributes.fixedRows=Number(e.attributes.fixedRows)||0),e.attributes.dynamicRows&&(C.attributes.dynamicRows=Number(e.attributes.dynamicRows)||0),C.attributes.inSectionRole=e.attributes.inSectionRole,C},_processTableColumns:function(e,t,r){if(r&&r.fixTableWidthsForPage){var a=n.pxToPt(i.getPageBox(t.documentOptions).contentW);if(e.attributes.widths&&Number(e.attributes.width)>a){var s=n.splitTrim(e.attributes.widths,";",!0),o=Number(e.attributes.width)-a,l=Number(s[s.length-1]);l>o&&(l-=o,s[s.length-1]=l,e.attributes.widths=s.join(";"),e.attributes.width=a)}}var u=0;return e.attributes.widths?n.splitTrim(e.attributes.widths,";",!0).map((function(e){return{field:"field"+u++,style:{width:n.ptToPx(e)}}})):[]},_getTableOuterTags:function(e,t){var r,a,i,n,o,l,u=[];return t.revisionVersion>=1.1?e.tags&&e.tags.forEach((function(e){if("tr"!==e.name)if("filter"!==e.name)if("sorting"!==e.name)switch(e.attributes.type){case s.TABLE_BACKGROUND:r=e;break;case s.TABLE_FOREGROUND:a=e;break;case s.TABLE_BACKGROUND_FLOATING_PANELS:i=e;break;case s.TABLE_FOREGROUND_FLOATING_PANELS:case s.TABLE_FLOATING_PANELS:n=e}else l=e;else o=e;else u.push(e)})):e.tags&&e.tags.forEach((function(e){"tr"===e.name?u.push(e):"background"===e.name?r=e:"foreground"===e.name?a=e:"floatingElements"===e.name&&(n=e)})),{trTags:u,bgTag:r,fgTag:a,backgroundFloatingPanelsTag:i,foregroundFloatingPanelsTag:n,filterTag:o,sortingTag:l}},_processTdContent:function(e,r){var a,i,n,s,o;if(e.tags&&e.tags.length){a=t.queryTopJson(e,"trigger")[0]||t.queryTopJson(e,"trigger2")[0];var l=t.queryTopJson(e,"d")[0],u=l&&t.queryTopJson(l,"dataDrillingPanels")[0]||t.queryTopJson(e,"dataDrillingPanels")[0];if(i=u&&t.queryTopJson(u,"dataDrillingPanel")[0],n=l&&t.queryTopJson(l,"tooltip")[0],o=e.tags.filter((function(e){return"br"!==e.name})),s=l||o[0],a&&l)s=l;else{var g=function e(t){var a=t.tags&&1===t.tags.length&&t.tags[0];return a&&a.tags?("b"===a.name?r.fontWeight="bold":"i"===a.name?r.fontStyle="italic":"u"===a.name&&(r.textDecoration="underline"),"b"===a.name||"i"===a.name||"u"===a.name?e(a)||{tag:a.tags[0],parentTag:a}:null):null}(e);s=g&&g.tag||l||o[0],e=g&&g.parentTag||e}}return{mainTag:s,triggerTag:a,ddTag:i,tooltipTag:n,parentTag:e,hasMultipleTags:o&&o.length>1}},_parseSpannedCellsDimentions:function(e,t,r,a,i){if(e.spannedWidths||e.spannedHeights)for(var s=e.spannedWidths?e.spannedWidths.split(";").map((function(e){return n.ptToPx(e)})):[n.ptToPx(e.width)],o=e.spannedHeights?e.spannedHeights.split(";").map((function(e){return n.ptToPx(e)})):[n.ptToPx(e.height)],l=0;l<s.length;l++)for(var u=0;u<o.length;u++){var g=r[i+l],d=t[a+u],p=d.style.fields[g.field]=d.style.fields[g.field]||{};p.width=s[l],p.height=o[u]}},_parseCellContent:function(e,i,s,o,l){function g(e){t.isRichText(e)?i.fieldInfos[s]=a.createFieldInfoFromRichText(e):i[s]=t.unrichHTML(e)}var p,f=d._processTdContent(e,o),c=f.mainTag,b=f.parentTag,T=f.triggerTag,h=f.ddTag,m=f.tooltipTag,y=f.hasMultipleTags;if(y&&!T&&!h&&!m){var P=l.parsers.getParser("field").parseRichTextTag(b,l);P&&(i.fieldInfos[s]=P,p=!0)}if(c&&!p){var C;l.report.isGraphicReport&&"section"===c.name&&!c.attributes.style&&o.backgroundColor&&!u.isTransparent(o.backgroundColor)&&(c.attributes.style=n.composeStyleString({backgroundColor:o.backgroundColor}),delete o.backgroundColor);try{C=l.parsers.getParser("field").parseField(c,b,l,T,h,m)}catch(e){console.log(e),C=r.createFieldInfoForUnsupportedContent()}if(!1===C)p=!0;else if("number"==typeof C)i[s]=C+"",p=!0;else if(C)i.fieldInfos[s]=C,p=!0;else if("chart"===c.name)p=!0;else if("img"===c.name)p=!0;else if("mapImage"===c.name)p=!0;else if("text"===c.name)i[s]=c.attributes.name,p=!0;else if("a"===c.name&&c.tags&&c.tags[0].text){var S=c.attributes.href;S&&(i.urls=i.urls||{},i.urls[s]=S,i[s]=c.tags[0].text,p=!0)}else c.text&&!y&&(g(c.text),p=!0)}p||g(t.getInnerHTML(b))},_parseTableBackgroundForeground:function(e,t,r){return e.attributes=e.attributes||{},e.attributes.type=r?s.TABLE_BACKGROUND:s.TABLE_FOREGROUND,t.parsers.getParser("section").parseSection(e,t)},_parseFloatingPanels:function(e,t,r){return e.attributes=e.attributes||{},e.attributes.type=r?s.TABLE_BACKGROUND_FLOATING_PANELS:s.TABLE_FOREGROUND_FLOATING_PANELS,t.parsers.getParser("section").parseSection(e,t)}};return d.parseTableCellAttributes=g.parseTableCellAttributes,d}));