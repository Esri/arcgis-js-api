/**
 * The ScaleRangeSlider widget allows the user to set a minimum and maximum scale based on named scale ranges.
 * When a layer is provided to the widget, the [minScale](#minScale) and [maxScale](#maxScale) are set to the
 * scale range of the layer.
 *
 * The user can update the scale range by dragging thumbs across the slider to update the minScale and maxScale.
 * The user can also change the `minScale` and `maxScale` by using the dropdowns underneath the [minScaleLimit](#minScaleLimit)
 * and [maxScaleLimit](#maxScaleLimit). The thumbnail shows a preview of the scale based on the [region](#region) specified.
 *
 * ![widgets-scaleRangeSlider](../assets/img/apiref/widgets/widgets-scaleRangeSlider.png)
 *
 * @module esri/widgets/ScaleRangeSlider
 * @since 4.13
 *
 * @see [ScaleRangeSlider.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/ScaleRangeSlider.tsx)
 * @see [ScaleRangeSlider.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_ScaleRangeSlider.scss)
 * @see module:esri/widgets/ScaleRangeSlider/ScaleRangeSliderViewModel
 * @see module:esri/widgets/ScaleRangeSlider/ScaleRanges
 * @see module:esri/widgets/Slider
 *
 * @example
 * const scaleRangeSlider = new ScaleRangeSlider({
 *   view: view,
 *   layer: featureLayer,  // scale range of this layer sets initial minScale and maxScale
 *   region: "MX",  // preview thumbnail will be of Mexico
 * });
 * view.ui.add(scaleRangeSlider, "bottom-left");
 *
 * // to update the layer min/max scale based on the slider
 * scaleRangeSlider.watch(["minScale", "maxScale"], function(value, oldValue, name) {
 *   featureLayer[name] = value;
 * });
 */

// esri
import { formatNumber, substitute } from "esri/intl";
import { LayerUnion } from "esri/layers";

// esri.core
import { closest } from "esri/core/domUtils";
import { eventKey, on } from "esri/core/events";
import { HandleOwnerMixin } from "esri/core/HandleOwner";
import { init, whenTrue } from "esri/core/watchUtils";

