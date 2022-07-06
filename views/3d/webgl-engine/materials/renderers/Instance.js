/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t{constructor(t){this.first=t.from,this.count=t.to-t.from}}class s{constructor(t=0,s=0){this.from=t,this.to=s}}class o extends s{constructor(t,s,o,r,n,i){super(s,o),this.id=t,this.isVisible=r,this.hasHighlights=n,this.hasOccludees=i}}function r(t){return Array.from(t.values()).sort(n)}function n(t,s){return t.from===s.from?t.to-s.to:t.from-s.from}function i(s,o){if(0===s.length)return void s.push(new t(o));const r=s[s.length-1];if(c(r,o)){const t=o.from-r.first+o.to-o.from;r.count=t}else s.push(new t(o))}function c(t,s){return t.first+t.count>=s.from}export{s as BufferRange,t as DrawCommand,o as Instance,i as addOrMerge,r as sortInstancesByRange};
