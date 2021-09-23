/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../definitions","./heuristics","../util/Writer"],(function(e,t,r,s,i){"use strict";let n=function(){function e(e,t,r){this._start={index:0,vertex:0};const n=s.getMeshSizeHint(e,t,r),c=t/4;this.geometryType=e,this._records=new i(Int32Array,n.recordBytes),this._indices=new i(Uint32Array,n.indexBytes),this._vertices=new i(Uint32Array,n.vertexBytes),this._metrics=new i(Float32Array,0),this._strideInt=c}var n=e.prototype;return n.serialize=function(e){const t=this._records.buffer(),r=this._indices.buffer(),s=this._vertices.buffer(),i=this._metrics.length?this._metrics.buffer():null,n=4*this._strideInt;return e.push(t,r,s),{stride:n,records:t,indices:r,vertices:s,metrics:i}},n.vertexEnsureSize=function(e){this._vertices.ensureSize(e)},n.indexEnsureSize=function(e){this._indices.ensureSize(e)},n.recordStart=function(){this._start.index=this._indices.length,this._start.vertex=this._vertices.length},n.recordEnd=function(e,t,r,s,i,n,c,h){this._records.push(e),this._records.push(t),this._records.push(r),this._records.push(s),this._records.push(i),this._records.push(n),this._records.push(c),this._records.writeF32(h)},n.writeIndex=function(e){this._indices.push(e)},n.writeVertex=function(e){this._vertices.push(e)},n.writeVertexF32=function(e){this._vertices.writeF32(e)},n.copyLastFrom=function(e,t,s){const i=e._records.length-r.DISPLAY_RECORD_INT_PER_ELEMENT,n=e._records.getValue(i),c=e._records.getValue(i+1),h=e._records.getValue(i+2),_=e._records.getValue(i+4),u=e._records.getValue(i+6),o=e._records.getValue(i+7),d=this._vertices.length,l=(e._start.vertex-this._vertices.length)/this._strideInt,f=this._indices.length,g=this.vertexCount;for(let r=e._start.index;r!==e._indices.length;r++){const t=e._indices.getValue(r);this._indices.push(t-l)}for(let r=e._start.vertex;r!==e._vertices.length;r++){const t=e._vertices.getValue(r);this._vertices.push(t)}for(let r=d;r<=this._vertices.length;r+=this._strideInt)this._vertices.i1616Add(r,t,s);this._records.push(n),this._records.push(c),this._records.push(h),this._records.push(f),this._records.push(_),this._records.push(g),this._records.push(u),this._records.push(o)},t._createClass(e,[{key:"strideInt",get:function(){return this._strideInt}},{key:"recordCount",get:function(){return this._records.length/r.DISPLAY_RECORD_INT_PER_ELEMENT}},{key:"vertexCount",get:function(){return this._vertices.length/this._strideInt}},{key:"indexCount",get:function(){return this._indices.length}},{key:"indexWriter",get:function(){return this._indices}},{key:"vertexWriter",get:function(){return this._vertices}},{key:"metricWriter",get:function(){return this._metrics}}]),e}();e.VertexDataWriter=n,Object.defineProperty(e,"__esModule",{value:!0})}));
