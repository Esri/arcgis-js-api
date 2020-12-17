/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../core/ObjectPool"],(function(o){"use strict";let n=function(){function o(){this.spans=[]}var n=o.prototype;return n.acquire=function(o){this.lodInfo=o},n.release=function(){this.lodInfo=null,this.spans.length=0},n.forEach=function(o,n){const{spans:t,lodInfo:l}=this,{level:e}=l;if(0!==t.length)for(const{row:r,colFrom:c,colTo:i}of t)for(let t=c;t<=i;t++)o.call(n,e,r,l.normalizeCol(t),l.getWorldForColumn(t))},o}();return n.pool=new o(n),n}));
