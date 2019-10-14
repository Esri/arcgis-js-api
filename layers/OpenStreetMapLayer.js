// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

//  copyright

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../geometry","../core/accessorSupport/decorators","./WebTileLayer","./support/TileInfo","../portal/PortalItem"],function(e,r,t,o,p,n,a,i,y,l){return function(e){function r(){var r=e.call(this)||this;return r.portalItem=null,r.isReference=null,r.subDomains=["a","b","c"],r.fullExtent=new n.Extent(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,n.SpatialReference.WebMercator),r.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",r.operationalLayerType="OpenStreetMap",r.type="open-street-map",r.copyright="Map data &copy; OpenStreetMap contributors, CC-BY-SA",r}return o(r,e),Object.defineProperty(r.prototype,"refreshInterval",{get:function(){return 0},enumerable:!0,configurable:!0}),p([a.property({type:l,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],r.prototype,"portalItem",void 0),p([a.property({type:Boolean,json:{read:!1,write:!1}})],r.prototype,"isReference",void 0),p([a.property({type:Number,readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],r.prototype,"refreshInterval",null),p([a.property({type:y,json:{write:!1}})],r.prototype,"tileInfo",void 0),p([a.property({type:["show","hide"]})],r.prototype,"listMode",void 0),p([a.property({readOnly:!0,json:{read:!1,write:!1}})],r.prototype,"subDomains",void 0),p([a.property({readOnly:!0,json:{read:!1,write:!1}})],r.prototype,"fullExtent",void 0),p([a.property({readOnly:!0,json:{read:!1,write:!1}})],r.prototype,"urlTemplate",void 0),p([a.property({type:["OpenStreetMap"]})],r.prototype,"operationalLayerType",void 0),p([a.property({json:{read:!1}})],r.prototype,"type",void 0),p([a.property({json:{read:!1,write:!1}})],r.prototype,"copyright",void 0),p([a.property({json:{read:!1,write:!1}})],r.prototype,"wmtsInfo",void 0),r=p([a.subclass("esri.layers.OpenStreetMapLayer")],r)}(a.declared(i))});