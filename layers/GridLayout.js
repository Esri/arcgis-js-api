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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../geometry/Point","../geometry/Extent","../geometry/Polyline","../geometry/Polygon","../geometry/normalizeUtils","../srUtils"],(function(t,e,i,n,o,r,s,l,a,h,c){var u=t(null,{declaredClass:"esri.layers._GridLayout",constructor:function(t,e,i,n){this.origin=t,this.cellWidth=e.width,this.cellHeight=e.height,this.mapWidth=i.width,this.mapHeight=i.height,this.srInfo=n},setResolution:function(t){if(this.resolution=(t.xmax-t.xmin)/this.mapWidth,this.srInfo){var e=Math.round(2*this.srInfo.valid[1]/this.resolution),i=Math.round(e/this.cellWidth);this._frameStats=[i,0,i-1]}},setMapState:function(t,e,i){this.mapWidth=e,this.mapHeight=i,this.setResolution(t)},getCellCoordinates:function(t){var e=this.resolution,i=this.origin;return{row:Math.floor((i.y-t.y)/(this.cellHeight*e)),col:Math.floor((t.x-i.x)/(this.cellWidth*e))}},normalize:function(t){var e=this._frameStats;if(e){var i=e[0],n=e[1],o=e[2];t<n?t=(t%=i)<n?t+i:t:t>o&&(t%=i)}return t},intersects:function(t,e){var n=this.srInfo;return n?i.some(e._getParts(n),(function(e){return t.intersects(e.extent)})):t.intersects(e)},getCellExtent:function(t,e){var i=this.resolution,n=this.origin,o=this.cellWidth,r=this.cellHeight;return new s(e*o*i+n.x,n.y-(t+1)*r*i,(e+1)*o*i+n.x,n.y-t*r*i,c.createSpatialReference(n.spatialReference.toJson()))},getLatticeID:function(t){var e=this.getCellCoordinates({x:t.xmin,y:t.ymax}),i=this.getCellCoordinates({x:t.xmax,y:t.ymin});return e.row+"_"+i.row+"_"+this.normalize(e.col)+"_"+this.normalize(i.col)},sorter:function(t,e){return t<e?-1:1},getCellsInExtent:function(t,e){var n,o,r,s,a,h,c,u,f,m,g=this.getCellCoordinates({x:t.xmin,y:t.ymax}),x=this.getCellCoordinates({x:t.xmax,y:t.ymin}),d=g.row,y=x.row,w=g.col,p=x.col,C=[],_=[],v=[],R=[];for(n=d;n<=y;n++)for(o=w;o<=p;o++){r=this.normalize(o),t=this.getCellExtent(n,r),i.some(C,(function(t){return t.row===n&&t.col===r}))||C.push({row:n,col:r,extent:t,resolution:this.resolution}),e&&(_.push(t.xmin,t.xmax),v.push(t.ymin,t.ymax))}for(w=this.normalize(w),p=this.normalize(p),_.sort(this.sorter),v.sort(this.sorter),s=_.length,n=s-1;n>=0;n--)n<s-1&&_[n]===_[n+1]&&_.splice(n,1);for(s=v.length,n=s-1;n>=0;n--)n<s-1&&v[n]===v[n+1]&&v.splice(n,1);if(_.length&&v.length){for(a=_[0],h=_[_.length-1],c=v[0],u=v[v.length-1],s=_.length,n=0;n<s;n++)R.push([[_[n],u],[_[n],c]]);for(s=v.length,n=0;n<s;n++)R.push([[a,v[n]],[h,v[n]]]);f=new l({paths:R,spatialReference:this.origin.spatialReference.toJson()}),m=d+"_"+y+"_"+w+"_"+p,C.push({latticeID:m,lattice:f,resolution:this.resolution})}return{minRow:d,maxRow:y,minCol:w,maxCol:p,topRow:d,bottomRow:y,leftCol:w,rightCol:p,cells:C}},_findCell:function(t,e,n){var o;return i.some(t,(function(t){return t.row===e&&t.col===n&&(o=t),!!o})),o},getExtentOfIntersectingCells:function(t){var e=this.getCellsInExtent(t),n=e&&e.cells;if(n&&n.length){var o=e.topRow,r=e.leftCol,l=0;i.forEach(n,(function(t){t.row===o&&l++}));var c,u,f=this._findCell(n,o,r).extent,m=this.srInfo;!m||l!==this._frameStats[0]&&r!==e.rightCol?u=(c=f.xmin)+l*f.getWidth():(c=m.valid[0],u=m.valid[1]);var g=this._findCell(n,e.bottomRow,r).extent.ymin,x=f.ymax,d=new s(c,g,u,x,t.spatialReference)._normalize(!1,!1);return d&&d.rings&&(d=new a(d),d=h.getDenormalizedExtent(d)),d}}});return u.createFromFeatureLayer=function(t){var e=t.layer,i=e.getMap()||t.map,n=e._srInfo,o=i&&i.loaded?new u(new r(n?n.valid[0]:i.extent.xmin,n?n.valid[1]:i.extent.ymax,i.spatialReference),{width:e._tileWidth,height:e._tileHeight},{width:i.width,height:i.height},n):null;return o&&o.setResolution(i.extent),o},n("extend-esri")&&e.setObject("layers._GridLayout",u,o),u}));
