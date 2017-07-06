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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/paramHelper","../../core/accessorSupport/decorators","../../core/Collection","../../core/JSONSupport","./TileMatrixSet","./WMTSStyle","../../geometry/Extent"],function(t,e,r,i,o,s,l,n,a,p,y){var u=h=function(t){function e(e){var r=t.call(this)||this;return r.fullExtent=null,r.imageFormats=null,r.id=null,r.layer=null,r.styles=null,r.tileMatrixSetId=null,r.tileMatrixSets=null,r}return r(e,t),Object.defineProperty(e.prototype,"description",{get:function(){return this._get("description")},set:function(t){this._set("description",t)},enumerable:!0,configurable:!0}),e.prototype.readFullExtent=function(t,e,r){return t=e.fullExtent,t?y.fromJSON(t):null},Object.defineProperty(e.prototype,"imageFormat",{get:function(){var t=this._get("imageFormat");return t||(t=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),t},set:function(t){return(t.indexOf("image/")>-1||-1===this.imageFormats.indexOf(t))&&(-1===t.indexOf("image/")&&(t="image/"+t),this.imageFormats&&-1===this.imageFormats.indexOf(t))?void console.error("The layer doesn't support the format of "+t):void this._set("imageFormat",t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"styleId",{get:function(){var t=this._get("styleId");return t||(t=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),t},set:function(t){this._set("styleId",t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"title",{get:function(){return this._get("title")},set:function(t){this._set("title",t)},enumerable:!0,configurable:!0}),e.prototype.clone=function(){var t=new h;return this.hasOwnProperty("description")&&(t.description=this.description),this.hasOwnProperty("imageFormats")&&(t.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(t.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(t.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(t.id=this.id),this.hasOwnProperty("layer")&&(t.layer=this.layer),this.hasOwnProperty("styleId")&&(t.styleId=this.styleId),this.hasOwnProperty("styles")&&(t.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(t.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(t.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(t.title=this.title),t},e}(s.declared(n));i([s.property()],u.prototype,"description",null),i([s.property()],u.prototype,"fullExtent",void 0),i([s.reader("fullExtent",["fullExtent"])],u.prototype,"readFullExtent",null),i([s.property({dependsOn:["imageFormats"]})],u.prototype,"imageFormat",null),i([s.property({json:{read:{source:"formats"}}})],u.prototype,"imageFormats",void 0),i([s.property()],u.prototype,"id",void 0),i([s.property()],u.prototype,"layer",void 0),i([s.property()],u.prototype,"styleId",null),i([s.property({type:l.ofType(p),json:{read:{source:"styles"}}})],u.prototype,"styles",void 0),i([s.property({value:null,json:{write:{ignoreOrigin:!0}}})],u.prototype,"title",null),i([s.property()],u.prototype,"tileMatrixSetId",void 0),i([s.property({type:l.ofType(a),json:{read:{source:"tileMatrixSets"}}})],u.prototype,"tileMatrixSets",void 0),u=h=i([s.subclass("esri.layers.support.WMTSSublayer")],u);var h;return u});