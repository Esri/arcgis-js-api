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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/on","dijit/_WidgetBase","dijit/_TemplatedMixin","./TriStateItem","./FlowList"],function(e,t,i,s,n,l,o,a,c,d){var h=e(null,{createPresentation:function(e,t,o,a,d){var h=this,r=s.create("div",{class:"selectableLegendRoot"},o),u=this.canSelect()&&new c(r,{class:"dijitInline selectableLegendRootCheckbox"}),f=s.create("div",{class:"dijitInline selectableLegendRootColorRect"});e.fill&&(f.style.backgroundColor=e.fill),e.stroke&&(f.style.border="1px solid "+e.stroke,i.add(f,"selectableLegendRootColorRectWithBorder"));var m=s.create("div",{innerHTML:e.label,class:"dijitInline selectableLegendRootLabel TrimWithEllipses"});return this.isRtlPlacement()?(s.place(m,r),s.place(f,r)):(s.place(f,r),s.place(m,r)),u&&(u.set("checked",!e.unchecked),u.onClick=function(t){h.onSelectionChanged(e.label,t.checked)}),this.getItemMaxWidth()&&n.set(r,"width",this.getItemMaxWidth()+"px"),this.setItemWidth(n.get(r,"width")),l(m,"click",function(t){t.stopPropagation(),h.onLabelClicked(e,r)}),r},onSelectionChanged:function(e,t){},onLabelClicked:function(e,t){},canSelect:function(){},isRtlPlacement:function(){},getItemMaxWidth:function(){},setItemWidth:function(e){}});return e([o,a],{templateString:"<div class='esriGESelectableLegend'><div data-dojo-attach-point='listDiv'></div></div>",series:null,allowSelect:!0,showSeriesData:!1,isRtlPlacement:!1,keepItemsTheSameWidth:!1,_isCollectingWidthsFlag:!1,list:null,_uncheckedSeriesHash:null,_itemMaxWidth:0,postCreate:function(){var e=this;this._uncheckedSeriesHash={};var i=t.mixin(new h,{onSelectionChanged:function(t,i){i?delete e._uncheckedSeriesHash[t]:e._uncheckedSeriesHash[t]=!0,e.onSeriesExclusionChanged(e._uncheckedSeriesHash)},onLabelClicked:function(t,i){e.showSeriesData?e.onPointLabelClickedAt(void 0!==t.unsortedIndex?t.unsortedIndex:e.list.items.indexOf(t),i):e.onSeriesLabelClickedAt(e.list.items.indexOf(t),i)},canSelect:function(){return e.allowSelect},isRtlPlacement:function(){return e.isRtlPlacement},getItemMaxWidth:function(){return e._isCollectingWidthsFlag?0:e._itemMaxWidth},setItemWidth:function(t){e._itemMaxWidth=Math.max(e._itemMaxWidth||0,t||0)}});this.list=new d({class:"selectableLegendFlowList",itemRenderer:i},this.listDiv),this.own(this.list)},onSeriesLabelClickedAt:function(e,t){},onPointLabelClickedAt:function(e,t){},onSeriesExclusionChanged:function(e){},resetExclusion:function(){this._uncheckedSeriesHash={}},refresh:function(){var e=[],t=this;this.showSeriesData?this.series&&this.series[0]&&this.series[0].data.forEach(function(t){var i={label:t.name||"",fill:t.fill,stroke:t.stroke&&t.stroke.color,unsortedIndex:t.unsortedIndex};e.push(i)}):this.series&&this.series.forEach(function(i){var s={label:i.name,fill:i.data[0].fill,stroke:i.data[0].stroke&&i.data[0].stroke.color,unchecked:!0===t._uncheckedSeriesHash[i.name]};e.push(s)}),this._itemMaxWidth=0,this._isCollectingWidthsFlag=!0,this.list.setItems(e),this._isCollectingWidthsFlag=!1,this.keepItemsTheSameWidth&&this.list.refresh()}})});