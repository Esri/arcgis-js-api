// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../SpatialReference","../geometry/Extent","../geometry/Polyline"],function(t,e,i,o,n,r,s,l){var h=t(null,{declaredClass:"esri.layers._GridLayout",constructor:function(t,e,i,o){this.origin=t,this.cellWidth=e.width,this.cellHeight=e.height,this.mapWidth=i.width,this.mapHeight=i.height,this.srInfo=o},setResolution:function(t){if(this._resolution=(t.xmax-t.xmin)/this.mapWidth,this.srInfo){var e=Math.round(2*this.srInfo.valid[1]/this._resolution),i=Math.round(e/this.cellWidth);this._frameStats=[i,0,i-1]}},getCellCoordinates:function(t){var e=this._resolution,i=this.origin;return{row:Math.floor((i.y-t.y)/(this.cellHeight*e)),col:Math.floor((t.x-i.x)/(this.cellWidth*e))}},normalize:function(t){var e=this._frameStats;if(e){var i=e[0],o=e[1],n=e[2];o>t?(t%=i,t=o>t?t+i:t):t>n&&(t%=i)}return t},intersects:function(t,e){var o=this.srInfo;return o?i.some(e._getParts(o),function(e){return t.intersects(e.extent)}):t.intersects(e)},getCellExtent:function(t,e){var i=this._resolution,o=this.origin,n=this.cellWidth,l=this.cellHeight;return new s(e*n*i+o.x,o.y-(t+1)*l*i,(e+1)*n*i+o.x,o.y-t*l*i,new r(o.spatialReference.toJson()))},getLatticeID:function(t){var e=this.getCellCoordinates({x:t.xmin,y:t.ymax}),i=this.getCellCoordinates({x:t.xmax,y:t.ymin}),o=e.row,n=i.row,r=this.normalize(e.col),s=this.normalize(i.col);return o+"_"+n+"_"+r+"_"+s},sorter:function(t,e){return e>t?-1:1},getCellsInExtent:function(t,e){var i,o,n,r,s,h,a,c,u,f,m=this.getCellCoordinates({x:t.xmin,y:t.ymax}),x=this.getCellCoordinates({x:t.xmax,y:t.ymin}),g=m.row,d=x.row,y=m.col,_=x.col,p=[],C=[],w=[],v=[];for(i=g;d>=i;i++)for(o=y;_>=o;o++)n=this.normalize(o),t=this.getCellExtent(i,n),p.push({row:i,col:n,extent:t,resolution:this._resolution}),e&&(C.push(t.xmin,t.xmax),w.push(t.ymin,t.ymax));for(y=this.normalize(y),_=this.normalize(_),C.sort(this.sorter),w.sort(this.sorter),r=C.length,i=r-1;i>=0;i--)r-1>i&&C[i]===C[i+1]&&C.splice(i,1);for(r=w.length,i=r-1;i>=0;i--)r-1>i&&w[i]===w[i+1]&&w.splice(i,1);if(C.length&&w.length){for(s=C[0],h=C[C.length-1],a=w[0],c=w[w.length-1],r=C.length,i=0;r>i;i++)v.push([[C[i],c],[C[i],a]]);for(r=w.length,i=0;r>i;i++)v.push([[s,w[i]],[h,w[i]]]);u=new l({paths:v,spatialReference:this.origin.spatialReference.toJson()}),f=g+"_"+d+"_"+y+"_"+_,p.push({latticeID:f,lattice:u,resolution:this._resolution})}return{minRow:g,maxRow:d,minCol:y,maxCol:_,cells:p}}});return o("extend-esri")&&e.setObject("layers._GridLayout",h,n),h});