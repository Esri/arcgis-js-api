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

define(["../../declare","./BaseWidget","dojo/_base/lang","dojo/on","require","dojo/dom-construct","dojo/dom-attr","dojo/dom-class","dojo/query","dojo/string","dijit/Tooltip","dojo/i18n!../../nls/jsapi","./dom","./utils","./formatVariable"],function(t,e,n,a,r,i,o,d,l,s,c,u,f,h,p){return t("esri.dijit.geoenrichment.InterestingFacts",[e],{_chartNode:null,_varNode:null,_table:null,_selectedFact:0,_lastSelectedTag:null,_updateTable:function(){var t=this.metadata.name,e=(this._selectedFact+1).toString(),n="FACT"+e+"VALUE";d3.select(this._varNode).text(this.getValueByName(0,"FACT"+e+"ALIAS"));var a,r,i=this.data.features,o=(i[0],-1/0),d=1/0;i.forEach(function(t){var e=t.attributes[n];e<d&&(d=e,a=t),e>o&&(o=e,r=t)});var l=d3.scale.linear().domain([0,1.4*o]).nice().range([0,100]),s=[{width:"50%",cl:"OneVarMultiComparison_TextColumn"},{width:"20%",cl:"OneVarMultiComparison_ValueColumn"},{cl:"OneVarMultiComparison_ChartColumn"}],c=d3.select(this._table).selectAll("tr").data(i);c.enter().append("tr").classed("OneVarMultiComparison_Row",!0).classed("AlternatingRow",function(t,e){return e%2==1}),c.exit().remove();var u=c.selectAll("td").data(function(e){var a=e.attributes;return[{v:a[t],f:e},{v:a[n],f:e},{v:a[n],f:e}]});u.enter().append("td"),u.each(function(t,e){var n=d3.select(this);if(s[e].width&&(n=n.style("width",s[e].width)),n=n.classed(s[e].cl,!0),e<2)n.text(t.v);else{var i=n.selectAll("div").data([1]);i.enter().append("div").style("height","9px"),i.transition().style("background-color",function(){return t.f===a?"#43D3FF":t.f===r?"#66F45B":"#b5b5b5"}).style("width",l(t.v)+"%")}})},updateUIExpanded:function(){function t(t){return n.getValueByName(0,c+t)}function e(t){function e(t){return t+"px"}function o(t){n._selectedFact=t,d.classed("selected",function(e){return e.tagIndex===t})}var d=d3.select(a).selectAll("div").data(t).enter().append("div").style("font-size",function(t){return t.size+"px"}).style("color",function(t){return t.color}).style("left",function(t){return e(t.x+t.x0+r/2)}).style("top",function(t){return e(t.y+t.y0+i/2)}).style("margin",function(t){return e(t.padding)}).text(function(t){return t.text}).on("click",function(t){o(t.tagIndex),n._updateTable()});o(0)}var n=this;n.inherited(arguments),n._updateTable();var a=n._chartNode;a.innerHTML="";for(var r=a.clientWidth,i=a.clientHeight,o=Number.NEGATIVE_INFINITY,d=Number.POSITIVE_INFINITY,l=[],s=0;s<30;s++){var c="FACT"+(s+1).toString();if(!t("ALIAS"))break;var u,f=t("DIFF");f>0?u="#66F45B":(f=-f,u="#43D3FF"),f>o&&(o=f),f<d&&(d=f),l.push({text:t("TAG"),absDiff:f,color:u})}d3.layout.cloud().size([r,i]).words(l.map(function(t,e){return t.size=Math.ceil(8+30*(t.absDiff-d)/(o-d)),t.tagIndex=e,t})).padding(5).rotate(function(){return 0}).font("Verdana").fontSize(function(t){return t.size}).on("end",e).start()},createUIExpanded:function(t){this.inherited(arguments),this._chartNode=t.addContent("div",{class:"InterestingFacts_Chart"}),this._varNode=t.addFooter("div",{class:"OneVarMultiComparison_TextColumnHeader"}),this._table=t.addFooter("table",{class:"OneVarMultiComparison_Table"})}})});