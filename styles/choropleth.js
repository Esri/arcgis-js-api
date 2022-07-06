// COPYRIGHT © 2022 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../Color","./colors","./utils"],(function(e,r,g,i,t,l,h){var a={light:{color:[153,153,153,.25],width:.5},lighter:{color:[194,194,194,.25],width:.5},lightest:{color:[153,153,153,.25],width:.5}},b={lightBasemaps:{outline:a.lighter,fillOpacity:.8,width:2,size:8},darkBasemaps:{outline:a.light,fillOpacity:.6,width:2,size:8},test:{outline:a.lightest,fillOpacity:.8,width:2,size:8}},o=["highlight-orange-gray","highlight-bluegreen-gray","highlight-purple-gray","highlight-pink-gray","highlight-blue-gray","highlight-red-gray","highlight-orange-gray-dark","highlight-blue-gray-dark","highlight-orange-gray-bright","highlight-blue-gray-bright","extremes-orange-gray","extremes-bluegreen-gray","extremes-purple-gray","extremes-pink-gray","extremes-blue-gray","extremes-red-gray","extremes-orange-gray-dark","extremes-blue-gray-dark","extremes-orange-gray-bright","extremes-blue-gray-bright"],n=["seq-single-blues","seq-single-greens","seq-single-grays","seq-single-oranges","seq-single-purples","seq-single-reds","seq-multi-bugn","seq-multi-bupu","seq-multi-gnbu","seq-multi-orrd","seq-multi-pubu","seq-multi-pubugn","seq-multi-purd","seq-multi-rdpu","seq-multi-ylgn","seq-multi-ylgnbu","seq-multi-ylorbr","seq-multi-ylorrd"],s=["div-brbg","div-piyg","div-prgn","div-puor","div-rdbu","div-rdgy","div-rdylbu","div-rdylgn","div-spectral"],d=["tropical-bliss","desert-blooms","under-the-sea","vibrant-rainbow","ocean-bay","prairie-summer","pastel-chalk"],y={"high-to-low":{name:"high-to-low",label:"TODO",description:"TODO",basemaps:["streets","gray","topo","terrain","national-geographic","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector","satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"],schemes:{streets:{common:b.lightBasemaps,primary:"seq-yellow-red-purple",secondary:["seq-yellow-orange-red","seq-yellow-pink-purple","seq-yellow-purple-blue","seq-yellow-green-blue","seq-teal-lightgreen-bright","seq-green-lightgray-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright"].concat(n)},gray:{common:b.test,primary:"seq-yellow-red-purple",secondary:["seq-orange-red-light","seq-yellow-orange-red","seq-yellow-pink-purple","seq-yellow-purple-blue","seq-teal-lightgreen-bright","seq-green-lightgray-bright","seq-red-lightgray-bright","seq-blue-lightgray-bright","seq-orange-lightgray-bright","seq-blue-red-yellow-bright","seq-blue-tan-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-blues-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright"].concat(n)},topo:{common:b.lightBasemaps,primary:"seq-yellow-green-blue",secondary:["seq-yellow-pink-purple","seq-yellow-purple-blue","seq-yellow-red-purple","seq-yellow-orange-red","seq-teal-lightgreen-bright","seq-green-lightgray-bright","seq-blue-lightgray-bright","seq-orange-lightgray-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright"].concat(n)},terrain:{common:b.lightBasemaps,primary:"seq-pink-red",secondary:["seq-yellow-pink-purple","seq-yellow-red-purple","seq-yellow-orange-red","seq-orange-red-light","seq-teal-lightgreen-bright","seq-green-lightgray-bright","seq-red-lightgray-bright","seq-blue-lightgray-bright","seq-orange-lightgray-bright","seq-blue-red-yellow-bright","seq-blue-tan-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-blues-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright"].concat(n)},"national-geographic":{common:b.lightBasemaps,primary:"seq-yellow-orange-red",secondary:["seq-yellow-red-purple","seq-yellow-pink-purple","seq-yellow-purple-blue","seq-yellow-green-blue","seq-teal-lightgreen-bright","seq-blue-lightgray-bright","seq-reds-bright","seq-purples-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright"].concat(n)},oceans:{common:b.lightBasemaps,primary:"seq-yellow-green-blue",secondary:["seq-yellow-red-purple","seq-yellow-orange-red","seq-yellow-pink-purple","seq-yellow-purple-blue","seq-teal-lightgreen-bright","seq-green-lightgray-bright","seq-red-lightgray-bright","seq-blue-lightgray-bright","seq-blue-red-yellow-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright"].concat(n)},osm:{common:b.lightBasemaps,primary:"seq-red-blue-green",secondary:["seq-yellow-pink-purple","seq-yellow-red-purple","seq-yellow-purple-blue","seq-teal-lightgreen-bright","seq-blue-lightgray-bright","seq-blue-red-yellow-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright"].concat(n)},satellite:{common:b.darkBasemaps,primary:"seq-orange-red-dark",secondary:["seq-yellow-green-blue","seq-red-blue-green","seq-yellow-purple-blue","seq-teal-lightgreen-bright","seq-blue-lightgray-bright","seq-gray-lightgreen-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-blues-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright","seq-lightmagenta-darkgray-bright","seq-lightblue-darkgray-bright"].concat(n)},hybrid:{common:b.darkBasemaps,primary:"seq-orange-red-dark",secondary:["seq-yellow-green-blue","seq-red-blue-green","seq-yellow-purple-blue","seq-teal-lightgreen-bright","seq-blue-lightgray-bright","seq-gray-lightgreen-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-blues-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright","seq-lightmagenta-darkgray-bright","seq-lightblue-darkgray-bright"].concat(n)},"dark-gray":{common:b.test,primary:"seq-dark-to-light-blue-bright",secondary:["seq-blue-lightgray-bright","seq-gray-lightgreen-bright","seq-reds-bright","seq-purples-bright","seq-blues-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-teal-lightgreen-bright","seq-lightred-darkgray-bright","seq-lightmagenta-darkgray-bright","seq-lightblue-darkgray-bright"].concat(n)},"streets-vector":{common:b.lightBasemaps,primary:"seq-yellow-red-purple",secondary:["seq-yellow-orange-red","seq-yellow-pink-purple","seq-yellow-purple-blue","seq-yellow-green-blue","seq-teal-lightgreen-bright","seq-green-lightgray-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright"].concat(n)},"gray-vector":{common:b.test,primary:"seq-yellow-red-purple",secondary:["seq-orange-red-light","seq-yellow-orange-red","seq-yellow-pink-purple","seq-yellow-purple-blue","seq-teal-lightgreen-bright","seq-green-lightgray-bright","seq-red-lightgray-bright","seq-blue-lightgray-bright","seq-orange-lightgray-bright","seq-blue-red-yellow-bright","seq-blue-tan-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-blues-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright"].concat(n)},"topo-vector":{common:b.lightBasemaps,primary:"seq-yellow-green-blue",secondary:["seq-yellow-pink-purple","seq-yellow-purple-blue","seq-yellow-red-purple","seq-yellow-orange-red","seq-teal-lightgreen-bright","seq-green-lightgray-bright","seq-blue-lightgray-bright","seq-orange-lightgray-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright"].concat(n)},"streets-relief-vector":{common:b.test,primary:"seq-yellow-red-purple",secondary:["seq-orange-red-light","seq-yellow-orange-red","seq-yellow-pink-purple","seq-yellow-purple-blue","seq-teal-lightgreen-bright","seq-green-lightgray-bright","seq-red-lightgray-bright","seq-blue-lightgray-bright","seq-orange-lightgray-bright","seq-blue-red-yellow-bright","seq-blue-tan-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-blues-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright"].concat(n)},"streets-navigation-vector":{common:b.test,primary:"seq-yellow-red-purple",secondary:["seq-orange-red-light","seq-yellow-orange-red","seq-yellow-pink-purple","seq-yellow-purple-blue","seq-teal-lightgreen-bright","seq-green-lightgray-bright","seq-red-lightgray-bright","seq-blue-lightgray-bright","seq-orange-lightgray-bright","seq-blue-red-yellow-bright","seq-blue-tan-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-blues-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright"].concat(n)},"dark-gray-vector":{common:b.test,primary:"seq-dark-to-light-blue-bright",secondary:["seq-blue-lightgray-bright","seq-gray-lightgreen-bright","seq-reds-bright","seq-purples-bright","seq-blues-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-teal-lightgreen-bright","seq-lightred-darkgray-bright","seq-lightmagenta-darkgray-bright","seq-lightblue-darkgray-bright"].concat(n)},"streets-night-vector":{common:b.test,primary:"seq-dark-to-light-blue-bright",secondary:["seq-blue-lightgray-bright","seq-gray-lightgreen-bright","seq-reds-bright","seq-purples-bright","seq-blues-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-teal-lightgreen-bright","seq-lightred-darkgray-bright","seq-lightmagenta-darkgray-bright","seq-lightblue-darkgray-bright"].concat(n)}}},"above-and-below":{name:"above-and-below",label:"TODO",description:"TODO",basemaps:["streets","gray","topo","terrain","national-geographic","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector","satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"],schemes:{streets:{common:b.lightBasemaps,primary:"div-bluegreen-yellow-orange",secondary:["div-orange-yellow-blue-light","div-green-yellow-redpurple","div-green-yellow-orange","div-green-gray-bright","div-red-blue-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightred-gray-bright"].concat(s)},gray:{common:b.test,primary:"div-bluegreen-orange",secondary:["div-orange-purple","div-bluegreen-purple","div-orange-pink","div-blue-yellow-red-bright","div-green-gray-bright","div-red-green-bright","div-red-blue-bright","div-orange-gray-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-blue-green-bright","div-purple-brown-bright","div-blue-brown-bright","div-teal-brown-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightblue-gray-bright","div-lightgreen-gray-bright","div-lightred-gray-bright","div-yellow-green-bright","div-green-darkgray-bright"].concat(s)},topo:{common:b.lightBasemaps,primary:"div-orange-pink",secondary:["div-redpurple-blue","div-orange-blue","div-green-pink","div-blue-yellow-red-bright","div-green-gray-bright","div-red-green-bright","div-red-blue-bright","div-orange-gray-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-blue-green-bright","div-purple-brown-bright","div-blue-brown-bright","div-teal-brown-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightblue-gray-bright","div-lightgreen-gray-bright","div-lightred-gray-bright","div-yellow-green-bright","div-green-darkgray-bright"].concat(s)},terrain:{common:b.lightBasemaps,primary:"div-bluegreen-orange",secondary:["div-bluegreen-redpurple","div-green-redpurple","div-green-orange","div-blue-yellow-red-bright","div-green-gray-bright","div-red-blue-bright","div-orange-gray-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-blue-green-bright","div-purple-brown-bright","div-blue-brown-bright","div-teal-brown-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightblue-gray-bright","div-lightgreen-gray-bright","div-lightred-gray-bright","div-yellow-green-bright","div-green-darkgray-bright"].concat(s)},"national-geographic":{common:b.lightBasemaps,primary:"div-orange-yellow-blue-light",secondary:["div-bluegreen-yellow-orange","div-green-yellow-redpurple","div-red-green-bright","div-red-blue-bright","div-orange-gray-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-blue-green-bright","div-purple-brown-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightred-gray-bright","div-yellow-green-bright","div-green-darkgray-bright"].concat(s)},oceans:{common:b.lightBasemaps,primary:"div-red-yellow-pink",secondary:["div-blue-green","div-bluegreen-yellow-redpurple","div-bluegreen-yellow-orange","div-blue-yellow-red-bright","div-green-gray-bright","div-red-green-bright","div-red-blue-bright","div-orange-gray-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-blue-green-bright","div-purple-brown-bright","div-blue-brown-bright","div-teal-brown-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightblue-gray-bright","div-lightgreen-gray-bright","div-lightred-gray-bright","div-yellow-green-bright","div-green-darkgray-bright"].concat(s)},osm:{common:b.lightBasemaps,primary:"div-bluegreen-pink",secondary:["div-bluegreen-redpurple","div-bluegreen-orange","div-orange-pink","div-green-gray-bright","div-red-blue-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-blue-green-bright","div-purple-brown-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightred-gray-bright","div-yellow-green-bright","div-green-darkgray-bright"].concat(s)},satellite:{common:b.darkBasemaps,primary:"div-blue-green-bright",secondary:["div-red-yellow-purple","div-orange-yellow-pink","div-orange-yellow-blue-light","div-green-gray-bright","div-red-green-bright","div-red-blue-bright","div-orange-gray-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-orange-yellow-blue-dark","div-purple-brown-bright","div-blue-brown-bright","div-teal-brown-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightblue-gray-bright","div-lightgreen-gray-bright","div-lightred-gray-bright","div-lightmagenta-gray-bright","div-yellow-green-bright","div-lightblue-yellow-bright","div-green-darkgray-bright"].concat(s)},hybrid:{common:b.darkBasemaps,primary:"div-blue-green-bright",secondary:["div-red-yellow-purple","div-orange-yellow-pink","div-orange-yellow-blue-light","div-green-gray-bright","div-red-green-bright","div-red-blue-bright","div-orange-gray-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-orange-yellow-blue-dark","div-purple-brown-bright","div-blue-brown-bright","div-teal-brown-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightblue-gray-bright","div-lightgreen-gray-bright","div-lightred-gray-bright","div-lightmagenta-gray-bright","div-yellow-green-bright","div-lightblue-yellow-bright","div-green-darkgray-bright"].concat(s)},"dark-gray":{common:b.test,primary:"div-blue-green-bright",secondary:["div-yellow-gray-purple","div-lightblue-yellow-bright","div-red-gray-blue","div-green-gray-purple","div-orange-gray-blue","div-green-gray-bright","div-red-green-bright","div-red-blue-bright","div-orange-gray-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-green-teal-bright","div-purple-brown-bright","div-blue-brown-bright","div-teal-brown-bright","div-lightgreen-yellow-bright","div-lightblue-gray-bright","div-lightgreen-gray-bright","div-lightred-gray-bright","div-lightmagenta-gray-bright","div-yellow-green-bright","div-green-darkgray-bright"].concat(s)},"streets-vector":{common:b.lightBasemaps,primary:"div-bluegreen-yellow-orange",secondary:["div-orange-yellow-blue-light","div-green-yellow-redpurple","div-green-yellow-orange","div-green-gray-bright","div-red-blue-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightred-gray-bright"].concat(s)},"gray-vector":{common:b.test,primary:"div-bluegreen-orange",secondary:["div-orange-purple","div-bluegreen-purple","div-orange-pink","div-blue-yellow-red-bright","div-green-gray-bright","div-red-green-bright","div-red-blue-bright","div-orange-gray-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-blue-green-bright","div-purple-brown-bright","div-blue-brown-bright","div-teal-brown-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightblue-gray-bright","div-lightgreen-gray-bright","div-lightred-gray-bright","div-yellow-green-bright","div-green-darkgray-bright"].concat(s)},"topo-vector":{common:b.lightBasemaps,primary:"div-orange-pink",secondary:["div-redpurple-blue","div-orange-blue","div-green-pink","div-blue-yellow-red-bright","div-green-gray-bright","div-red-green-bright","div-red-blue-bright","div-orange-gray-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-blue-green-bright","div-purple-brown-bright","div-blue-brown-bright","div-teal-brown-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightblue-gray-bright","div-lightgreen-gray-bright","div-lightred-gray-bright","div-yellow-green-bright","div-green-darkgray-bright"].concat(s)},"streets-relief-vector":{common:b.test,primary:"div-bluegreen-orange",secondary:["div-orange-purple","div-bluegreen-purple","div-orange-pink","div-blue-yellow-red-bright","div-green-gray-bright","div-red-green-bright","div-red-blue-bright","div-orange-gray-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-blue-green-bright","div-purple-brown-bright","div-blue-brown-bright","div-teal-brown-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightblue-gray-bright","div-lightgreen-gray-bright","div-lightred-gray-bright","div-yellow-green-bright","div-green-darkgray-bright"].concat(s)},"streets-navigation-vector":{common:b.test,primary:"div-bluegreen-orange",secondary:["div-orange-purple","div-bluegreen-purple","div-orange-pink","div-blue-yellow-red-bright","div-green-gray-bright","div-red-green-bright","div-red-blue-bright","div-orange-gray-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-blue-green-bright","div-purple-brown-bright","div-blue-brown-bright","div-teal-brown-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightblue-gray-bright","div-lightgreen-gray-bright","div-lightred-gray-bright","div-yellow-green-bright","div-green-darkgray-bright"].concat(s)},"dark-gray-vector":{common:b.test,primary:"div-blue-green-bright",secondary:["div-yellow-gray-purple","div-lightblue-yellow-bright","div-red-gray-blue","div-green-gray-purple","div-orange-gray-blue","div-green-gray-bright","div-red-green-bright","div-red-blue-bright","div-orange-gray-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-green-teal-bright","div-purple-brown-bright","div-blue-brown-bright","div-teal-brown-bright","div-lightgreen-yellow-bright","div-lightblue-gray-bright","div-lightgreen-gray-bright","div-lightred-gray-bright","div-lightmagenta-gray-bright","div-yellow-green-bright","div-green-darkgray-bright"].concat(s)},"streets-night-vector":{common:b.test,primary:"div-blue-green-bright",secondary:["div-yellow-gray-purple","div-lightblue-yellow-bright","div-red-gray-blue","div-green-gray-purple","div-orange-gray-blue","div-green-gray-bright","div-red-green-bright","div-red-blue-bright","div-orange-gray-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-green-teal-bright","div-purple-brown-bright","div-blue-brown-bright","div-teal-brown-bright","div-lightgreen-yellow-bright","div-lightblue-gray-bright","div-lightgreen-gray-bright","div-lightred-gray-bright","div-lightmagenta-gray-bright","div-yellow-green-bright","div-green-darkgray-bright"].concat(s)}}},"centered-on":{name:"centered-on",label:"TODO",description:"TODO",basemaps:["streets","gray","topo","terrain","national-geographic","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector","satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"],schemes:{streets:{common:{outline:a.lighter,width:2,size:8},primary:"highlight-orange",secondary:["highlight-bluegreen","highlight-orange-gray","highlight-bluegreen-gray"]},gray:{common:{outline:a.lighter,width:2,size:8},primary:"highlight-orange",secondary:["highlight-purple","highlight-orange-gray","highlight-purple-gray"]},topo:{common:{outline:a.lighter,width:2,size:8},primary:"highlight-orange",secondary:["highlight-pink","highlight-orange-gray","highlight-pink-gray"]},terrain:{common:{outline:a.lighter,width:2,size:8},primary:"highlight-orange",secondary:["highlight-bluegreen","highlight-orange-gray","highlight-bluegreen-gray"]},"national-geographic":{common:{outline:a.lighter,width:2,size:8},primary:"highlight-orange",secondary:["highlight-blue","highlight-orange-gray","highlight-blue-gray"]},oceans:{common:{outline:a.lighter,width:2,size:8},primary:"highlight-red",secondary:["highlight-pink","highlight-red-gray","highlight-pink-gray"]},osm:{common:{outline:a.lighter,width:2,size:8},primary:"highlight-pink",secondary:["highlight-bluegreen","highlight-pink-gray","highlight-bluegreen-gray"]},satellite:{common:{outline:a.light,width:2,size:8},primary:"highlight-orange-dark",secondary:["highlight-blue-dark","highlight-orange-gray-dark","highlight-blue-gray-dark"]},hybrid:{common:{outline:a.light,width:2,size:8},primary:"highlight-orange-dark",secondary:["highlight-blue-dark","highlight-orange-gray-dark","highlight-blue-gray-dark"]},"dark-gray":{common:{outline:a.light,width:2,size:8},primary:"highlight-orange-bright",secondary:["highlight-blue-bright","highlight-orange-gray-bright","highlight-blue-gray-bright"]},"streets-vector":{common:{outline:a.lighter,width:2,size:8},primary:"highlight-orange",secondary:["highlight-bluegreen","highlight-orange-gray","highlight-bluegreen-gray"]},"gray-vector":{common:{outline:a.lighter,width:2,size:8},primary:"highlight-orange",secondary:["highlight-purple","highlight-orange-gray","highlight-purple-gray"]},"topo-vector":{common:{outline:a.lighter,width:2,size:8},primary:"highlight-orange",secondary:["highlight-pink","highlight-orange-gray","highlight-pink-gray"]},"streets-relief-vector":{common:{outline:a.lighter,width:2,size:8},primary:"highlight-orange",secondary:["highlight-purple","highlight-orange-gray","highlight-purple-gray"]},"streets-navigation-vector":{common:{outline:a.lighter,width:2,size:8},primary:"highlight-orange",secondary:["highlight-purple","highlight-orange-gray","highlight-purple-gray"]},"dark-gray-vector":{common:{outline:a.light,width:2,size:8},primary:"highlight-orange-bright",secondary:["highlight-blue-bright","highlight-orange-gray-bright","highlight-blue-gray-bright"]},"streets-night-vector":{common:{outline:a.light,width:2,size:8},primary:"highlight-orange-bright",secondary:["highlight-blue-bright","highlight-orange-gray-bright","highlight-blue-gray-bright"]}}},extremes:{name:"extremes",label:"TODO",description:"TODO",basemaps:["streets","gray","topo","terrain","national-geographic","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector","satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"],schemes:{streets:{common:{outline:a.lighter,width:2,size:8},primary:"extremesdiv-bluegreen-yellow-orange",secondary:["extremesdiv-orange-yellow-blue-light","extremesdiv-green-yellow-redpurple","extremesdiv-green-yellow-orange","extremes-orange","extremes-bluegreen","extremes-orange-gray","extremes-bluegreen-gray"]},gray:{common:{outline:a.lighter,width:2,size:8},primary:"extremesdiv-orange-purple",secondary:["extremesdiv-bluegreen-purple","extremesdiv-bluegreen-orange","extremesdiv-orange-pink","extremes-orange","extremes-purple","extremes-orange-gray","extremes-purple-gray"]},topo:{common:{outline:a.lighter,width:2,size:8},primary:"extremesdiv-orange-pink",secondary:["extremesdiv-redpurple-blue","extremesdiv-orange-blue","extremesdiv-green-pink","extremes-orange","extremes-pink","extremes-orange-gray","extremes-pink-gray"]},terrain:{common:{outline:a.lighter,width:2,size:8},primary:"extremesdiv-bluegreen-orange",secondary:["extremesdiv-bluegreen-redpurple","extremesdiv-green-redpurple","extremesdiv-green-orange","extremes-orange","extremes-bluegreen","extremes-orange-gray","extremes-bluegreen-gray"]},"national-geographic":{common:{outline:a.lighter,width:2,size:8},primary:"extremesdiv-orange-yellow-blue-light",secondary:["extremesdiv-bluegreen-yellow-orange","extremesdiv-green-yellow-redpurple","extremes-orange","extremes-blue","extremes-orange-gray","extremes-blue-gray"]},oceans:{common:{outline:a.lighter,width:2,size:8},primary:"extremesdiv-red-yellow-pink",secondary:["extremesdiv-blue-green","extremesdiv-bluegreen-yellow-redpurple","extremesdiv-bluegreen-yellow-orange","extremes-red","extremes-pink","extremes-red-gray","extremes-pink-gray"]},osm:{common:{outline:a.lighter,width:2,size:8},primary:"extremesdiv-bluegreen-pink",secondary:["extremesdiv-bluegreen-redpurple","extremesdiv-bluegreen-orange","extremesdiv-orange-pink","extremes-pink","extremes-bluegreen","extremes-pink-gray","extremes-bluegreen-gray"]},satellite:{common:{outline:a.light,width:2,size:8},primary:"extremesdiv-orange-yellow-blue-dark",secondary:["extremesdiv-red-yellow-purple","extremesdiv-orange-yellow-pink","extremesdiv-orange-yellow-blue-light","extremes-orange-dark","extremes-blue-dark","extremes-orange-gray-dark","extremes-blue-gray-dark"]},hybrid:{common:{outline:a.light,width:2,size:8},primary:"extremesdiv-orange-yellow-blue-dark",secondary:["extremesdiv-red-yellow-purple","extremesdiv-orange-yellow-pink","extremesdiv-orange-yellow-blue-light","extremes-orange-dark","extremes-blue-dark","extremes-orange-gray-dark","extremes-blue-gray-dark"]},"dark-gray":{common:{outline:a.light,width:2,size:8},primary:"extremesdiv-orange-gray-blue",secondary:["extremesdiv-yellow-gray-purple","extremesdiv-red-gray-blue","extremesdiv-green-gray-purple","extremes-orange-bright","extremes-blue-bright","extremes-orange-gray-bright","extremes-blue-gray-bright"]},"streets-vector":{common:{outline:a.lighter,width:2,size:8},primary:"extremesdiv-bluegreen-yellow-orange",secondary:["extremesdiv-orange-yellow-blue-light","extremesdiv-green-yellow-redpurple","extremesdiv-green-yellow-orange","extremes-orange","extremes-bluegreen","extremes-orange-gray","extremes-bluegreen-gray"]},"gray-vector":{common:{outline:a.lighter,width:2,size:8},primary:"extremesdiv-orange-purple",secondary:["extremesdiv-bluegreen-purple","extremesdiv-bluegreen-orange","extremesdiv-orange-pink","extremes-orange","extremes-purple","extremes-orange-gray","extremes-purple-gray"]},"topo-vector":{common:{outline:a.lighter,width:2,size:8},primary:"extremesdiv-orange-pink",secondary:["extremesdiv-redpurple-blue","extremesdiv-orange-blue","extremesdiv-green-pink","extremes-orange","extremes-pink","extremes-orange-gray","extremes-pink-gray"]},"streets-relief-vector":{common:{outline:a.lighter,width:2,size:8},primary:"extremesdiv-orange-purple",secondary:["extremesdiv-bluegreen-purple","extremesdiv-bluegreen-orange","extremesdiv-orange-pink","extremes-orange","extremes-purple","extremes-orange-gray","extremes-purple-gray"]},"streets-navigation-vector":{common:{outline:a.lighter,width:2,size:8},primary:"extremesdiv-orange-purple",secondary:["extremesdiv-bluegreen-purple","extremesdiv-bluegreen-orange","extremesdiv-orange-pink","extremes-orange","extremes-purple","extremes-orange-gray","extremes-purple-gray"]},"dark-gray-vector":{common:{outline:a.light,width:2,size:8},primary:"extremesdiv-orange-gray-blue",secondary:["extremesdiv-yellow-gray-purple","extremesdiv-red-gray-blue","extremesdiv-green-gray-purple","extremes-orange-bright","extremes-blue-bright","extremes-orange-gray-bright","extremes-blue-gray-bright"]},"streets-night-vector":{common:{outline:a.light,width:2,size:8},primary:"extremesdiv-orange-gray-blue",secondary:["extremesdiv-yellow-gray-purple","extremesdiv-red-gray-blue","extremesdiv-green-gray-purple","extremes-orange-bright","extremes-blue-bright","extremes-orange-gray-bright","extremes-blue-gray-bright"]}}},"group-similar":{name:"group-similar",label:"TODO",description:"TODO",basemapGroups:{light:["streets","gray","topo","terrain","national-geographic","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"]},schemes:{light:{common:b.lightBasemaps,primary:"spectral",secondary:["cat-dark","cat-light"].concat(d)},dark:{common:b.darkBasemaps,primary:"spectral",secondary:["cat-dark","cat-light"].concat(d)}}}},u={};function v(r,g){return e.map(r,(function(e){var r=new t(e);return null!=g&&(r.a=g),r}))}function p(r,g){var i,t,l;(t=h.haveIdenticalColors(g,r.colors))?i=t>0?r:u.flipColors(r,!0):(e.some(r.colorsForClassBreaks,(function(e){return e.numClasses===g.length&&(l=e.colors),!!l})),l&&(t=h.haveIdenticalColors(g,l))&&(i=t>0?r:u.flipColors(r,!0)));return i}function m(r,g){var i,t,l=r&&r.basemapGroups,h=r&&r.basemaps;if(l)for(i in l)if(h=l[i],e.indexOf(h,g)>-1){t=i;break}return t=t||g,r&&t?r.schemes[t]:null}function q(e){var r,g=e.basemapGroups,i=e.basemaps,t=[];if(g)for(r in g)t=t.concat(g[r]);else i&&(t=t.concat(i));return t}function c(r,g,i,h,a){var b,n,s,d=l[r];if(d){for(n in b={id:h+"/"+a+"/"+r,theme:h},null==(s=g.fillOpacity)&&-1!==e.indexOf(o,r)&&(s=.8),b.opacity=s||1,b.colors=v(d.stops),b.colorsForClassBreaks=[],d)"stops"!==n&&(n=+n,b.colorsForClassBreaks.push({numClasses:n,colors:v(d[n])}));switch(b.noDataColor=new t(-1!==e.indexOf(o,r)?"#ffffff":"#aaaaaa"),i){case"point":b.outline={color:new t(g.outline.color),width:g.outline.width},b.size=g.size;break;case"line":b.width=g.width;break;case"polygon":b.outline={color:new t(g.outline.color),width:g.outline.width}}}return b}function w(e){var r=e;return"esriGeometryPoint"===r||"esriGeometryMultipoint"===r?r="point":"esriGeometryPolyline"===r?r="line":"esriGeometryPolygon"!==r&&"esriGeometryMultiPatch"!==r||(r="polygon"),r}return r.mixin(u,{getAvailableThemes:function(r){var g,i,t,l=[];for(g in y)t=q(i=y[g]),r&&-1===e.indexOf(t,r)||l.push({name:i.name,label:i.label,description:i.description,basemaps:t});return l},getSchemes:function(r){var g,i,t=r.theme,l=r.basemap,h=w(r.geometryType);return(g=m(y[t],l))&&(i={primaryScheme:c(g.primary,g.common,h,t,l),secondarySchemes:e.map(g.secondary,(function(e){return c(e,g.common,h,t,l)}))}),i},getSchemeById:function(e){var r,g,i,t,l,h=e.id,a=w(e.geometryType);return h&&(h=h.split("/"))&&(g=h[0],i=h[1],t=h[2]),(l=m(y[g],i))&&(r=c(t,l.common,a,g,i)),r},cloneScheme:function(g){var i;return g&&((i=r.mixin({},g)).colors=v(i.colors),i.colorsForClassBreaks=e.map(i.colorsForClassBreaks,(function(e){return{numClasses:e.numClasses,colors:v(e.colors)}})),i.noDataColor&&(i.noDataColor=new t(i.noDataColor)),i.outline&&(i.outline={color:i.outline.color&&new t(i.outline.color),width:i.outline.width})),i},flipColors:function(r,g){var i=g?r:u.cloneScheme(r);return i.colors.reverse(),e.forEach(i.colorsForClassBreaks,(function(e){e.colors.reverse()})),i},getMatchingSchemes:function(r){var g,i=r.theme,t=w(r.geometryType),l=r.colors,h=y[i],a=q(h),b=[];return e.forEach(a,(function(r){var a=m(h,r);a&&((g=p(c(a.primary,a.common,t,i,r),l))&&b.push(g),e.forEach(a.secondary,(function(e){(g=p(c(e,a.common,t,i,r),l))&&b.push(g)})))})),b}}),g("extend-esri")&&r.setObject("styles.choropleth",u,i),u}));