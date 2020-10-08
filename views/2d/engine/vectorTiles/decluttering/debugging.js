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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports"],(function(e,t){"use strict";function r(e,t,r,n,i,l){e.fillStyle=t,e.fillRect(r,n,i,l)}function n(e,t,r,n,i,l){e.strokeStyle=t,e.strokeRect(r,n,i,l)}function i(e,t){return""+Math.round(10*e)/10+t}Object.defineProperty(t,"__esModule",{value:!0}),t.perfElement=t.perfClear=t.perfAdd=t.drawColliders=t.drawGridIndex=void 0,t.drawGridIndex=function(e,t){e.strokeStyle="black";for(var r=t.cellSize,n=t.rows,i=t.columns,l=0;l<n;l++)for(var a=t.cells[l],d=l*r,o=(l+1)*r,s=0;s<i;s++){var m=a[s],h=s*r,u=(s+1)*r;e.strokeRect(h,d,u-h,o-d),e.fillText("cells:"+m.length,h+4,d+12)}},t.drawColliders=function(e,t){for(var i=window.COLLISION_XRAY,l=0;l<t.length;++l){var a=!t[l].unique.show;if(i||!a)for(var d=0,o=t[l].colliders;d<o.length;d++){var s=o[d];if(s.enabled){var m=!t[l].unique.parts[s.partIndex].show;if(i||!m){var h=s.xScreen,u=s.yScreen,f=s.dxScreen,c=s.dyScreen;e.globalAlpha=a||m?.2:1,r(e,"green",h-1,u-1,3,3),n(e,"red",h+f,u+c,s.width,s.height),r(e,"blue",h+f-1,u+c-1,3,3),e.globalAlpha=1}}}}},t.perfAdd=function(e,t,r){if(window.PERFORMANCE_RECORDING_STORAGE){var n=window.PERFORMANCE_RECORDING_STORAGE;n.perf=n.perf||{};var i=n.perf;i[e]=i[e]||{start:null,time:0,min:void 0,max:void 0,samples:[],unit:r},i[e].time+=t,i[e].samples.push(t),(null==i[e].min||t<i[e].min)&&(i[e].min=t),(null==i[e].max||t>i[e].max)&&(i[e].max=t)}},t.perfClear=function(){window.PERFORMANCE_RECORDING_STORAGE&&(window.PERFORMANCE_RECORDING_STORAGE.perf={})},t.perfElement=function(e){if(!window.PERFORMANCE_RECORDING_STORAGE){var t=document.createElement("div");return t.innerHTML="No recorded data is present because performance recording is disabled.",t}var r=document.createElement("div"),n="",l=window.PERFORMANCE_RECORDING_STORAGE.perf;n+='<table style="border-collapse: collapse;">',n+='<tr style="text-weight: bold; border-bottom: 1px solid "'+e+'";"><td>Name</td><td>Total</td><td>Runs</td><td>Average</td><td>Min</td><td>Distribution</td><td>Max</td><td>Histogram (50 bins)</td></tr>';var a=[];for(var d in l)a.push({name:d,value:l[d].time/l[d].samples.length,sortkey:l[d].max});a.sort((function(e,t){return-(e.sortkey-t.sortkey)}));for(var o=a.map((function(e){return e.name})),s=0,m=o;s<m.length;s++){var h=m[s];n+="<tr>",n+="<td>"+h+"</td>",n+="<td>"+i(l[h].time,l[h].unit)+"</td>",n+="<td>"+l[h].samples.length+"</td>",n+="<td>"+i(l[h].time/l[h].samples.length,l[h].unit)+"</td>",n+='<td style="text-align: right;">'+i(l[h].min,l[h].unit)+"</td>",n+="<td data-distribution='1'></td>",n+="<td>"+i(l[h].max,l[h].unit)+"</td>",n+="<td data-histogram='1'></td>",n+="</tr>"}n+="<table>",r.innerHTML=n;for(var u=r.querySelectorAll("td[data-distribution='1']"),f=r.querySelectorAll("td[data-histogram='1']"),c=0;c<u.length;c++){var g,v,p=u[c];if((g=document.createElement("canvas")).height=10,g.width=100,(v=g.getContext("2d")).strokeStyle=e,v.beginPath(),v.moveTo(0,5),v.lineTo(100,5),l[o[c]].max>l[o[c]].min+.001)for(var R=0,E=l[o[c]].samples;R<E.length;R++){var w=(E[R]-l[o[c]].min)/(l[o[c]].max-l[o[c]].min);v.moveTo(100*w,3),v.lineTo(100*w,7)}v.stroke(),v.strokeRect((a[c].value-l[o[c]].min)/(l[o[c]].max-l[o[c]].min)*100-2,0,4,9),p.appendChild(g),p=f[c];for(var x=new Array(50),A=0;A<x.length;A++)x[A]=0;for(var C=0,O=l[o[c]].samples;C<O.length;C++){x[b=1===(w=(O[C]-l[o[c]].min)/(l[o[c]].max-l[o[c]].min))?x.length-1:Math.floor(w*x.length)]++}(g=document.createElement("canvas")).height=30,g.width=120,(v=g.getContext("2d")).strokeStyle=e,v.fillStyle=e;for(var S=0,b=0;b<x.length;b++){var y=x[b];S=Math.max(S,y)}for(b=0;b<x.length;b++){y=x[b];v.fillRect(b*g.width/x.length,g.height*(1-y/S),g.width/x.length,g.height*(y/S))}v.beginPath(),v.moveTo(0,g.height),v.lineTo(g.width,g.height),v.stroke(),p.appendChild(g)}var T=r.querySelectorAll("td");for(c=0;c<T.length;c++)T[c].style.padding="5px";return r}}));