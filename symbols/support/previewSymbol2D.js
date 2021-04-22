/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../core/Error","../../Color","../../core/screenUtils","./gfxUtils","./previewUtils","./renderUtils"],(function(e,t,a,l,n,s,o){"use strict";const i="picture-fill",r="picture-marker",c="simple-fill",u="simple-line",m="simple-marker",p="text",h="Aa",d=22,f=120,v=80,y=40,g=document.createElement("canvas");function x(e,t){const a=g.getContext("2d"),l=[];return t&&(t.weight&&l.push(t.weight),t.size&&l.push(t.size+"px"),t.family&&l.push(t.family)),a.font=l.join(" "),a.measureText(e).width}const w=7.2/2.54,b=72/2.54;function M(e){if(0===e.length)return 0;if(e.length>2){const t=l.px2pt(1),a=parseFloat(e);switch(e.slice(-2)){case"px":return a;case"pt":return a*t;case"in":return 72*a*t;case"pc":return 12*a*t;case"mm":return a*w*t;case"cm":return a*b*t}}return parseFloat(e)}function k(e,g){var w,b;const k=null!=(null==g?void 0:g.size)?l.pt2px(g.size):null,L=null!=(null==g?void 0:g.maxSize)?l.pt2px(g.maxSize):null,z=null!=(null==g?void 0:g.opacity)?g.opacity:null,C=null!=(null==g?void 0:g.rotation)?g.rotation:"angle"in e?e.angle:null,S=n.getFill(e);let j=n.getStroke(e);if(S&&!j){const e="type"in S?null:new a(S);"#ffffff"===(e?e.toHex():null)&&(j={color:"#bdc3c7",width:.75})}const F={shape:null,fill:null,stroke:j,offset:[0,0]};null!=(w=j)&&w.width&&(j.width=Math.min(j.width,v));const P=(null==(b=j)?void 0:b.width)||0;let U=null!=k&&(null==(null==g?void 0:g.scale)||(null==g?void 0:g.scale)),E=0,q=0,Z=!1;switch(e.type){case m:{const t=e.style,a=Math.min(null!=k?k:l.pt2px(e.size),L||f);switch(E=a,q=a,t){case"circle":F.shape={type:"circle",cx:0,cy:0,r:.5*a},U||(E+=P,q+=P);break;case"cross":F.shape={type:"path",path:[{command:"M",values:[0,.5*q]},{command:"L",values:[E,.5*q]},{command:"M",values:[.5*E,0]},{command:"L",values:[.5*E,q]}]};break;case"diamond":F.shape={type:"path",path:[{command:"M",values:[0,.5*q]},{command:"L",values:[.5*E,0]},{command:"L",values:[E,.5*q]},{command:"L",values:[.5*E,q]},{command:"Z",values:[]}]},U||(E+=P,q+=P);break;case"square":F.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[E,0]},{command:"L",values:[E,q]},{command:"L",values:[0,q]},{command:"Z",values:[]}]},U||(E+=P,q+=P),C&&(Z=!0);break;case"triangle":F.shape={type:"path",path:[{command:"M",values:[.5*E,0]},{command:"L",values:[E,q]},{command:"L",values:[0,q]},{command:"Z",values:[]}]},U||(E+=P,q+=P),C&&(Z=!0);break;case"x":F.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[E,q]},{command:"M",values:[E,0]},{command:"L",values:[0,q]}]},C&&(Z=!0);break;case"path":F.shape={type:"path",path:e.path||""},U||(E+=P,q+=P),C&&(Z=!0),U=!0}break}case u:{const e=Math.min(null!=k?k:P,L||v),t=e>d?2*e:y;j.width=e,E=t,q=e,F.shape={type:"path",path:[{command:"M",values:[0,q]},{command:"L",values:[E,q]}]};break}case i:case c:E=Math.min(null!=k?k:d,L||f)+P,q=E,U=!0,F.shape="object"==typeof(null==g?void 0:g.symbolConfig)&&null!=g&&g.symbolConfig.isSquareFill?s.shapes.squareFill[0]:s.shapes.fill[0];break;case r:{let t=l.pt2px(e.width),a=l.pt2px(e.height);const n=Math.max(t,a),s=t/a;t=s<=1?Math.ceil(n*s):n,a=s<=1?n:Math.ceil(n/s),E=Math.min(null!=k?k:t,L||f),q=Math.min(null!=k?k:a,L||f),F.shape={type:"image",x:-Math.round(E/2),y:-Math.round(q/2),width:E,height:q,src:e.url||""},C&&(Z=!0);break}case p:{const t=e,a=t.text||h,n=t.font,s=Math.min(null!=k?k:l.pt2px(n.size),L||f),o=x(a,{weight:n.weight,size:s,family:n.family}),i=/[\uE600-\uE6FF]/.test(a);E=i?s:o,q=s;let r=.25*M((n?s:0).toString());i&&(r+=5),F.shape={type:"text",text:a,x:0,y:r,align:"middle",decoration:n&&n.decoration,rotated:t.rotated,kerning:t.kerning},F.font=n&&{size:s,style:n.style,decoration:n.decoration,weight:n.weight,family:n.family};break}}if(!F.shape)return Promise.reject(new t("symbolPreview: renderPreviewHTML2D","symbol not supported."));const B=S,D=e.color;let H=null;return B&&"pattern"===B.type&&D&&e.type!==i?H=n.getPatternUrlWithColor(B.src,D.toCss(!0)).then((e=>(B.src=e,F.fill=B,F))):(F.fill=S,H=Promise.resolve(F)),H.then((e=>{const t=[[e]];if("object"==typeof(null==g?void 0:g.symbolConfig)&&null!=g&&g.symbolConfig.applyColorModulation){const a=.6*E;t.unshift([{...e,offset:[-a,0],fill:s.adjustColorBrightness(S,-.3)}]),t.push([{...e,offset:[a,0],fill:s.adjustColorBrightness(S,.3)}]),E+=2*a}return o.renderSymbol(t,[E,q],{node:g&&g.node,scale:U,opacity:z,rotation:C,useRotationSize:Z})}))}e.previewSymbol2D=k,Object.defineProperty(e,"__esModule",{value:!0})}));
