/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{BucketType as e}from"../enums.js";import t from"./BaseBucket.js";import{LineTessellation as i}from"../../webgl/TurboLine.js";const s=65535;class n extends t{constructor(t,s,n,a,o){super(t,s,n),this.type=e.LINE,this._tessellationOptions={pixelCoordRatio:8,halfWidth:0,offset:0},this._patternMap=new Map,this.tessellationProperties={_lineVertexBuffer:null,_lineIndexBuffer:null,_ddValues:null},this.tessellationProperties._lineVertexBuffer=a,this.tessellationProperties._lineIndexBuffer=o,this._lineTessellator=new i(r(this.tessellationProperties),l(this.tessellationProperties),t.canUseThinTessellation)}get lineIndexStart(){return this._lineIndexStart}get lineIndexCount(){return this._lineIndexCount}getResources(e,t,i){const s=this.layer,n=this.zoom,r=s.hasDataDrivenLine,l=s.getPaintProperty("line-pattern"),a=s.getPaintProperty("line-dasharray"),o=s.getLayoutProperty("line-cap");if(!l&&!a)return;const u=o?.getValue(n)||0,f=o?.isDataDriven;if(r){const e=l?.isDataDriven,i=a?.isDataDriven;if(!e&&!i)return;for(const r of this._features)t(e?l.getValue(n,r):this._getDashArrayKey(r,n,s,a,f,o,u))}else if(l)t(l.getValue(n));else if(a){const e=a.getValue(n);t(s.getDashKey(e,u))}}processFeatures(e){this._lineIndexStart=3*this.tessellationProperties._lineIndexBuffer.index,this._lineIndexCount=0;const t=this.layer,i=this.zoom,s=this._features,n=this._tessellationOptions,{hasDataDrivenLine:r,lineMaterial:l}=t;e&&e.setExtent(this.layerExtent);const a=t.getPaintProperty("line-pattern"),o=t.getPaintProperty("line-dasharray"),u=a?.isDataDriven,f=o?.isDataDriven;let h;h=t.getLayoutProperty("line-cap");const p=h?.isDataDriven?h:null,g=p?null:t.getLayoutValue("line-cap",i),y=g||0,d=!!p;h=t.getLayoutProperty("line-join");const c=h?.isDataDriven?h:null,_=c?null:t.getLayoutValue("line-join",i);h=t.getLayoutProperty("line-miter-limit");const x=h?.isDataDriven?h:null,D=x?null:t.getLayoutValue("line-miter-limit",i);h=t.getLayoutProperty("line-round-limit");const m=h?.isDataDriven?h:null,V=m?null:t.getLayoutValue("line-round-limit",i);h=t.getPaintProperty("line-width");const P=h?.isDataDriven?h:null,I=P?null:t.getPaintValue("line-width",i);h=t.getPaintProperty("line-offset");const L=h?.isDataDriven?h:null,B=L?null:t.getPaintValue("line-offset",i);if(u||f){const r=[];for(const n of s){const s=u?a.getValue(i,n):this._getDashArrayKey(n,i,t,o,d,p,y),f=this._spriteInfo[s];if(!f||!f.rect)continue;const h=l.encodeAttributes(n,i,t,f),v=n.getGeometry(e);r.push({ddAttributes:h,page:f.page,cap:p?p.getValue(i,n):g,join:c?c.getValue(i,n):_,miterLimit:x?x.getValue(i,n):D,roundLimit:m?m.getValue(i,n):V,halfWidth:.5*(P?P.getValue(i,n):I),offset:L?L.getValue(i,n):B,geometry:v})}r.sort(((e,t)=>e.page-t.page)),n.textured=!0;for(const{ddAttributes:e,page:t,cap:i,join:s,miterLimit:l,roundLimit:a,halfWidth:o,offset:u,geometry:f}of r)n.capType=i,n.joinType=s,n.miterLimit=l,n.roundLimit=a,n.halfWidth=o,n.offset=u,this._processFeature(f,e,t)}else{n.textured=!(!a&&!o),n.capType=g,n.joinType=_,n.miterLimit=D,n.roundLimit=V,n.halfWidth=.5*I,n.offset=B;for(const a of s){const s=r?l.encodeAttributes(a,i,t):null;p&&(n.capType=p.getValue(i,a)),c&&(n.joinType=c.getValue(i,a)),x&&(n.miterLimit=x.getValue(i,a)),m&&(n.roundLimit=m.getValue(i,a)),P&&(n.halfWidth=.5*P.getValue(i,a)),L&&(n.offset=L.getValue(i,a));const o=a.getGeometry(e);this._processFeature(o,s)}}}serialize(){let e=6;e+=this.layerUIDs.length,e+=this.tessellationProperties._lineVertexBuffer.array.length,e+=this.tessellationProperties._lineIndexBuffer.array.length,e+=3*this._patternMap.size+1;const t=new Uint32Array(e),i=new Int32Array(t.buffer);let s=0;t[s++]=this.type,t[s++]=this.layerUIDs.length;for(let l=0;l<this.layerUIDs.length;l++)t[s++]=this.layerUIDs[l];t[s++]=this._lineIndexStart,t[s++]=this._lineIndexCount;const n=this._patternMap,r=n.size;if(t[s++]=r,r>0)for(const[l,[a,o]]of n)t[s++]=l,t[s++]=a,t[s++]=o;t[s++]=this.tessellationProperties._lineVertexBuffer.array.length;for(let l=0;l<this.tessellationProperties._lineVertexBuffer.array.length;l++)i[s++]=this.tessellationProperties._lineVertexBuffer.array[l];t[s++]=this.tessellationProperties._lineIndexBuffer.array.length;for(let l=0;l<this.tessellationProperties._lineIndexBuffer.array.length;l++)t[s++]=this.tessellationProperties._lineIndexBuffer.array[l];return t.buffer}_processFeature(e,t,i){if(!e)return;const s=e.length;for(let n=0;n<s;n++)this._processGeometry(e[n],t,i)}_processGeometry(e,t,i){if(e.length<2)return;const n=.001;let r,l,a=e[0],o=1;for(;o<e.length;)r=e[o].x-a.x,l=e[o].y-a.y,r*r+l*l<n*n?e.splice(o,1):(a=e[o],++o);if(e.length<2)return;const u=this.tessellationProperties._lineIndexBuffer,f=3*u.index;this._tessellationOptions.initialDistance=0,this._tessellationOptions.wrapDistance=s,this.tessellationProperties._ddValues=t,this._lineTessellator.tessellate(e,this._tessellationOptions);const h=3*u.index-f;if(void 0!==i){const e=this._patternMap,t=e.get(i);t?t[1]+=h:e.set(i,[f+this._lineIndexCount,h])}this._lineIndexCount+=h}_getDashArrayKey(e,t,i,s,n,r,l){const a=n?r.getValue(t,e):l,o=s.getValue(t,e);return i.getDashKey(o,a)}}const r=e=>(t,i,s,n,r,l,a,o,u,f,h)=>(e._lineVertexBuffer.add(t,i,a,o,s,n,r,l,u,f,h,e._ddValues),e._lineVertexBuffer.index-1),l=e=>(t,i,s)=>{e._lineIndexBuffer.add(t,i,s)};export{n as default};