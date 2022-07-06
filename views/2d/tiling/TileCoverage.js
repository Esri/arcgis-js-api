/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import o from"../../../core/ObjectPool.js";class l{constructor(){this.spans=[]}acquire(o){this.lodInfo=o}release(){this.lodInfo=null,this.spans.length=0}forEach(o,l){const{spans:s,lodInfo:t}=this,{level:e}=t;if(0!==s.length)for(const{row:r,colFrom:n,colTo:c}of s)for(let s=n;s<=c;s++)o.call(l,e,r,t.normalizeCol(s),t.getWorldForColumn(s))}}l.pool=new o(l);export{l as default};
