// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","./enums","./TileKey"],(function(e,t,i,s,l){var r=new l(0,0,0,0),o=new Map,a=[],n=[];function h(e,t){e.delete(t)}return function(){function e(e){this._previousResolution=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.coveragePolicy="closest",this.tileIndex=new Map,this.tiles=[],this.buffer=192,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,e.cachePolicy&&(this.cachePolicy=e.cachePolicy),e.coveragePolicy&&(this.coveragePolicy=e.coveragePolicy),null!=e.buffer&&(this.buffer=e.buffer)}return e.prototype.destroy=function(){this.tileIndex.clear()},e.prototype.update=function(e){var t=this,i=this.tileIndex,l=this.tileInfoView.getTileCoverage(e.state,this.buffer,this.coveragePolicy);if(l){var c=l.spans,u=l.lodInfo,f=u.level,d=e.state.resolution,v=!e.stationary&&d>this._previousResolution;this._previousResolution=d,i.forEach((function(e){return e.visible=!0})),this.tiles.length=0,o.clear();var p=0,I=0;if(c.length>0)for(var g=0,y=c;g<y.length;g++)for(var T=y[g],P=T.row,b=T.colFrom,w=T.colTo,x=b;x<=w;x++){p++;var E=r.set(f,P,u.normalizeCol(x),u.getWorldForColumn(x)).id;if(i.has(E)){if((_=i.get(E)).status!==s.TileStatus.INITIALIZED&&I++,_.attached){o.set(E,_);continue}_.attached||v||this._addParentTile(E,o)}else{var _=this.acquireTile(r);this.tileIndex.set(E,_),v||this._addParentTile(E,o)}}var V=I===p;n.length=0,a.length=0,i.forEach((function(e,i){if(r.set(i),!o.has(i)){var h=t.tileInfoView.intersects(l,r);!h||!v&&V?"purge"===t.cachePolicy&&e.status!==s.TileStatus.MODIFIED&&e.status!==s.TileStatus.READY?a.push(i):(r.level>f||!h)&&a.push(i):e.attached?n.push(i):r.level>f&&a.push(i)}}));for(var k=0,m=n;k<m.length;k++){E=m[k];(_=i.get(E))&&_.attached&&o.set(E,_)}for(var S=0,q=a;S<q.length;S++){E=q[S],_=i.get(E);this.releaseTile(_),h(i,E)}return o.forEach((function(e){return t.tiles.push(e)})),i.forEach((function(e){o.has(e.key.id)||(e.visible=!1)})),n.length=0,a.length=0,o.clear(),V}},e.prototype.clear=function(){var e=this,t=this.tileIndex;t.forEach((function(t){e.releaseTile(t)})),t.clear()},e.prototype._addParentTile=function(e,t){for(var i=e,s=null;i=this.tileInfoView.getTileParentId(i);)if(this.tileIndex.has(i)&&(s=this.tileIndex.get(i))&&s.attached){t.has(s.key.id)||t.set(s.key.id,s);break}},e}()}));