"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3594],{22303:(e,r,t)=>{t.d(r,{Z:()=>u});var o=t(35270),i=t(22021),n=t(70586),s=t(75215);function l(e){return(0,i.uZ)((0,s.vU)(e),0,255)}function a(e,r,t){return e=Number(e),isNaN(e)?t:e<r?r:e>t?t:e}class u{constructor(e){this.r=255,this.g=255,this.b=255,this.a=1,e&&this.setColor(e)}static blendColors(e,r,t,o=new u){return o.r=Math.round(e.r+(r.r-e.r)*t),o.g=Math.round(e.g+(r.g-e.g)*t),o.b=Math.round(e.b+(r.b-e.b)*t),o.a=e.a+(r.a-e.a)*t,o._sanitize()}static fromRgb(e,r){const t=e.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/);if(t){const e=t[2].split(/\s*,\s*/),i=t[1];if("rgb"===i&&3===e.length||"rgba"===i&&4===e.length){const t=e[0];if("%"===t.charAt(t.length-1)){const t=e.map((e=>2.56*parseFloat(e)));return 4===e.length&&(t[3]=parseFloat(e[3])),u.fromArray(t,r)}return u.fromArray(e.map((e=>parseFloat(e))),r)}if("hsl"===i&&3===e.length||"hsla"===i&&4===e.length)return u.fromArray((0,o.B7)(parseFloat(e[0]),parseFloat(e[1])/100,parseFloat(e[2])/100,parseFloat(e[3])),r)}return null}static fromHex(e,r=new u){if(4!==e.length&&7!==e.length||"#"!==e[0])return null;const t=4===e.length?4:8,o=(1<<t)-1;let i=Number("0x"+e.substr(1));return isNaN(i)?null:(["b","g","r"].forEach((e=>{const n=i&o;i>>=t,r[e]=4===t?17*n:n})),r.a=1,r)}static fromArray(e,r=new u){return r._set(Number(e[0]),Number(e[1]),Number(e[2]),Number(e[3])),isNaN(r.a)&&(r.a=1),r._sanitize()}static fromString(e,r){const t=(0,o.h$)(e);return t&&u.fromArray(t,r)||u.fromRgb(e,r)||u.fromHex(e,r)}static fromJSON(e){return e&&new u([e[0],e[1],e[2],e[3]/255])}static toUnitRGB(e){return(0,n.pC)(e)?[e.r/255,e.g/255,e.b/255]:null}static toUnitRGBA(e){return(0,n.pC)(e)?[e.r/255,e.g/255,e.b/255,null!=e.a?e.a:1]:null}get isBright(){return.299*this.r+.587*this.g+.114*this.b>=127}setColor(e){if("string"==typeof e)u.fromString(e,this);else if(Array.isArray(e))u.fromArray(e,this);else{var r,t,o,i;this._set(null!=(r=e.r)?r:0,null!=(t=e.g)?t:0,null!=(o=e.b)?o:0,null!=(i=e.a)?i:1),e instanceof u||this._sanitize()}return this}toRgb(){return[this.r,this.g,this.b]}toRgba(){return[this.r,this.g,this.b,this.a]}toHex(){const e=this.r.toString(16),r=this.g.toString(16),t=this.b.toString(16);return`#${e.length<2?"0"+e:e}${r.length<2?"0"+r:r}${t.length<2?"0"+t:t}`}toCss(e=!1){const r=this.r+", "+this.g+", "+this.b;return e?`rgba(${r}, ${this.a})`:`rgb(${r})`}toString(){return this.toCss(!0)}toJSON(){return this.toArray()}toArray(e=0){const r=l(this.r),t=l(this.g),o=l(this.b);return 0===e||1!==this.a?[r,t,o,l(255*this.a)]:[r,t,o]}clone(){return new u(this.toRgba())}hash(){return this.r<<24|this.g<<16|this.b<<8|255*this.a}_sanitize(){return this.r=Math.round(a(this.r,0,255)),this.g=Math.round(a(this.g,0,255)),this.b=Math.round(a(this.b,0,255)),this.a=a(this.a,0,1),this}_set(e,r,t,o){this.r=e,this.g=r,this.b=t,this.a=o}}u.prototype.declaredClass="esri.Color"},35270:(e,r,t)=>{t.d(r,{h$:()=>i,VL:()=>n,rW:()=>a,B7:()=>l});const o={transparent:[0,0,0,0],black:[0,0,0,1],silver:[192,192,192,1],gray:[128,128,128,1],white:[255,255,255,1],maroon:[128,0,0,1],red:[255,0,0,1],purple:[128,0,128,1],fuchsia:[255,0,255,1],green:[0,128,0,1],lime:[0,255,0,1],olive:[128,128,0,1],yellow:[255,255,0,1],navy:[0,0,128,1],blue:[0,0,255,1],teal:[0,128,128,1],aqua:[0,255,255,1],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],blanchedalmond:[255,235,205,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],oldlace:[253,245,230,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],rebeccapurple:[102,51,153,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],whitesmoke:[245,245,245,1],yellowgreen:[154,205,50,1]};function i(e){var r;return null!=(r=o[e.toLowerCase()])?r:null}function n(e){const r=i(e);return r?[...r]:r}function s(e,r,t){t<0&&++t,t>1&&--t;const o=6*t;return o<1?e+(r-e)*o:2*t<1?r:3*t<2?e+(r-e)*(2/3-t)*6:e}function l(e,r,t,o=1){const i=(e%360+360)%360/360,n=t<=.5?t*(r+1):t+r-t*r,l=2*t-n;return[Math.round(255*s(l,n,i+1/3)),Math.round(255*s(l,n,i)),Math.round(255*s(l,n,i-1/3)),o]}function a(e){const r=e.length>5,t=r?8:4,o=(1<<t)-1,i=r?1:17,n=r?9===e.length:5===e.length;let s=Number("0x"+e.substr(1));if(isNaN(s))return null;const l=[0,0,0,1];let a;return n&&(a=s&o,s>>=t,l[3]=i*a/255),a=s&o,s>>=t,l[2]=i*a,a=s&o,s>>=t,l[1]=i*a,a=s&o,s>>=t,l[0]=i*a,l}},66577:(e,r,t)=>{t.d(r,{qM:()=>h});var o=t(75215),i=t(6570),n=t(9361),s=t(65091),l=t(13473),a=t(17332),u=t(58901);t(82971),t(86973),t(33955);const h={base:n.Z,key:"type",typeMap:{extent:i.Z,multipoint:s.Z,point:l.Z,polyline:u.Z,polygon:a.Z}};(0,o.N7)(h)},33955:(e,r,t)=>{t.d(r,{im:()=>y,q9:()=>f,Ji:()=>p,YX:()=>h,aW:()=>m,wp:()=>g,oU:()=>d,l9:()=>c});var o=t(70586),i=t(6570),n=t(9361),s=t(65091),l=t(13473),a=t(17332),u=t(58901);function h(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function m(e){return void 0!==e.points}function g(e){return void 0!==e.x&&void 0!==e.y}function c(e){return void 0!==e.paths}function d(e){return void 0!==e.rings}function y(e){return(0,o.Wi)(e)?null:e instanceof n.Z?e:g(e)?l.Z.fromJSON(e):c(e)?u.Z.fromJSON(e):d(e)?a.Z.fromJSON(e):m(e)?s.Z.fromJSON(e):h(e)?i.Z.fromJSON(e):null}function p(e){return e?g(e)?"esriGeometryPoint":c(e)?"esriGeometryPolyline":d(e)?"esriGeometryPolygon":h(e)?"esriGeometryEnvelope":m(e)?"esriGeometryMultipoint":null:null}const b={esriGeometryPoint:l.Z,esriGeometryPolyline:u.Z,esriGeometryPolygon:a.Z,esriGeometryEnvelope:i.Z,esriGeometryMultipoint:s.Z};function f(e){return e&&b[e]||null}},86973:(e,r,t)=>{t.d(r,{Mk:()=>i,P$:()=>n});var o=t(35454);const i=(0,o.wY)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),n=(0,o.wY)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"})},61576:(e,r,t)=>{t.r(r),t.d(r,{default:()=>h}),t(66577);var o=t(70586),i=t(54163),n=t(75993),s=t(55914),l=t(80676),a=t(91219),u=t(6570);class h{convertVectorFieldData(e){const r=i.Z.fromJSON(e.pixelBlock),t=(0,l.KC)(r,e.type);return Promise.resolve((0,o.pC)(t)&&t.toJSON())}async decode(e){const r=await(0,n.Jx)(e.data,e.options);return r&&r.toJSON()}symbolize(e){e.pixelBlock=i.Z.fromJSON(e.pixelBlock),e.extent=e.extent?u.Z.fromJSON(e.extent):null;const r=this.symbolizer.symbolize(e);return Promise.resolve((0,o.pC)(r)&&r.toJSON())}async updateSymbolizer(e){var r;this.symbolizer=a.Z.fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===(null==(r=this.symbolizer)?void 0:r.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=e.histograms)}stretch(e){const r=this.symbolizer.simpleStretch(i.Z.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve((0,o.pC)(r)&&r.toJSON())}estimateStatisticsHistograms(e){const r=(0,s.Hv)(i.Z.fromJSON(e.srcPixelBlock));return Promise.resolve(r)}split(e){const r=(0,s.Vl)(i.Z.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return r&&r.forEach(((e,t)=>{r.set(t,null==e?void 0:e.toJSON())})),Promise.resolve(r)}async mosaicAndTransform(e){const r=e.srcPixelBlocks.map((e=>e?new i.Z(e):null)),t=(0,s.us)(r,e.srcMosaicSize,null,null,e.alignmentInfo);if(!e.coefs)return t&&t.toJSON();const o=(0,s.Uk)(t,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation);return o&&o.toJSON()}}}}]);