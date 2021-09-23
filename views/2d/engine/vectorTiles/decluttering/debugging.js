/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";function e(t,e,n,o,l,i){t.fillStyle=e,t.fillRect(n,o,l,i)}function n(t,e,n,o,l,i){t.strokeStyle=e,t.strokeRect(n,o,l,i)}function o(t,e){t.strokeStyle="black";const n=e.cellSize,o=e.rows,l=e.columns;for(let i=0;i<o;i++){const o=e.cells[i],r=i*n,d=(i+1)*n;for(let e=0;e<l;e++){const l=o[e],i=e*n,s=(e+1)*n;t.strokeRect(i,r,s-i,d-r),t.fillText(`cells:${l.length}`,i+4,r+12)}}}function l(t,o){const l=window.COLLISION_XRAY;for(let i=0;i<o.length;++i){const r=!o[i].unique.show;if(l||!r)for(const d of o[i].colliders){if(!d.enabled)continue;const s=!o[i].unique.parts[d.partIndex].show;if(!l&&s)continue;const a=d.xScreen,c=d.yScreen,m=d.dxScreen,h=d.dyScreen;t.globalAlpha=r||s?.2:1,e(t,"green",a-1,c-1,3,3),n(t,"red",a+m,c+h,d.width,d.height),e(t,"blue",a+m-1,c+h-1,3,3),t.globalAlpha=1}}}function i(t,e,n){if(!window.PERFORMANCE_RECORDING_STORAGE)return;const o=window.PERFORMANCE_RECORDING_STORAGE;o.perf=o.perf||{};const l=o.perf;l[t]=l[t]||{start:null,time:0,min:void 0,max:void 0,samples:[],unit:n},l[t].time+=e,l[t].samples.push(e),(null==l[t].min||e<l[t].min)&&(l[t].min=e),(null==l[t].max||e>l[t].max)&&(l[t].max=e)}function r(){if(!window.PERFORMANCE_RECORDING_STORAGE)return;window.PERFORMANCE_RECORDING_STORAGE.perf={}}function d(t,e){return`${Math.round(10*t)/10}${e}`}function s(t){if(!window.PERFORMANCE_RECORDING_STORAGE){const t=document.createElement("div");return t.innerHTML="No recorded data is present because performance recording is disabled.",t}const e=document.createElement("div");let n="";const o=window.PERFORMANCE_RECORDING_STORAGE.perf,l=50;n+='<table style="border-collapse: collapse;">',n+=`<tr style="text-weight: bold; border-bottom: 1px solid "${t}";"><td>Name</td><td>Total</td><td>Runs</td><td>Average</td><td>Min</td><td>Distribution</td><td>Max</td><td>Histogram (${l} bins)</td></tr>`;const i=[];for(const d in o)i.push({name:d,value:o[d].time/o[d].samples.length,sortkey:o[d].max});i.sort(((t,e)=>-(t.sortkey-e.sortkey)));const r=i.map((t=>t.name));for(const m of r)n+="<tr>",n+=`<td>${m}</td>`,n+=`<td>${d(o[m].time,o[m].unit)}</td>`,n+=`<td>${o[m].samples.length}</td>`,n+=`<td>${d(o[m].time/o[m].samples.length,o[m].unit)}</td>`,n+=`<td style="text-align: right;">${d(o[m].min,o[m].unit)}</td>`,n+="<td data-distribution='1'></td>",n+=`<td>${d(o[m].max,o[m].unit)}</td>`,n+="<td data-histogram='1'></td>",n+="</tr>";n+="<table>",e.innerHTML=n;const s=e.querySelectorAll("td[data-distribution='1']"),a=e.querySelectorAll("td[data-histogram='1']");for(let d=0;d<s.length;d++){let e=s[d];{const n=document.createElement("canvas");n.height=10,n.width=100;const l=n.getContext("2d");if(l.strokeStyle=t,l.beginPath(),l.moveTo(0,5),l.lineTo(100,5),o[r[d]].max>o[r[d]].min+.001)for(const t of o[r[d]].samples){const e=(t-o[r[d]].min)/(o[r[d]].max-o[r[d]].min);l.moveTo(100*e,3),l.lineTo(100*e,7)}l.stroke(),l.strokeRect((i[d].value-o[r[d]].min)/(o[r[d]].max-o[r[d]].min)*100-2,0,4,9),e.appendChild(n)}e=a[d];{const n=new Array(l);for(let t=0;t<n.length;t++)n[t]=0;for(const t of o[r[d]].samples){const e=(t-o[r[d]].min)/(o[r[d]].max-o[r[d]].min);n[1===e?n.length-1:Math.floor(e*n.length)]++}const i=document.createElement("canvas");i.height=30,i.width=120;const s=i.getContext("2d");s.strokeStyle=t,s.fillStyle=t;let a=0;for(let t=0;t<n.length;t++){const e=n[t];a=Math.max(a,e)}for(let t=0;t<n.length;t++){const e=n[t];s.fillRect(t*i.width/n.length,i.height*(1-e/a),i.width/n.length,i.height*(e/a))}s.beginPath(),s.moveTo(0,i.height),s.lineTo(i.width,i.height),s.stroke(),e.appendChild(i)}}const c=e.querySelectorAll("td");for(let d=0;d<c.length;d++)c[d].style.padding="5px";return e}t.drawColliders=l,t.drawGridIndex=o,t.perfAdd=i,t.perfClear=r,t.perfElement=s,Object.defineProperty(t,"__esModule",{value:!0})}));
