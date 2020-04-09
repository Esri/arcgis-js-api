// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../TimeExtent","../../TimeInterval","../../core/accessorSupport/decorators","../../layers/support/TimeInfo","../support/fieldUtils","../support/timeUtils"],(function(e,t,r,i,o,n,p,s,l,u){Object.defineProperty(t,"__esModule",{value:!0}),t.TemporalLayer=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.timeExtent=null,t.timeOffset=null,t.useViewTime=!0,t}return r(t,e),t.prototype.readOffset=function(e,t){var r=t.timeInfo.exportOptions;if(!r)return null;var i=r.timeOffset,o=u.timeUnitKebabDictionary.fromJSON(r.timeOffsetUnits);return i&&o?new n({value:i,unit:o}):null},Object.defineProperty(t.prototype,"timeInfo",{set:function(e){l.fixTimeInfoFields(e,this.fields),this._set("timeInfo",e)},enumerable:!0,configurable:!0}),i([p.property({type:o,json:{write:!1}})],t.prototype,"timeExtent",void 0),i([p.property({type:n})],t.prototype,"timeOffset",void 0),i([p.reader("service","timeOffset",["timeInfo.exportOptions"])],t.prototype,"readOffset",null),i([p.property({value:null,type:s,json:{write:!0,origins:{"web-document":{read:!1,write:!1}}}})],t.prototype,"timeInfo",null),i([p.property({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],t.prototype,"useViewTime",void 0),t=i([p.subclass("esri.layers.mixins.TemporalLayer")],t)}(p.declared(e))}}));