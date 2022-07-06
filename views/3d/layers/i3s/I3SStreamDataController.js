/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{onAbortOrThrow as e,always as t}from"../../../../core/promiseUtils.js";class r{constructor(e,t){this.requester=e,this.apiKey=t,this.activeRequests=new Set}get busy(){return this.requester.busy}request(r,s,o){const l=new AbortController,a=e(o,(()=>l.abort())),n={signal:l.signal,query:{token:this.apiKey}},i=this.requester.request(r,s,n),u={response:i,abortController:l,abortHandle:a};return this.activeRequests.add(u),t(i,(()=>{u.abortController=null,u.abortHandle?.remove(),u.abortHandle=null,this.activeRequests.delete(u)})),i}cancelAll(){this.activeRequests.forEach((e=>{e.abortController?.abort(),e.abortController=null,e.abortHandle?.remove()})),this.activeRequests.clear()}}export{r as I3SStreamDataController};
