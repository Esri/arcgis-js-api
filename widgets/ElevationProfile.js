/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{isSome as e,destroyMaybe as i,isNone as s,applySome as o,abortMaybe as r}from"../core/maybe.js";import{memoize as n}from"../core/memoize.js";import{createTask as a,createAbortError as l}from"../core/promiseUtils.js";import{watch as c,initial as h}from"../core/reactiveUtils.js";import{aliasOf as d}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/arrayUtils.js";import"../core/has.js";import"../core/accessorSupport/ensureType.js";import{property as p}from"../core/accessorSupport/decorators/property.js";import{subclass as u}from"../core/accessorSupport/decorators/subclass.js";import m from"./Widget.js";import{CSS as _}from"./ElevationProfile/css.js";import C from"./ElevationProfile/ElevationProfileViewModel.js";import v from"./ElevationProfile/ElevationProfileVisibleElements.js";import{Legend as g}from"./ElevationProfile/components/Legend.js";import{SettingsButton as f}from"./ElevationProfile/components/SettingsButton.js";import{createChart as y}from"./ElevationProfile/support/chartUtils.js";import{ElevationProfileErrorState as w,PORTRAIT_MODE_PIXEL_BREAKPOINT as b,ElevationProfileState as k,LARGE_CHART_SAMPLES as S}from"./ElevationProfile/support/constants.js";import{onResize as B}from"./support/widgetUtils.js";import{messageBundle as M}from"./support/decorators/messageBundle.js";import{tsx as P}from"./support/jsxFactory.js";var E;!function(t){t.Sketch="sketch",t.SketchCancel="sketch-cancel",t.SketchDone="sketch-done",t.Select="select",t.SelectCancel="select-cancel"}(E||(E={}));const j=[{type:E.Select},{type:E.Sketch}],z={[w.None]:null,[w.NoValidInput]:"noProfile",[w.NoVisibleProfiles]:"noProfile",[w.RefinedButNoChartData]:"noProfile",[w.TooComplex]:"tooComplex",[w.UnknownError]:"unknown",[w.InvalidGeometry]:"invalidGeometry",[w.InvalidElevationInfo]:"invalidElevationInfo"};let I=class extends m{constructor(t,e){super(t,e),this.viewModel=null,this.view=null,this.input=null,this.profiles=null,this.unitOptions=[],this.unit="metric",this.geodesicDistanceThreshold=1e5,this.visibleElements=new v,this.iconClass=_.widgetIcon,this.label=void 0,this.messages=null,this.messagesCommon=null,this.messagesUnits=null,this._chartContainer=null,this._chart=null,this._chartInitTask=null,this._chartIsRefined=!1,this._width=0,this._zoomOutButtonVisible=!1,this._getChartUpdateParamsMemoized=n(((t,e,i,s)=>({chart:t,data:e,stationary:i,messages:s}))),this._getDetailsPropsMemoized=n(((t,e)=>({effectiveUnits:t,profiles:e}))),t?.viewModel||(this._defaultViewModel=new C({view:t?.view}),this.viewModel=this._defaultViewModel)}initialize(){this._legend=new g(this._legendProps),this._settingsButton=new f(this._settingsButtonProps),this.own([c((()=>this._legendProps),(t=>this._legend.set(t))),c((()=>this._settingsButtonProps),(t=>this._settingsButton.set(t)))])}postInitialize(){this.own([c((()=>({container:this._chartContainer,width:this._width})),(({container:t,width:i})=>{this._destroyChart(),e(t)&&i>0&&this._initializeChart(t)}),h),c((()=>this._chartUpdateParams),(()=>this._updateChart(this._chartUpdateParams)),h)])}destroy(){this._destroyChart(),e(this._defaultViewModel)&&this.viewModel!==this._defaultViewModel&&this._defaultViewModel.destroy(),this._legend=i(this._legend),this._settingsButton=i(this._settingsButton)}get _portrait(){return this._width<b}get _chartUpdateParams(){const t=this.view;return this._getChartUpdateParamsMemoized(this._chart,this.viewModel.chartData,!e(t)||t.stationary,this._chartMessages)}get _chartMessages(){return{...this.messagesUnits,...this.messages}}get _legendProps(){return this._getDetailsPropsMemoized(this.viewModel.effectiveUnits,this._profilesArray)}get _profilesArray(){return this.profiles.toArray()}get _settingsButtonProps(){return{viewModel:this.viewModel,visibleElements:this.visibleElements}}render(){const{viewModel:t,visible:e}=this;return P("div",{key:this,class:this.classes({[_.base]:e,[_.esriWidget]:e,[_.esriWidgetDisabled]:e&&"disabled"===t.state,[_.portrait]:this._portrait,[_.refined]:1===t.progress}),"aria-label":this.messages.widgetLabel,afterCreate:t=>{this.own(B(t,(t=>{this._width=t.contentRect.width})))}},e&&this._renderContentForState())}_renderContentForState(){switch(this.viewModel.state){case k.Ready:return this._renderContentForReadyState();case k.Selecting:return this._renderContentForSelectingState();case k.Creating:return this._renderContentForCreatingState();case k.Selected:return this._renderContentForSelectedState();case k.Created:return this._renderContentForCreatedState();case k.Disabled:return this._renderContentForReadyState()}}_renderContentForReadyState(){const{sketchButton:t,selectButton:e}=this.visibleElements,i=this.messages;let s;return s=t&&e?i.readyPrompt:t?i.readyPromptCreateOnly:e?i.readyPromptSelectOnly:i.errors?.noProfile,this._renderContent({prompt:s,chart:!1,actions:j})}_renderContentForSelectingState(){const t=this.view;if(s(t))return null;const e=this.messages[`selectingPrompt-${t.type}`];return this._renderContent({prompt:e,chart:!1,actions:[{type:E.SelectCancel}]})}_renderContentForCreatingState(){const{view:t,viewModel:e}=this;if(s(t))return null;const i=e.hasVertices?[{type:E.SketchCancel},{type:E.SketchDone,disabled:!e.tool.interaction.canStopCreating}]:[{type:E.Select},{type:E.Sketch,disabled:!0}];if(e.errorState===w.NoValidInput){const e=this.messages[`creatingPrompt-${t.type}`];return this._renderContent({chart:!1,actions:i,prompt:e})}const o=this._getErrorMessage();return o?this._renderContent({chart:!1,actions:i,prompt:o}):this._renderContent({chart:!0,actions:i})}_renderContentForSelectedState(){const t=this._getErrorMessage();return t?this._renderContent({chart:!1,actions:j,prompt:t}):this._renderContent({chart:!0,actions:j})}_renderContentForCreatedState(){const t=this._getErrorMessage();return t?this._renderContent({chart:!1,actions:j,prompt:t}):this._renderContent({chart:!0,actions:j})}_getErrorMessage(){const t=z[this.viewModel.errorState];return this.messages?.errors?.[t]}_renderContent(t){const i=e(t.prompt)?this._renderPrompt(t.prompt):t.chart&&this._renderChart(),s=e(this.viewModel.input);return[P("header",{key:"header",class:_.header},this._zoomOutButtonVisible&&this._renderZoomOutButton(),this.visibleElements.clearButton&&s&&this._renderClearButton(),this.visibleElements.settingsButton&&this._settingsButton.render()),P("div",{class:_.mainContainer},...i),this.visibleElements.legend&&this._legend.render(),this._renderActions(t)]}_renderZoomOutButton(){return P("button",{key:"zoom-out",class:_.zoomOutButton,bind:this,onclick:this._onZoomOutButtonClick,title:this.messages.zoomOut,type:"button"})}_onZoomOutButtonClick(){o(this._chart,(t=>t.zoomOut()))}_renderClearButton(){return P("button",{key:"clear-profile",class:_.clearButton,bind:this,onclick:this._onClearButtonClick,title:this.messages.clearProfile,type:"button"})}_onClearButtonClick(){this.viewModel.clear()}_renderPrompt(t){return[P("div",{key:"prompt-container",bind:this,class:_.promptContainer},P("p",null,t))]}_renderChart(){if(!this.visibleElements.chart)return[P("div",{key:"empty-chart-container",class:_.chartContainer})];const t=this._chartIsRefined||this._canRenderChart();if(!t)return[this._renderSpinner({size:"large"}),P("div",{key:"chart-container-empty",class:_.chartContainer})];const{chartData:i,progress:s}=this.viewModel;return[e(i)&&s>0&&s<1&&this._renderSpinner({size:t?"small":"large"}),P("div",{key:"chart-container",bind:this,class:_.chartContainer,afterCreate:this._onChartContainerAfterCreate,afterRemoved:this._onChartContainerRemoved})]}_renderSpinner(t){return P("div",{key:"spinner",class:this.classes(_.chartSpinner,{[_.chartSpinnerSmall]:"small"===t.size}),afterCreate:this._onSpinnerAfterCreate,exitAnimation:this._onSpinnerExit})}_onSpinnerAfterCreate(t){requestAnimationFrame((()=>t.classList.add(_.chartSpinnerVisible)))}_onSpinnerExit(t,e){t.classList.remove(_.chartSpinnerVisible),setTimeout(e,200)}_canRenderChart(){const t=this.viewModel.chartData;if(s(t))return!1;if(!this.viewModel.inputIsSketched)return t.refined;let i=0;for(const{samples:s}of t.lines)i+=e(s)?s.length:0;return t.refined||i<=S}_renderActions({actions:t}){const e=t.map((t=>{switch(t.type){case E.Sketch:return this.visibleElements.sketchButton&&this._renderAction({action:t,onClick:this._onSketchButtonClick,className:_.sketchButton,label:this.messages.sketchButtonLabel});case E.SketchCancel:return this.visibleElements.sketchButton&&this._renderAction({action:t,onClick:this._onCancelButtonClick,className:_.sketchCancelButton,label:this.messagesCommon.cancel});case E.SketchDone:return this.visibleElements.sketchButton&&this._renderAction({action:t,onClick:this._onDoneButtonClick,className:_.sketchDoneButton,label:this.messagesCommon.done});case E.Select:return this.visibleElements.selectButton&&this._renderAction({action:t,onClick:this._onSelectButtonClick,className:_.selectButton,label:this.messages.selectButtonLabel});case E.SelectCancel:return this.visibleElements.selectButton&&this._renderAction({action:t,onClick:this._onCancelButtonClick,className:_.selectCancelButton,label:this.messagesCommon.cancel})}})).filter(Boolean);return e.length?P("footer",{key:"footer",class:_.footer},...e):null}_renderAction({action:t,onClick:e,className:i,label:s}){return P("button",{key:`action-${t.type}`,class:this.classes(_.actionButton,i,{[_.buttonDisabled]:t.disabled}),bind:this,disabled:t.disabled,onclick:e,type:"button"},s)}_onSketchButtonClick(){this.viewModel.start({mode:"sketch"})}_onSelectButtonClick(){this.viewModel.start({mode:"select"})}_onCancelButtonClick(){this.viewModel.cancel()}_onDoneButtonClick(){this.viewModel.stop()}_updateChart(t){const{data:i,chart:o,messages:r,stationary:n}=t;!s(o)&&!s(r)&&n&&this._canRenderChart()&&(o.update(t),this._chartIsRefined=e(i)&&i.refined)}_onChartContainerAfterCreate(t){this._chartContainer=t}_onChartContainerRemoved(){this._chartContainer=null}_initializeChart(t){r(this._chartInitTask),this._chartInitTask=a((async e=>{const s=await y({container:t,abortOptions:{signal:e},onRangeChange:(t,e)=>{this._zoomOutButtonVisible=1!==t||1!==e},onCursorPositionChange:t=>{this.viewModel.hoveredChartPosition=t}});if(e.aborted)throw i(s),l();this._chart=s,this._updateChart(this._chartUpdateParams)}))}_destroyChart(){this._chartInitTask=r(this._chartInitTask),this._chart=i(this._chart),this._chartIsRefined=!1}};t([p({type:C})],I.prototype,"viewModel",void 0),t([d("viewModel.view")],I.prototype,"view",void 0),t([d("viewModel.input")],I.prototype,"input",void 0),t([d("viewModel.profiles")],I.prototype,"profiles",void 0),t([d("viewModel.unitOptions")],I.prototype,"unitOptions",void 0),t([d("viewModel.unit")],I.prototype,"unit",void 0),t([d("viewModel.geodesicDistanceThreshold")],I.prototype,"geodesicDistanceThreshold",void 0),t([p({type:v,nonNullable:!0})],I.prototype,"visibleElements",void 0),t([p()],I.prototype,"iconClass",void 0),t([d("messages.widgetLabel",{overridable:!0})],I.prototype,"label",void 0),t([d("viewModel.visible")],I.prototype,"visible",void 0),t([p(),M("esri/widgets/ElevationProfile/t9n/ElevationProfile")],I.prototype,"messages",void 0),t([p(),M("esri/t9n/common")],I.prototype,"messagesCommon",void 0),t([p(),M("esri/core/t9n/Units")],I.prototype,"messagesUnits",void 0),t([p()],I.prototype,"_chartContainer",void 0),t([p()],I.prototype,"_chart",void 0),t([p()],I.prototype,"_chartInitTask",void 0),t([p()],I.prototype,"_chartIsRefined",void 0),t([p()],I.prototype,"_settingsButton",void 0),t([p()],I.prototype,"_legend",void 0),t([p()],I.prototype,"_width",void 0),t([p()],I.prototype,"_portrait",null),t([p()],I.prototype,"_zoomOutButtonVisible",void 0),t([p()],I.prototype,"_chartUpdateParams",null),t([p()],I.prototype,"_chartMessages",null),t([p()],I.prototype,"_legendProps",null),t([p()],I.prototype,"_profilesArray",null),t([p()],I.prototype,"_settingsButtonProps",null),I=t([u("esri.widgets.ElevationProfile")],I);const U=I;export{U as default};