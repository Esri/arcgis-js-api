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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

/**
 * Provides the logic for the {@link module:esri/widgets/Attribution} widget.
 * Displays attribution text for the layers in a map.
 * The text displayed for the layers is either a list of data providers or
 * sources as defined in the layer's custom attribution data, or the copyright text.
 * The attribution is automatically updated based on layer visibility and map extent.
 *
 * ::: esri-md class="panel trailer-1"
 * Esri requires that when you use an ArcGIS Online basemap in your app, the map must include Esri attribution and you must be licensed to use the content. 
 * For detailed guidelines on working with attribution, please visit the official [attribution in your app](https://developers.arcgis.com/terms/attribution) documentation.
 * For information on terms of use, see the [Terms of Use FAQ](https://developers.arcgis.com/terms/faq/).
 * :::
 *
 * @module esri/widgets/Attribution/AttributionViewModel
 * @since 4.0
 * @amdalias AttributionVM
 * @see module:esri/widgets/Attribution
 */

define(["dojo/_base/lang","../../core/Accessor","../../core/Evented","../../core/HandleRegistry","../../core/lang","../../core/watchUtils","../../geometry/Extent","../../geometry/support/webMercatorUtils"],function(t,e,i,n,r,s,a,o){var u={disabled:"disabled",ready:"ready"},d=e.createSubclass([i],{properties:{attributionText:{dependsOn:["items","itemDelimiter"],readOnly:!0},itemDelimiter:{},items:{},state:{dependsOn:["view.ready"],readOnly:!0},view:{}},declaredClass:"esri.widgets.Attribution.AttributionViewModel",constructor:function(){this._handles=new n,this._pendingAttributionItemsByLayerId={},this._attributionDataByLayerId={},this._updateAttributionItems=this._updateAttributionItems.bind(this)},getDefaults:function(){return t.mixin(this.inherited(arguments),{items:[]})},initialize:function(){this._handles.add(s.init(this,"view",this._viewWatcher))},destroy:function(){this._handles.destroy(),this._handles=null,this.view=null},_handles:null,_pendingAttributionItemsByLayerId:null,_attributionDataByLayerId:null,attributionText:null,_attributionTextGetter:function(){return this.items.join(this.itemDelimiter)},itemDelimiter:" | ",items:null,state:u.disabled,_stateGetter:function(){return this.get("view.ready")?u.ready:u.disabled},view:null,_viewWatcher:function(t){var e=this._handles;e&&e.remove(),t&&(e.add([t.allLayerViews.on("change",function(t){this._addLayerViews(t.added),t.removed.length>0&&(t.removed.forEach(function(t){e.remove(t.uid)}),this._updateAttributionItems())}.bind(this)),s.init(t,"stationary",this._updateAttributionItems)]),this._addLayerViews(t.allLayerViews))},_addLayerViews:function(t){t.forEach(function(t){this._handles.has(t.uid)||this._handles.add(s.init(t,"suspended",this._updateAttributionItems),t.uid)},this)},_updateAttributionItems:function(){var t=[];this._getActiveLayerViews().forEach(function(e){var i,n,r,s,a=e.layer;return a.hasAttributionData?(n=this._attributionDataByLayerId,n[a.uid]?(r=this._getDynamicAttribution(n[a.uid],this.view,a),void(this._isUnique(t,r)&&t.push(r))):(s=this._pendingAttributionItemsByLayerId,void(this._inProgress(s[a.uid])||(s[a.uid]=a.fetchAttributionData().then(function(t){var e=this._createContributionIndex(t,this._isBingLayer(a));delete s[a.uid],n[a.uid]=e,this._updateAttributionItems()}.bind(this)))))):(i=a.copyright,void(this._isUnique(t,i)&&t.push(i)))},this),this._itemsChanged(this.items,t)&&(this.items=t)},_itemsChanged:function(t,e){return t.length!==e.length||t.some(function(t,i){return t!==e[i]})},_inProgress:function(t){return t&&!t.isFulfilled()},_getActiveLayerViews:function(){var t=this.get("view.allLayerViews")||[];return t.filter(function(t){return!t.suspended&&t.get("layer.attributionVisible")})},_isUnique:function(t,e){return e&&-1===t.indexOf(e)},_isBingLayer:function(t){return-1!==t.declaredClass.toLowerCase().indexOf("vetiledlayer")},_createContributionIndex:function(t,e){var i,n,s,u,d,h,l,c,m,y=t.contributors,b={};if(!y)return b;for(u=0;u<y.length;u++)if(i=y[u],n=i.coverageAreas)for(d=0;d<n.length;d++)for(s=n[d],l=s.bbox,m=s.zoomMin-(e&&s.zoomMin?1:0),c=s.zoomMax-(e&&s.zoomMax?1:0),i={extent:o.geographicToWebMercator(new a({xmin:l[1],ymin:l[0],xmax:l[3],ymax:l[2]})),attribution:i.attribution||"",score:r.isDefined(s.score)?s.score:100,id:u},h=m;c>=h;h++)b[h]=b[h]||[],b[h].push(i);return b.maxKey=Math.max.apply(null,Object.keys(b)),b},_getDynamicAttribution:function(t,e,i){var n,s,a,o=e.extent,u=e.scale,d=i.tileInfo.scaleToZoom(u);return d=Math.min(t.maxKey,Math.round(d)),!o||!r.isDefined(d)||-1>=d?"":(n=t[d],s=o.center.clone().normalize(),a={},n.filter(function(t){var e=!a[t.id]&&t.extent.contains(s);return e&&(a[t.id]=!0),e}).sort(function(t,e){return e.score-t.score||t.objectId-e.objectId}).map(function(t){return t.attribution}).join(", "))}});return d});