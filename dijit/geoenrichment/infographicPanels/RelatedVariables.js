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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["esri/declare","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/string","dojo/number","../BaseSelectComparison","../utils/ObjectUtil","../infographicUtils/dom","../infographicUtils/formatVariable","dojo/i18n!esri/nls/jsapi"],(function(e,a,l,s,t,i,r,n,o,d,c){return c=c.geoenrichment.dijit.RelatedVariables,e("esri.dijit.geoenrichment.RelatedVariables",r,{baseClass:"Infographics_RelatedVariables",createUIExpanded:function(e){this.inherited(arguments);var a=e.addHeader("div",{class:"RelatedVariables_Labels"});this.highLabel=s.create("div",{class:"RelatedVariables_HighLabel"},a),this.lowLabel=s.create("div",{class:"RelatedVariables_LowLabel"},a),this.table=e.addContent("table",{class:"RelatedVariables_Table",cellpadding:"2",cellspacing:"0"}),o.createCols(this.table,[.35,.15,.15,.175,.175]);var l=this.table.insertRow(0);this._appendSortHeader(l,c.indicatorCol,0,{class:"RelatedVariables_ColumnHeader"}),this._appendSortHeader(l,c.valueCol,2,{class:"RelatedVariables_ColumnHeader"}),this._appendSortHeader(l,c.difCol,3,{class:"RelatedVariables_ColumnHeader",colspan:"3"});var t=e.addFooter("div",{class:"RelatedVariables_ComparisonDiv"});s.create("div",{class:"RelatedVariables_ComparisonLabel",innerHTML:c.chartLabel},t),this._createComboBox(t)},createUICollapsed:function(e){this.inherited(arguments),this.table=e.addContent("table",{class:"RelatedVariables_Table",cellpadding:"2",cellspacing:"0"}),o.createCols(this.table,[.7,.3]);var a=this.table.insertRow(0);this._appendSortHeader(a,c.indicatorCol,0,{class:"RelatedVariables_ColumnHeader"}),this._appendSortHeader(a,c.valueCol,2,{class:"RelatedVariables_ColumnHeader"})},updateUIExpanded:function(){this.inherited(arguments);var e,s,i,r,h=this._calculate(),b=Math.max(Math.abs(h.minDif),Math.abs(h.maxDif)),u=1;for(s=this.table.rows.length;s<h.indexes.length+u;s++){var m;(e=this.table.insertRow(-1)).className=s>0&&s%2==0?"AlternatingRow RelatedVariables_Row":"RelatedVariables_Row",a.set(e.insertCell(-1),"class","RelatedVariables_TextColumn"),a.set(e.insertCell(-1),"class","RelatedVariables_ValueColumn"),e.insertCell(-1),m=e.insertCell(-1),a.set(m,"class","RelatedVariables_ChartNegative"),a.set(m,"style","padding: 0;"),m=e.insertCell(-1),a.set(m,"class","RelatedVariables_ChartPositive"),a.set(m,"style","padding: 0;")}for(;this.table.rows.length>h.indexes.length+u;)this.table.deleteRow(-1);for(s=0;s<h.rows.length;s++){r=this.getFieldByIndex(h.indexes[h.rows[s][0]]),(e=this.table.rows[s+u]).cells[0].innerHTML=h.rows[s][1],e.cells[1].innerHTML=d(r,h.rows[s][2]);var _,g=h.rows[s][3];if(n.isNumber(g))_=g>0?"+"+d(r,g):g<0?"-"+d(r,-g):"0",e.cells[2].innerHTML=_,e.cells[2].className="RelatedVariables_DifferenceColumn",g>0?(l.add(e.cells[2],"RelatedVariables_DifferenceColumn_Positive"),i=o.pct(g/b),e.cells[3].innerHTML="",e.cells[4].innerHTML="<div class='RelatedVariables_PositiveBar' style='width:"+i+"' />"):g<0?(l.add(e.cells[2],"RelatedVariables_DifferenceColumn_Negative"),i=o.pct(-g/b),e.cells[3].innerHTML="<div class='RelatedVariables_NegativeBar' style='width:"+i+"' />",e.cells[4].innerHTML=""):(e.cells[3].innerHTML="",e.cells[4].innerHTML="");else e.cells[2].innerHTML="",e.cells[3].innerHTML="",e.cells[4].innerHTML=""}r=this.getFieldByIndex(h.highCol),this.highLabel.innerHTML=t.substitute(c.highLabel2,{alias:r.alias})+" ("+d(r,h.highValue)+")",r=this.getFieldByIndex(h.lowCol),this.lowLabel.innerHTML=t.substitute(c.lowLabel2,{alias:r.alias})+" ("+d(r,h.lowValue)+")"},updateUICollapsed:function(){this.inherited(arguments);var e,s,t=this._calculate(),i=1;for(s=this.table.rows.length;s<t.indexes.length+i;s++)(e=this.table.insertRow(-1)).className=s>0&&s%2==0?"AlternatingRow RelatedVariables_Row":"RelatedVariables_Row",a.set(e.insertCell(-1),"class","RelatedVariables_TextColumn"),a.set(e.insertCell(-1),"class","RelatedVariables_ValueColumn");for(;this.table.rows.length>t.indexes.length+i;)this.table.deleteRow(-1);for(s=0;s<t.rows.length;s++){var r=this.getFieldByIndex(t.indexes[t.rows[s][0]]);(e=this.table.rows[s+i]).cells[0].innerHTML=t.rows[s][1],e.cells[1].innerHTML=d(r,t.rows[s][2]),l.remove(e.cells[1],"MaxPct"),l.remove(e.cells[1],"MinPct"),t.rows[s][2]==t.maxPct&&l.add(e.cells[1],"MaxPct"),t.rows[s][2]==t.minPct&&l.add(e.cells[1],"MinPct")}},_calculate:function(){for(var e,a,l=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY,r=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY,d=[],c=this.getDataFields(),h=0;h<c.length;h++){var b,u=this.getFieldByIndex(c[h]),m=this.getValueByName(0,u.name);(b=this._state.selectedComparison>=0?i.round(m-this.getValueByName(this._getComparisonRow(),u.name),u.decimals||0):Number.NaN)>t&&(t=b),b<r&&(r=b);var _=[];_.push(h),_.push(u.alias),_.push(m),_.push(b),d.push(_),m>l&&(l=m,e=c[h]),m<s&&(s=m,a=c[h]),m>n&&(n=m),m<o&&(o=m)}return this._sortRows(d),{rows:d,indexes:c,minDif:r,maxDif:t,minPct:o,maxPct:n,highCol:e,lowCol:a,lowValue:s,highValue:l}}})}));