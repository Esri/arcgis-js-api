// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../geometry/support/webMercatorUtils","../../core/HandleRegistry","../../core/Accessor","../../core/lang","../../core/watchUtils","../../geometry/Extent"],function(t,e,i,r,n,o,a,s,u,d,c){function p(t){return t&&t.tileInfo}var l=function(t){function e(e){var i=t.call(this,e)||this;return i._handles=new a,i._pendingAttributionItemsByLayerId={},i._attributionDataByLayerId={},i.itemDelimiter=" | ",i.items=[],i.view=null,i._updateAttributionItems=i._updateAttributionItems.bind(i),i}return i(e,t),e.prototype.initialize=function(){this._handles.add(d.init(this,"view",this._viewWatcher))},e.prototype.destroy=function(){this._handles.destroy(),this._handles=null,this.view=null},Object.defineProperty(e.prototype,"attributionText",{get:function(){return this.items.join(this.itemDelimiter)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"state",{get:function(){return this.get("view.ready")?"ready":"disabled"},enumerable:!0,configurable:!0}),e.prototype._viewWatcher=function(t){var e=this,i=this._handles;i&&i.remove(),t&&(i.add([t.allLayerViews.on("change",function(t){e._addLayerViews(t.added),t.removed.length>0&&(t.removed.forEach(function(t){i.remove(t.uid)}),e._updateAttributionItems())}),d.init(t,"stationary",this._updateAttributionItems)]),this._addLayerViews(t.allLayerViews))},e.prototype._addLayerViews=function(t){var e=this;t.forEach(function(t){e._handles.has(t.uid)||e._handles.add(d.init(t,"suspended",e._updateAttributionItems),t.uid)})},e.prototype._updateAttributionItems=function(){var t=this,e=[];this._getActiveLayerViews().forEach(function(i){var r=i.layer;if(!r.hasAttributionData){var n=r.get("copyright");return void(t._isUnique(e,n)&&e.push(n))}if(p(r)){var o=t._attributionDataByLayerId;if(o[r.uid]){var a=t._getDynamicAttribution(o[r.uid],t.view,r);return void(t._isUnique(e,a)&&e.push(a))}var s=t._pendingAttributionItemsByLayerId;t._inProgress(s[r.uid])||(s[r.uid]=r.fetchAttributionData().then(function(e){var i=t._createContributionIndex(e,t._isBingLayer(r));delete s[r.uid],o[r.uid]=i,t._updateAttributionItems()}))}}),this._itemsChanged(this.items,e)&&this._set("items",e)},e.prototype._itemsChanged=function(t,e){return t.length!==e.length||t.some(function(t,i){return t!==e[i]})},e.prototype._inProgress=function(t){return t&&!t.isFulfilled()},e.prototype._getActiveLayerViews=function(){var t=this.get("view.allLayerViews");return t.filter(function(t){return!t.suspended&&t.get("layer.attributionVisible")})},e.prototype._isUnique=function(t,e){return e&&-1===t.indexOf(e)},e.prototype._isBingLayer=function(t){return-1!==t.declaredClass.toLowerCase().indexOf("vetiledlayer")},e.prototype._createContributionIndex=function(t,e){var i=t.contributors,r={};return i?(i.forEach(function(t,i){var n=t.coverageAreas;n&&n.forEach(function(n){var a=n.bbox,s=n.zoomMin-(e&&n.zoomMin?1:0),d=n.zoomMax-(e&&n.zoomMax?1:0);t={extent:o.geographicToWebMercator(new c({xmin:a[1],ymin:a[0],xmax:a[3],ymax:a[2]})),attribution:t.attribution||"",score:u.isDefined(n.score)?n.score:100,id:i};for(var p=s;d>=p;p++)r[p]=r[p]||[],r[p].push(t)})}),r.maxKey=Math.max.apply(null,Object.keys(r)),r):r},e.prototype._getDynamicAttribution=function(t,e,i){var r=e.extent,n=e.scale,o=i.tileInfo.scaleToZoom(n);if(o=Math.min(t.maxKey,Math.round(o)),!r||!u.isDefined(o)||-1>=o)return"";var a=t[o],s=r.center.clone().normalize(),d={};return a.filter(function(t){var e=!d[t.id]&&t.extent.contains(s);return e&&(d[t.id]=!0),e}).sort(function(t,e){return e.score-t.score||t.objectId-e.objectId}).map(function(t){return t.attribution}).join(", ")},e}(n.declared(s));return r([n.property({dependsOn:["items","itemDelimiter"],readOnly:!0})],l.prototype,"attributionText",null),r([n.property()],l.prototype,"itemDelimiter",void 0),r([n.property({readOnly:!0})],l.prototype,"items",void 0),r([n.property({dependsOn:["view.ready"],readOnly:!0})],l.prototype,"state",null),r([n.property()],l.prototype,"view",void 0),l=r([n.subclass("esri.widgets.Attribution.AttributionViewModel")],l)});