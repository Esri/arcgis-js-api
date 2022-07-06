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

define(["dojo/_base/declare","dojo/aspect","dojo/on","dojo/string","dojo/dom-class","dojo/dom-construct","dojo/dom-style","./supportClasses/ResizeColumnRowTooltipVisualizer","./supportClasses/ResizeEngine","esri/dijit/geoenrichment/utils/PageUnitsConverter","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/MouseUtil","esri/dijit/geoenrichment/utils/TooltipUtil","dojo/i18n!esri/nls/jsapi"],(function(e,i,t,s,n,o,a,l,r,d,h,u,z,g){return g=g.geoenrichment.dijit.ReportPlayer.ValueField,e(null,{resizable:!0,hasAllSidesSizers:!1,showSizeLabel:!1,showSizeLabelsInAllRelatedCells:!1,showColumnRowSizeTooltip:!1,showSizersOnFocus:!1,createSizersOnDemand:!0,resizeSnapNode:null,resizeRestrictNode:null,allowHorizontalResizing:!0,allowVerticalResizing:!0,sizeLabel:null,_tooltipHandles:null,postCreate:function(){this._tooltipHandles=[],this.inherited(arguments),this.resizable&&this._addCreateSizersTrigger()},_isBeingResized:!1,_isBeingResizedDelayed:!1,_sizers:null,isBeingResized:function(){return!(!this.resizable||!this._sizers)&&(this._isBeingResized||this._sizers.some((function(e){return u.isMouseOver(e)}))||!this.hasAllSidesSizers&&this._sizers.some((function(e){return a.get(e,"opacity")>0})))},wasResizedRecently:function(){return this.isBeingResized()||this._isBeingResizedDelayed},_addCreateSizersTrigger:function(){var e=this;this.createSizersOnDemand||this._updateSizers(),t(this.domNode,"mouseover",(function(){e._updateSizers()}))},_createSizers:function(){var e,i=this;this.resizable&&!this._sizers&&(e=this.hasAllSidesSizers?r.ALL_DIRECTIONS:[this.allowHorizontalResizing?"e":null,this.allowVerticalResizing?"s":null].filter((function(e){return!!e})),this._sizers=e.map((function(e){var t=o.create("div",null,i.domNode);if(i.hasAllSidesSizers){var s=i.showSizersOnFocus?"valueField_allSidesSizer_showOnFocus":"valueField_allSidesSizer";n.add(t,s+" "+e+"_fieldSizer")}else"e"===e?(n.add(t,"valueField_widthSizer"),i._tooltipHandles.push(z.setTooltipToNode(t,g.dragToChangeWidth))):(n.add(t,"valueField_heightSizer"),i._tooltipHandles.push(z.setTooltipToNode(t,g.dragToChangeHeight)));return t._dir=e,t})),this._addResizeHandlers())},unitTesting_getSizerByDirection:function(e){return this._updateSizers(),this._sizers.filter((function(i){return i._dir===e}))[0]},_addResizeHandlers:function(){var e=this;this._sizers.forEach((function(i){t(i,"mousedown",(function(t){t.preventDefault(),t.stopPropagation(),e._setIsBeingResized(!0),e.stopEdit&&e.stopEdit(),r.trackSizer({dir:i._dir,w:e.getWidth(),h:e.getHeight(),angle:e.getAngle(),supportsCtrlShift:e.hasAllSidesSizers,getThisBox:function(){return h.noTransformPosition(e.domNode)},getThisFullBox:function(){return e.getBBox({noTransformation:!0})},getSnapNodeBoxes:function(){if(!e.hasAllSidesSizers)return null;var i=e._getResizeSnapElements()||[];return i=i.map((function(e){return{box:e.getBBox({noTransformation:!0}),tolerance:3}})),e.resizeSnapNode&&i.push({box:h.noTransformPosition(e.resizeSnapNode),tolerance:7}),i.length?i:null},getRestrictNodeBox:function(){return e.hasAllSidesSizers?e.resizeRestrictNode&&h.noTransformPosition(e.resizeRestrictNode):null},onPreChange:function(){e._onManualSizePreChange()},onSizeChanged:function(){e._onManualSizeChange(i._dir),e.onManualSizeChange(),e._updateSizers()},onWidthChanged:function(i){e.onManualWidthChange(i)},onHeightChanged:function(i){e.onManualHeightChange(i)},setWidth:function(i){e.parentGrid&&e.parentGrid.layoutDefaults.columnMinWidth&&(i=Math.max(i,e.parentGrid.layoutDefaults.columnMinWidth)),e.setWidth(i)},setHeight:function(i){e.parentGrid&&e.parentGrid.layoutDefaults.rowMinHeight&&(i=Math.max(i,e.parentGrid.layoutDefaults.rowMinHeight)),e.setHeight(i)},applyShift:function(i,t){e.onNeedShiftPositionFromResizing(i,t)},onEnd:function(){e._setIsBeingResized(!1)},onSnapped:function(i){e.onResizeSnapped(i)}})}))})),this.hasAllSidesSizers&&this.own(i.after(this,"onSizeChanged",(function(){(h.isNodeInLayout(e._sizers[0])||h.isNodeInLayout(e._sizers[1]))&&e._updateSizers()})))},_getResizeSnapElements:function(){},_setIsBeingResized:function(e){e?(this._isBeingResized=!0,this._isBeingResizedDelayed=!0,n.add(this.domNode,"isBeingResized"),this.parentGrid&&n.add(this.parentGrid.domNode,"isBeingResized")):(this._isBeingResized&&this._onManualSizeChangeEnd(),this._isBeingResized=!1,n.remove(this.domNode,"isBeingResized"),this.parentGrid&&n.remove(this.parentGrid.domNode,"isBeingResized"),h.stealFocus(),setTimeout(function(){this._isBeingResizedDelayed=!1}.bind(this),100)),this._tooltipHandles.forEach((function(i){e?i.suspend():i.resume()}))},updateSizers:function(){this._updateSizers()},_updateSizers:function(){if(this._createSizers(),this._sizers&&this.hasAllSidesSizers){var e=this;this.domNode.clientHeight>5?i():setTimeout(i,100)}function i(){var i=e.getAngle();e._sizers.forEach((function(t){r.positionSizer({sizer:t,dir:t._dir,w:e.getWidth(),h:e.getHeight(),angle:i})}))}},_onManualSizePreChange:function(){this.onManualSizePreChange()},_onManualSizeChange:function(e){this.inherited(arguments),this.showSizeLabel&&this._showAndUpdateSizeLabel(),this.showSizeLabelsInAllRelatedCells&&this._showAndUpdateRelatedCellsSizeLabels(),this.showColumnRowSizeTooltip&&("e"===e?l.showColumnTooltip(this):"s"===e&&l.showRowTooltip(this))},_onManualSizeChangeEnd:function(){h.hide(this.sizeLabel),this.showSizeLabelsInAllRelatedCells&&this._hideRelatedCellsSizeLabels(),this.showColumnRowSizeTooltip&&l.removeTooltip(),this.onManualSizeChangeEnd()},tryUpdateSizeLabel:function(){h.isNodeInLayout(this.sizeLabel)&&(this.showSizeLabel&&this._showAndUpdateSizeLabel(),this.showSizeLabelsInAllRelatedCells&&this._showAndUpdateRelatedCellsSizeLabels())},_showAndUpdateSizeLabel:function(){if(this.domNode){this.sizeLabel=this.sizeLabel||o.create("div",{class:"elementSizeLabel"},this.domNode),h.show(this.sizeLabel);var e=this.domNode.clientWidth,i=this.domNode.clientHeight,t=d.convert(e,"px",this.viewModel.getUnits()),n=d.convert(i,"px",this.viewModel.getUnits());this.sizeLabel.innerHTML=s.substitute(this.viewModel.provideUnits(g.elementSizeFormat),{width:this.viewModel.roundForUnits(t),height:this.viewModel.roundForUnits(n)});var a=this.sizeLabel.clientWidth,l=this.sizeLabel.clientHeight;this.sizeLabel.style.left=Math.round((e-a)/2)+"px",this.sizeLabel.style.top=Math.round(i>20?(i-l)/2:-l-5)+"px"}},_showAndUpdateRelatedCellsSizeLabels:function(){this._getRelatedCells().forEach((function(e){e._showAndUpdateSizeLabel()}))},_hideRelatedCellsSizeLabels:function(){this._getRelatedCells().forEach((function(e){h.hide(e.sizeLabel)}))},_getRelatedCells:function(){return this.parentGrid?this.parentGrid.getCells().filter((function(e){return e!==this}),this):[]},onManualSizePreChange:function(){},onManualSizeChangeEnd:function(){},onManualSizeChange:function(){},onManualWidthChange:function(e){},onManualHeightChange:function(e){},onNeedShiftPositionFromResizing:function(e,i){},onResizeSnapped:function(e){}})}));