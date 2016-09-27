// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/connect","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../geometry/Point","../tasks/query","./RenderMode","./GridLayout"],function(e,t,i,r,s,n,a,o,u,l){var h=e([u],{declaredClass:"esri.layers._OnDemandMode",constructor:function(e){this.featureLayer=e,this._featureMap={},this._queryErrorHandler=i.hitch(this,this._queryErrorHandler)},initialize:function(e){this.inherited(arguments);var t=this.featureLayer,i=t._srInfo;this._gridLayer=new l(new a(i?i.valid[0]:e.extent.xmin,i?i.valid[1]:e.extent.ymax,e.spatialReference),{width:t._tileWidth,height:t._tileHeight},{width:e.width,height:e.height},i),this._cellMap={},this._gridLayer.setResolution(e.extent)},startup:function(){this._ioQueue=[],this.featureLayer.suspended||(this._zoomHandler(),this._enableConnectors())},propertyChangeHandler:function(e){this._init&&(2>e?this._zoomHandler():console.log("FeatureLayer: layer in on-demand mode does not support time definitions. Layer id = "+this.featureLayer.id+", Layer URL = "+this.featureLayer.url))},destroy:function(){this._disableConnectors(),this.inherited(arguments)},drawFeature:function(e){var t=this._gridLayer,i=e.geometry,r=[];if(i){r=t.getCellsInExtent("point"===i.type?{xmin:i.x,ymin:i.y,xmax:i.x,ymax:i.y}:i.getExtent(),!1).cells;var s,n,a,o,u,l=this._cellMap,h=e.attributes[this.featureLayer.objectIdField];for(s=0;s<r.length;s++)n=r[s],a=n.latticeID,o=n.row,u=n.col,a?n=l[a]=l[a]||n:(l[o]=l[o]||{},n=l[o][u]=l[o][u]||n),n.features=n.features||[],n.features.push(e),this._addFeatureIIf(h,e),this._incRefCount(h)}},suspend:function(){this._init&&this._disableConnectors()},resume:function(){this._init&&(this._enableConnectors(),this._zoomHandler())},refresh:function(){this._zoomHandler()},_enableConnectors:function(){var e=this.map;this._zoomConnect=t.connect(e,"onZoomEnd",this,this._zoomHandler),this._panConnect=t.connect(e,"onPanEnd",this,this._panHandler),this._resizeConnect=t.connect(e,"onResize",this,this._panHandler)},_disableConnectors:function(){t.disconnect(this._zoomConnect),t.disconnect(this._panConnect),t.disconnect(this._resizeConnect)},_zoomHandler:function(){this._processIOQueue(!0);var e=this.featureLayer,t=this.map;if(!e.suspended){e._fireUpdateStart(),this._clearIIf();var i=e._trackManager;i&&i.clearTracks(),this._cellMap={},this._gridLayer.setResolution(t.extent),this._sendRequest()}},_panHandler:function(){this.featureLayer._fireUpdateStart();var e=this.featureLayer._resized,t=e?arguments[0]:null;e&&this._gridLayer.setMapState(t,this.map.width,this.map.height),this._sendRequest(t)},_getRequestId:function(e,t){var i="_"+e.name+e.layerId+e._ulid+"_"+t.resolution+"_"+(t.latticeID||t.row+"_"+t.col);return i.replace(/[^a-zA-Z0-9\_]+/g,"_")},_sendRequest:function(e){this._exceeds=!1;var t=this.featureLayer,i=this.map,s=e||i.extent,n=this._gridLayer.getCellsInExtent(s,t.latticeTiling),a=n.cells;if(!t.isEditable()){var u=this._cellMap;a=r.filter(a,function(e){if(e.lattice){if(u[e.latticeID])return!1}else if(u[e.row]&&u[e.row][e.col])return!1;return!0})}var l,h,d,c,_=t.getOutFields(),f=t.getDefinitionExpression(),p=t._getOffsettedTE(t._mapTimeExtent),y=t.supportsAdvancedQueries?t.getOrderByFields():null,m=t._usePatch,g=this._ioQueue,v=this,L=this._drawFeatures;for(this._pending=this._pending||0,l=0;l<a.length;l++){h=a[l],d=new o,d.geometry=h.extent||h.lattice,d.outFields=_,d.where=f,t.latticeTiling&&h.extent&&(d.spatialRelationship=o.SPATIAL_REL_CONTAINS),d.returnGeometry=!0,d.timeExtent=p,t._ts&&(d._ts=(new Date).getTime()),d.orderByFields=y,d.multipatchOption=t.multipatchOption,d.maxAllowableOffset=t._maxOffset,d.quantizationParameters=t._quantizationParameters;var x=t.advancedQueryCapabilities;x&&x.supportsQueryWithResultType&&(d.resultType="tile"),c=null,m&&(c=this._getRequestId(t,h),this._isPending(c))||(this._pending++,g.push(t._task.execute(d,function(){var e=h;return function(t){L.apply(v,[t,e])}}.call(this),this._queryErrorHandler,c)))}this._removeOldCells(s),this._endCheck()},_drawFeatures:function(e,t){this._exceeds=this._exceeds||e.exceededTransferLimit,this._finalizeIO();var i,r,s=this.featureLayer,n=this.map,a=n.extent,o=t.extent,u=t.row,l=t.col,h=s.objectIdField,d=e.features,c=this._gridLayer,_=this._cellMap,f=t.latticeID,p=f?_[f]:_[u]&&_[u][l];if(t.resolution==c._resolution&&(f?f===c.getLatticeID(a):c.intersects(o,a)))if(p)s._sortFeatures(d),this._updateCell(p,d);else for(s._sortFeatures(d),t.features=d,f?_[f]=t:(_[u]=_[u]||{},_[u][l]=t),r=d.length,i=0;r>i;i++){var y=d[i],m=y.attributes[h];this._addFeatureIIf(m,y),this._incRefCount(m)}else p&&this._removeCell(u,l,f);this._endCheck()},_queryErrorHandler:function(e){this._finalizeIO(),this.featureLayer._errorHandler(e),this._endCheck(!0)},_finalizeIO:function(){this._purgeRequests(),this._pending--},_endCheck:function(e){if(0===this._pending){this._processIOQueue();var t=this.featureLayer,i=t._trackManager;i&&(i.clearTracks(),i.addFeatures(t.graphics),t._ager&&r.forEach(t.graphics,function(e){e._shape&&t._repaint(e)}),i.moveLatestToFront(),i.drawTracks()),this.featureLayer._fireUpdateEnd(e&&new Error("FeatureLayer: an error occurred while updating the layer"),this._exceeds?{queryLimitExceeded:!0}:null),this._exceeds&&t.onQueryLimitExceeded()}},_processIOQueue:function(e){this._ioQueue=r.filter(this._ioQueue,function(e){var t=e.fired>-1?!1:!0;return t}),e&&r.forEach(this._ioQueue,this._cancelPendingRequest)},_removeOldCells:function(e){var t,i,r=this._cellMap,s=this._gridLayer;for(t in r)if(r[t]){var n=r[t],a=n.latticeID,o=0,u=0;if(a)o++,a!==s.getLatticeID(e)&&(this._removeCell(null,null,a),u++);else for(i in n)if(n[i]){o++;var l=n[i].extent;s.intersects(l,e)||(this._removeCell(t,i),u++)}u===o&&delete r[t]}},_updateCell:function(e,t){var i,r=this.featureLayer,s=r.objectIdField,n=r._selectedFeatures,a=t.length;for(e.features=e.features||[],i=0;a>i;i++){var o=t[i],u=o.attributes[s],l=this._addFeatureIIf(u,o);l===o?(this._incRefCount(u),e.features.push(l)):u in n||(l.setGeometry(o.geometry),l.setAttributes(o.attributes))}},_removeCell:function(e,t,i){var r=this._cellMap,s=this.featureLayer,n=s.objectIdField,a=i?r[i]:r[e]&&r[e][t];if(a){i?delete r[i]:delete r[e][t];var o,u=a.features;for(o=0;o<u.length;o++){var l=u[o],h=l.attributes[n];this._decRefCount(h),h in s._selectedFeatures||this._removeFeatureIIf(h)}}}});return s("extend-esri")&&i.setObject("layers._OnDemandMode",h,n),h});