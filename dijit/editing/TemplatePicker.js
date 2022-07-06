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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/html","dojo/_base/array","dojo/_base/json","dojo/_base/kernel","dojo/has","dojo/query","dojo/sniff","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dijit/_Widget","dijit/_Templated","dojo/data/ItemFileReadStore","dojox/grid/DataGrid","dojox/gfx","../../layers/FeatureLayer","../../symbols/SimpleMarkerSymbol","../../symbols/PictureMarkerSymbol","../../symbols/SimpleFillSymbol","../../symbols/SimpleLineSymbol","./TemplatePickerItem","../../kernel","../../lang","../../request","../_EventedWidget","dojo/i18n!../../nls/jsapi","dojo/text!./templates/TemplatePicker.html"],(function(e,t,i,s,n,o,r,l,a,h,d,c,u,m,_,g,f,p,y,v,I,b,w,L,x,C,S,T,k,V,j){var M=e([k,_,g],{declaredClass:"esri.dijit.editing.TemplatePicker",widgetsInTemplate:!0,templateString:j,featureLayers:null,items:null,grouping:!0,showTooltip:!1,maxLabelLength:0,rows:4,_rows:0,columns:3,surfaceWidth:30,surfaceHeight:30,emptyMessage:"",useLegend:!0,legendCache:{},_uniqueId:{id:0},_assumedCellWidth:90,_initialAutoWidth:300,_initialAutoHeight:200,_ieTimer:150,constructor:function(e,t){(e=e||{}).items||e.featureLayers||console.error("TemplatePicker: please provide 'featureLayers' or 'items' parameter in the constructor"),this._dojo14x=r.version.minor>=4,this._itemWidgets={},e.featureLayers&&e.featureLayers.length&&(this._flChanged=1),this._nls=V.widgets.templatePicker,this.emptyMessage=e.emptyMessage||this._nls&&this._nls.creationDisabled||""},postMixInProperties:function(){this.inherited(arguments),this._preprocess()},startup:function(){if(this.inherited(arguments),"auto"===this.rows&&"auto"===this.columns){var e=u.getContentBox(this.domNode);e.w||(this.domNode.style.width=this._initialAutoWidth+"px"),(!e.h||e.h<=1)&&(this.domNode.style.height=this._initialAutoHeight+"px"),e=u.getContentBox(this.domNode),this._columns=Math.floor(e.w/this._assumedCellWidth)||1}this._applyGridPatches(),this._setGridLayout(),i.connect(this.grid,"onRowClick",this,this._rowClicked),this._setGridData(),this._toggleTooltip(),l("ie")<9&&(this._repaintItems=t.hitch(this,this._repaintItems),setTimeout(this._repaintItems,this._ieTimer))},destroy:function(){this.showTooltip=!1,this._toggleTooltip(),this._clearLegendInfo(),this.featureLayers=this.items=this.grid=this._flItems=this._itItems=this._groupRowIndices=this._selectedCell=this._selectedInfo=this._selectedItem=null,this.inherited(arguments)},getSelected:function(){return this._selectedCell?this._selectedItem:null},clearSelection:function(){var e=this._selectedCell,t=this._selectedInfo;e&&this._rowClicked({cellNode:e,rowIndex:t.selRow,cellIndex:t.selCol})},update:function(e){var t,i=!("auto"!==this.rows||"auto"!==this.columns||!e),n=this.grid;if(i){var o,a=this.domNode,h=a.id,d=r.query("#"+h+".templatePicker div.item")[0];t=u.getContentBox(a),o=(d=d&&d.parentNode)?s.coords(d).w:this._assumedCellWidth,this._columns=Math.floor((t.w-n.views.views[0].getScrollbarWidth())/o),this._columns=this._columns||1}var c=this._rows;this._preprocess();var m=this._rows;this._setGridLayout(),this._setGridData(),m!==c&&n.set("autoHeight",this._rows,!1),i?(n._resize({w:t.w,h:t.h}),n.viewsHeaderNode.style.display="none"):n.update(),this._toggleTooltip();var _=this,g=this.getSelected();g&&n.store.fetch({onComplete:function(e){var t=_._locate(g,_._selectedInfo,e),i=t&&n.views.views[0].getCellNode(t[0],t[1]);i&&_._rowClicked({cellNode:i,rowIndex:t[0],cellIndex:t[1]},!0)}}),l("ie")<9&&setTimeout(this._repaintItems,this._ieTimer);var f=this.featureLayers,p=this.items;f&&f.length||p&&p.length||!n||!this.emptyMessage||n.showMessage(this.emptyMessage)},_eventMap:{"selection-change":!0},onSelectionChange:function(){},_setUseLegendAttr:function(e){var t=this.useLegend;this._started&&t===e||(e?this._flChanged=1:this._clearLegendInfo()),this.useLegend=e},_setFeatureLayersAttr:function(e){var t=this.featureLayers;this._started&&t===e||(this._flChanged=1),this.featureLayers=e},_adjustRowsCols:function(e){if("auto"!==this.rows||"auto"!==this.columns){var t=0;this._rows=this.rows,this._columns=this.columns,"auto"===this.rows?(this.featureLayers?this.grouping?(t=e.length,n.forEach(e,(function(e){t+=Math.ceil(e.length/this.columns)}),this)):(n.forEach(e,(function(e){t+=e.length}),this),t=Math.ceil(t/this.columns)):t=Math.ceil(e.length/this.columns),this._rows=t):"auto"===this.columns&&(this.featureLayers?this.grouping?t=3:(n.forEach(e,(function(e){t+=e.length}),this),t=Math.ceil(t/this.rows)):t=Math.ceil(e.length/this.rows),this._columns=t)}else this._started||(this._rows=!1,this._columns=null,this._autoWidth=!1)},_preprocess:function(){var e;if(this.items&&(this.grouping=!1),this._autoWidth=!1,"auto"!==this.rows&&"auto"!==this.columns||(this._autoWidth=!0),this.featureLayers)if(this.useLegend&&this._flChanged&&(this._legendIndices=[],this._loadingIndices=[],this._legendSymbols={},this._ignoreLegends(),this._loadingLegends=[],clearTimeout(this._legendTimer),this._legendTimer=null,this._processSelectionLayers(),this._flChanged=0),n.every(this.featureLayers,(function(e){return e.loaded})))this.featureLayers=n.filter(this.featureLayers,(function(e){return!(e.hasZ&&!e.enableZDefaults)})),e=this._flItems=this._getItemsFromLayers(this.featureLayers),this._adjustRowsCols(e);else{var t=this.featureLayers.length;n.forEach(this.featureLayers,(function(e){if(e.loaded)t--;else var s=i.connect(e,"onLoad",this,(function(){i.disconnect(s),s=null,--t||this.update()}))}),this)}else e=this._itItems=this._getItemsFromItems(this.items),this._adjustRowsCols(e)},_processSelectionLayers:function(){var e,i,s,o,r,l,a,h={};n.forEach(this.featureLayers,(function(n,r){n.mode===v.MODE_SELECTION&&n._map&&n.url&&n._params.drawMode&&!n.source&&(i=t.trim(n._url.path).replace(/\/(MapServer|FeatureServer).*/gi,"/MapServer").replace(/^https?:\/\//gi,"").toLowerCase(),s=h[i]=h[i]||{},o=s.featureLayers=s.featureLayers||{},l=s.indices=s.indices||[],o[r]=n,l.push(r),e=n._map)})),e&&n.forEach(e.layerIds,(function(n){(n=e.getLayer(n))&&n.url&&(n.getImageUrl||n.getTileUrl)&&n.loaded&&n.version>=10.1&&(i=t.trim(n._url.path).replace(/(\/MapServer).*/gi,"$1"),r=i.replace(/^https?:\/\//gi,"").toLowerCase(),h[r]&&!h[r].mapServiceUrl&&((s=h[r]).mapServiceUrl=i,s.mapServiceLayer=n,this._legendIndices=this._legendIndices.concat(s.indices),(a=this._fetchLegend({pickerInstance:this,info:s},r)).then?(this._loadingIndices=this._loadingIndices.concat(s.indices),this._loadingLegends.push(a)):this._processLegendResponse(a,s)))}),this)},_fetchLegend:function(e,t){var i=M.prototype,s=i.legendCache[t];return s?s.then&&s._contexts.push(e):((s=i.legendCache[t]=T({url:e.info.mapServiceUrl+"/legend",content:{f:"json"},callbackParamName:"callback"}))._contexts=[e],s.addBoth((function(e){if(!s.canceled){i.legendCache[t]=e;var o=s._contexts;s._contexts=null,n.forEach(o,(function(t){var i,o=t.pickerInstance,r=t.info;o._destroyed||(n.forEach(r.indices,(function(e){(i=n.indexOf(o._loadingIndices,e))>-1&&o._loadingIndices.splice(i,1)})),(i=n.indexOf(o._loadingLegends,s))>-1&&o._loadingLegends.splice(i,1),o._processLegendResponse(e,r))}))}}))),s},_clearLegendInfo:function(){clearTimeout(this._legendTimer),this._ignoreLegends(),this._legendIndices=this._loadingIndices=this._legendSymbols=this._loadingLegends=this._legendTimer=null},_ignoreLegends:function(){this._loadingLegends&&n.forEach(this._loadingLegends,(function(e){var t=-1;n.some(e._contexts,(function(e,i){return e.pickerInstance===this&&(t=i),t>-1}),this),t>-1&&e._contexts.splice(t,1)}),this)},_processLegendResponse:function(e,t){var i;!e||e instanceof Error?n.forEach(t.indices,(function(e){(i=n.indexOf(this._legendIndices,e))>-1&&this._legendIndices.splice(i,1)}),this):n.forEach(t.indices,(function(i){var s,o,r,l,a,h=t.featureLayers[i].layerId,d=t.mapServiceUrl+"/"+h+"/images/",c=t.mapServiceLayer._getToken();this._legendSymbols[i]||(o=null,n.some(e.layers,(function(e){return e.layerId==h&&(o=e),!!o})),o&&(r=this._legendSymbols[i]={},n.forEach(o.legend,(function(e){if((l=e.values)&&l.length)for(s=0;s<l.length;s++)r[l[s]]=e;else r.defaultSymbol=e;(a=e.url)&&!e._fixed&&(e._fixed=1,-1===a.search(/https?\:/)&&(e.url=d+a),c&&-1!==e.url.search(/https?\:/)&&(e.url+=(e.url.indexOf("?")>-1?"&":"?")+"token="+c))}))))}),this);var s=this;s._started&&!s._legendTimer&&(s._legendTimer=setTimeout((function(){clearTimeout(s._legendTimer),s._legendTimer=null,s._destroyed||s.update()}),0))},_applyGridPatches:function(){var e,t,s,n=this.grid,o=n.adaptWidth;if(n.adaptWidth=function(){for(e=this.views.views,t=0;s=e[t];t++)m.set(s.headerNode,"display","block");for(o.apply(this,arguments),t=0;s=e[t];t++)m.set(s.headerNode,"display","none")},this._dojo14x){if("auto"!==this.rows&&"auto"!==this.columns)var r=i.connect(n,"_onFetchComplete",this,(function(){i.disconnect(r),this.grid.set("autoHeight",this._rows)}));i.connect(n,"_onDelete",this,this._destroyItems),i.connect(n,"_clearData",this,this._destroyItems),i.connect(n,"destroy",this,this._destroyItems);var l=n.focus;l&&l.findAndFocusGridCell&&(l.findAndFocusGridCell=function(){return!1})}},_setGridLayout:function(){var e,i=function(e){return function(t,i){return this._cellGet(e,t,i)}},s=t.hitch(this,this._cellFormatter),n=[],o=this._columns;for(e=0;e<o;e++)n.push({field:"cell"+e,get:t.hitch(this,i(e)),formatter:s});var r={cells:[n]};if(this.grouping){var l={field:"groupName",colSpan:o,get:t.hitch(this,this._cellGetGroup),formatter:t.hitch(this,this._cellGroupFormatter)};r.cells.push([l])}var a=this.grid,h=p.prototype.rowsPerPage;a.set("rowsPerPage",this._rows>h?this._rows:h),a.set("structure",r)},_setGridData:function(){var e=[];if(this.grouping){this._groupRowIndices=[];var t,i,s=this._columns;n.forEach(this._flItems,(function(n,o){e.push({});var r=0===o?0:t+i+1;this._groupRowIndices.push(r),t=r,i=Math.ceil(n.length/s),e=e.concat(this._getStoreItems(n))}),this)}else this.featureLayers?(n.forEach(this._flItems,(function(t){e=e.concat(t)})),e=this._getStoreItems(e)):e=this._getStoreItems(this._itItems);var o=new f({data:{items:e}});this.grid.setStore(o)},_toggleTooltip:function(){if(this.showTooltip){if(this.tooltip)return;this.tooltip=c.create("div",{class:"esriMapTooltip"},this.domNode),this.tooltip.style.display="none",this.tooltip.style.position="fixed";var e=this.grid;this._mouseOverConnect=i.connect(e,"onCellMouseOver",this,this._cellMouseOver),this._mouseOutConnect=i.connect(e,"onCellMouseOut",this,this._cellMouseOut)}else this.tooltip&&(i.disconnect(this._mouseOverConnect),i.disconnect(this._mouseOutConnect),c.destroy(this.tooltip),this.tooltip=null)},_rowClicked:function(e,t){var i=e.cellNode,s=e.rowIndex,n=e.cellIndex,o=this._getCellInfo(i,s,n);if(o){var r=this.grid.store;r.getValue(o,"loadingCell")||(this._selectedCell&&d.remove(this._selectedCell,"selectedItem"),i!==this._selectedCell?(d.add(i,"selectedItem"),this._selectedCell=i,this._selectedItem={featureLayer:r.getValue(o,"layer"),type:r.getValue(o,"type"),template:r.getValue(o,"template"),symbolInfo:r.getValue(o,"symbolInfo"),item:this._getItem(o)},this._selectedInfo={selRow:s,selCol:n,index1:r.getValue(o,"index1"),index2:r.getValue(o,"index2"),index:r.getValue(o,"index")}):this._selectedCell=this._selectedInfo=this._selectedItem=null,t||this.onSelectionChange())}},_locate:function(e,t,i){var s,o=this.grid.store,r=new Array(this._columns),l=t.index1,a=t.index2,h=t.index,d=e.item;return n.some(i,(function(e,t){return n.some(r,(function(i,n){var r=o.getValue(e,"cell"+n);return!(!r||(d?h!==o.getValue(r,"index"):l!==o.getValue(r,"index1")||a!==o.getValue(r,"index2")))&&(s=[t,n],!0)}))})),s},_getCellInfo:function(e,t,i){if(e){var s=this.grid,n=s.getItem(t);return s.store.getValue(n,"cell"+i)}},_getItem:function(e){var t=this.items;if(t)return t[this.grid.store.getValue(e,"index")]},_cellMouseOver:function(e){var t=this.tooltip,i=e.cellNode,n=e.rowIndex,o=e.cellIndex,r=this._getCellInfo(i,n,o);if(t&&r){var l=this.grid.store,a=l.getValue(r,"template"),h=l.getValue(r,"type"),d=l.getValue(r,"symbolInfo"),c=l.getValue(r,"layer"),u=this._getItem(r),_=u&&u.label+(u.description?": "+u.description:"")||a&&a.name+(a.description?": "+a.description:"")||h&&h.name||d&&d.label+(d.description?": "+d.description:"")||(c&&c.name+": ")+"Default";t.style.display="none",t.innerHTML=_;var g=s.coords(i.firstChild);m.set(t,{left:g.x+"px",top:g.y+g.h+5+"px"}),t.style.display=""}},_cellMouseOut:function(){var e=this.tooltip;e&&(e.style.display="none")},_destroyItems:function(){var e,t=this._itemWidgets;for(e in t)t[e]&&(t[e].destroy(),delete t[e])},_repaintItems:function(){var e,t=this._itemWidgets;for(e in t){var i=t[e];i&&i._repaint(i._surface)}},_getStoreItems:function(e){for(var i=this._uniqueId,s=(e=n.map(e,(function(e){return t.mixin({surfaceId:"tpick-surface-"+i.id++},e)}))).length,o=0,r={},l=0,a=[],h=!0,d=this._columns;o<s;)h=!0,r["cell"+l]=e[o],o++,++l%d==0&&(h=!1,a.push(r),r={},l=0);return h&&s&&a.push(r),a},_getItemsFromLayers:function(e){var t=[];return n.forEach(e,(function(e,i){t.push(this._getItemsFromLayer(e,i))}),this),t},_getItemsFromLayer:function(e,i){var s=[];if(this.useLegend&&n.indexOf(this._loadingIndices,i)>-1)return[{label:this._nls&&this._nls.loading||"",symbol:null,layer:e,type:null,template:null,index1:i,index2:0,loadingCell:1}];var r=[];r=r.concat(e.templates),n.forEach(e.types,(function(e){var t=e.templates;n.forEach(t,(function(t){t._type_=e})),r=r.concat(t)})),r=n.filter(r,S.isDefined);var l=e.renderer;if(l){var a=l.declaredClass.replace("esri.renderer.","");if(r.length>0)n.forEach(r,(function(t){var r,d=t.prototype;if(d)if(r=this._isUnclassedRenderer(l)?l.infos[0].symbol:l.valueExpression?this._createSimpleSymbol(e):l.getSymbol(d)||this._createSimpleSymbol(e)){var c,u,m=null;if(h("ie")<9||!t.thumbnail||!t.thumbnail.imageData){if(this.useLegend&&n.indexOf(this._legendIndices,i)>-1){if(u=this._legendSymbols&&this._legendSymbols[i])switch(a){case"SimpleRenderer":m=u.defaultSymbol;break;case"UniqueValueRenderer":n.some(l.infos,(function(e){return e.symbol===r&&(m=u[e.value]),!!m}));break;case"ClassBreaksRenderer":n.some(l.infos,(function(e){return e.symbol===r&&(m=u[e.maxValue]),!!m}))}m&&((c=o.fromJson(o.toJson(b.defaultProps))).url=m.url,c.imageData=m.imageData,c.contentType=m.contentType,c.width=m.width,c.height=m.height,S.isDefined(c.width)&&S.isDefined(c.height)||(c.width=15,c.height=15),m=new b(c))}}else m=new b(t.thumbnail);s.push({label:this._trimLabel(t.name),symbol:m||r,legendOverride:!!m,layer:e,type:t._type_,template:t,index1:i,index2:s.length})}else switch(a){case"HeatmapRenderer":s.push({label:this._trimLabel(t.name),symbol:new I,legendOverride:!!m,layer:e,type:t._type_,template:t,index1:i,index2:s.length})}delete t._type_}),this);else{var d=[];switch("TemporalRenderer"===a&&(l=l.observationRenderer)&&(a=l.declaredClass.replace("esri.renderer.","")),a){case"SimpleRenderer":d=[{symbol:l.symbol,label:l.label,description:l.description}];break;case"UniqueValueRenderer":case"ClassBreaksRenderer":d=l.infos}s=n.map(d,(function(s,n){return{label:this._trimLabel(s.label),description:s.description,symbolInfo:t.mixin({constructor:function(){}},s),symbol:s.symbol,layer:e,index1:i,index2:n}}),this)}}return s},_isUnclassedRenderer:function(e){return!!((e.hasVisualVariables("sizeInfo",!1)||e.hasVisualVariables("colorInfo",!1)||e.hasVisualVariables("opacityInfo",!1))&&e.addBreak&&e.infos&&1===e.infos.length)},_createSimpleSymbol:function(e){var t;switch(e.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":t=new I;break;case"esriGeometryPolyline":t=new L;break;case"esriGeometryPolygon":t=new w;break;default:e.hasXYFootprint&&e.hasXYFootprint()&&(t=new w)}return t},_getItemsFromItems:function(e){return n.map(e,(function(e,i){return(e=t.mixin({index:i},e)).label=this._trimLabel(e.label),e}),this)},_trimLabel:function(e){var t=this.maxLabelLength;return t&&e&&e.length>t&&(e=e.substr(0,t)+"..."),e||""},_cellGet:function(e,t,i){return i?this.grid.store.getValue(i,"cell"+e):""},_cellFormatter:function(e){if(e){var t=this._itemWidgets,i=this.grid.store,s=i.getValue(e,"surfaceId"),n=t[s];return n||(n=t[s]=new x({id:s,label:i.getValue(e,"label"),symbol:i.getValue(e,"symbol"),legendOverride:i.getValue(e,"legendOverride"),surfaceWidth:this.surfaceWidth,surfaceHeight:this.surfaceHeight,template:i.getValue(e,"template")})),n||""}return""},_cellGetGroup:function(e,t){if(!this._groupRowIndices)return"";var i,s=n.indexOf(this._groupRowIndices,e);return t&&-1!==s&&(i=this.featureLayers[s])&&(this.groupLabelFunction?this.groupLabelFunction(i):i.name)||""},_cellGroupFormatter:function(e){return e?"<div class='groupLabel'>"+e+"</div>":""}});return l("extend-esri")&&t.setObject("dijit.editing.TemplatePicker",M,C),M}));