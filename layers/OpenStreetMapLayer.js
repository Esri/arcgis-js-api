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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../geometry","../core/accessorSupport/decorators","./WebTileLayer","./support/TileInfo","../portal/PortalItem"],(function(e,r,t,o,p,a,n,i){return function(e){function r(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var p=e.apply(this,r)||this;return p.portalItem=null,p.isReference=null,p.subDomains=["a","b","c"],p.fullExtent=new o.Extent(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,o.SpatialReference.WebMercator),p.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",p.operationalLayerType="OpenStreetMap",p.type="open-street-map",p.copyright="Map data &copy; OpenStreetMap contributors, CC-BY-SA",p}return t.__extends(r,e),Object.defineProperty(r.prototype,"refreshInterval",{get:function(){return 0},enumerable:!0,configurable:!0}),t.__decorate([p.property({type:i,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],r.prototype,"portalItem",void 0),t.__decorate([p.property({type:Boolean,json:{read:!1,write:!1}})],r.prototype,"isReference",void 0),t.__decorate([p.property({type:Number,readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],r.prototype,"refreshInterval",null),t.__decorate([p.property({type:n,json:{write:!1}})],r.prototype,"tileInfo",void 0),t.__decorate([p.property({type:["show","hide"]})],r.prototype,"listMode",void 0),t.__decorate([p.property({readOnly:!0,json:{read:!1,write:!1}})],r.prototype,"subDomains",void 0),t.__decorate([p.property({readOnly:!0,json:{read:!1,write:!1}})],r.prototype,"fullExtent",void 0),t.__decorate([p.property({readOnly:!0,json:{read:!1,write:!1}})],r.prototype,"urlTemplate",void 0),t.__decorate([p.property({type:["OpenStreetMap"]})],r.prototype,"operationalLayerType",void 0),t.__decorate([p.property({json:{read:!1}})],r.prototype,"type",void 0),t.__decorate([p.property({json:{read:!1,write:!1}})],r.prototype,"copyright",void 0),t.__decorate([p.property({json:{read:!1,write:!1}})],r.prototype,"wmtsInfo",void 0),r=t.__decorate([p.subclass("esri.layers.OpenStreetMapLayer")],r)}(a)}));