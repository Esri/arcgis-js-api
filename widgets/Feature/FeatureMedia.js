/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/aliasOf","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/events","../../core/watchUtils","../support/widgetUtils","../support/decorators/messageBundle","../../chunks/index","../Widget","./support/featureUtils","./support/FeatureElementInfo","./FeatureMedia/FeatureMediaViewModel","../support/chartUtils"],(function(e,t,i,r,a,o,s,n,l,d,c,u,h,p,m,f,_,v,I,M,g){"use strict";const w={base:"esri-feature-media",mediaContainer:"esri-feature-media__container",mediaItemContainer:"esri-feature-media__item-container",mediaItem:"esri-feature-media__item",mediaItemTitle:"esri-feature-media__item-title",mediaItemCaption:"esri-feature-media__item-caption",mediaPrevious:"esri-feature-media__previous",mediaPreviousIconLTR:"esri-feature-media__previous-icon",mediaPreviousIconRTL:"esri-feature-media__previous-icon--rtl",mediaNext:"esri-feature-media__next",mediaNextIconLTR:"esri-feature-media__next-icon",mediaNextIconRTL:"esri-feature-media__next-icon--rtl",mediaChart:"esri-feature-media__chart",mediaButton:"esri-feature-media__button",mediaIcon:"esri-feature-media__icon",iconLeftTriangleArrow:"esri-icon-left-triangle-arrow",iconRightTriangleArrow:"esri-icon-right-triangle-arrow"},x=.05,y=.95,T=15;let b=function(t){function i(e,i){var r;return(r=t.call(this,e,i)||this)._refreshTimer=null,r._refreshIntervalInfo=null,r._featureElementInfo=null,r.attributes=null,r.activeMediaInfoIndex=null,r.description=null,r.fieldInfoMap=null,r.layer=null,r.mediaInfos=null,r.popupTemplate=null,r.relatedInfos=null,r.title=null,r.viewModel=new M,r.messages=null,r}e._inheritsLoose(i,t);var r=i.prototype;return r.initialize=function(){this._featureElementInfo=new I,this.own(h.init(this,["viewModel.activeMediaInfo","viewModel.activeMediaInfoIndex"],(()=>this._setupMediaRefreshTimer())),h.init(this,["viewModel.description","viewModel.title"],(()=>this._setupFeatureElementInfo())))},r.destroy=function(){this._clearMediaRefreshTimer(),this._featureElementInfo.destroy()},r.render=function(){var e;return f.jsx("div",{bind:this,class:w.base,onkeyup:this._handleMediaKeyup},null==(e=this._featureElementInfo)?void 0:e.render(),this.renderMedia())},r.renderMedia=function(){const{formattedMediaInfoCount:e}=this.viewModel;return e?f.jsx("div",{key:"media-element-container",class:w.mediaContainer},this.renderMediaPageButton("previous"),this.renderMediaInfo(),this.renderMediaPageButton("next")):null},r.renderImageMediaInfo=function(e){const{_refreshIntervalInfo:t}=this,{activeMediaInfoIndex:i,formattedMediaInfoCount:r}=this.viewModel,{value:a,refreshInterval:o,altText:s,title:n,type:l}=e,{sourceURL:d,linkURL:c}=a,u=v.shouldOpenInNewTab(c)?"_blank":"_self",h="_blank"===u?"noreferrer":"",p=o?t:null,m=p?p.timestamp:0,_=p?p.sourceURL:d,I=f.jsx("img",{alt:s||n,key:`media-${l}-${i}-${r}-${m}`,src:_}),M=c?f.jsx("a",{title:n,href:c,rel:h,target:u},I):null;return M||I},r.renderChartMediaInfo=function(e){const{activeMediaInfoIndex:t,formattedMediaInfoCount:i}=this.viewModel;return f.jsx("div",{key:`media-${e.type}-${t}-${i}`,bind:this,class:w.mediaChart,afterCreate:this._getChartDependencies})},r.renderMediaInfoType=function(){const{activeMediaInfo:e}=this.viewModel;return e?"image"===e.type?this.renderImageMediaInfo(e):-1!==e.type.indexOf("chart")?this.renderChartMediaInfo(e):null:null},r.renderMediaInfo=function(){const{activeMediaInfo:e}=this.viewModel,t=e.title?f.jsx("div",{key:"media-title",class:w.mediaItemTitle,innerHTML:e.title}):null,i=e.caption?f.jsx("div",{key:"media-caption",class:w.mediaItemCaption,innerHTML:e.caption}):null;return f.jsx("div",{key:"media-container",class:w.mediaItemContainer},f.jsx("div",{key:"media-item-container",class:w.mediaItem},this.renderMediaInfoType()),t,i)},r.renderMediaPageButton=function(e){if(this.viewModel.formattedMediaInfoCount<2)return null;const t="previous"===e,i=t?this.messages.previous:this.messages.next,r=t?this.classes(w.mediaButton,w.mediaPrevious):this.classes(w.mediaButton,w.mediaNext),a=t?this.classes(w.mediaIcon,w.mediaPreviousIconLTR,w.iconLeftTriangleArrow):this.classes(w.mediaIcon,w.mediaNextIconLTR,w.iconRightTriangleArrow),o=t?this.classes(w.mediaIcon,w.mediaPreviousIconRTL,w.iconRightTriangleArrow):this.classes(w.mediaIcon,w.mediaNextIconRTL,w.iconLeftTriangleArrow),s=t?"media-previous":"media-next",n=t?this._previous:this._next;return f.jsx("button",{type:"button",key:s,title:i,"aria-label":i,tabIndex:0,class:r,bind:this,onclick:n},f.jsx("span",{"aria-hidden":"true",class:a}),f.jsx("span",{"aria-hidden":"true",class:o}))},r._setupFeatureElementInfo=function(){const{description:e,title:t}=this;this._featureElementInfo.set({description:e,title:t})},r._next=function(){this.viewModel.next()},r._previous=function(){this.viewModel.previous()},r._getChartDependencies=async function(e){const t=await g.loadChartsModule(),{activeMediaInfo:i}=this.viewModel;this._renderChart({chartDiv:e,mediaInfo:i,chartsModule:t})},r._handleMediaKeyup=function(e){const t=u.eventKey(e);"ArrowLeft"===t&&(e.stopPropagation(),this.viewModel.previous()),"ArrowRight"===t&&(e.stopPropagation(),this.viewModel.next())},r._renderChart=function(e){const{chartsModule:t,chartDiv:i,mediaInfo:r}=e,{value:a,type:o}=r,{am4core:s}=t,n=g.getColorSet(s);function l(e){e instanceof s.ColorSet&&n&&(e.list=n)}p.isDarkTheme()&&s.useTheme(t.am4themes_dark),s.useTheme(t.am4themes_animated),s.useTheme(l);const d="pie-chart"===o?this._createPieChart(e):this._createXYChart(e);i.setAttribute("aria-label",r.altText||r.title),d.data=a.series.map((e=>({tooltip:e.tooltip,value:e.value}))).filter((e=>"pie-chart"!==o||e.value>0))},r._customizeChartTooltip=function(e,t){e.label.wrap=!0,e.label.maxWidth=200,e.autoTextColor=!1,e.getFillFromObject=!1,e.label.fill=t.color("#ffffff"),e.background.fill=t.color({r:0,g:0,b:0,a:.7})},r._createPieChart=function(e){const{chartDiv:t,chartsModule:i}=e,{am4core:r,am4charts:a}=i,o=r.create(t,a.PieChart);o.rtl=p.isRTL();const s=o.series.push(new a.PieSeries);return s.labels.template.disabled=!0,s.ticks.template.disabled=!0,s.dataFields.value="value",s.dataFields.category="tooltip",this._customizeChartTooltip(s.tooltip,r),o},r._getMinSeriesValue=function(e){let t=0;return e.forEach((e=>t=Math.min(e.value,t))),t},r._createColumnChart=function(e,t){const{chartsModule:i,mediaInfo:r}=t,{value:a}=r,{am4core:o,am4charts:s}=i,n=e.xAxes.push(new s.CategoryAxis);n.dataFields.category="tooltip",n.renderer.labels.template.disabled=!0,this._customizeChartTooltip(n.tooltip,o),n.tooltip.events.on("sizechanged",(()=>{n.tooltip.dy=-n.tooltip.contentHeight}));const l=e.yAxes.push(new s.ValueAxis),d=l.renderer.labels.template;l.renderer.minLabelPosition=x,l.renderer.maxLabelPosition=y,l.min=this._getMinSeriesValue(a.series),this._customizeChartTooltip(l.tooltip,o),d.wrap=!0;const c=e.series.push(new s.ColumnSeries);c.dataFields.valueY="value",c.dataFields.categoryX="tooltip",e.cursor=new s.XYCursor,a.series.length>T&&(e.scrollbarX=new o.Scrollbar)},r._createBarChart=function(e,t){const{chartsModule:i,mediaInfo:r}=t,{value:a}=r,{am4core:o,am4charts:s}=i,n=e.yAxes.push(new s.CategoryAxis);n.dataFields.category="tooltip",n.renderer.inversed=!0,n.renderer.labels.template.disabled=!0,this._customizeChartTooltip(n.tooltip,o),n.tooltip.events.on("sizechanged",(()=>{n.tooltip.dx=n.tooltip.contentWidth}));const l=e.xAxes.push(new s.ValueAxis),d=l.renderer.labels.template;l.renderer.minLabelPosition=x,l.renderer.maxLabelPosition=y,l.min=this._getMinSeriesValue(a.series),this._customizeChartTooltip(l.tooltip,o),d.wrap=!0;const c=e.series.push(new s.ColumnSeries);c.dataFields.valueX="value",c.dataFields.categoryY="tooltip",e.cursor=new s.XYCursor,a.series.length>T&&(e.scrollbarY=new o.Scrollbar)},r._createLineChart=function(e,t){const{chartsModule:i,mediaInfo:r}=t,{value:a}=r,{am4core:o,am4charts:s}=i,n=e.xAxes.push(new s.CategoryAxis);n.dataFields.category="tooltip",n.renderer.labels.template.disabled=!0,this._customizeChartTooltip(n.tooltip,o),n.tooltip.events.on("sizechanged",(()=>{n.tooltip.dy=-n.tooltip.contentHeight}));const l=e.yAxes.push(new s.ValueAxis),d=l.renderer.labels.template;l.renderer.minLabelPosition=x,l.renderer.maxLabelPosition=y,l.min=this._getMinSeriesValue(a.series),this._customizeChartTooltip(l.tooltip,o),d.wrap=!0;const c=e.series.push(new s.LineSeries);c.dataFields.categoryX="tooltip",c.dataFields.valueY="value",e.cursor=new s.XYCursor,a.series.length>T&&(e.scrollbarX=new o.Scrollbar)},r._createXYChart=function(e){const{chartDiv:t,chartsModule:i,mediaInfo:r}=e,{type:a}=r,{am4core:o,am4charts:s}=i,n=o.create(t,s.XYChart);return n.rtl=p.isRTL(),"column-chart"===a&&this._createColumnChart(n,e),"bar-chart"===a&&this._createBarChart(n,e),"line-chart"===a&&this._createLineChart(n,e),n},r._clearMediaRefreshTimer=function(){const{_refreshTimer:e}=this;e&&(clearTimeout(e),this._refreshTimer=null)},r._updateMediaInfoTimestamp=function(e){const t=Date.now();this._refreshIntervalInfo={timestamp:t,sourceURL:this._getImageSource(e,t)},this.scheduleRender()},r._setupMediaRefreshTimer=function(){this._clearMediaRefreshTimer();const{activeMediaInfo:e}=this.viewModel;e&&"image"===e.type&&e.refreshInterval&&this._setRefreshTimeout(e)},r._setRefreshTimeout=function(e){const{refreshInterval:t,value:i}=e;if(!t)return;const r=6e4*t;this._updateMediaInfoTimestamp(i.sourceURL);const a=setInterval((()=>{this._updateMediaInfoTimestamp(i.sourceURL)}),r);this._refreshTimer=a},r._getImageSource=function(e,t){const i=-1!==e.indexOf("?")?"&":"?",[r,a=""]=e.split("#");return`${r}${i}timestamp=${t}${a?"#":""}${a}`},i}(_);return t.__decorate([s.aliasOf("viewModel.attributes")],b.prototype,"attributes",void 0),t.__decorate([s.aliasOf("viewModel.activeMediaInfoIndex")],b.prototype,"activeMediaInfoIndex",void 0),t.__decorate([s.aliasOf("viewModel.description")],b.prototype,"description",void 0),t.__decorate([s.aliasOf("viewModel.fieldInfoMap")],b.prototype,"fieldInfoMap",void 0),t.__decorate([s.aliasOf("viewModel.layer")],b.prototype,"layer",void 0),t.__decorate([s.aliasOf("viewModel.mediaInfos")],b.prototype,"mediaInfos",void 0),t.__decorate([s.aliasOf("viewModel.popupTemplate")],b.prototype,"popupTemplate",void 0),t.__decorate([s.aliasOf("viewModel.relatedInfos")],b.prototype,"relatedInfos",void 0),t.__decorate([s.aliasOf("viewModel.title")],b.prototype,"title",void 0),t.__decorate([o.property({type:M})],b.prototype,"viewModel",void 0),t.__decorate([o.property(),m.messageBundle("esri/widgets/Feature/t9n/Feature")],b.prototype,"messages",void 0),b=t.__decorate([n.subclass("esri.widgets.Feature.FeatureMedia")],b),b}));