// esri.core.accessorSupport
import { cast, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.views
import IMapView from "esri/views/IMapView";
import { ISceneView } from "esri/views/ISceneView";

// esri.widgets
import Slider from "esri/widgets/Slider";
import Widget from "esri/widgets/Widget";

// esri.widgets.ScaleRangeSlider
import { ScaleType, SupportedRegion } from "esri/widgets/ScaleRangeSlider/interfaces";
import {
  getScalePreviewSource,
  getScalePreviewSpriteBackgroundPosition
} from "esri/widgets/ScaleRangeSlider/scalePreviewUtils";
import ScaleRanges from "esri/widgets/ScaleRangeSlider/ScaleRanges";
import ScaleRangeSliderViewModel from "esri/widgets/ScaleRangeSlider/ScaleRangeSliderViewModel";

// esri.widgets.ScaleRangeSlider.t9n
import ScaleRangeSliderMessages from "esri/widgets/ScaleRangeSlider/t9n/ScaleRangeSlider";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import Popover from "esri/widgets/support/Popover";
import { accessibleHandler, isRTL, messageBundle, storeNode, tsx } from "esri/widgets/support/widget";

interface ScaleMenuProps {
  type: ScaleType;
  map: number;
  min: number;
  max: number;
}

interface VisibleElements {
  preview: boolean;
}

interface ScaleMenuItemProps {
  scaleValue: number;
  scaleLabel: string;
  valueVisible: boolean;
  handleNamedScaleSelect: (event: Event) => void;
  handleCustomScaleSelect?: (scale: number) => void;
}

const CSS = {
  base: "esri-scale-range-slider",

  scaleIndicator: "esri-scale-range-slider__scale-indicator",
  scaleIndicatorIcon: "esri-scale-range-slider__scale-indicator-icon",
  scaleIndicatorContainer: "esri-scale-range-slider__scale-indicator-container",

  scaleMenuContainer: "esri-scale-range-slider__scale-menu-container",
  scaleMenuToggle: "esri-scale-range-slider__scale-menu-toggle",
  scaleMenuToggleIcon: "esri-scale-range-slider__scale-menu-toggle-icon",
  scaleMenuToggleActive: "esri-scale-range-slider__scale-menu-toggle--active",
  scaleMenu: "esri-scale-range-slider__scale-menu",
  scaleMenuList: "esri-scale-range-slider__scale-menu-list",
  scaleMenuListItem: "esri-scale-range-slider__scale-menu-item",
  scaleMenuListItemActive: "esri-scale-range-slider__scale-menu-item--active",
  scaleMenuScroller: "esri-scale-range-slider__scale-menu-scroller",
  scaleItemLabel: "esri-scale-range-slider__scale-item-label",
  scaleItemValue: "esri-scale-range-slider__scale-item-value",
  scaleItemValueEditable: "esri-scale-range-slider__scale-item-value--editable",

  scalePreview: "esri-scale-range-slider__scale-preview",
  scalePreviewThumbnail: "esri-scale-range-slider__scale-preview-thumbnail",

  slider: "esri-slider",

  // icons
  expandIcon: "esri-icon-down",

  // common
  heading: "esri-widget__heading",
  hidden: "esri-hidden",
  input: "esri-input",
  button: "esri-button",
  disabled: "esri-disabled",
  widget: "esri-widget"
};

const DEFAULT_VISIBLE_ELEMENTS = { preview: true };

const scaleFormattingOptions = {
  maximumFractionDigits: 0
};

const formatScale = (scale: number): string => `1:${formatNumber(scale, scaleFormattingOptions)}`;

const parseScale = (scaleText: string): number => {
  const nonDigitPeriodAndWhiteSpacePattern = /[^\d.\s]/g;
  const scaleValue = scaleText
    .replace(/.*\(/, "")
    .replace(/\).*$/, "")
    .replace(/.*:/, "")
    .replace(nonDigitPeriodAndWhiteSpacePattern, "");

  return parseFloat(scaleValue);
};

type ScaleRangeSliderParams = Partial<
  Pick<
    ScaleRangeSlider,
    "layer" | "region" | "minScale" | "minScaleLimit" | "maxScale" | "maxScaleLimit" | "view"
  >
>;

@subclass("esri.widgets.ScaleRangeSlider")
class ScaleRangeSlider extends HandleOwnerMixin(Widget) {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @constructor
   * @alias module:esri/widgets/ScaleRangeSlider
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                              that may be passed into the constructor.
   */
  constructor(properties?: ScaleRangeSliderParams, parentNode?: string | Element) {
    super(properties, parentNode);
  }

  initialize(): void {
    this.own([
      init(
        this,
        "viewModel",
        (viewModel) => (this._slider.viewModel = viewModel ? viewModel.sliderViewModel : null)
      ),

      init(this, "_interactive", (value: boolean) => {
        this._slider.disabled = !value;

        if (!value) {
          this._setActiveMenu(null);
        }
      }),

      this._slider.on("thumb-drag", ({ index }) => {
        const {
          visibleElements: { preview }
        } = this;

        this._activeThumb = index;
        this._previewPopover.open = preview;

        clearTimeout(this._previewAutoCloseTimeoutId);
        const previewAutoCloseDelayInMs = 250;
        this._previewAutoCloseTimeoutId = setTimeout(() => {
          this._previewAutoCloseTimeoutId = null;
          this._activeThumb = null;
          this._previewPopover.open = false;
          this.scheduleRender();
        }, previewAutoCloseDelayInMs);
      }),

      whenTrue(this, "view.stationary", () => this.scheduleRender())
    ]);
  }

  destroy(): void {
    this._previewPopover.destroy();
    this._previewPopover = null;

    this._maxScaleMenuPopover.destroy();
    this._maxScaleMenuPopover = null;

    this._minScaleMenuPopover.destroy();
    this._minScaleMenuPopover = null;

    this._slider.destroy();
    this._slider = null;
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _activeMenu: ScaleType | null = null;

  private _activeMenuNode: HTMLUListElement = null;

  private _activeMenuToggleNode: HTMLElement = null;

  private _activeThumb: number | null = null;

  private _customMaxScale: number = -1;

  private _customMinScale: number = -1;

  private _focusedMenuItemIndex: number = -1;

  private _previewAutoCloseTimeoutId: number = null;

  private _previewPopover: Popover = new Popover({
    owner: this,
    placement: "top",
    anchorElement: () => (this._activeThumb === 0 ? this._minThumbNode : this._maxThumbNode),
    offset: [0, 16],
    renderContentFunction: this.renderScalePreview
  });

  private _maxScaleMenuPopover: Popover = new Popover({
    owner: this,
    placement: "bottom-end",
    anchorElement: () => this._activeMenuToggleNode,
    renderContentFunction: this.renderMaxScaleMenu
  });

  private _minScaleMenuPopover: Popover = new Popover({
    owner: this,
    placement: "bottom-start",
    anchorElement: () => this._activeMenuToggleNode,
    renderContentFunction: this.renderMinScaleMenu
  });

  private _maxThumbNode: HTMLElement;

  private _minThumbNode: HTMLElement;

  private _scaleMenuNode: HTMLDivElement = null;

  @property()
  private _slider = new Slider({
    thumbCreatedFunction: (index: number, _value: number, node: HTMLElement) => {
      if (index === 0) {
        this._minThumbNode = node;
      }

      if (index === 1) {
        this._maxThumbNode = node;
      }

      this.own([
        on(node, "mouseenter", () => {
          const {
            visibleElements: { preview }
          } = this;

          this._activeThumb = index;
          this._previewPopover.open = preview;
          this.scheduleRender();
        }),

        on(node, "mouseleave", () => {
          if (this._previewAutoCloseTimeoutId) {
            // thumb is being dragged; defer to auto close timeout
            return;
          }

          this._activeThumb = null;
          this._previewPopover.open = false;
          this.scheduleRender();
        })
      ]);
    }
  });

  //--------------------------------------------------------------------------
  //
  // SupportedRegion typedef
  //
  //--------------------------------------------------------------------------

  /**
   *  The region that the scale thumbnails will focus on.
   * Each region comes from the [ISO 3166-1 alpha-2 code](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes).
   *
   * | Code | Region |
   * |------|--------|
   * | `AE` | United Arab Emirates |
   * | `AR` | Argentina |
   * | `AT` | Austria|
   * | `AU` | Australia|
   * | `BE` | Belgium|
   * | `BG` | Bulgaria|
   * | `BO` | Bolivia|
   * | `BR` | Brazil|
   * | `CA` | Canada|
   * | `CH` | Switzerland |
   * | `CI` | Cote D'Ivoire |
   * | `CL` | Chile|
   * | `CN` | China|
   * | `CO` | Colombia|
   * | `CR` | Costa Rica|
   * | `CZ` | Czech Republic|
   * | `DE` | Germany|
   * | `DK` | Denmark|
   * | `EE` | Estonia|
   * | `EG` | Egypt|
   * | `ES` | Spain|
   * | `FI` | Finland |
   * | `FR` | France|
   * | `GB` | Great Britain|
   * | `GL` | Greenland|
   * | `GR` | Greece|
   * | `GT` | Guatemala|
   * | `HK` | Hong Kong|
   * | `ID` | Indonesia|
   * | `IE` | Ireland|
   * | `IL` | Israel|
   * | `IN` | India|
   * | `IQ` | Iraq|
   * | `IS` | Iceland|
   * | `IT` | Italy|
   * | `JP` | Japan|
   * | `KE` | Kenya|
   * | `KR` | South Korea|
   * | `KW` | Kuwait|
   * | `LI` | Liechtenstein|
   * | `LT` | Lithuania|
   * | `LU` | Luxembourg|
   * | `LV` | Latvia|
   * | `MA` | Morocco|
   * | `MG` | Madagascar|
   * | `ML` | Mali|
   * | `MO` | Macao|
   * | `MX` | Mexico|
   * | `MY` | Malaysia|
   * | `NI` | Nicaragua|
   * | `NL` | Netherlands|
   * | `NO` | Norway|
   * | `NZ` | New Zealand|
   * | `PE` | Peru|
   * | `PL` | Poland|
   * | `PR` | Puerto Rico|
   * | `PT` | Portugal|
   * | `RO` | Romania|
   * | `RU` | Russia|
   * | `RW` | Rwanda|
   * | `SE` | Sweden|
   * | `SG` | Singapore|
   * | `SK` | Slovakia|
   * | `SR` | Suriname|
   * | `SV` | El Salvador|
   * | `TH` | Thailand|
   * | `TN` | Tunisia|
   * | `TW` | Taiwan|
   * | `US` | United States|
   * | `VE` | Venezuela|
   * | `VI` | U.S. Virgin Islands|
   * | `ZA` | South Africa|
   *
   * @typedef module:esri/widgets/ScaleRangeSlider~SupportedRegion
   * @type {"AE"|"AR"|"AT"|"AU"|"BE"|"BG"|"BO"|"BR"|"CA"|"CH"|"CI"|"CL"|"CN"|"CO"|"CR"|"CZ"|"DE"|"DK"|"EE"|"EG"|"ES"|"FI"|"FR"|"GB"|"GL"|"GR"|"GT"|"HK"|"ID"|"IE"|"IL"|"IN"|"IQ"|"IS"|"IT"|"JP"|"KE"|"KR"|"KW"|"LI"|"LT"|"LU"|"LV"|"MA"|"MG"|"ML"|"MO"|"MX"|"MY"|"NI"|"NL"|"NO"|"NZ"|"PE"|"PL"|"PR"|"PT"|"RO"|"RU"|"RW"|"SE"|"SG"|"SK"|"SR"|"SV"|"TH"|"TN"|"TW"|"US"|"VE"|"VI"|"ZA"}
   */

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  _effectiveMaxScale
  //----------------------------------

  /**
   * Convenience property to get effective max scale.
   * @ignore
   */
  @property()
  private get _effectiveMaxScale(): number {
    return this.maxScale === 0 ? this.maxScaleLimit : this.maxScale;
  }

  //----------------------------------
  //  _effectiveMinScale
  //----------------------------------

  /**
   * Convenience property to get effective min scale.
   * @ignore
   */
  @property()
  private get _effectiveMinScale(): number {
    return this.minScale === 0 ? this.minScaleLimit : this.minScale;
  }

  //----------------------------------
  //  _interactive
  //----------------------------------

  /**
   * Convenience property to determine if the widget is interactive.
   * @private
   */
  @property({
    readOnly: true
  })
  private get _interactive(): boolean {
    return this.get("viewModel.state") !== "disabled" && !this.disabled;
  }

  //----------------------------------
  //  disabled
  //----------------------------------

  /**
   * When `true`, sets the widget to a disabled state so the user cannot interact with it.
   *
   * @name disabled
   * @instance
   * @type {Boolean}
   * @default false
   */

  @property()
  disabled = false;

  //----------------------------------
  //  label
  //----------------------------------

  /**
   * The widget's default label.
   *
   * @name label
   * @instance
   * @type {String}
   */
  @property({
    aliasOf: { source: "messages.widgetLabel", overridable: true }
  })
  label: string = undefined;

  //----------------------------------
  //  layer
  //----------------------------------

  /**
   * When provided, the initial [minScale](#minScale) and [maxScale](#maxScale) values will match the layer's.
   *
   * @name layer
   * @instance
   * @type {module:esri/layers/Layer}
   */

  @property({
    aliasOf: "viewModel.layer"
  })
  layer: LayerUnion = null;

  //----------------------------------
  //  maxScale
  //----------------------------------

  /**
   * The maximum scale of the active scale range. When the maxScale
   * reaches the [maxScaleLimit](#maxScaleLimit), the maxScale
   * value becomes 0 and there is no maximum scale set.
   *
   * @name maxScale
   * @instance
   * @type {number}
   */

  @property({
    aliasOf: "viewModel.maxScale"
  })
  maxScale: number = null;

  //----------------------------------
  //  maxScaleLimit
  //----------------------------------

  /**
   * The lowest possible maximum scale value on the slider.
   *
   * @name maxScaleLimit
   * @instance
   * @type {number}
   */

  @property({
    aliasOf: "viewModel.maxScaleLimit"
  })
  maxScaleLimit: number = null;

  //----------------------------------
  //  messages
  //----------------------------------

  /**
   * The widget's message bundle
   *
   * @instance
   * @name messages
   * @type {Object}
   *
   * @ignore
   * @todo revisit doc
   */
  @property()
  @messageBundle("esri/widgets/ScaleRangeSlider/t9n/ScaleRangeSlider")
  messages: ScaleRangeSliderMessages = null;

  //----------------------------------
  //  minScale
  //----------------------------------

  /**
   * The minimum scale of the active scale range. When the minScale
   * reaches the [minScaleLimit](#minScaleLimit), the minScale
   * value becomes 0 and there is no minimum scale.
   *
   * @name minScale
   * @instance
   * @type {number}
   */

  @property({ aliasOf: "viewModel.minScale" })
  minScale: number = null;

  //----------------------------------
  //  minScaleLimit
  //----------------------------------

  /**
   * The highest possible minimum scale value on the slider.
   *
   * @name minScaleLimit
   * @instance
   * @type {number}
   */

  @property({
    aliasOf: "viewModel.minScaleLimit"
  })
  minScaleLimit: number = null;

  //----------------------------------
  //  region
  //----------------------------------

  /**
   * The region that the scale thumbnails will focus on.
   * Each region comes from the [ISO 3166-1 alpha-2 code](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes).
   * See [SupportedRegion](#SupportedRegion) for the list of regions that are currently supported.
   *
   * @name region
   * @instance
   * @type {module:esri/widgets/ScaleRangeSlider~SupportedRegion}
   * @default "US"
   */

  @property()
  region: SupportedRegion = "US";

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * A reference to the {@link module:esri/views/MapView} or {@link module:esri/views/SceneView}.
   * Set this to link the widget to a specific view.
   *
   * @name view
   * @instance
   * @type {module:esri/views/MapView | module:esri/views/SceneView}
   */
  @property({
    aliasOf: "viewModel.view"
  })
  view: IMapView | ISceneView = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/ScaleRangeSlider/ScaleRangeSliderViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/ScaleRangeSlider/ScaleRangeSliderViewModel}
   * @autocast
   */
  @property()
  viewModel: ScaleRangeSliderViewModel = new ScaleRangeSliderViewModel();

  //----------------------------------
  //  visibleElements
  //----------------------------------

  /**
   * The visible elements that are displayed within the widget.
   * This provides the ability to turn individual elements of the widget's display on/off.
   *
   * @typedef module:esri/widgets/ScaleRangeSlider~VisibleElements
   *
   * @property {boolean} preview - Indicates whether the preview thumbnail of the region is visible.
   * Default value is `true`.
   */

  /**
   * The visible elements that are displayed within the widget.
   * This property provides the ability to turn individual elements of the widget's display on/off.
   *
   * @name visibleElements
   * @instance
   * @type {module:esri/widgets/ScaleRangeSlider~VisibleElements}
   * @autocast
   *
   * @example
   * scaleRangeSlider.visibleElements = {
   *   preview: false  // thumbnail preview of map will not be displayed
   * }
   */

  @property()
  visibleElements: VisibleElements = DEFAULT_VISIBLE_ELEMENTS;

  @cast("visibleElements")
  protected castVisibleElements(value: VisibleElements): VisibleElements {
    return { ...DEFAULT_VISIBLE_ELEMENTS, ...value };
  }

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    const {
      _interactive,
      _slider,
      label,
      messages,
      view,
      viewModel: { scaleRanges, state }
    } = this;

    const minLabel =
      messages.scaleRangeLabels[scaleRanges.findScaleRangeByIndex(_slider.values[0]).id];
    const maxLabel =
      messages.scaleRangeLabels[scaleRanges.findScaleRangeByIndex(_slider.values[1]).id];

    _slider.layout = isRTL() ? "horizontal-reversed" : "horizontal";

    return (
      <div
        aria-label={label}
        class={this.classes(CSS.base, CSS.widget, _interactive ? null : CSS.disabled)}
      >
        {state === "ready" && view ? this.renderCurrentScaleIndicator() : null}
        {_slider.render()}
        <div class={CSS.scaleMenuContainer} key="scale-menu-toggles">
          {this.renderScaleMenuToggle("min", minLabel)}
          {this.renderScaleMenuToggle("max", maxLabel)}
        </div>
      </div>
    );
  }

  protected renderMinScaleMenu(): VNode {
    const {
      _effectiveMaxScale,
      minScaleLimit,
      view,
      viewModel: { scaleRanges }
    } = this;

    const viewScale = view ? view.scale : undefined;

    return this.renderScaleMenu({
      type: "min",
      min: minScaleLimit,
      max: scaleRanges.findScaleRange(_effectiveMaxScale).minScale,
      map: viewScale
    });
  }

  protected renderMaxScaleMenu(): VNode {
    const {
      _effectiveMinScale,
      maxScaleLimit,
      view,
      viewModel: { scaleRanges }
    } = this;

    const viewScale = view ? view.scale : undefined;

    return this.renderScaleMenu({
      type: "max",
      min: scaleRanges.findScaleRange(_effectiveMinScale).maxScale,
      max: maxScaleLimit,
      map: viewScale
    });
  }

  private _handleScaleMenuToggleClick = (event: Event): void => {
    const currentTarget = event.currentTarget as HTMLButtonElement;
    const type = currentTarget.getAttribute("data-type") as ScaleType;
    const handleKey = "menu-closing-click-handle";

    this.handles.remove(handleKey);

    if (type === this._activeMenu) {
      this._setActiveMenu(null);
      this._activeMenuToggleNode = null;
      return;
    }

    this._setActiveMenu(type);
    this._activeMenuToggleNode = currentTarget;

    this.handles.add(
      on(document, "mousedown", (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        const toggleContainer = closest(target, `.${CSS.scaleMenuToggle}`);
        const scaleType =
          toggleContainer && (toggleContainer.getAttribute("data-type") as ScaleType);
        const closingToggleIntended = toggleContainer && scaleType === this._activeMenu;

        if (closingToggleIntended) {
          // let toggle logic close menu
          return;
        }

        const isMenuToggle = scaleType;
        const externalClick =
          !isMenuToggle && this._scaleMenuNode && !this._scaleMenuNode.contains(target);

        if (externalClick) {
          this._setActiveMenu(null);
          this.handles.remove(handleKey);
          this.scheduleRender();
        }
      }),
      handleKey
    );
  };

  protected renderScalePreview(): VNode {
    const {
      _activeThumb,
      _slider,
      region,
      viewModel: { scaleRanges }
    } = this;
    const i = _activeThumb === 0 ? _slider.values[0] : _slider.values[1];
    const index = Object.keys(ScaleRanges.RecommendedScales).indexOf(
      scaleRanges.findScaleRangeByIndex(i).id
    );
    const thumbnailStyles = {
      backgroundImage: getScalePreviewSource(region),
      backgroundPosition: getScalePreviewSpriteBackgroundPosition(index)
    };

    return (
      <div class={CSS.scalePreview}>
        <div class={CSS.scalePreviewThumbnail} styles={thumbnailStyles} />
      </div>
    );
  }

  protected renderScaleMenu({ map, min, max, type }: ScaleMenuProps): VNode {
    const scaleRanges = ScaleRanges.fromScaleRange({ minScale: min, maxScale: max });
    const scaleLabels = this.messages.featuredScaleLabels;
    const recommendedScaleLabelToValue = ScaleRanges.RecommendedScales;

    const recommended = Object.keys(recommendedScaleLabelToValue)
      .filter((scaleLabel) => scaleRanges.contains(recommendedScaleLabelToValue[scaleLabel]))
      .map((scaleLabel) =>
        this.renderScaleMenuItem({
          scaleLabel: scaleLabels[scaleLabel],
          scaleValue: recommendedScaleLabelToValue[scaleLabel],
          valueVisible: scaleLabel !== "world",
          handleNamedScaleSelect: this._handleRecommendedScaleClick
        })
      );

    const { _customMaxScale, _customMinScale, messages } = this;
    const customScale = type === "max" ? _customMaxScale : _customMinScale;

    return (
      <div
        bind={this}
        class={CSS.scaleMenu}
        data-type={type}
        id={`${this.id}__scale-menu--${type}`}
        key={`${type}-scale-menu`}
        afterCreate={storeNode}
        data-node-ref="_scaleMenuNode"
        onkeydown={this._handleScaleMenuKeyDown}
      >
        <div class={CSS.scaleMenuScroller}>
          <ul class={CSS.scaleMenuList} afterCreate={this._afterMenuListCreate}>
            {this.renderScaleMenuItem({
              scaleValue: customScale,
              scaleLabel: messages.featuredScaleLabels.custom,
              valueVisible: false,
              handleNamedScaleSelect: this._handleScaleSelection,
              handleCustomScaleSelect: this._handleCustomScaleEntry
            })}
            {map != null
              ? this.renderScaleMenuItem({
                  scaleValue: map,
                  scaleLabel: messages.featuredScaleLabels.current,
                  valueVisible: true,
                  handleNamedScaleSelect: this._handleRecommendedScaleClick
                })
              : null}
            {recommended}
          </ul>
        </div>
      </div>
    );
  }

  private _afterMenuListCreate = (node: HTMLUListElement) => {
    this._activeMenuNode = node;
    (node.children[0] as HTMLElement).focus({ preventScroll: true });
  };

  private _handleCustomScaleEntry = (scale: number): void => {
    this._setScaleFromMenuSelection(scale);
    this._customMaxScale = -1;
    this._customMinScale = -1;
  };

  @accessibleHandler()
  private _handleScaleSelection(): void {
    if (this._activeMenu === "max") {
      this._customMaxScale = this._effectiveMaxScale;
    } else {
      this._customMinScale = this._effectiveMinScale;
    }
  }

  protected renderScaleMenuToggle(type: ScaleType, label: string): VNode {
    const { _activeMenu, _interactive } = this;
    const isActive = _activeMenu === type;

    return (
      <button
        aria-controls={isActive ? `${this.id}__scale-menu--${type}` : ""}
        aria-pressed={isActive ? "true" : "false"}
        class={this.classes(CSS.scaleMenuToggle, isActive ? CSS.scaleMenuToggleActive : null)}
        data-type={type}
        key={`${type}-scale-menu-toggle`}
        onclick={this._handleScaleMenuToggleClick}
        disabled={!_interactive}
        type="button"
      >
        {label}
        <span class={this.classes(CSS.scaleMenuToggleIcon, CSS.expandIcon)} aria-hidden="true" />
      </button>
    );
  }

  protected renderScaleMenuItem(props: ScaleMenuItemProps): VNode {
    const {
      scaleValue,
      scaleLabel,
      valueVisible,
      handleNamedScaleSelect,
      handleCustomScaleSelect = null
    } = props;

    const { id } = this;
    const inputId = `${id}__custom-scale-input`;

    return (
      <li
        bind={this}
        class={CSS.scaleMenuListItem}
        data-scale={scaleValue}
        key={scaleLabel}
        onclick={handleNamedScaleSelect}
        onkeydown={handleNamedScaleSelect}
        tabIndex={-1}
      >
        <label class={CSS.scaleItemLabel} for={inputId}>
          {scaleLabel}
        </label>
        {scaleValue > -1 ? (
          handleCustomScaleSelect ? (
            <input
              afterCreate={this.focusAndSelectInputOnCreate}
              class={this.classes(CSS.scaleItemValue, CSS.scaleItemValueEditable)}
              data-render-props={props}
              id={inputId}
              key="value"
              value={formatScale(scaleValue)}
              onkeydown={this.handleCustomScaleInputKeyDown}
              onblur={this._handleCustomScaleInputBlur}
            />
          ) : valueVisible ? (
            <div class={CSS.scaleItemValue} key="value">
              {formatScale(scaleValue)}
            </div>
          ) : null
        ) : null}
      </li>
    );
  }

  private focusAndSelectInputOnCreate(node: HTMLInputElement): void {
    node.focus();
    node.select();
  }

  private _handleCustomScaleInputBlur = (): void => {
    if (this._activeMenu === "max") {
      this._customMaxScale = -1;
    } else {
      this._customMinScale = -1;
    }
  };

  private handleCustomScaleInputKeyDown = (event: KeyboardEvent): void => {
    const target = event.currentTarget as HTMLInputElement;
    const { handleCustomScaleSelect } = target["data-render-props"] as ScaleMenuItemProps;
    const { key, ctrlKey, metaKey } = event;
    const {
      viewModel: { scaleRanges }
    } = this;

    if (key === "Enter") {
      const scale = parseScale(target.value);
      handleCustomScaleSelect(isNaN(scale) ? -1 : scaleRanges.clampScale(scale));
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (key.length > 1 || ctrlKey || metaKey) {
      return;
    }

    const scaleChars = /[:,.\d]/;

    if (!scaleChars.test(key)) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  protected renderCurrentScaleIndicator(): VNode {
    const {
      _slider,
      messages,
      view,
      viewModel: { scaleRanges }
    } = this;

    const mapScale = scaleRanges.clampScale(view.scale);
    const sliderTick = this.viewModel.mapScaleToSlider(mapScale);
    const leftOffsetRatio = sliderTick / _slider.max;
    const scaleLabel = messages.scaleRangeLabels[scaleRanges.findScaleRangeByIndex(sliderTick).id];
    const currentScaleLabel = substitute(messages.currentScaleTooltip, { scaleLabel });

    return (
      <div class={CSS.scaleIndicatorContainer} key="scale-indicator">
        <div
          aria-label={currentScaleLabel}
          class={CSS.scaleIndicator}
          styles={{
            left: `${(isRTL() ? -1 : 1) * leftOffsetRatio * 100}%`
          }}
          title={currentScaleLabel}
        >
          {this.renderCurrentScaleIndicatorIcon()}
        </div>
      </div>
    );
  }

  protected renderCurrentScaleIndicatorIcon(): VNode {
    return (
      <svg
        class={CSS.scaleIndicatorIcon}
        height="8"
        width="8"
        viewBox="0 0 8 8"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="4 0 8 8 0 8" />
      </svg>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _handleScaleMenuKeyDown = (event: KeyboardEvent): void => {
    const key = eventKey(event);

    if (key === "Escape" || key === "Tab") {
      this._setActiveMenu(null);
      this._activeMenuToggleNode.focus();
      return;
    }

    if (key !== "ArrowUp" && key !== "ArrowDown") {
      return;
    }

    const menuItems = this._activeMenuNode.children;
    const currentFocusIndex = this._focusedMenuItemIndex;
    const futureFocusIndex =
      key === "ArrowUp"
        ? (currentFocusIndex === 0 ? menuItems.length : currentFocusIndex) - 1
        : (currentFocusIndex + 1) % menuItems.length;

    event.preventDefault();
    event.stopPropagation();
    (menuItems[futureFocusIndex] as HTMLElement).focus();
    this._focusedMenuItemIndex = futureFocusIndex;
  };

  @accessibleHandler()
  private _handleRecommendedScaleClick(event: MouseEvent): void {
    const target = event.currentTarget as HTMLLIElement;
    const scale = Number(target["data-scale"]);
    this._setScaleFromMenuSelection(scale);
  }

  private _setScaleFromMenuSelection(scale: number): void {
    const isMax = this._activeMenu === "max";

    if (isMax) {
      this.maxScale = Math.min(scale, this._effectiveMinScale - 1);
    } else {
      this.minScale = Math.max(scale, this._effectiveMaxScale + 1);
    }

    this._setActiveMenu(null);
    this._activeMenuToggleNode.focus();
  }

  private _setActiveMenu(type: ScaleType | null): void {
    this._activeMenu = type;
    this._maxScaleMenuPopover.open = type === "max";
    this._minScaleMenuPopover.open = type === "min";
    this._focusedMenuItemIndex = type ? 0 : -1;
  }
}

export default ScaleRangeSlider;
