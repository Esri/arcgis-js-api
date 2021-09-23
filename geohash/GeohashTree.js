/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../core/CircularArray","../core/maybe","./geohashUtils","../views/2d/layers/features/support/FeatureSetReaderJSON"],(function(t,e,s,i,n,o){"use strict";let a=function(){function t(t=[],e=8096){this._nodes=0,this._root=new l(0,0,0),this._statisticFields=t,this._pool=e?new s(8096):null}var n=t.prototype;return n._acquire=function(t,e,s){this._nodes++;let n=null;return i.isSome(this._pool)&&(n=this._pool.dequeue()),i.isSome(n)?n.realloc(t,e,s):new l(t,e,s)},n._release=function(t){this._nodes--,i.isSome(this._pool)&&this._pool.enqueue(t)},n.dropLevels=function(t){this._forEachNode((e=>{if(e.depth>=t)for(let t=0;t<e.children.length;t++){const s=e.children[t];e.children[t]=null,s&&this._release(s)}}))},n.clear=function(){this.dropLevels(0)},n.insert=function(t,e,s=0){const i=o.FeatureSetReaderJSON.fromOptimizedFeatures([t],"esriGeometryPoint").getCursor();i.next();const n=i.readGeometry();if(!n)return;const[a,l]=n.coords,c=t.geohashX,r=t.geohashY;this.insertCursor(i,t.displayId,a,l,c,r,e,s)},n.insertCursor=function(t,e,s,i,n,o,a,l=0){let c=this._root,r=0,h=0,u=0;for(;null!==c;){if(c.depth>=l&&(c.count+=1,c.xTotal+=s,c.yTotal+=i,c.xGeohashTotal+=n,c.yGeohashTotal+=o,c.displayId=e,this._updateStatisticsCursor(t,c,1)),r>=a)return void c.add(e);const d=Math.ceil((r+1)/2),f=Math.floor((r+1)/2),x=1-r%2,y=30-(3*d+2*f),p=30-(2*d+3*f),m=(n&7*x+3*(1-x)<<y)>>y,_=(o&3*x+7*(1-x)<<p)>>p,g=m+_*(8*x+4*(1-x));h=h<<3*x+2*(1-x)|m,u=u<<2*x+3*(1-x)|_,null==c.children[g]&&(c.children[g]=this._acquire(h,u,r+1)),r+=1,c=c.children[g]}},n.remove=function(t,e){const s=o.FeatureSetReaderJSON.fromOptimizedFeatures([t],"esriGeometryPoint").getCursor();s.next();const i=s.readGeometry();if(!i)return;const[n,a]=i.coords,l=t.geohashX,c=t.geohashY;this.removeCursor(s,n,a,l,c,e)},n.removeCursor=function(t,e,s,i,n,o){let a=this._root,l=0;for(;null!==a;){if(a.count-=1,a.xTotal-=e,a.yTotal-=s,a.xGeohashTotal-=i,a.yGeohashTotal-=n,this._updateStatisticsCursor(t,a,-1),l>=o)return void a.remove(t.getDisplayId());const c=Math.ceil((l+1)/2),r=Math.floor((l+1)/2),h=1-l%2,u=30-(3*c+2*r),d=30-(2*c+3*r),f=((i&7*h+3*(1-h)<<u)>>u)+((n&3*h+7*(1-h)<<d)>>d)*(8*h+4*(1-h)),x=a.children[f];1===x.count&&(this._release(x),a.children[f]=null),l+=1,a=x}},n.find=function(t,e,s){return this._root.find(t,e,s,0,0,0)},n.findSingleOccupancyNode=function(t,e,s,i,n){let o=this._root;for(;null!==o;){const a=o.depth,l=o.xNode,c=o.yNode,r=1-a%2,h=o.xGeohashTotal/o.count,u=o.yGeohashTotal/o.count;if(1===o.count&&t<h&&h<=s&&e<u&&u<=i)return o;if(a>=n){o=o.next;continue}const d=Math.ceil((a+1)/2),f=Math.floor((a+1)/2),x=30-(3*d+2*f),y=30-(2*d+3*f),p=~((1<<x)-1),m=~((1<<y)-1),_=(t&p)>>x,g=(e&m)>>y,N=(s&p)>>x,T=(i&m)>>y,M=l<<3*r+2*(1-r),S=c<<2*r+3*(1-r),k=M+8*r+4*(1-r),v=S+4*r+8*(1-r),b=Math.max(M,_),C=Math.max(S,g),G=Math.min(k,N),F=Math.min(v,T);let I=null,z=null;for(let t=C;t<=F;t++)for(let e=b;e<=G;e++){const s=e-M+(t-S)*(8*r+4*(1-r)),i=o.children[s];i&&(I||(I=i,I.next=o.next),z&&(z.next=i),z=i,i.next=o.next)}o=I||o.next}return null},n.getRegionDisplayIds=function(t,e,s,i,n){let o=this._root;const a=[];for(;null!==o;){const l=o.depth,c=o.xNode,r=o.yNode;if(l>=n){const n=o.xGeohashTotal/o.count,l=o.yGeohashTotal/o.count;t<=n&&n<=s&&e<=l&&l<=i&&o.displayIds.forEach((t=>a.push(t))),o=o.next;continue}const h=Math.ceil((l+1)/2),u=Math.floor((l+1)/2),d=1-l%2,f=30-(3*h+2*u),x=30-(2*h+3*u),y=~((1<<f)-1),p=~((1<<x)-1),m=(t&y)>>f,_=(e&p)>>x,g=(s&y)>>f,N=(i&p)>>x,T=c<<3*d+2*(1-d),M=r<<2*d+3*(1-d),S=T+8*d+4*(1-d),k=M+4*d+8*(1-d),v=Math.max(T,m),b=Math.max(M,_),C=Math.min(S,g),G=Math.min(k,N);let F=null,I=null;for(let t=b;t<=G;t++)for(let e=v;e<=C;e++){const s=e-T+(t-M)*(8*d+4*(1-d)),i=o.children[s];i&&(F||(F=i,F.next=o.next),I&&(I.next=i),I=i,i.next=o.next)}o=F||o.next}return a},n.getRegionStatistics=function(t,e,s,i,n){let o=this._root,a=0,l=0,c=0;const r={};let h=0;for(;null!==o;){const u=o.depth,d=o.xNode,f=o.yNode;if(u>=n){const n=o.xGeohashTotal/o.count,u=o.yGeohashTotal/o.count;t<n&&n<=s&&e<u&&u<=i&&(a+=o.count,l+=o.xTotal,c+=o.yTotal,1===o.count&&(h=o.displayId),this._aggregateStatistics(r,o.statistics)),o=o.next;continue}const x=Math.ceil((u+1)/2),y=Math.floor((u+1)/2),p=1-u%2,m=30-(3*x+2*y),_=30-(2*x+3*y),g=~((1<<m)-1),N=~((1<<_)-1),T=(t&g)>>m,M=(e&N)>>_,S=(s&g)>>m,k=(i&N)>>_,v=d<<3*p+2*(1-p),b=f<<2*p+3*(1-p),C=v+8*p+4*(1-p),G=b+4*p+8*(1-p),F=Math.max(v,T),I=Math.max(b,M),z=Math.min(C,S),w=Math.min(G,k);let O=null,P=null;for(let n=I;n<=w;n++)for(let u=F;u<=z;u++){const d=u-v+(n-b)*(8*p+4*(1-p)),f=o.children[d];if(f){if(n!==I&&n!==w&&u!==F&&u!==z){const n=f.xGeohashTotal/f.count,o=f.yGeohashTotal/f.count;t<n&&n<=s&&e<o&&o<=i&&(a+=f.count,l+=f.xTotal,c+=f.yTotal,1===f.count&&(h=f.displayId),this._aggregateStatistics(r,f.statistics));continue}O||(O=f,O.next=o.next),P&&(P.next=f),P=f,f.next=o.next}}o=O||o.next}return{count:a,attributes:this._normalizeStatistics(r,a),xTotal:l,yTotal:c,referenceId:h}},n._forEachNode=function(t){let e=this._root;for(;null!==e;){const s=this._linkChildren(e)||e.next;t(e),e=s}},n._linkChildren=function(t){let e=null,s=null;for(let i=0;i<=t.children.length;i++){const n=t.children[i];n&&(e||(e=n,e.next=t.next),s&&(s.next=n),s=n,n.next=t.next)}return e},n._updateStatisticsCursor=function(t,e,s){for(const i of this._statisticFields){const n=i.name,o=i.inField?t.readAttribute(i.inField):t.getComputedNumericAtIndex(i.inFieldIndex);switch(i.statisticType){case"norm":{e.statistics[n]||(e.statistics[n]={});const a=i.inNormalizationField,l=t.readAttribute(a),c=e.statistics[n].onStatisticField||0,r=e.statistics[n].onStatisticNormalizationField||0;null==o||isNaN(o)||null==l||0===l||isNaN(l)||(e.statistics[n].onStatisticField=c+s*o,e.statistics[n].onStatisticNormalizationField=r+s*l);break}case"sum":case"avg":{e.statistics[n]||(e.statistics[n]={value:0,nanCount:0});const t=e.statistics[n].value,i=e.statistics[n].nanCount;null==o||isNaN(o)?e.statistics[n].nanCount=i+s:e.statistics[n].value=t+s*o;break}case"avg_angle":{e.statistics[n]||(e.statistics[n]={x:0,y:0,nanCount:0});const t=e.statistics[n].x,i=e.statistics[n].y,a=e.statistics[n].nanCount,l=Math.PI/180;null==o||isNaN(o)?e.statistics[n].nanCount=a+s:(e.statistics[n].x=t+s*Math.cos(o*l),e.statistics[n].y=i+s*Math.sin(o*l));break}case"mode":{e.statistics[n]||(e.statistics[n]={});const t=e.statistics[n][o]||0;e.statistics[n][o]=t+s;break}}}},n._aggregateStatistics=function(t,e){for(const s of this._statisticFields){const i=s.name;switch(s.statisticType){case"sum":case"avg":case"avg_angle":case"mode":case"norm":t[i]||(t[i]={});for(const s in e[i]){const n=t[i][s]||0;t[i][s]=n+e[i][s]}}}},n._normalizeStatistics=function(t,e){const s={};for(const i of this._statisticFields){const n=i.name;switch(i.statisticType){case"norm":{const i=t[n];if(e&&null==i.onStatisticNormalizationField)break;if(e&&i.onStatisticNormalizationField){s[n]=i.onStatisticField/i.onStatisticNormalizationField;break}s[n]=0;break}case"sum":{if(!e)break;const{value:i,nanCount:o}=t[n];if(!(e-o))break;s[n]=i;break}case"avg":{if(!e)break;const{value:i,nanCount:o}=t[n];if(!(e-o))break;s[n]=i/(e-o);break}case"avg_angle":{if(!e)break;const{x:i,y:o,nanCount:a}=t[n];if(!(e-a))break;const l=i/(e-a),c=o/(e-a),r=180/Math.PI,h=Math.atan2(c,l)*r;s[n]=h;break}case"mode":{const e=t[n];let i=0,o=null;for(const t in e){const s=e[t];s>i&&(i=s,o=t)}s[n]="null"===o?null:o;break}}}return s},e._createClass(t,[{key:"count",get:function(){return this._root.count}},{key:"size",get:function(){return this._nodes}},{key:"poolSize",get:function(){return i.mapOr(this._pool,0,(t=>t.size))}},{key:"depth",get:function(){let t=0;return this._forEachNode((e=>t=Math.max(t,e.depth))),t}}]),t}(),l=function(){function t(t,e,s){this.count=0,this.xTotal=0,this.yTotal=0,this.statistics={},this.displayId=0,this.displayIds=new Set,this.next=null,this.depth=0,this.xNode=0,this.yNode=0,this.xGeohashTotal=0,this.yGeohashTotal=0,this.children=new Array(32);for(let i=0;i<this.children.length;i++)this.children[i]=null;this.xNode=t,this.yNode=e,this.depth=s}var e=t.prototype;return e.realloc=function(t,e,s){for(let i=0;i<this.children.length;i++)this.children[i]=null;return this.xNode=t,this.yNode=e,this.depth=s,this.next=null,this.xGeohashTotal=0,this.yGeohashTotal=0,this.xTotal=0,this.yTotal=0,this.count=0,this.statistics={},this.displayIds.clear(),this},e.add=function(t){this.displayIds.add(t)},e.remove=function(t){this.displayIds.delete(t)},e.getLngLatBounds=function(){const t=this.depth,e=Math.ceil(t/2),s=Math.floor(t/2),i=30-(3*e+2*s),o=30-(2*e+3*s),a=this.xNode<<i,l=this.yNode<<o;return n.decodeGeohashXY({geohashX:a,geohashY:l},this.depth)},e.find=function(t,e,s,i,n,o){if(i>=s)return this;const a=1-i%2,l=3*a+2*(1-a),c=2*a+3*(1-a),r=30-n-l,h=30-o-c,u=((t&7*a+3*(1-a)<<r)>>r)+((e&3*a+7*(1-a)<<h)>>h)*(8*a+4*(1-a)),d=this.children[u];return null==d?null:d.find(t,e,s,i+1,n+l,o+c)},t}();t.GeohashTree=a,Object.defineProperty(t,"__esModule",{value:!0})}));
