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

define(["require","exports","./GeometryUtils"],function(e,t,i){var r=function(){function e(e){this.children=[],this.stageTile=e}return e.prototype.tryAdd=function(t){if(e.isChildOf(t,this.stageTile.key)){for(var i=0,r=this.children;i<r.length;i++){var n=r[i];if(e.isChildOf(t,n))return}this.children.push(t)}},e.prototype.equals=function(e){if(this.stageTile.key.id!==e.stageTile.key.id||this.children.length!==e.children.length)return!1;for(var t=0;t<this.children.length;t++)if(this.children[t].id!==e.children[t].id)return!1;return!0},e.isChildOf=function(e,t){if(e.level<=t.level)return!1;var i=e.level-t.level,r=e.row>>i,n=e.col>>i;return r===t.row&&n===t.col},e}(),n=function(){function e(){this._tileGroups=[],this._bitOffset=0}return e.prototype.update=function(e){if(this._tileGroups=[],this._bitOffset=0,0!==e.length){for(var t=[],n=e.length,l=0;n>l;l++)if(e[l].attached&&e[l].visible){for(var s=new r(e[l]),h=l+1;n>h;h++)s.tryAdd(e[h].key);s.children.sort(function(e,t){return e.level<t.level?-1:1}),this._reuseExisting(s)||t.push(s)}if(t.length>0){for(var f=Math.ceil(i.log2(t.length+1)),a=(1<<f)-1<<this._bitOffset,o=1,u=void 0,c=0,d=t;c<d.length;c++){var g=d[c];u=o++<<this._bitOffset,g.stageTile.stencilData.mask=a,g.stageTile.stencilData.reference=u}this._bitOffset+=f,this._tileGroups.push(t)}}},e.prototype._reuseExisting=function(e){for(var t=0,i=this._tileGroups;t<i.length;t++)for(var r=i[t],n=0,l=r;n<l.length;n++){var s=l[n];if(s.equals(e)&&s.stageTile.stencilData.mask===e.stageTile.stencilData.mask&&s.stageTile.stencilData.reference===e.stageTile.stencilData.reference)return!0}return!1},e}();return n});