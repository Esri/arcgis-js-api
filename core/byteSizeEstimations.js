/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function n(n){return 32+n.length}function t(){return 16}function r(r){if(!r)return 0;let e=32;for(const o in r)if(r.hasOwnProperty(o)){const c=r[o];switch(typeof c){case"string":e+=n(c);break;case"number":e+=t();break;case"boolean":e+=4}}return e}function e(n,t){return 32+n.length*t}var o;!function(n){n[n.KILOBYTES=1024]="KILOBYTES",n[n.MEGABYTES=1048576]="MEGABYTES",n[n.GIGABYTES=1073741824]="GIGABYTES"}(o||(o={}));export{o as ByteSizeUnit,r as estimateAttributesObjectSize,e as estimateFixedArraySize,t as estimateNumberByteSize,n as estimateStringByteSize};
