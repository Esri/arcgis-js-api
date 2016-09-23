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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["../../core/declare","dojo/_base/array","../../geometry/SpatialReference","../../geometry/Extent","../../geometry/Polyline"],function(t,e,i,r,o){var n=t(null,{declaredClass:"esri.layers.GridLayout",constructor:function(t,e,i,r){this.origin=t,this.cellWidth=e.width,this.cellHeight=e.height,this.mapWidth=i.width,this.mapHeight=i.height,this.srInfo=r},setResolution:function(t){if(this._resolution=(t.xmax-t.xmin)/this.mapWidth,this.srInfo){var e=Math.round(2*this.srInfo.valid[1]/this._resolution),i=Math.round(e/this.cellWidth);this._frameStats=[i,0,i-1]}},getCellCoordinates:function(t){var e=this._resolution,i=this.origin;return{row:Math.floor((i.y-t.y)/(this.cellHeight*e)),col:Math.floor((t.x-i.x)/(this.cellWidth*e))}},normalize:function(t){var e=this._frameStats;if(e){var i=e[0],r=e[1],o=e[2];r>t?(t%=i,t=r>t?t+i:t):t>o&&(t%=i)}return t},intersects:function(t,i){var r=this.srInfo;return r?e.some(i._getParts(r),function(e){return t.intersects(e.extent)}):t.intersects(i)},getCellExtent:function(t,e){var o=this._resolution,n=this.origin,s=this.cellWidth,l=this.cellHeight;return new r(e*s*o+n.x,n.y-(t+1)*l*o,(e+1)*s*o+n.x,n.y-t*l*o,new i(n.spatialReference.toJSON()))},getLatticeID:function(t){var e=this.getCellCoordinates({x:t.xmin,y:t.ymax}),i=this.getCellCoordinates({x:t.xmax,y:t.ymin}),r=e.row,o=i.row,n=this.normalize(e.col),s=this.normalize(i.col);return r+"_"+o+"_"+n+"_"+s},sorter:function(t,e){return e>t?-1:1},getCellsInExtent:function(t,e){var i,r,n,s,l,h,a,c,u,f,m=this.getCellCoordinates({x:t.xmin,y:t.ymax}),g=this.getCellCoordinates({x:t.xmax,y:t.ymin}),x=m.row,d=g.row,y=m.col,p=g.col,C=[],_=[],w=[],v=[];for(i=x;d>=i;i++)for(r=y;p>=r;r++)n=this.normalize(r),t=this.getCellExtent(i,n),C.push({row:i,col:n,extent:t,resolution:this._resolution}),e&&(_.push(t.xmin,t.xmax),w.push(t.ymin,t.ymax));for(y=this.normalize(y),p=this.normalize(p),_.sort(this.sorter),w.sort(this.sorter),s=_.length,i=s-1;i>=0;i--)s-1>i&&_[i]===_[i+1]&&_.splice(i,1);for(s=w.length,i=s-1;i>=0;i--)s-1>i&&w[i]===w[i+1]&&w.splice(i,1);if(_.length&&w.length){for(l=_[0],h=_[_.length-1],a=w[0],c=w[w.length-1],s=_.length,i=0;s>i;i++)v.push([[_[i],c],[_[i],a]]);for(s=w.length,i=0;s>i;i++)v.push([[l,w[i]],[h,w[i]]]);u=o.fromJSON({paths:v,spatialReference:this.origin.spatialReference.toJSON()}),f=x+"_"+d+"_"+y+"_"+p,C.push({latticeID:f,lattice:u,resolution:this._resolution})}return{minRow:x,maxRow:d,minCol:y,maxCol:p,cells:C}}});return n});