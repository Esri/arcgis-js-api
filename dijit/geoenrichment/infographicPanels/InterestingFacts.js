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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["esri/declare","../BaseWidget"],(function(t,e){return t("esri.dijit.geoenrichment.InterestingFacts",[e],{_chartNode:null,_varNode:null,_table:null,_selectedFact:0,_lastSelectedTag:null,createUIExpanded:function(t){this.inherited(arguments),this._chartNode=t.addContent("div",{class:"InterestingFacts_Chart"}),this._varNode=t.addFooter("div",{class:"OneVarMultiComparison_TextColumnHeader"}),this._table=t.addFooter("table",{class:"OneVarMultiComparison_Table"})},updateUIExpanded:function(){var t=this;this.inherited(arguments),this._updateTable();var e=this._chartNode;e.innerHTML="";for(var n=e.clientWidth,a=e.clientHeight,r=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY,l=[],d=0;d<30;d++){var o="FACT"+(d+1).toString(),s=function(e){return t.getValueByName(0,o+e)},c=s("ALIAS");if(!c)break;var u,f=s("DIFF");f>0?u="#66F45B":(f=-f,u="#43D3FF"),f>r&&(r=f),f<i&&(i=f),l.push({text:s("TAG"),absDiff:f,color:u})}function h(r){function i(t){return t+"px"}var l=d3.select(e).selectAll("div").data(r).enter().append("div").style("font-size",(function(t){return t.size+"px"})).style("color",(function(t){return t.color})).style("left",(function(t){return i(t.x+t.x0+n/2)})).style("top",(function(t){return i(t.y+t.y0+a/2)})).style("margin",(function(t){return i(t.padding)})).text((function(t){return t.text})).on("click",(function(e){d(e.tagIndex),t._updateTable()}));function d(e){t._selectedFact=e,l.classed("selected",(function(t){return t.tagIndex===e}))}d(0)}d3.layout.cloud().size([n,a]).words(l.map((function(t,e){return t.size=Math.ceil(8+30*(t.absDiff-i)/(r-i)),t.tagIndex=e,t}))).padding(5).rotate((function(){return 0})).font("Verdana").fontSize((function(t){return t.size})).on("end",h).start()},_updateTable:function(){var t=this.metadata.name,e=(this._selectedFact+1).toString(),n="FACT"+e+"VALUE";d3.select(this._varNode).text(this.getValueByName(0,"FACT"+e+"ALIAS"));var a,r,i=this.data.features,l=(i[0],-1/0),d=1/0;i.forEach((function(t){var e=t.attributes[n];e<d&&(d=e,a=t),e>l&&(l=e,r=t)}));var o=d3.scale.linear().domain([0,1.4*l]).nice().range([0,100]),s=[{width:"50%",cl:"OneVarMultiComparison_TextColumn"},{width:"20%",cl:"OneVarMultiComparison_ValueColumn"},{cl:"OneVarMultiComparison_ChartColumn"}],c=d3.select(this._table).selectAll("tr").data(i);c.enter().append("tr").classed("OneVarMultiComparison_Row",!0).classed("AlternatingRow",(function(t,e){return e%2==1})),c.exit().remove();var u=c.selectAll("td").data((function(e){var a=e.attributes;return[{v:a[t],f:e},{v:a[n],f:e},{v:a[n],f:e}]}));u.enter().append("td"),u.each((function(t,e){var n=d3.select(this);if(s[e].width&&(n=n.style("width",s[e].width)),n=n.classed(s[e].cl,!0),e<2)n.text(t.v);else{var i=n.selectAll("div").data([1]);i.enter().append("div").style("height","9px"),i.transition().style("background-color",(function(){return t.f===a?"#43D3FF":t.f===r?"#66F45B":"#b5b5b5"})).style("width",o(t.v)+"%")}}))}})}));