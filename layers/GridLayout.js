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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../SpatialReference","../geometry/Extent","../geometry/Polyline"],function(t,e,i,o,n,r,s,l){var h=t(null,{declaredClass:"esri.layers._GridLayout",constructor:function(t,e,i,o){this.origin=t,this.cellWidth=e.width,this.cellHeight=e.height,this.mapWidth=i.width,this.mapHeight=i.height,this.srInfo=o},setResolution:function(t){if(this._resolution=(t.xmax-t.xmin)/this.mapWidth,this.srInfo){var e=Math.round(2*this.srInfo.valid[1]/this._resolution),i=Math.round(e/this.cellWidth);this._frameStats=[i,0,i-1]}},setMapState:function(t,e,i){this.mapWidth=e,this.mapHeight=i,this.setResolution(t)},getCellCoordinates:function(t){var e=this._resolution,i=this.origin;return{row:Math.floor((i.y-t.y)/(this.cellHeight*e)),col:Math.floor((t.x-i.x)/(this.cellWidth*e))}},normalize:function(t){var e=this._frameStats;if(e){var i=e[0],o=e[1],n=e[2];o>t?(t%=i,t=o>t?t+i:t):t>n&&(t%=i)}return t},intersects:function(t,e){var o=this.srInfo;return o?i.some(e._getParts(o),function(e){return t.intersects(e.extent)}):t.intersects(e)},getCellExtent:function(t,e){var i=this._resolution,o=this.origin,n=this.cellWidth,l=this.cellHeight;return new s(e*n*i+o.x,o.y-(t+1)*l*i,(e+1)*n*i+o.x,o.y-t*l*i,new r(o.spatialReference.toJson()))},getLatticeID:function(t){var e=this.getCellCoordinates({x:t.xmin,y:t.ymax}),i=this.getCellCoordinates({x:t.xmax,y:t.ymin}),o=e.row,n=i.row,r=this.normalize(e.col),s=this.normalize(i.col);return o+"_"+n+"_"+r+"_"+s},sorter:function(t,e){return e>t?-1:1},getCellsInExtent:function(t,e){var o,n,r,s,h,a,c,u,f,m,g=this.getCellCoordinates({x:t.xmin,y:t.ymax}),x=this.getCellCoordinates({x:t.xmax,y:t.ymin}),d=g.row,y=x.row,_=g.col,p=x.col,C=[],w=[],v=[],R=[];for(o=d;y>=o;o++)for(n=_;p>=n;n++){r=this.normalize(n),t=this.getCellExtent(o,r);var I=i.some(C,function(t){return t.row===o&&t.col===r});I||C.push({row:o,col:r,extent:t,resolution:this._resolution}),e&&(w.push(t.xmin,t.xmax),v.push(t.ymin,t.ymax))}for(_=this.normalize(_),p=this.normalize(p),w.sort(this.sorter),v.sort(this.sorter),s=w.length,o=s-1;o>=0;o--)s-1>o&&w[o]===w[o+1]&&w.splice(o,1);for(s=v.length,o=s-1;o>=0;o--)s-1>o&&v[o]===v[o+1]&&v.splice(o,1);if(w.length&&v.length){for(h=w[0],a=w[w.length-1],c=v[0],u=v[v.length-1],s=w.length,o=0;s>o;o++)R.push([[w[o],u],[w[o],c]]);for(s=v.length,o=0;s>o;o++)R.push([[h,v[o]],[a,v[o]]]);f=new l({paths:R,spatialReference:this.origin.spatialReference.toJson()}),m=d+"_"+y+"_"+_+"_"+p,C.push({latticeID:m,lattice:f,resolution:this._resolution})}return{minRow:d,maxRow:y,minCol:_,maxCol:p,cells:C}}});return o("extend-esri")&&e.setObject("layers._GridLayout",h,n),h});