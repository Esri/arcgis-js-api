/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../assets","../../intl","../../intl/locale"],(function(e,n,s,r){"use strict";const t="en-wo",l=r.getLocale().substr(0,2),i={ae:"en",ar:"es",at:"de",au:"en",be:"nl",bg:"bg",bo:"es",br:"pt",ca:"en",ch:"de",ci:"fr",cl:"es",cn:"zh",co:"es",cr:"es",cz:"cs",de:"de",dk:"da",ee:"et",eg:"en",es:"es",fi:"fi",fr:"fr",gb:"en",gl:"da",gr:"el",gt:"es",hk:"en",id:"en",ie:"en",il:"en",in:"en",iq:"ar",is:"is",it:"it",jp:"ja",ke:"en",kr:"ko",kw:"ar",li:"de",lt:"lt",lu:"en",lv:"lv",ma:"fr",mg:"fr",ml:"fr",mo:"en",mx:"es",my:"en",ni:"es",nl:"nl",no:"nn",nz:"en",pe:"es",pl:"pl",pr:"es",pt:"pt",ro:"ro",ru:"ru",rw:"en",se:"sv",sg:"en",sk:"sk",sr:"nl",sv:"es",th:"th",tn:"fr",tw:"zh",us:"en",ve:"es",vi:"en",wo:"en",za:"en"},a=["ar-iq","ar-kw","bg-bg","cs-cz","da-dk","da-gl","de-at","de-ch","de-de","de-li","el-gr","en-ae","en-au","en-ca","en-eg","en-gb","en-hk","en-id","en-ie","en-il","en-in","en-iq","en-ke","en-lu","en-mo","en-my","en-nz","en-rw","en-sg","en-us","en-vi","en-wo","en-za","es-ar","es-bo","es-cl","es-co","es-cr","es-es","es-gt","es-mx","es-ni","es-pe","es-pr","es-sv","es-ve","et-ee","fi-fi","fr-ci","fr-fr","fr-ma","fr-mg","fr-ml","fr-tn","is-is","it-it","ja-jp","ko-kr","lt-lt","lv-lv","nl-be","nl-nl","nl-sr","nn-no","pl-pl","pt-br","pt-pt","ro-ro","ru-ru","sk-sk","sv-se","th-th","zh-cn","zh-tw"];function c(e){return e.toLowerCase()}function o(e){return`url(${n.getAssetUrl(`esri/widgets/ScaleRangeSlider/images/scalePreview/${e}.jpg`)})`}function u(e){e=c(e);const n=`${l}-${e}`,s=`${i[e]}-${e}`;return o(a.includes(n)?n:a.includes(s)?s:t)}function g(e){const n=5,s=5;if(e<0||e>=n*s)return null;return`-${128*(e%n)}px -${128*Math.floor(e/s)}px`}e.fallbackSpriteSheetFileName=t,e.getScalePreviewSource=u,e.getScalePreviewSpriteBackgroundPosition=g,e.languageCode=l,Object.defineProperty(e,"__esModule",{value:!0})}));
