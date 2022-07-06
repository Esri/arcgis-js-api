/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class r{constructor(){this.errors=[],this.tolerant=!1}recordError(r){this.errors.push(r)}tolerate(r){if(!this.tolerant)throw r;this.recordError(r)}constructError(r,t){let e=new Error(r);try{throw e}catch(o){Object.create&&Object.defineProperty&&(e=Object.create(o),Object.defineProperty(e,"column",{value:t}))}return e}createError(r,t,e,o){const c="Line "+t+": "+o,s=this.constructError(c,e);return s.index=r,s.lineNumber=t,s.description=o,s}throwError(r,t,e,o){throw this.createError(r,t,e,o)}tolerateError(r,t,e,o){const c=this.createError(r,t,e,o);if(!this.tolerant)throw c;this.recordError(c)}}export{r as ErrorHandler};
