// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/lang","../../supportClasses/templateJsonUtils/query/TemplateJsonQueryUtil","../../sections/sectionUtils/SectionJsonUtil","../../supportClasses/tableJson/TableJsonUtil","../../infographics/InfographicTypes","../../infographics/utils/InfographicJsonConversionUtil","../../infographics/utils/InfographicLayoutResizer","../../infographics/utils/InfographicVariableLayoutUtil","../../infographics/utils/InfographicThemeUtil","../../grid/coreUtils/GridDataUtil","esri/dijit/geoenrichment/ReportPlayer/config"],(function(e,t,a,n,o,i,r,s,l,c,f){var h={};return h.getProcessor=function(t){return function(n){var i=function(t){var a=e.mixin({},t.getComparisonSettings());return a.preserveRelativeSize=!1,a.equalizeVariableText=a.splitPanels,a.equalizeDescriptionText=a.splitPanels,a.equalizeLayout=a.splitPanels,a.splitPanels?(a.spaceOutFactor=null,a.scale=a.scaleSplit):(a.spaceOutFactor=1/a.scale,a.scale=null),a}(t);return n=(n=h._filterSectionJsons(n,t.viewModel)).map((function(t){var n=a.getSectionJsonInfographic(t);return n&&n.type===o.STATIC?e.clone(t):t})),i.spaceOutFactor&&1!==i.spaceOutFactor&&h._spaceOutSectionJsons(n,i),i.splitPanels&&(n=h._splitSectionJsons(n)),n=h._equalizeSectionJsons(n,i,t.viewModel),i.hideBackgroundImage&&(n=h._hideBackgroundElements(n)),i.scale&&1!==i.scale&&(n=h._zoomOutSectionJsons(n,i)),n}},h._filterSectionJsons=function(e,a){var n=0;e.forEach((function(e){n+=t.calcNumberOfMapsInSectionJson(e)}));var o=a.dynamicReportInfo.analysisAreas.filter((function(e){return!e.hidden})).length*n<=f.maps.maxNumberOfMapsShownAtTheSameTime;return e.filter((function(e){if(e.stack&&e.stack.some((function(e){return"map"===e.id})))return o;var n=!1,i=!1;return t.processSectionFieldInfos(e,(function(e){e.isMap&&(i=!0),n=h._isComparableFieldInfo(e,a)||n})),i?o:n}))},h._isComparableFieldInfo=function(e,t){return!!e.isChart||(e.isInfographic?e.infographicJson.type!==o.ATTACHMENTS&&(e.infographicJson.type!==o.AREA_DETAILS||t.dynamicReportInfo.attachmentsStore&&t.dynamicReportInfo.attachmentsStore.supportsMultipleAreas):!!e.isMap||!!e.hasVariable)},h._spaceOutSectionJsons=function(e,n){e.forEach((function(e){var i=a.getSectionJsonInfographic(e);if(i&&i.type===o.STATIC&&!(i.variableTables.length<2)){var r=n.spaceOutFactor,s=i.style.width,l=s*r,c=(l-s)/2;i.header&&(i.header.columns[0].style.width="100%",i.header.style.left=-c,i.header.style.width=l),i.variableTables.forEach((function(e){var t=(e.style.width*r-e.style.width)/2;e.style.left=e.style.left*r-c+t}));var f=t.getParentBox(e);h._applyParentBoxWidth(e,f.w*r)}}))},h._splitSectionJsons=function(s){var l=[];return s.forEach((function(s){var f=a.getSectionJsonInfographic(s);if(f&&f.type===o.STATIC){var h=f.variableTables;if(f.header){var u=f.header;if(u.rows[0][u.columns[0].field]||u.rows[0].fieldInfos&&u.rows[0].fieldInfos[u.columns[0].field]){var p=e.clone(s);(f=a.getSectionJsonInfographic(p)).variableTables=[];var g=n.calcTableBox(f.header),v=t.getParentBox(p);v.y+=g.y,v.h=g.h,t.setParentBox(p,v),l.push(p)}}h.forEach((function(n,o){var f=e.clone(s),h=a.getSectionJsonInfographicTable(f),u=a.getSectionJsonInfographic(f);delete u.header,u.variableTables=[u.variableTables[o]];var p=u.variableTables[0],g=i.variableTableToNormalTables(p),v=a.wrapInDetailsSectionJson(g.tableJsons);v.style=p.style;var y,d=a.calcSectionJsonBox(v),S=p.variable.style.horizontalAlign||"left";y=g.isVariableInShape||"left"===S?2*p.variable.style.width:p.variable.style.width;var b=d.contentW+y,x=Math.min(1.75,b/d.contentW);c.isNumericVariableFieldCell(p.variable.fieldInfo)||(x=1);var m=d.x+d.contentLeft,T=d.y+d.contentTop,I=h.style.left+m-d.contentW*(x-1)/2,B=h.style.top+T;h.style.left=0,h.style.top=0,p.style.left=d.contentW*(x-1)/2,p.style.top=0,r.VARIABLE_TABLE_ELEMENTS.forEach((function(e){p[e]&&(p[e].style.left-=d.contentLeft,p[e].style.top-=d.contentTop)})),f.stack.filter((function(e){return e!==h})).forEach((function(e){e.style.left-=I,e.style.top-=B}));var J=t.getParentBox(f);J.x+=I,J.y+=B,J.w=d.contentW*x,J.h=d.contentH,t.setParentBox(f,J),l.push(f)}))}else l.push(s)})),l},h._zoomOutSectionJsons=function(e,n){return e.map((function(e){var i=a.getSectionJsonInfographic(e);if(i&&i.type===o.STATIC){var r=t.getParentBox(e);return h._applyParentBoxWidth(e,r.w/n.scale),e}return e}))},h._equalizeSectionJsons=function(e,t,n){var i=[],r=[],s=e.map((function(e){var n=a.getSectionJsonInfographic(e);return n&&n.type===o.STATIC?t.splitPanels?(n.header?i.push(e):r.push(e),e):(r.push(e),e):e}));return t.preserveRelativeSize&&(h._equalizeBox(i),h._equalizeBox(r)),t.equalizeVariableText&&(h._equalizeVariableAndHeaderText(i,n,!0),h._equalizeVariableAndHeaderText(r,n,!1)),t.equalizeDescriptionText&&h._equalizeDescriptionText(r,n),t.equalizeIcons&&h._equalizeIcons(r,n),t.equalizeLayout&&h._equalizeLayout(r,n),s},h._equalizeBox=function(e){var a=0;e.forEach((function(e){var n=t.getParentBox(e);a=Math.max(a,n.w)})),e.forEach((function(e){h._applyParentBoxWidth(e,a)}))},h._equalizeVariableAndHeaderText=function(e,n,o){var i=0;function r(e){return h._getFont(e,n,i,o?"header":"variable")}e.forEach((function(e){var a=t.getParentBox(e);i=Math.max(i,a.w)}));var s,l=1/0;e.forEach((function(e){var t=r(e);t&&(l=Math.min(l,t.fontSize),t.isBold||(s=!0))})),e.forEach((function(e){var n=r(e);if(n){var i=t.getParentBox(e).w*n.fontSize/l;if(h._applyParentBoxWidth(e,i),!o&&s)a.getSectionJsonInfographic(e).variableTables[0].variable.style.fontWeight="normal"}}))},h._applyParentBoxWidth=function(e,n){var o=t.getParentBox(e),i=(o.w-n)/2,r=a.getSectionJsonInfographicTable(e);r.style.left-=i,e.stack.filter((function(e){return e!==r})).forEach((function(e){e.style.left-=i})),o.x+=i,o.w=n,t.setParentBox(e,o)},h._equalizeDescriptionText=function(e,n){var o=0;e.forEach((function(e){var a=t.getParentBox(e);o=Math.max(o,a.w)}));var i,r=1/0;e.forEach((function(e){var t=function(e){return h._getFont(e,n,o,"description")}(e);t&&(r=Math.min(r,t.fontSize),t.isBold||(i=!0))})),e.forEach((function(e){var n=a.getSectionJsonInfographic(e).variableTables[0].description;if(n){var s=t.getParentBox(e).w/o;n.style.fontSize=r*s,i&&(n.style.fontWeight="normal")}}))},h._getFont=function(e,n,o,i){var r,s,c=t.getParentBox(e),f=a.getSectionJsonInfographic(e);if(l.applyThemeSettingsToJson(f,n.getInfographicDefaultStyles().staticInfographic),"header"===i){var h=f.header.rows[0],u=f.header.columns[0].field;r=h.style.fields[u].fontSize||h.themeStyle&&h.themeStyle.fields[u].fontSize,s=h.style.fields[u].fontWeight||h.themeStyle&&h.themeStyle.fields[u].fontWeight}else{var p=f.variableTables[0][i];p&&(r=p.style.fontSize||p.themeStyle&&p.themeStyle.fontSize,s=p.style.fontWeight||p.themeStyle&&p.themeStyle.fontWeight)}var g=o/c.w;return r&&{fontSize:(r||0)*g,isBold:"bold"===s}},h._equalizeIcons=function(e,n){e=e.filter((function(e){var t=a.getSectionJsonInfographic(e);return!s.isVariableInShape(t.variableTables[0])}));var o=0;e.forEach((function(e){var a=t.getParentBox(e);o=Math.max(o,a.w)}));var i=[];function r(e,r){if(i[r])return i[r];var l=t.getParentBox(e),c=a.getSectionJsonInfographic(e).variableTables[0],f=s.hasIcon(c)&&c.shape;if(!f||!f.shapeJson||f.shapeJson.showAsBar)return null;var h=s.getActualShapeBox(f,n);if(!h)return null;var u=o/l.w;return i[r]={areaFactor:Math.sqrt(h.w*h.h)*u}}var l=1/0;e.forEach((function(e,t){var a=r(e,t);a&&(l=Math.min(l,a.areaFactor))})),e.forEach((function(e,t){var n=a.getSectionJsonInfographic(e).variableTables[0],o=s.hasIcon(n)&&n.shape,i=o&&r(e,t);if(i){var c=l/i.areaFactor,f=(o.style.width-o.style.width*c)/2,h=(o.style.height-o.style.height*c)/2;o.style.width*=c,o.style.height*=c,o.style.left+=f,o.style.top+=h}}))},h._equalizeLayout=function(e,n){e=e.filter((function(e){var t=a.getSectionJsonInfographic(e).variableTables[0],n=s.hasIcon(t)&&t.shape;if(n&&n.shapeJson&&n.shapeJson.showAsBar)return!1;var o=s.getClosestId(t,"custom");return"v1"===o||"v4"===o}));var o=0;e.forEach((function(e){var a=t.getParentBox(e);o=Math.max(o,a.w)}));var i=0,r=0,l=0,c=0;e.forEach((function(e,n){var f=t.getParentBox(e),h=o/f.w,u=a.getSectionJsonInfographic(e).variableTables[0],p=s.getBoxes(u);p.iconBox&&(i=Math.max(i,p.iconBox.h*h),r=Math.max(r,p.iconBox.w*h)),l=Math.max(l,p.variableBox.h*h),c=Math.max(c,p.descriptionBox.h*h)})),e.forEach((function(e,n){var f=t.getParentBox(e),h=o/f.w,u=a.getSectionJsonInfographic(e).variableTables[0],p=s.getBoxes(u),g=s.hasIcon(u)&&(u.shape||u.image);if(g&&(g.style.height=i/h,g.style.width=r/h,u.image&&u.image.imageJson)){var v=u.image.imageJson.style=u.image.imageJson.style||{};v.left=0,v.top=0,v.width=g.style.width,v.height=g.style.height}u.variable.style.height=l/h,u.description.style.height=c/h,g?(g.style.top=0,u.variable.style.top=g.style.top+g.style.height):u.variable.style.top=0,u.description.style.top=u.variable.style.top+u.variable.style.height;var y=s.getBoxes(u),d=0,S=-10/h;g&&(g.style.left-=(y.iconBox.w-p.iconBox.w)/2,d=-(S+=y.iconBox.y-p.iconBox.y)),d+=y.descriptionBox.y+y.descriptionBox.h-p.descriptionBox.y-p.descriptionBox.h,f.y+=S,f.h+=d,t.setParentBox(e,f);var b=a.getSectionJsonInfographicTable(e);b.style.top-=S,e.stack.filter((function(e){return e!==b})).forEach((function(e){e.style.top-=S}))}))},h._hideBackgroundElements=function(e){return e.map((function(e){var t=a.getSectionJsonInfographic(e);return t&&t.type===o.STATIC?(e.stack=[a.getSectionJsonInfographicTable(e)],e):e}))},h}));