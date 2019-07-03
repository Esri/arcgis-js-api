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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

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
 * @see [Guide topic: Widget development - ViewModel pattern](https://developers.arcgis.com/javascript/latest/guide/custom-widget/#viewmodel-pattern)
 */

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/awaiterHelper","../../core/tsSupport/generatorHelper","../../geometry","../../core/arrayUtils","../../core/Collection","../../core/HandleOwner","../../core/watchUtils","../../core/accessorSupport/decorators","../../geometry/support/contains","../../geometry/support/webMercatorUtils"],function(t,e,r,n,i,o,a,u,s,c,l,p,d,f){function h(t){return t&&"function"==typeof t.originOf&&"user"===t.originOf("copyright")}function b(t,e){return t.length!==e.length||t.some(function(t,r){return t.text!==e[r].text})}function y(t,e,r){if(r&&e){u.find(t,function(t){return t.layerView===e&&t.text===r})||t.push({text:r,layerView:e})}}function g(t){return"bing-maps"===t.type}var m=[];return function(t){function e(e){var r=t.call(this,e)||this;return r.clear=function(){r._fetchedAttributionData.clear(),r._pendingAttributions.clear(),r.handles.remove("suspension")},r._pendingAttributions=new Set,r._fetchedAttributionData=new Map,r.items=new s,r.view=null,r._allLayerViewsChange=function(t){r.handles.remove("suspension");var e=r.get("view.allLayerViews");e&&r.handles.add(e.map(function(t){return t.watch(["suspended","attributionVisible"],r._updateAttributionItems)}),"suspension"),t&&t.removed&&t.removed.forEach(function(t){r._pendingAttributions.delete(t),r._fetchedAttributionData.delete(t)}),r._updateAttributionItems()},r._updateAttributionItems=function(){var t=r.get("view.allLayerViews");if(m.length=0,!t)return void r.clear();t.forEach(function(t){if(!t.suspended&&t.get("layer.attributionVisible")){var e=t.layer;if(h(e))return void y(m,t,e.copyright);if(e.hasAttributionData){if(r._fetchedAttributionData.has(t)){var n=r._fetchedAttributionData.get(t);return void(n&&y(m,t,r._getDynamicAttribution(n,r.view,e)))}return void r._fetchAttributionData(t)}var i=e.get("portalItem.accessInformation");if(i)return void y(m,t,i);y(m,t,e.copyright)}}),b(r.items,m)&&(r.items.removeAll(),r.items.addMany(m))},r.handles.add([l.on(r,"view.allLayerViews","change",r._allLayerViewsChange,r._allLayerViewsChange,r.clear),l.whenTrue(r,"view.stationary",function(){return r._updateAttributionItems()})]),r}return r(e,t),e.prototype.destroy=function(){this.view=null,this._fetchedAttributionData.clear(),this._pendingAttributions.clear()},Object.defineProperty(e.prototype,"state",{get:function(){return this.get("view.ready")?"ready":"disabled"},enumerable:!0,configurable:!0}),e.prototype._fetchAttributionData=function(t){return i(this,void 0,void 0,function(){var e,r,n;return o(this,function(i){switch(i.label){case 0:if(this._pendingAttributions.has(t))return[2];this._pendingAttributions.add(t),e=null,i.label=1;case 1:return i.trys.push([1,3,,4]),[4,t.layer.fetchAttributionData()];case 2:return r=i.sent(),e=this._createContributionIndex(r,g(t.layer)),[3,4];case 3:return n=i.sent(),[3,4];case 4:return this._pendingAttributions.has(t)&&(this._pendingAttributions.delete(t),this._fetchedAttributionData.set(t,e)),this._updateAttributionItems(),[2]}})})},e.prototype._createContributionIndex=function(t,e){var r=t.contributors,n={};if(!r)return n;for(var i=0;i<r.length;i++){var o=r[i],u=o.coverageAreas;if(!u)return;for(var s=0,c=u;s<c.length;s++)for(var l=c[s],p=l.bbox,d=l.zoomMin-(e&&l.zoomMin?1:0),h=l.zoomMax-(e&&l.zoomMax?1:0),b={xmin:p[1],ymin:p[0],xmax:p[3],ymax:p[2],spatialReference:a.SpatialReference.WGS84},y={extent:f.geographicToWebMercator(b),attribution:o.attribution||"",score:null!=l.score?l.score:100,id:i},g=d;g<=h;g++)n[g]=n[g]||[],n[g].push(y)}return n.maxKey=Math.max.apply(null,Object.keys(n)),n},e.prototype._getDynamicAttribution=function(t,e,r){var n=e.extent,i=e.scale,o=r.tileInfo.scaleToZoom(i);if(o=Math.min(t.maxKey,Math.round(o)),!n||null==o||o<=-1)return"";var a=t[o],u=f.project(n.center.clone().normalize(),e.spatialReference),s={};return a?a.filter(function(t){var e=!s[t.id]&&u&&d.extentContainsPoint(t.extent,u);return e&&(s[t.id]=!0),e}).sort(function(t,e){return e.score-t.score||t.objectId-e.objectId}).map(function(t){return t.attribution}).join(", "):""},n([p.property({readOnly:!0,type:s})],e.prototype,"items",void 0),n([p.property({dependsOn:["view.ready"],readOnly:!0})],e.prototype,"state",null),n([p.property()],e.prototype,"view",void 0),e=n([p.subclass("esri.widgets.Attribution.AttributionViewModel")],e)}(p.declared(c))});