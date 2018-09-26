// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

/**
 * Provides the logic for the {@link module:esri/widgets/Attribution} widget.
 * Displays attribution text for the layers in a map.
 * The text displayed for the layers is either a list of data providers or
 * sources as defined in the layer's custom attribution data, or the copyright text.
 * The attribution is automatically updated based on layer visibility and map extent.
 *
 * ::: esri-md class="panel trailer-1"
 * Esri requires that when you use an ArcGIS Online basemap in your app, the map must include Esri attribution and you must be licensed to use the content.
 * For detailed guidelines on working with attribution, please visit the official [attribution in your app](https://developers.arcgis.com/terms/attribution/) documentation.
 * For information on terms of use, see the [Terms of Use FAQ](https://developers.arcgis.com/terms/faq/).
 * :::
 *
 * @module esri/widgets/Attribution/AttributionViewModel
 * @since 4.0
 * @amdalias AttributionVM
 * @see module:esri/widgets/Attribution
 */

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../geometry","../../core/Accessor","../../core/Collection","../../core/Handles","../../core/watchUtils","../../core/accessorSupport/decorators","../../geometry/support/contains","../../geometry/support/webMercatorUtils"],function(t,e,r,i,n,o,a,u,s,d,c,p){function l(t){return t&&t.tileInfo}return function(t){function e(e){var r=t.call(this,e)||this;return r._handles=new u,r._pendingAttributionItemsByLayerId={},r._attributionDataByLayerId={},r.items=new a,r.view=null,r._updateAttributionItems=r._updateAttributionItems.bind(r),r}return r(e,t),e.prototype.initialize=function(){this._handles.add(s.init(this,"view",this._viewWatcher))},e.prototype.destroy=function(){this._handles.destroy(),this._handles=null,this.view=null},Object.defineProperty(e.prototype,"state",{get:function(){return this.get("view.ready")?"ready":"disabled"},enumerable:!0,configurable:!0}),e.prototype._viewWatcher=function(t){var e=this,r=this._handles;r&&r.remove(),t&&(r.add([t.allLayerViews.on("change",function(t){e._addLayerViews(t.added),t.removed.length>0&&(t.removed.forEach(function(t){r.remove(t.uid)}),e._updateAttributionItems())}),s.init(t,"stationary",this._updateAttributionItems)]),this._addLayerViews(t.allLayerViews))},e.prototype._addLayerViews=function(t){var e=this;t.forEach(function(t){e._handles.has(t.uid)||e._handles.add(s.init(t,"suspended",e._updateAttributionItems),t.uid)})},e.prototype._updateAttributionItems=function(){var t=this,e=[];this._getActiveLayerViews().forEach(function(r){var i=r.layer;if(!i.hasAttributionData){var n=i.get("copyright");if(!n)return;var o=t._findItem(e,{layer:i,text:n});return void(o||e.push({text:n,layer:i}))}if(l(i)){var a=t._attributionDataByLayerId;if(a[i.uid]){var n=t._getDynamicAttribution(a[i.uid],t.view,i);if(!n)return;var o=t._findItem(e,{layer:i,text:n});return void(o||e.push({text:n,layer:i}))}var u=t._pendingAttributionItemsByLayerId;t._inProgress(u[i.uid])||(u[i.uid]=i.fetchAttributionData().then(function(e){var r=t._createContributionIndex(e,t._isBingLayer(i));delete u[i.uid],a[i.uid]=r,t._updateAttributionItems()}))}}),this._itemsChanged(this.items,e)&&(this.items.removeAll(),this.items.addMany(e))},e.prototype._itemsChanged=function(t,e){return t.length!==e.length||t.some(function(t,r){return t.text!==e[r].text})},e.prototype._inProgress=function(t){return t&&!t.isFulfilled()},e.prototype._getActiveLayerViews=function(){return this.get("view.allLayerViews").filter(function(t){return!t.suspended&&t.get("layer.attributionVisible")})},e.prototype._findItem=function(t,e){var r,i=e.layer,n=e.text;return t.some(function(t){var e=t.layer===i&&t.text===n;return e&&(r=t),e}),r},e.prototype._isBingLayer=function(t){return"bing-maps"===t.type},e.prototype._createContributionIndex=function(t,e){var r=t.contributors,i={};if(!r)return i;for(var o=0;o<r.length;o++){var a=r[o],u=a.coverageAreas;if(!u)return;for(var s=0,d=u;s<d.length;s++)for(var c=d[s],l=c.bbox,y=c.zoomMin-(e&&c.zoomMin?1:0),f=c.zoomMax-(e&&c.zoomMax?1:0),h={xmin:l[1],ymin:l[0],xmax:l[3],ymax:l[2],spatialReference:n.SpatialReference.WGS84},m={extent:p.geographicToWebMercator(h),attribution:a.attribution||"",score:null!=c.score?c.score:100,id:o},v=y;v<=f;v++)i[v]=i[v]||[],i[v].push(m)}return i.maxKey=Math.max.apply(null,Object.keys(i)),i},e.prototype._getDynamicAttribution=function(t,e,r){var i=e.extent,n=e.scale,o=r.tileInfo.scaleToZoom(n);if(o=Math.min(t.maxKey,Math.round(o)),!i||null==o||o<=-1)return"";var a=t[o],u=p.project(i.center.clone().normalize(),e.spatialReference),s={};return a.filter(function(t){var e=!s[t.id]&&u&&c.extentContainsPoint(t.extent,u);return e&&(s[t.id]=!0),e}).sort(function(t,e){return e.score-t.score||t.objectId-e.objectId}).map(function(t){return t.attribution}).join(", ")},i([d.property({readOnly:!0,type:a})],e.prototype,"items",void 0),i([d.property({dependsOn:["view.ready"],readOnly:!0})],e.prototype,"state",null),i([d.property()],e.prototype,"view",void 0),e=i([d.subclass("esri.widgets.Attribution.AttributionViewModel")],e)}(d.declared(o))});