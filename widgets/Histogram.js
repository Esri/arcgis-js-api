/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import"../intl.js";import{isNone as t}from"../core/maybe.js";import{aliasOf as i}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/arrayUtils.js";import"../core/has.js";import"../core/accessorSupport/ensureType.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import r from"./Widget.js";import n from"./Histogram/HistogramViewModel.js";import{onResize as o}from"./support/widgetUtils.js";import{messageBundle as l}from"./support/decorators/messageBundle.js";import{tsx as d}from"./support/jsxFactory.js";import{substitute as h}from"../intl/substitute.js";var u;const c={base:"esri-histogram",horizontalLayout:"esri-histogram--horizontal",verticalLayout:"esri-histogram--vertical",content:"esri-histogram__content",svg:"esri-histogram__svg",bar:"esri-histogram__bar",bars:"esri-histogram__bars",label:"esri-histogram__label",dataLines:"esri-histogram__data-lines",dataLinesSubgroup:"esri-histogram__data-lines-subgroup",dataLine:"esri-histogram__data-line",averageLabel:"esri-histogram__average-label",averageDataLine:"esri-histogram__average-data-line",averageSymbol:"esri-histogram__average-symbol",esriWidget:"esri-widget",widgetIcon:"esri-icon-edit",disabled:"esri-disabled"};let p=u=class extends r{constructor(e,t){super(e,t),this._bgFillId=`${this.id}-bg-fill`,this._containerNode=null,this._containerDimensions={width:0,height:0},this._defaultBarColor="#d8d8d8",this.average=null,this.barCreatedFunction=null,this.bins=null,this.dataLines=null,this.dataLineCreatedFunction=null,this.dataLineUpdatedFunction=null,this.label=void 0,this.labelFormatFunction=null,this.max=null,this.messages=null,this.min=null,this.state=null,this.viewModel=new n}set layout(e){"vertical"!==e&&(e="horizontal"),this._set("layout",e)}static fromHistogramResult(e){const{bins:t,maxValue:i,minValue:a}=e;return new u({bins:t,max:i,min:a})}render(){const{label:e,layout:t,state:i}=this,a=this.classes(c.base,c.esriWidget,"horizontal"===t?c.horizontalLayout:c.verticalLayout,"disabled"===i?c.disabled:null);return d("div",{"aria-label":e,class:a,bind:this,afterCreate:this._afterContainerNodeCreate},"ready"===i?this.renderContent():null)}renderContent(){if(!this._containerNode)return;const e=this._bgFillId,t=`clip-path: url(#${e})`;return d("div",{class:c.content},d("svg",{class:c.svg,xmlns:"http://www.w3.org/2000/svg"},d("defs",null,this.renderFillDefinition(e)),d("g",{style:t},this.renderBarsGroup()),this.renderLinesGroup()))}renderBarsGroup(){return d("g",{class:this.classes(c.bars)},this.renderBars())}renderBars(){const{layout:e,viewModel:{binRange:t,range:i}}=this;if(!t||!i)return;const a=t/i,{width:s,height:r}=this._containerDimensions;if(0===r&&0===s)return;if(0===r&&0!==s)return void this.scheduleRender();const[n,o]="vertical"===e?[r*a,s]:[r,s*a];return this._getBarDimensions(n,o).map((([e,t],i)=>this.renderBar(i,e,t)))}renderBar(e,t,i){const{bins:a,layout:s,max:r,messages:n,viewModel:{range:o}}=this,{width:l,height:u}=this._containerDimensions,p=a.slice()[e],{count:g,maxValue:m,minValue:b}=p,v=r-m,[_,L]="vertical"===s?[0,v*(u/o)]:[l-i-v*(l/o),u-t],y=h(n.barLabel,{count:g,maxValue:m,minValue:b});return d("rect",{"aria-label":y,afterCreate:this._afterBarCreate,bind:this,class:c.bar,"data-index":e,fill:this._defaultBarColor,height:t,role:"img","shape-rendering":"crispEdges","stroke-width":"0",width:i,x:_,y:L})}renderLinesGroup(){return d("g",{class:this.classes(c.dataLines)},this.renderAverageLine(),this.renderCustomLines())}renderAverageLine(){const{average:e}=this;if(t(e))return;const i=[d("tspan",{class:this.classes(c.averageSymbol)},"x̄ "),d("tspan",{class:this.classes(c.averageLabel)},this.labelFormatFunction?this.labelFormatFunction(e,"average"):e)];return d("g",{afterCreate:this._afterLinesSubgroupCreate,afterUpdate:this._afterLinesSubgroupUpdate,bind:this,class:this.classes(c.dataLinesSubgroup)},d("title",{key:"title"},e),this.renderLine(e,this.classes(c.averageDataLine)),this.renderLabel(e,i))}renderCustomLines(){if(this.dataLines&&this.dataLines.length)return this.dataLines.map((({value:e,label:t},i)=>this.renderLineSubgroup(i,e,String(t))))}renderLineSubgroup(e,t,i){return d("g",{afterCreate:this._afterLinesSubgroupCreate,afterUpdate:this._afterLinesSubgroupUpdate,bind:this,class:this.classes(c.dataLinesSubgroup),"data-index":e},d("title",{key:"title"},t),this.renderLine(t),this.renderLabel(t,i))}renderLine(e,t){const[i,a,s,r]=this._getLinePosition(e);return d("line",{class:this.classes(c.dataLine,t),x1:i,x2:a,y1:s,y2:r,"shape-rendering":"crispEdges"})}renderLabel(e,t,i){const[a,s]=this._getLabelPosition(e),r=2;return d("text",{class:this.classes(c.label,i),"text-anchor":"end",transform:"horizontal"===this.layout?"rotate(270)":null,x:a,y:s-r},t)}renderFillDefinition(e){const{width:t,height:i}=this._containerDimensions;return d("clipPath",{id:e},d("rect",{x:"0",y:"0",width:t,height:i}))}_afterContainerNodeCreate(e){this._containerNode=e,this.own(o(e,(e=>{const{width:t,height:i}=e.contentRect;this._containerDimensions={width:t,height:i}})))}_afterBarCreate(e){if(this.barCreatedFunction){const t=e.dataset?parseInt(e.dataset.index,10):e.getAttribute("data-index")?parseInt(e.getAttribute("data-index"),10):null;this.barCreatedFunction(isNaN(t)?null:t,e)}}_afterLinesSubgroupCreate(e){if(this.dataLineCreatedFunction){const t=e.dataset?parseInt(e.dataset.index,10):e.getAttribute("data-index")?parseInt(e.getAttribute("data-index"),10):null,i=e.childNodes[0],a=e.childNodes[1]?e.childNodes[1]:null;this.dataLineCreatedFunction(i,a,isNaN(t)?null:t)}}_afterLinesSubgroupUpdate(e){if(this.dataLineUpdatedFunction){const t=e.dataset?parseInt(e.dataset.index,10):e.getAttribute("data-index")?parseInt(e.getAttribute("data-index"),10):null,i=e.childNodes[0],a=e.childNodes[1]?e.childNodes[1]:null;this.dataLineUpdatedFunction(i,a,isNaN(t)?null:t)}}_getBarDimensions(e,t){const{bins:i,layout:a}=this,s=i?i.map((e=>e.count)):[],r=Math.max.apply(Math,s);return s.map((i=>"vertical"===a?[e/s.length,0!==r?i/r*t:0]:[0!==r?i/r*e:0,t/s.length]))}_getLinePosition(e){const{layout:t,min:i,viewModel:{range:a}}=this,s=Math.round((e-i)/a*100)/100,{width:r,height:n}=this._containerDimensions,[o,l]=[s*r||1,n-s*n||1];return"vertical"===t?[0,"100%",l,l]:[o,o,"100%",0]}_getLabelPosition(e){const{layout:t,min:i,viewModel:{range:a}}=this,s=Math.round((e-i)/a*100)/100,{width:r,height:n}=this._containerDimensions;return"vertical"===t?[r,n-s*n]:[0,s*r]}};e([a()],p.prototype,"_bgFillId",void 0),e([a()],p.prototype,"_containerNode",void 0),e([a()],p.prototype,"_containerDimensions",void 0),e([a()],p.prototype,"_defaultBarColor",void 0),e([i("viewModel.average")],p.prototype,"average",void 0),e([a()],p.prototype,"barCreatedFunction",void 0),e([i("viewModel.bins")],p.prototype,"bins",void 0),e([a()],p.prototype,"dataLines",void 0),e([a()],p.prototype,"dataLineCreatedFunction",void 0),e([a()],p.prototype,"dataLineUpdatedFunction",void 0),e([a({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],p.prototype,"label",void 0),e([i("viewModel.labelFormatFunction")],p.prototype,"labelFormatFunction",void 0),e([a({value:"horizontal"})],p.prototype,"layout",null),e([i("viewModel.max")],p.prototype,"max",void 0),e([a(),l("esri/widgets/Histogram/t9n/Histogram")],p.prototype,"messages",void 0),e([i("viewModel.min")],p.prototype,"min",void 0),e([i("viewModel.state")],p.prototype,"state",void 0),e([a()],p.prototype,"viewModel",void 0),p=u=e([s("esri.widgets.Histogram")],p);const g=p;export{g as default};