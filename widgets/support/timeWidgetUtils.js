/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../core/timeUtils","../../intl/date","../../chunks/SunCalc"],(function(t,e,o,n){"use strict";const s={hour:"2-digit",minute:"2-digit",timeZone:"UTC"},i={hour:"numeric",timeZone:"UTC"};function f(t,n){let f;if("tick"===n){const o=Math.round(e.convertTime(t,"minutes","hours"));f=new Date(e.convertTime(o,"hours","milliseconds"))}else f=new Date(6e4*t);let m=o.formatDate(f,s);return"tick"===n&&-1!==m.indexOf(" ")&&(m=o.formatDate(f,i),m=m.replace(":00","")),m}function m(t,o,s,i){const f=n.SunCalc.getTimes(t,o,s),m=f.sunrise,l=f.sunset,u=e.offsetDate(t,i,"hours"),r=e.offsetDate(m,i,"hours"),z=e.offsetDate(l,i,"hours");if(u.getUTCDate()!==r.getUTCDate()||u.getUTCDate()!==z.getUTCDate()){const t=u.getTime()-r.getTime()>0?1:-1;m.setUTCDate(m.getUTCDate()+t),l.setUTCDate(l.getUTCDate()+t)}return{sunrise:m,sunset:l}}function l(t){return[{utcOffset:-12,short:"UTC-12",long:t.timezoneDateline},{utcOffset:-11,short:"UTC-11",long:t.timezoneSamoa},{utcOffset:-10,short:t.timezoneHAST,long:t.timezoneHawaii},{utcOffset:-9,short:t.timezoneAKST,long:t.timezoneAlaska},{utcOffset:-8,short:t.timezonePST,long:t.timezoneBaja},{utcOffset:-7,short:t.timezoneMST,long:t.timezoneMountain},{utcOffset:-7,short:t.timezoneMST,long:t.timezoneLaPaz},{utcOffset:-7,short:t.timezoneMST,long:t.timezoneArizona},{utcOffset:-6,short:t.timezoneCST,long:t.timezoneSaskatchewan},{utcOffset:-6,short:t.timezoneCST,long:t.timezoneCentralAmerica},{utcOffset:-6,short:t.timezoneCST,long:t.timezoneCentralTime},{utcOffset:-6,short:t.timezoneCST,long:t.timezoneMexico},{utcOffset:-5,short:t.timezoneEST,long:t.timezoneEasternUS},{utcOffset:-5,short:t.timezoneEST,long:t.timezoneLima},{utcOffset:-5,short:t.timezoneEST,long:t.timezoneIndiana},{utcOffset:-4,short:null,long:t.timezoneAtlantic},{utcOffset:-4,short:null,long:t.timezoneCuiaba},{utcOffset:-4,short:null,long:t.timezoneSantiago},{utcOffset:-4,short:null,long:t.timezoneManaus},{utcOffset:-4,short:null,long:t.timezoneAsuncion},{utcOffset:-3,short:null,long:t.timezoneBrasilia},{utcOffset:-3,short:null,long:t.timezoneGreenland},{utcOffset:-3,short:null,long:t.timezoneMontevideo},{utcOffset:-3,short:null,long:t.timezoneCayenne},{utcOffset:-3,short:null,long:t.timezoneBuenosAires},{utcOffset:-2,short:null,long:t.timezoneMidAtlantic},{utcOffset:-1,short:null,long:t.timezoneAzores},{utcOffset:-1,short:null,long:t.timezoneCaboVerde},{utcOffset:0,short:null,long:t.timezoneDublin},{utcOffset:0,short:null,long:t.timezoneReykjavik},{utcOffset:0,short:null,long:t.timezoneCasablanca},{utcOffset:1,short:t.timezoneCET,long:t.timezoneBelgrade},{utcOffset:1,short:t.timezoneCET,long:t.timezoneSarajevo},{utcOffset:1,short:t.timezoneCET,long:t.timezoneBrussels},{utcOffset:1,short:t.timezoneCET,long:t.timezoneWCAfrica},{utcOffset:1,short:t.timezoneCET,long:t.timezoneAmsterdam},{utcOffset:1,short:t.timezoneCET,long:t.timezoneWindhoek},{utcOffset:2,short:t.timezoneEET,long:t.timezoneMinsk},{utcOffset:2,short:t.timezoneEET,long:t.timezoneCairo},{utcOffset:2,short:t.timezoneEET,long:t.timezoneHelsinki},{utcOffset:2,short:t.timezoneEET,long:t.timezoneAthens},{utcOffset:2,short:t.timezoneEET,long:t.timezoneJerusalem},{utcOffset:2,short:t.timezoneEET,long:t.timezoneAmman},{utcOffset:2,short:t.timezoneEET,long:t.timezoneBeirut},{utcOffset:2,short:t.timezoneEET,long:t.timezoneHarare},{utcOffset:2,short:t.timezoneEET,long:t.timezoneDamascus},{utcOffset:2,short:t.timezoneEET,long:t.timezoneIstanbul},{utcOffset:3,short:t.timezoneMSK,long:t.timezoneKuwait},{utcOffset:3,short:t.timezoneMSK,long:t.timezoneBaghdad},{utcOffset:3,short:t.timezoneMSK,long:t.timezoneNairobi},{utcOffset:3,short:t.timezoneMSK,long:t.timezoneKaliningrad},{utcOffset:4,short:t.timezoneGST,long:t.timezoneMoscow},{utcOffset:4,short:t.timezoneGST,long:t.timezoneMuscat},{utcOffset:4,short:t.timezoneGST,long:t.timezoneBaku},{utcOffset:4,short:t.timezoneGST,long:t.timezoneYerevan},{utcOffset:4,short:t.timezoneGST,long:t.timezoneTbilisi},{utcOffset:4,short:t.timezoneGST,long:t.timezonePortLouis},{utcOffset:5,short:null,long:t.timezoneTashkent},{utcOffset:5,short:null,long:t.timezoneIslamabad},{utcOffset:6,short:null,long:t.timezoneEkaterinburg},{utcOffset:6,short:null,long:t.timezoneAstana},{utcOffset:6,short:null,long:t.timezoneDhaka},{utcOffset:7,short:t.timezoneICT,long:t.timezoneNovosibirsk},{utcOffset:7,short:t.timezoneICT,long:t.timezoneBangkok},{utcOffset:8,short:t.timezoneCCT,long:t.timezoneKrasnoyarsk},{utcOffset:8,short:t.timezoneCCT,long:t.timezoneBeijing},{utcOffset:8,short:t.timezoneCCT,long:t.timezoneSingapore},{utcOffset:8,short:t.timezoneCCT,long:t.timezoneTaipei},{utcOffset:8,short:t.timezoneCCT,long:t.timezonePerth},{utcOffset:8,short:t.timezoneCCT,long:t.timezoneUlaanbaatar},{utcOffset:9,short:t.timezoneJST,long:t.timezoneIrkutsk},{utcOffset:9,short:t.timezoneJST,long:t.timezoneSeoul},{utcOffset:9,short:t.timezoneJST,long:t.timezoneOsaka},{utcOffset:10,short:t.timezoneAEST,long:t.timezoneYakutsk},{utcOffset:10,short:t.timezoneAEST,long:t.timezoneCanberra},{utcOffset:10,short:t.timezoneAEST,long:t.timezoneBrisbane},{utcOffset:10,short:t.timezoneAEST,long:t.timezoneHobart},{utcOffset:10,short:t.timezoneAEST,long:t.timezoneGuam},{utcOffset:11,short:null,long:t.timezoneVladivostok},{utcOffset:11,short:null,long:t.timezoneSolomon},{utcOffset:12,short:t.timezoneNZST,long:t.timezoneMagadan},{utcOffset:12,short:t.timezoneNZST,long:t.timezoneFiji},{utcOffset:12,short:t.timezoneNZST,long:t.timezoneAuckland},{utcOffset:12,short:t.timezoneNZST,long:t.timezoneNukualofa}].map((({utcOffset:t,short:e,long:o})=>{const n=t>0?`UTC+${t}`:t<0?`UTC${t}`:"GMT";return e?{utcOffset:t,short:e,shortWithUTC:`${n} (${e})`,long:o}:{utcOffset:t,short:n,shortWithUTC:n,long:o}}))}t.formatSliderLabel=f,t.getSunriseAndSunsetTimes=m,t.getTimezoneInfos=l,Object.defineProperty(t,"__esModule",{value:!0})}));
