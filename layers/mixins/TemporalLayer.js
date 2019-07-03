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
             * The time info provides information such as date fields that store
             * {@link module:esri/layers/support/TimeInfo#startField start}
             * and {@link module:esri/layers/support/TimeInfo#endField end} time
             * for each feature and the {@link module:esri/layers/support/TimeInfo#fullTimeExtent full time extent}
             * for the layer. The `timeInfo` along with its `startField` and `endField` properties must be set at the
             * time of layer initialization if it is being set for
             * {@link module:esri/layers/GeoJSONLayer}, {@link module:esri/layers/CSVLayer} or
             * {@link module:esri/layers/FeatureLayer} initialized from
             * [client-side features](esri-layers-FeatureLayer.html#creating-a-featurelayer).
             * The {@link module:esri/layers/support/TimeInfo#fullTimeExtent full time extent} for the timeInfo is
             * automatically calculated based on `start` and `end` fields.
             * The timeInfo parameters cannot be changed after the layer is {@link module:esri/layers/FeatureLayer#load loaded}.
             *
             * @name timeInfo
             * @type {module:esri/layers/support/TimeInfo}
             * @memberof module:esri/layers/mixins/TemporalLayer
             * @default null
             * @since 4.11
             * @autocast
             *
             * @example
             * // create geojson layer from usgs earthquakes geojson feed
             * const geojsonLayer = new GeoJSONLayer({
             *   url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson",
             *   copyright: "USGS Earthquakes",
             *   fields: [
             *     { "name": "mag", "type": "double" },
             *     { "name": "place", "type": "string" },
             *     { "name": "time", "type": "date" }, // date field
             *     { "name": "depth", "type": "double" }
             *   ],
             *   // timeInfo can be used to do temporal queries
             *   // set the startField and endField.
             *   // timeExtent is automatically calculated from the
             *   // the start and end date fields
             *   timeInfo: {
             *     startField: "time"
             *   }
             * });
             */

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../TimeExtent","../../core/Accessor","../../core/accessorSupport/decorators","../../layers/support/TimeInfo","../support/fieldUtils"],function(e,t,r,o,i,n,p,s,l){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.timeExtent=null,t.useViewTime=!0,t}return r(t,e),Object.defineProperty(t.prototype,"timeInfo",{set:function(e){l.fixTimeInfoFields(e,this.fields),this._set("timeInfo",e)},enumerable:!0,configurable:!0}),o([p.property({type:i,json:{write:!1}})],t.prototype,"timeExtent",void 0),o([p.property({value:null,type:s,json:{write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],t.prototype,"timeInfo",null),o([p.property({type:Boolean,json:{write:!1}})],t.prototype,"useViewTime",void 0),t=o([p.subclass("esri.layers.mixins.TemporalLayer")],t)}(p.declared(n))});