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

define(["dojo/_base/declare","dojo/on","dojo/dom-class","dojo/dom-construct","dojox/html/entities","../BaseWidget","../infographicUtils/dom","dojo/i18n!esri/nls/jsapi"],(function(e,t,a,i,n,s,o,l){function r(e,t){return"TOP"+(e+1).toString()+t}function d(e){return"Tapestry_LifeMode"+e.match(/\d+/)[0]}function _(e){return"https://links.esri.com/tapestry/segment"+e}return l=l.geoenrichment.dijit.Tapestry,e(s,{baseClass:"Infographics_Tapestry",_mainTable:null,_detailsTable:null,_noSegmentsDiv:null,_openRowIndex:-1,createUIExpanded:function(e){this.inherited(arguments),this._createUI(e)},createUICollapsed:function(e){this.inherited(arguments),this._createUI(e)},_createUI:function(e){var t=this._mainTable=e.addContent("table",{class:"Tapestry_Main_Table"});this.expanded?o.createCols(t,[.25,.4,.35]):o.createCols(t,[.55,.45])},updateUIExpanded:function(){this.inherited(arguments),this._updateUI()},updateUICollapsed:function(){this.inherited(arguments),this._updateUI()},_updateUI:function(){var e=this;this._toMainView();for(var n=0,s=0;s<3;s++)this._getValue(s,"NAME")&&n++;for(var o=this._mainTable;o.rows.length;)o.deleteRow(-1);if(n){var r,_;for(s=0;s<n;s++)T(r=o.insertRow(-1),s),a.add(r,"Tapestry_LifeMode"),this.expanded&&p(),p(),a.add(_,"Tapestry_Main_Name Tapestry_Main_Button LifeModeColor"),p(),a.add(_,"Tapestry_Main_Pct Tapestry_Main_Button LifeModeColor"),this.expanded&&(p(),a.add(_,"Tapestry_Main_Arrow Tapestry_Main_Button"),i.create("div",null,_));var c=this.expanded?1:0,u=this.expanded?2:1;for(s=0;s<n;s++){var h=o.rows[s].cells;this.expanded&&f(h[0]),h[c].innerHTML="<span class='Tapestry_Main_Label'>"+this._getValue(s,"NAME")+"</span><br><span class='Tapestry_Main_Value'>"+this._formatValue(s,"VALUE")+" "+l.hhLabel+"</span>",h[u].innerHTML="<span class='Tapestry_Main_Pct_Value'>"+this._formatValue(s,"PRC")+"</span><br><span class='Tapestry_Main_Pct_Label'>"+l.prtHhLabel+"</span>"}}else this._showNoSegementsInfo();function p(){_=r.insertCell(-1)}function T(a,i){t(a,"click",(function(){e._toDetailViewForRow(a,i)}))}function f(t){var n=e._getValue(s,"CODE"),o=n.length<3?"0"+n:n;a.add(t,"Tapestry_Main_Button Tapestry_Details_Image code_"+o+" LifeModeBorder "+d(n));var l=i.create("div",null,t);i.create("span",{class:"Tapestry_thumbnail_Code LifeModeBorder "+d(n),innerHTML:n},l)}},_toDetailViewForRow:function(e,t){this._openRowIndex===t?(this._openRowIndex=-1,this._toMainView()):(this._openRowIndex=t,this._toDetailView(e,t))},_toMainView:function(){for(var e=0;e<this._mainTable.rows.length;e++)a.remove(this._mainTable.rows[e],"clicked");this._detailsTableRow&&(i.destroy(this._detailsTableRow),this._detailsTable=null,this._detailsTableRow=null),this._noSegmentsDiv&&i.destroy(this._noSegmentsDiv),this._noSegmentsDiv=null},_toDetailView:function(e,t){this.expanded?(this._toMainView(),a.add(e,"clicked"),this._createDetailsTable(e),this._createDetailedViewExpanded(t)):window.open(_(this._getValue(t,"NUM")),"_blank")},_createDetailsTable:function(e){this._detailsTableRow=i.create("tr",null,e,"after");var t=i.create("td",{colSpan:"4"},this._detailsTableRow);this._detailsTable=i.create("table",{class:"Tapestry_Details_Table"},t),o.createCols(this._detailsTable,[.35,.35,.3])},_createDetailedViewExpanded:function(e){var s,o,r=this,c=this._detailsTable;function u(){s=c.insertRow(-1)}function h(e){o=s.insertCell(-1),e&&a.add(o,e)}function p(e,t,a){var s={};return e&&(s.class=e),null!=t&&(s.innerHTML=n.encode(t+"")),i.create("div",s,a||o)}function T(t){return r._getValue(e,t)}var f=T("CODE");function w(t,a){h("Tapestry_Details_FieldCell");var i=p("Tapestry_Details_FieldCellContent");p("Tapestry_Details_Label",t,i),p("Tapestry_Details_SubLabel",function(t){return r._formatValue(e,t)}(a),i)}a.add(c,d(f)),f.length<3&&(f="0"+f),u(),w(l.hhTypeLabel,"TYPE"),w(l.medianAgeLabel,"AGE"),h("Tapestry_Details_Image household code_"+f),o.rowSpan=2,p(),p(null,T("TYPE")),u(),w(l.employmentLabel,"JOB"),w(l.educationLabel,"EDUCATION"),u(),w(l.incomeLabel,"INCOME"),w(l.raceEthnicityLabel,"RACE"),h("Tapestry_Details_Image housing code_"+f),o.rowSpan=2,p(),p(null,T("HOUSE")),u(),h(),o.colSpan=2,p("Tapestry_Details_LinkIcon dijitInline");var b=p("Wizard_Link Tapestry_Details_Link dijitInline",l.viewFullSegmentProfile),m=_(T("NUM"));t(b,"click",(function(){window.open(m,"_blank")}))},isDetailedViewOpen:function(){return this._openRowIndex>=0},getOpenDetailedViewRowIndex:function(){return this._openRowIndex},openDetailedViewAt:function(e){this._toDetailViewForRow(this._mainTable.rows[e],e)},collapseContent:function(){this._openRowIndex=-1,this._toMainView()},_showNoSegementsInfo:function(){this._noSegmentsDiv=i.create("div",{class:"esriGEAbsoluteStretched esriGEContentVerticalAlignMiddle Tapestry_noSegmentsDiv",innerHTML:l.noSegmentsFound},this._mainTable,"after")},_getValue:function(e,t){return this.getValueByName(0,r(e,t),!0)},_formatValue:function(e,t){return this.formatByName(0,r(e,t),!0)}})}));