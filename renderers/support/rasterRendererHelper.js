/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../Color","../../rasterRenderers","../../core/maybe","../../core/unitUtils","../../layers/support/Field","../../layers/support/RasterInfo","./AuthoringInfo","./ClassBreakInfo","./colorRampUtils","./UniqueValueInfo","../../rest/support/AlgorithmicColorRamp","../../rest/support/ClassBreaksDefinition","../../rest/support/generateRendererUtils","../../rest/support/MultipartColorRamp","../RasterStretchRenderer","../UniqueValueRenderer","../RasterColormapRenderer","../RasterShadedReliefRenderer","../ClassBreaksRenderer","../VectorFieldRenderer"],(function(e,t,n,r,a,l,o,s,i,u,c,m,d,f,p,h,b,v,g,y,S){"use strict";const C=.25,R=p.fromJSON({type:"multipart",colorRamps:[{fromColor:[0,0,255],toColor:[0,255,255]},{fromColor:[0,255,255],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,0,0]}]}),w=p.fromJSON(u.PREDEFINED_JSON_COLOR_RAMPS[0]),x=new Set(["scientific","standard-time","vector-uv","vector-magdir","vector-u","vector-v","vector-magnitude","vector-direction"]);function M(e,t){const{attributeTable:n,colormap:a}=e;if(G(e)){const t=H(e);if(r.isSome(t))return t}if(r.isSome(a)){const t=q(e);if(r.isSome(t))return t}if(r.isSome(n)){const t=P(e);if(r.isSome(t))return t}return V(e,t)}function k(e){const t=["raster-stretch"];return U(e)&&t.push("raster-colormap"),D(e)&&t.push("unique-value"),A(e)&&t.push("class-breaks"),z(e)&&t.push("raster-shaded-relief"),G(e)&&t.push("vector-field"),t}function T(e,t,n){const r=["nearest","bilinear","cubic","majority"].find((e=>e===(null==n?void 0:n.toLowerCase())));if("Map"===t)return null!=r?r:"bilinear";if("standard-time"===e.dataType)return null!=r?r:"nearest";return"thematic"===e.dataType||e.attributeTable||e.colormap?"nearest"===r||"majority"===r?r:"nearest":null!=r?r:"bilinear"}function V(e,t){var n,a,l,o;e=I(e,null==t?void 0:t.variableName);const{bandCount:s}=e;let{bandIds:i,stretchType:u}=t||{};null!=(n=i)&&n.some((e=>e>=s))&&(i=null);let c=r.unwrap(e.statistics),m=r.unwrap(e.histograms);var d;s>1?(i=null!=(d=i)&&d.length?i:B(e),c=null==c?null:i.map((e=>c[e])),m=null==m?null:i.map((e=>m[e]))):i=[0];null==u&&(u=N(e));let f=!1;switch(u){case"none":f=!1;break;case"percent-clip":f=!(null!=(a=m)&&a.length);break;default:f=!(null!=(l=c)&&l.length)}const{dataType:p}=e,b=1===(null==(o=i)?void 0:o.length)&&x.has(p)?R:null,v=new h({stretchType:u,dynamicRangeAdjustment:f,colorRamp:b,outputMin:0,outputMax:255,gamma:1===i.length?[1]:[1,1,1],useGamma:!1});return"percent-clip"===u?v.maxPercent=v.minPercent=C:"standard-deviation"===u&&(v.numberOfStandardDeviations=2),!f&&(r.isSome(e.multidimensionalInfo)||null!=t&&t.includeStatisticsInStretch)&&("percent-clip"===u?v.histograms=m:"min-max"!==u&&"standard-deviation"!==u||(v.statistics=c)),v}function I(e,t){if(null==t)return e;let n=r.unwrap(e.statistics),a=r.unwrap(e.histograms);const{multidimensionalInfo:l}=e;if(t&&r.isSome(l)){const{statistics:e,histograms:r}=l.variables.find((e=>e.name===t));null!=e&&e.length&&(n=e),null!=r&&r.length&&(a=r)}return o.fromJSON({...e.toJSON(),statistics:n,histograms:a})}function B(e){const t=e.bandCount;if(1===t)return null;if(2===t)return[0];const n=e.keyProperties&&e.keyProperties.BandProperties;let r;if(n&&n.length===t){const{red:e,green:t,blue:a,nir:l}=O(n);null!=e&&null!=t&&null!=a?r=[e,t,a]:null!=l&&null!=e&&null!=t&&(r=[l,e,t])}return!r&&t>=3&&(r=[0,1,2]),r}function L(e,t){var n;const r=e.keyProperties&&e.keyProperties.BandProperties;return(t=null!=(n=t)&&n.length?t:Array.from(Array(e.bandCount).keys())).map((t=>r&&r.length===e.bandCount&&r[t]&&r[t].BandName||"band_"+(t+1)))}function O(e){const t={};for(let r=0;r<e.length;r++){var n;const a=e[r],l=null==(n=a.BandName)?void 0:n.toLowerCase();if("red"===l)t.red=r;else if("green"===l)t.green=r;else if("blue"===l)t.blue=r;else if("nearinfrared"===l||"nearinfrared_1"===l||"nir"===l)t.nir=r;else if(a.WavelengthMax&&a.WavelengthMin){const e=a.WavelengthMin,n=a.WavelengthMax;null==t.blue&&e>=410&&e<=480&&n>=480&&n<=540?t.blue=r:null==t.green&&e>=490&&e<=560&&n>=560&&n<=610?t.green=r:null==t.red&&e>=595&&e<=670&&n>=660&&n<=730?t.red=r:null==t.nir&&e>=700&&e<=860&&n>=800&&n<=950&&(t.nir=r)}}return t}function N(e){let t="percent-clip";const{pixelType:n,dataType:a,histograms:l,statistics:o}=e;return"u8"!==n||"processed"!==a&&r.isSome(l)&&r.isSome(o)?"u8"===n||"elevation"===a||x.has(a)?t="min-max":r.isSome(l)?t="percent-clip":r.isSome(o)&&(t="min-max",t="min-max"):t="none",t}function P(e,n,a,l){if(!D(e,n))return null;const{attributeTable:o,statistics:i}=e,m=E(o,n),d=F(o,"red"),f=F(o,"green"),p=F(o,"blue"),h=new s,v=[],g=new Set,y=!!(d&&f&&p);if(r.isSome(o))o.features.forEach((e=>{const n=e.attributes[m.name];if(!g.has(e.attributes[m.name])&&null!=n){g.add(n);const r=y&&("single"===d.type||"double"===d.type)&&("single"===f.type||"double"===f.type)&&("single"===p.type||"double"===p.type)&&!o.features.some((e=>e.attributes[d.name]>1||e.attributes[f.name]>1||e.attributes[p.name]>1)),a=r?255:1;v.push(new c({value:e.attributes[m.name],label:e.attributes[m.name]+"",symbol:{type:"simple-fill",style:"solid",outline:null,color:new t(y?[e.attributes[d.name]*a,e.attributes[f.name]*a,e.attributes[p.name]*a,1]:[0,0,0,0])}}))}}));else if(null!=i&&i[0])for(let r=i[0].min;r<=i[0].max;r++)v.push(new c({value:r,label:r.toString(),symbol:{type:"simple-fill",style:"solid",outline:null,color:new t([0,0,0,0])}}));if(v.sort(((e,t)=>e.value&&"string"==typeof e.value.valueOf()?0:e.value>t.value?1:-1)),!y){const e=u.convertColorRampToColormap(w,v.length);v.forEach(((n,r)=>n.symbol.color=new t(e[r].slice(1,4)))),h.colorRamp=w}if(a||l){const e=a||u.convertColorRampToColormap(l,v.length).map((e=>e.slice(1)));v.forEach(((n,r)=>n.symbol.color=new t(e[r]))),h.colorRamp=l}return new b({field:m.name,uniqueValueInfos:v,authoringInfo:h})}function E(e,t){let n;return r.isSome(e)?(n=t?e.fields.find((e=>t.toLowerCase()===e.name.toLowerCase())):e.fields.find((e=>"string"===e.type&&e.name.toLowerCase().indexOf("class")>-1)),n||(n=e.fields.find((e=>"string"===e.type)),n||(n=F(e,"value")))):n=new l({name:"value"}),n}function F(e,t){return r.isSome(e)?e.fields.find((e=>e.name.toLowerCase()===t)):null}function D(e,t){const{attributeTable:n,bandCount:a}=e;if(!r.isSome(n)&&W(e))return!0;if(!r.isSome(n)||a>1)return!1;if(t){if(null==n.fields.find((e=>e.name.toLowerCase()===t.toLowerCase())))return!1}return!0}function U(e){const{bandCount:t,colormap:n}=e;return r.isSome(n)&&n.length&&1===t}function q(e){if(!U(e))return null;let t;const{attributeTable:n,colormap:a}=e;if(r.isSome(n)){const e=F(n,"value"),r=E(n);"string"===r.type&&(t={},n.features.forEach((n=>{const a=n.attributes;t[a[e.name]]=r?a[r.name]:a[e.name]})))}return v.createFromColormap(r.unwrap(a),t)}function z(e){return"elevation"===e.dataType}function _(e,t){var n;if(!z(e))return null;const{extent:r}=e,l=r.width*a.getMetersPerUnitForSR(r.spatialReference);return t=null!=(n=t)?n:"multi-directional",new g({hillshadeType:t,scalingType:l>5e6?"adjusted":"none"})}function A(e){const{attributeTable:t,bandCount:n}=e;return 1===n&&(r.isSome(t)||r.isSome(e.histograms))}function J(e,t){e=I(e,null==t?void 0:t.variableName);const{attributeTable:n}=e;if(!A(e))return null;const a=r.isSome(e.histograms)?e.histograms[0]:null,l=(null==t?void 0:t.numClasses)||5,o=new s({classificationMethod:null==t?void 0:t.classificationMethod,colorRamp:null==t?void 0:t.colorRamp});let c=(null==t?void 0:t.field)||"value";const m=[],p=[],h=1e3;if(r.isSome(n)){const e=n.fields.find((e=>"count"===e.name.toLowerCase())),t=n.fields.find((e=>e.name.toLowerCase()===c.toLowerCase()));c=t.name;const r=n.features.length;let a=0;n.features.forEach((t=>a+=t.attributes[e.name]/r)),n.features.forEach((n=>{const l=n.attributes[t.name],o=n.attributes[e.name];if(o>0){p.push(o);const e=Math.max(1,Math.round(o/r/a*h));for(let t=0;t<e;t++)m.push(l)}}))}else{const{pixelType:t}=e,n=(a.max-a.min)/a.size,r=t.indexOf("s")>-1||t.indexOf("u")>-1,l=r&&1===n?Math.floor(a.min+.5):a.min,o=r&&1===n?Math.floor(a.max-.5):a.max,s=a.size;let i=0;a.counts.forEach((e=>i+=e/s)),a.counts.forEach(((e,t)=>{if(e>0){p.push(e);const r=Math.max(1,Math.round(e/s/i*h)),u=0===t?l:t===s-1?o:a.min+n*(t+.5);for(let e=0;e<r;e++)m.push(u)}}))}const b=(null==t?void 0:t.classificationMethod)||"natural-breaks",v=f.createGenerateRendererClassBreaks({values:m,valueFrequency:p,normalizationTotal:null,definition:new d({classificationMethod:b,breakCount:l,definedInterval:null==t?void 0:t.definedInterval})});let g=null==t?void 0:t.colors;if(!g){const e=(null==t?void 0:t.colorRamp)||R;o.colorRamp=e;const n=u.convertColorRampToColormap(e,v.classBreaks.length,!0);g=n.map((e=>e.slice(1)))}const S=v.classBreaks.map(((e,t)=>new i({minValue:e.minValue,maxValue:e.maxValue,label:e.label,symbol:{type:"simple-fill",color:g[t]}})));return new y({field:c,classBreakInfos:S,authoringInfo:o})}function W(e){var t,n,r;return["u8","s8"].indexOf(e.pixelType)>-1&&null!=(null==(t=e.statistics)||null==(n=t[0])?void 0:n.min)&&null!=(null==(r=e.statistics[0])?void 0:r.max)&&1===e.bandCount}function j(e){const n=[];for(let r=0;r<e.length-1;r++)n[r]=new m({algorithm:"hsv",fromColor:e[r],toColor:e[r+1]||new t({r:255,g:255,b:255,a:1})});if(e.length>2){return new p({colorRamps:n})}return n[0]}function G(e){const{dataType:t}=e;return"vector-uv"===t||"vector-magdir"===t}const K=new Map([["m/s","meter-per-second"],["km/h","kilometer-per-hour"],["knots","knots"],["ft/s","feet-per-second"],["mph","mile-per-hour"]]);function H(e){if(!G(e))return null;let t;if(r.isSome(e.statistics)&&e.statistics.length){const n="vector-uv"===e.dataType,{min:r,max:a}=e.statistics[0];t=[{type:"size",field:"Magnitude",minSize:10,maxSize:40,minDataValue:n?Math.min(Math.abs(r),Math.abs(a)):r,maxDataValue:n?Math.max(Math.abs(r),Math.abs(a)):a}]}const n=r.isSome(e.multidimensionalInfo)?K.get(e.multidimensionalInfo.variables[0].unit):null,a=new S({visualVariables:t,inputUnit:n});return a.visualVariables=[...a.sizeVariables,...a.rotationVariables],a}function Q(e){var t;return{color:null==(t=e.symbolLayers[0].material)?void 0:t.color,type:"esriSFS",style:"esriSFSSolid"}}function X(e){if("uniqueValue"===e.type){var t;const n=e.uniqueValueInfos,r=n[0].symbol;return null!=r&&null!=(t=r.symbolLayers)&&t.length&&(e.uniqueValueInfos=n.map((e=>({value:e.value,label:e.label,symbol:e.symbol?Q(e.symbol):null})))),e}if("classBreaks"===e.type){var n;const t=e.classBreakInfos,r=t[0].symbol;return null!=r&&null!=(n=r.symbolLayers)&&n.length&&(e.classBreakInfos=t.map((e=>({classMinValue:e.classMinValue,classMaxValue:e.classMaxValue,label:e.label,symbol:e.symbol?Q(e.symbol):null})))),e}return e}e.createClassBreaksRenderer=J,e.createColorRamp=j,e.createColormapRenderer=q,e.createDefaultRenderer=M,e.createShadedReliefRenderer=_,e.createStretchRenderer=V,e.createUVRenderer=P,e.createVectorFieldRenderer=H,e.getBandNames=L,e.getClassField=E,e.getDefaultBandCombination=B,e.getDefaultInterpolation=T,e.getSupportedRendererTypes=k,e.getWellKnownBandIndexes=O,e.isClassBreaksSupported=A,e.isColormapRendererSupported=U,e.isShadedReliefRendererSupported=z,e.isSingleBand8BitRasterWithStats=W,e.isUVRendererSupported=D,e.isVectorFieldRendererSupported=G,e.normalizeRendererJSON=X,Object.defineProperty(e,"__esModule",{value:!0})}));
