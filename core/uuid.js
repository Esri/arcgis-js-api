/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const e="randomUUID"in crypto;function n(){if(e)return crypto.randomUUID();const t=crypto.getRandomValues(new Uint16Array(8));t[3]=4095&t[3]|16384,t[4]=16383&t[4]|32768;const n=e=>t[e].toString(16).padStart(4,"0");return n(0)+n(1)+"-"+n(2)+"-"+n(3)+"-"+n(4)+"-"+n(5)+n(6)+n(7)}t.generateUUID=n,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
