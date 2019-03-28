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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/paramHelper","../../core/Collection","../../core/JSONSupport","../../core/accessorSupport/decorators","../../geometry/Extent","./TileMatrixSet","./WMTSStyle"],function(t,e,r,i,o,s,l,n,a,p,y){return function(t){function e(e){var r=t.call(this)||this;return r.fullExtent=null,r.imageFormats=null,r.id=null,r.layer=null,r.styles=null,r.tileMatrixSetId=null,r.tileMatrixSets=null,r}r(e,t),o=e,Object.defineProperty(e.prototype,"description",{get:function(){return this._get("description")},set:function(t){this._set("description",t)},enumerable:!0,configurable:!0}),e.prototype.readFullExtent=function(t,e,r){return t=e.fullExtent,t?a.fromJSON(t):null},Object.defineProperty(e.prototype,"imageFormat",{get:function(){var t=this._get("imageFormat");return t||(t=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),t},set:function(t){if((t.indexOf("image/")>-1||-1===this.imageFormats.indexOf(t))&&(-1===t.indexOf("image/")&&(t="image/"+t),this.imageFormats&&-1===this.imageFormats.indexOf(t)))return void console.error("The layer doesn't support the format of "+t);this._set("imageFormat",t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"styleId",{get:function(){var t=this._get("styleId");return t||(t=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),t},set:function(t){this._set("styleId",t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"title",{get:function(){return this._get("title")},set:function(t){this._set("title",t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"tileMatrixSet",{get:function(){var t=this;return this.tileMatrixSets.find(function(e){return e.id===t.tileMatrixSetId})},enumerable:!0,configurable:!0}),e.prototype.clone=function(){var t=new o;return this.hasOwnProperty("description")&&(t.description=this.description),this.hasOwnProperty("imageFormats")&&(t.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(t.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(t.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(t.id=this.id),this.hasOwnProperty("layer")&&(t.layer=this.layer),this.hasOwnProperty("styleId")&&(t.styleId=this.styleId),this.hasOwnProperty("styles")&&(t.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(t.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(t.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(t.title=this.title),t};var o;return i([n.property()],e.prototype,"description",null),i([n.property()],e.prototype,"fullExtent",void 0),i([n.reader("fullExtent",["fullExtent"])],e.prototype,"readFullExtent",null),i([n.property({dependsOn:["imageFormats"]})],e.prototype,"imageFormat",null),i([n.property({json:{read:{source:"formats"}}})],e.prototype,"imageFormats",void 0),i([n.property()],e.prototype,"id",void 0),i([n.property()],e.prototype,"layer",void 0),i([n.property()],e.prototype,"styleId",null),i([n.property({type:s.ofType(y),json:{read:{source:"styles"}}})],e.prototype,"styles",void 0),i([n.property({value:null,json:{write:{ignoreOrigin:!0}}})],e.prototype,"title",null),i([n.property()],e.prototype,"tileMatrixSetId",void 0),i([n.property({readOnly:!0,dependsOn:["tileMatrixSetId"]})],e.prototype,"tileMatrixSet",null),i([n.property({type:s.ofType(p),json:{read:{source:"tileMatrixSets"}}})],e.prototype,"tileMatrixSets",void 0),e=o=i([n.subclass("esri.layers.support.WMTSSublayer")],e)}(n.declared(l))});