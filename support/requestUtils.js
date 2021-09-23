/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../core/has","../core/maybe","../core/promiseUtils"],(function(e,r,o,t){"use strict";function n(e,n,s=!1,d){return new Promise(((c,a)=>{if(t.isAborted(d))return void a(i());let l=()=>{v(),a(new Error(`Unable to load ${n}`))},u=()=>{const r=e;v(),c(r)},m=()=>{if(!e)return;const r=e;v(),r.src="",a(i())};const v=()=>{r("esri-image-decode")||(e.removeEventListener("error",l),e.removeEventListener("load",u)),l=null,u=null,e=null,o.isSome(d)&&d.removeEventListener("abort",m),m=null,s&&URL.revokeObjectURL(n)};o.isSome(d)&&d.addEventListener("abort",m),r("esri-image-decode")?e.decode().then(u,l):(e.addEventListener("error",l),e.addEventListener("load",u))}))}function i(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error;return e.name="AbortError",e}}e.loadImageAsync=n,Object.defineProperty(e,"__esModule",{value:!0})}));
