/**
 * The FloorFilter widget simplifies visualization of GIS data for a specific floor of a
 * building in your application. It allows you to filter down the floor plan data displayed in your
 * {@link module:esri/views/MapView} or {@link module:esri/views/SceneView} to a [site](#site), a [facility](#facility) in the site, or a [level](#level) in the facility.
 *
 * To visualize your data based on [site](#site), [facility](#facility), or [level](#level), your map must contain the related
 * floor plan layers, with features linked together in a floor plan hierarchy.
 * Once you define your map as floor-aware in the map properties, the interactive, on-screen
 * FloorFilter widget appears and can be used to explore the floor-aware data based on the
 * configured site, facility, and levels layers.
 *
 * The widget can also be used alongside other filtering functionalities, such as definition queries,
 * selection, range, and time, to further control visualization.
 * For example, you may want to visualize all of the features on a specific level in a facility,
 * or all the office units within a range of levels in a facility.
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 * * Floor-aware maps are only supported in ArcGIS Online. Support for publishing floor-aware maps to ArcGIS Enterprise is coming soon.
 * * The FloorFilter widget currently supports {@link module:esri/layers/FeatureLayer FeatureLayers} and {@link module:esri/layers/SceneLayer SceneLayers}.
 *  A future release will support floor filtering of {@link module:esri/layers/MapImageLayer MapImageLayers} (map services).
 * :::
 *
 * @module esri/widgets/FloorFilter
 * @since 4.19
 *
 * @see [FloorFilter.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/FloorFilter.tsx)
 * @see [FloorFilter.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_FloorFilter.scss)
 * @see module:esri/widgets/FloorFilter/FloorFilterViewModel
 * @see [Sample - FloorFilter widget](../sample-code/widgets-floorfilter/index.html)
 *
 * @example
 * // Initialize FloorFilter
 * const floorFilter = new FloorFilter({
 *   view: view
 * });
 */

// esri
import { IMap } from "esri/IMap";
import { substitute } from "esri/intl";
import WebMap from "esri/WebMap";
import WebScene from "esri/WebScene";

// esri.core
import { eventKey } from "esri/core/events";
import { Maybe } from "esri/core/maybe";
import * as watchUtils from "esri/core/watchUtils";

// esri.core.accessorSupport
import { subclass, property, aliasOf } from "esri/core/accessorSupport/decorators";

// esri.libs.resize-observer
import ResizeObserver from "esri/libs/resize-observer/ResizeObserver";

// esri.t9n
import CommonMessages from "esri/t9n/common";

// esri.views
import { IMapView } from "esri/views/IMapView";
import { ISceneView } from "esri/views/ISceneView";

// esri.views.ui
import { UIPosition } from "esri/views/ui/interfaces";

// esri.widgets
import Widget from "esri/widgets/Widget";

// esri.widgets.FloorFilter
import FloorFilterViewModel from "esri/widgets/FloorFilter/FloorFilterViewModel";
import { FilterMenuType, Site, Facility, Level, Layout, Position } from "esri/widgets/FloorFilter/interfaces";

// esri.widgets.FloorFilter.t9n
import FloorFilterMessages from "esri/widgets/FloorFilter/t9n/FloorFilter";

// esri.widgets.support
import { GoToOverride } from "esri/widgets/support/GoTo";
import { Heading, HeadingLevel } from "esri/widgets/support/Heading";
import { VNode } from "esri/widgets/support/interfaces";
import { tsx, messageBundle } from "esri/widgets/support/widget";
import { isRTL, storeNode } from "esri/widgets/support/widgetUtils";

const CSS = {
  esriWidget: "esri-widget",
  esriWidgetButton: "esri-widget--button",
  esriWidgetButtonActive: "esri-widget--button-active",
  esriButtonDisabled: "esri-button--disabled",
  esriDisabled: "esri-disabled",
  esriIcon: "esri-icon",
  esriInteractive: "esri-interactive",
  esriWidgetContentEmpty: "esri-widget__content--empty",

  floorFilter: "esri-floor-filter",
  floorFilterLayout: "esri-floor-filter__layout--", // "expanded" | "collapsed"
  floorFilterPosition: "esri-floor-filter__position--", // "top" | "bottom"

  buttonContainer: "esri-floor-filter__button-container",
  buttonContainerLevels: "esri-floor-filter__button-container--levels",
  buttonInfo: "esri-floor-filter__button-info",
  buttonLabel: "esri-floor-filter__button-label",
  browseButton: "esri-floor-filter__browse-button",
  closeLevelsButton: "esri-floor-filter__close-levels-button",
  zoomButton: "esri-floor-filter__zoom-button",
  zoomButtonLevels: "esri-floor-filter__zoom-button--levels",
  minimizeToggleButton: "esri-floor-filter__minimize-toggle-button",
  levelsContainer: "esri-floor-filter__levels-container",
  levelButton: "esri-floor-filter__level-button",
  levelButtonActive: "esri-floor-filter__level-button--active",

  separator: "esri-floor-filter__separator",

  filterMenu: "esri-floor-filter__filter-menu",
  filterMenuHeader: "esri-floor-filter__filter-menu-header",
  filterMenuHeaderTextGroup: "esri-floor-filter__filter-menu-header-text-group",
  filterMenuHeaderText: "esri-floor-filter__filter-menu-header-text",
  filterMenuHeaderSubtext: "esri-floor-filter__filter-menu-header-subtext",
  filterMenuHeaderBack: "esri-floor-filter__filter-menu-header-back",
  filterMenuSearch: "esri-floor-filter__filter-menu-search",
  filterMenuSearchInput: "esri-floor-filter__filter-menu-search-input",
  filterMenuItems: "esri-floor-filter__filter-menu-items",
  filterMenuItemName: "esri-floor-filter__filter-menu-item-name",
  filterMenuSelectedItem: "esri-floor-filter__filter-menu-item-name--selected",
  filterMenuSite: "esri-floor-filter__filter-menu-site",
  filterMenuFacility: "esri-floor-filter__filter-menu-facility",

  selectedItemCircle: "esri-floor-filter__selected-item-circle",

  urbanIcon: "esri-icon-urban-model",
  zoomToIcon: "esri-icon-zoom-to-object",
  collapseIconRight: "esri-icon-collapse",
  collapseIconLeft: "esri-icon-expand",
  expandIconRight: "esri-icon-expand",
  expandIconLeft: "esri-icon-collapse",
  closeIcon: "esri-icon-close",
  searchIcon: "esri-icon-search",
  rightIcon: "esri-icon-right",
  leftIcon: "esri-icon-left"
};

type FloorFilterProperties = Partial<
  Pick<
    FloorFilter,
    | "enabled"
    | "longNames"
    | "minimized"
    | "pinnedLevels"
    | "site"
    | "facility"
    | "level"
    | "headingLevel"
    | "view"
    | "viewModel"
  >
>;

type ActiveMenu = "sites" | "facilities";
type ActiveMenuType = "levels" | "menuItems";
type NavigationKey = "ArrowUp" | "ArrowDown" | "End" | "Home";
const navigationKeys: NavigationKey[] = ["ArrowUp", "ArrowDown", "End", "Home"];

@subclass("esri.widgets.FloorFilter")
class FloorFilter extends Widget {
  /**
   * @constructor
   * @alias module:esri/widgets/FloorFilter
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   */
  constructor(properties?: FloorFilterProperties, parentNode?: string | Element) {
    super(properties, parentNode);
    this._resizeObserver = new ResizeObserver(() => this.scheduleRender());

    this.own(watchUtils.watch(this, "_searchInput", () => this._focusSearch()));
  }

  destroy(): void {
    this._resizeObserver.disconnect();
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _activeMenu: ActiveMenu = null;
  private _activeMenuIndex: { [id: string]: number } = {
    levels: -1,
    menuItems: -1
  };
  private _baseNode: HTMLElement = null;
  private _facilitiesListNode: HTMLUListElement = null;
  private _levelsListNode: HTMLUListElement = null;
  private _sitesListNode: HTMLUListElement = null;
  private _resizeObserver: ResizeObserver;
  @property()
  private _searchInput: HTMLInputElement = null;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  enabled
  //----------------------------------

  @aliasOf("viewModel.enabled")
  enabled: Boolean = null;

  //----------------------------------
  //  longNames
  //----------------------------------

  /**
   * Determines if the widget is expanded or collapsed.
   * If the value is `true`, the widget is expanded and the long names appear.
   * Otherwise, short names are used and icons appear alone on buttons.
   *
   * @name longNames
   * @instance
   * @type {Boolean}
   */
  @aliasOf("viewModel.longNames")
  longNames: Boolean = null;

  //----------------------------------
  //  minimized
  //----------------------------------

  @aliasOf("viewModel.minimized")
  minimized: Boolean = null;

  //----------------------------------
  //  pinnedLevels
  //----------------------------------

  @aliasOf("viewModel.pinnedLevels")
  pinnedLevels: Boolean = null;

  //----------------------------------
  //  site
  //----------------------------------

  /**
   * The currently selected site.
   *
   * @name site
   * @instance
   * @type {string}
   */
  @aliasOf("viewModel.site")
  site: string = null;

  //----------------------------------
  //  facility
  //----------------------------------

  /**
   * The currently selected facility.
   *
   * @name facility
   * @instance
   * @type {string}
   */
  @aliasOf("viewModel.facility")
  facility: string = null;

  //----------------------------------
  //  level
  //----------------------------------

  /**
   * The currently selected floor level.
   *
   * @name level
   * @instance
   * @type {string}
   */
  @aliasOf("viewModel.level")
  level: string = null;

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * A reference to the {@link module:esri/views/MapView} or {@link module:esri/views/SceneView}.
   * If this property is set, the FloorFilter widget will update the view's {@link module:esri/views/MapView#floors floors}
   * property whenever the floor filter is manipulated or updated programmatically. This property will affect
   * any floor-aware layer in the view.
   *
   * @name view
   * @instance
   * @type { module:esri/views/MapView | module:esri/views/SceneView }
   */
  @aliasOf("viewModel.view")
  view: IMapView | ISceneView = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/FloorFilter/FloorFilterViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/FloorFilter/FloorFilterViewModel}
   * @autocast
   */
  @property({ type: FloorFilterViewModel })
  viewModel: FloorFilterViewModel = new FloorFilterViewModel();

  //----------------------------------
  //  messages
  //----------------------------------

  /**
   * The widget's message bundle
   *
   * @name messages
   * @instance
   * @type {Object}
   *
   * @ignore
   * @todo revisit doc
   */
  @property()
  @messageBundle("esri/widgets/FloorFilter/t9n/FloorFilter")
  messages: FloorFilterMessages = null;

  //----------------------------------
  //  messagesCommon
  //----------------------------------

  /**
   * @name messagesCommon
   * @instance
   * @type {Object}
   *
   * @ignore
   * @todo revisit doc
   */
  @property()
  @messageBundle("esri/t9n/common")
  messagesCommon: CommonMessages = null;

  //----------------------------------
  //  goToOverride
  //----------------------------------

  @aliasOf("viewModel.goToOverride")
  goToOverride: GoToOverride = null;

  //----------------------------------
  //  headingLevel
  //----------------------------------

  /**
   * Indicates the heading level to use for the headings separating floors in buildings.
   * By default, the building name is rendered
   * as a level 2 heading (e.g. `<h2>Building name</h2>`). Depending on the widget's placement
   * in your app, you may need to adjust this heading for proper semantics. This is
   * important for meeting accessibility standards.
   *
   * @name headingLevel
   * @instance
   * @since 4.20
   * @type {number}
   * @default 2
   * @see [Heading Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
   *
   * @example
   * // building headings will render as an <h3>
   * floorFilter.headingLevel = 3;
   */
  @property()
  headingLevel: HeadingLevel = 2;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Updates the {@link module:esri/WebMap~FloorFilter floorFilter} widget definition in the provided {@link module:esri/WebMap}.
   *
   * @method updateWebDocument
   * @instance
   * @since 4.19
   *
   * @param {module:esri/WebMap} webmap - The webmap to be updated.
   */
  @aliasOf("viewModel.updateWebDocument")
  updateWebDocument(): void {}

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    const { longNames } = this;
    const layout: Layout = longNames && this.viewModel.isNormalMode ? "expanded" : "collapsed";
    const buttons = this.renderButtons();
    const filterMenu = this.renderFilterMenu();
    const separator = <div class={this.classes(CSS.separator)} />;
    const corner = this._getComponentPosition();
    const position: Position = this._getPosition(corner);
    const rightSide = corner === "top-right" || corner === "bottom-right";
    const leftSide = corner === "top-left" || corner === "bottom-left";
    const rtl = isRTL();
    const leadingControl = (rtl && leftSide) || (!rtl && rightSide) ? filterMenu : buttons;
    const trailingControl = (rtl && leftSide) || (!rtl && rightSide) ? buttons : filterMenu;
    return (
      <div
        afterCreate={this._afterBaseNodeCreate}
        key="floor-filter-menu"
        class={this.classes(
          CSS.floorFilter,
          CSS.esriWidget,
          `${CSS.floorFilterLayout}${layout}`,
          `${CSS.floorFilterPosition}${position}`
        )}
      >
        {leadingControl}
        {this.viewModel?.filterMenuOpen && separator}
        {trailingControl}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Protected Methods
  //
  //--------------------------------------------------------------------------

  protected renderButtons(): VNode {
    const corner = this._getComponentPosition();
    const position: Position = this._getPosition(corner);
    const buttons: VNode[] = [];
    if (position === "top") {
      buttons.push(this.renderBrowseButton());
      buttons.push(this.renderLevelButtons());
      buttons.push(this.renderCloseLevelsButton());
      buttons.push(this.renderZoomButton());
      buttons.push(this.renderCollapseToggleButton());
    } else {
      buttons.push(this.renderCollapseToggleButton());
      buttons.push(this.renderZoomButton());
      buttons.push(this.renderCloseLevelsButton());
      buttons.push(this.renderLevelButtons());
      buttons.push(this.renderBrowseButton());
    }
    return (
      <div key="button-container" class={this.classes(CSS.esriWidget, CSS.buttonContainer)}>
        {buttons}
      </div>
    );
  }

  protected renderBrowseButton(): VNode {
    const { longNames, messages } = this;
    const browseButton = (
      <button
        key="browse-button"
        title={messages.buttons.browse}
        bind={this}
        class={this.classes(
          CSS.esriWidget,
          CSS.esriWidgetButton,
          CSS.esriInteractive,
          (this.viewModel.state === "loading" || this.viewModel.state === "disabled") &&
            CSS.esriButtonDisabled,
          CSS.browseButton,
          this.viewModel?.filterMenuOpen && CSS.esriWidgetButtonActive
        )}
        aria-expanded={this.viewModel.filterMenuOpen.toString()}
        aria-label={messages.buttons.browse}
        onclick={this._toggleFilterMenu}
      >
        <div class={this.classes(CSS.buttonInfo)}>
          <span class={this.classes(CSS.esriIcon, CSS.urbanIcon)} />
          <span class={this.classes(CSS.buttonLabel)}>
            {longNames && this.viewModel.isNormalMode && messages.buttons.browse}
          </span>
        </div>
      </button>
    );
    return browseButton;
  }

  protected renderLevelButtons(): VNode {
    if (!this.viewModel?.filterFeatures?.levels?.levelsInfo || !this.facility) {
      return null;
    }
    const { facility, messagesCommon, messages } = this;
    const activeFacility = this.viewModel?.getFacility(facility);
    const sortedLevels = this.viewModel?.getFacilityLevels(facility);
    const renderLevels = sortedLevels.map((level) => this.renderLevelButton(level));
    if (!renderLevels.length) {
      return null;
    }

    const ariaLabel =
      activeFacility &&
      substitute(messages.selector.levelsLabel, {
        name: `"${activeFacility.name}"`
      });

    if (this._isWebScene(this.view.map) && renderLevels?.length > 1) {
      const allLevel: Level = {
        id: `all--${facility}`,
        facilityId: facility,
        shortName: messagesCommon.all,
        longName: messagesCommon.all,
        levelNumber: null,
        verticalOrder: null
      };
      const allButton = this.renderLevelButton(allLevel);
      renderLevels.push(allButton);
    }
    return (
      <ul
        key="levels-button-container"
        class={this.classes(CSS.levelsContainer)}
        bind={this}
        data-id={"levels"}
        afterCreate={storeNode}
        data-node-ref="_levelsListNode"
        aria-label={ariaLabel}
        onkeydown={this._handleListKeydown}
      >
        {renderLevels}
      </ul>
    );
  }

  protected renderLevelButton(level: Level): VNode {
    const { longNames } = this;
    const { shortName, longName, id: levelId } = level;
    const key = `levels--${levelId}`;
    const selected = this.level === levelId;
    const displayName = longNames && this.viewModel.isNormalMode ? longName : shortName;
    if (!this.viewModel.isNormalMode && !selected && !this.viewModel.levelsExpanded) {
      return null;
    }
    return (
      <li key={key}>
        <button
          data-id={levelId}
          data-list-id={"levels"}
          bind={this}
          class={this.classes(
            CSS.esriWidgetButton,
            selected ? CSS.esriWidgetButtonActive : null,
            CSS.esriInteractive,
            CSS.levelButton
          )}
          onclick={this._levelSelected}
          onfocus={this._onItemFocus}
        >
          {displayName}
        </button>
      </li>
    );
  }

  protected renderCloseLevelsButton(): VNode {
    if (!this.level || this.viewModel.isNormalMode || !this.viewModel.levelsExpanded) {
      return null;
    }

    const { messagesCommon } = this;
    const closeLevelsButton = (
      <button
        key="close-levels-button"
        title={messagesCommon.close}
        bind={this}
        class={this.classes(
          CSS.esriWidget,
          CSS.esriWidgetButton,
          CSS.esriInteractive,
          CSS.closeLevelsButton
        )}
        aria-label={messagesCommon.close}
        onclick={this._closeLevels}
      >
        <div class={this.classes(CSS.buttonInfo)}>
          <span class={this.classes(CSS.esriIcon, CSS.closeIcon)} />
        </div>
      </button>
    );
    return closeLevelsButton;
  }

  protected renderZoomButton(): VNode {
    const { longNames, messages, facility, site } = this;
    const filterMenuType = this.viewModel?.filterMenuType;
    const filterMenuOpen = this.viewModel?.filterMenuOpen;
    const siteObj = this.viewModel?.getSite(site);
    const facilityObj = this.viewModel?.getFacility(facility);
    const disabled = filterMenuType === "site" && filterMenuOpen ? !siteObj : !facilityObj;
    const zoomButton = (
      <button
        key="zoom-button"
        title={messages.buttons.zoomTo}
        bind={this}
        class={this.classes(
          CSS.esriWidget,
          CSS.esriWidgetButton,
          disabled && CSS.esriButtonDisabled,
          CSS.esriInteractive,
          this.viewModel?.getFacilityLevels(facility).length > 0
            ? CSS.zoomButtonLevels
            : CSS.zoomButton
        )}
        aria-label={messages.buttons.zoomTo}
        onclick={this._zoomToClicked}
      >
        <div class={this.classes(CSS.buttonInfo)}>
          <span class={this.classes(CSS.esriIcon, CSS.zoomToIcon)} />
          <span class={this.classes(CSS.buttonLabel)}>
            {longNames && this.viewModel.isNormalMode && messages.buttons.zoomTo}
          </span>
        </div>
      </button>
    );
    return zoomButton;
  }

  protected renderCollapseToggleButton(): VNode {
    const { longNames, messagesCommon } = this;
    const icon = longNames ? CSS.collapseIconRight : CSS.expandIconRight;
    const iconClasses = this.classes(CSS.esriIcon, icon);
    const label = longNames ? messagesCommon.collapse : messagesCommon.expand;
    const minimizeToggleButton = (
      <button
        key="minimize-toggle-button"
        title={label}
        bind={this}
        class={this.classes(
          CSS.esriWidget,
          CSS.esriWidgetButton,
          CSS.esriInteractive,
          CSS.minimizeToggleButton
        )}
        aria-label={label}
        onclick={this._toggleCollapsed}
      >
        <div class={this.classes(CSS.buttonInfo)}>
          <span class={iconClasses} />
          <span class={this.classes(CSS.buttonLabel)}>
            {longNames && this.viewModel.isNormalMode && messagesCommon.collapse}
          </span>
        </div>
      </button>
    );
    return minimizeToggleButton;
  }

  protected renderFilterMenu(): VNode {
    if (!this.viewModel?.filterMenuOpen) {
      return null;
    }
    if (this.viewModel?.filterMenuType === "site") {
      return this.renderSiteFilterMenu();
    } else if (this.viewModel?.filterMenuType === "facility") {
      return this.renderFacilityFilterMenu();
    }
    return null;
  }

  protected renderSiteFilterMenu(): VNode {
    const { messages, messagesCommon } = this;
    const title = this.site
      ? this.viewModel?.getSite(this.site)?.name
      : messages.selector.selectSite;
    const header = (
      <div key="filter-menu-site-header" class={this.classes(`${CSS.filterMenuHeader}`)}>
        <div class={this.classes(CSS.filterMenuHeaderTextGroup)}>
          <Heading level={this.headingLevel} class={this.classes(CSS.filterMenuHeaderText)}>
            {title}
          </Heading>
        </div>
        <button
          bind={this}
          title={messagesCommon.close}
          class={this.classes(CSS.esriIcon, CSS.closeIcon)}
          onclick={this._closeClicked}
        />
      </div>
    );
    const searchInput = this.renderSearchInput();
    const siteItems = this.renderSiteItems();
    return (
      <div key="filter-menu-site" class={this.classes(CSS.filterMenu)}>
        {header}
        {searchInput}
        {siteItems}
      </div>
    );
  }

  protected renderFacilityFilterMenu(): VNode {
    const { messages, messagesCommon, site } = this;
    const siteName = this.viewModel?.getSite(site)?.name;
    const title =
      (this.facility && this.viewModel?.getFacility(this.facility)?.name) ||
      messages.selector.selectFacility;

    const backButton = this.viewModel.hasMultipleSites ? (
      <button
        bind={this}
        title={messagesCommon.back}
        class={this.classes(CSS.filterMenuHeaderBack)}
        onclick={this._backClicked}
      >
        <span class={this.classes(isRTL() ? CSS.rightIcon : CSS.leftIcon)} />
      </button>
    ) : null;

    const subtext = this.viewModel.hasMultipleSites ? (
      <Heading level={this.headingLevel + 1} class={this.classes(CSS.filterMenuHeaderSubtext)}>
        {siteName}
      </Heading>
    ) : null;

    const header = (
      <div key="filter-menu-site-header" class={this.classes(CSS.filterMenuHeader)}>
        {backButton}
        <div class={this.classes(CSS.filterMenuHeaderTextGroup)}>
          <Heading level={this.headingLevel} class={this.classes(CSS.filterMenuHeaderText)}>
            {title}
          </Heading>
          {subtext}
        </div>
        <button
          bind={this}
          title={messagesCommon.close}
          class={this.classes(CSS.esriIcon, CSS.closeIcon)}
          onclick={this._closeClicked}
        />
      </div>
    );
    const searchInput = this.renderSearchInput();
    const facilityItems = this.renderFacilityItems();
    return (
      <div key="filter-menu-facility" class={this.classes(CSS.filterMenu)}>
        {header}
        {searchInput}
        {facilityItems}
      </div>
    );
  }

  protected renderSearchInput(): VNode {
    const { messagesCommon } = this;
    const searchInput = (
      <div key="filter-menu-search" class={this.classes(CSS.filterMenuSearch)}>
        <span class={this.classes(CSS.esriIcon, CSS.searchIcon)} />
        <input
          bind={this}
          key="filter-menu-search__input"
          afterCreate={storeNode}
          data-node-ref="_searchInput"
          class={this.classes(CSS.filterMenuSearchInput)}
          placeholder={messagesCommon.search}
          oninput={this._onSearchChange}
          onpaste={this._onSearchChange}
          value={this.viewModel.searchTerm}
        />
      </div>
    );
    return searchInput;
  }

  protected renderBlueCircle(): VNode {
    return (
      <span key="floor-filter__selected-item-circle" class={this.classes(CSS.selectedItemCircle)} />
    );
  }

  protected renderSiteItems(): VNode {
    if (!this.viewModel?.filterFeatures?.sites?.sitesInfo) {
      return null;
    }
    const { messages } = this;
    const sites = this.viewModel.filterFeatures.sites.sitesInfo;
    const sortedSites = this.viewModel.filterSites(sites);
    const renderSites = sortedSites.map((site: Site) => this.renderSiteItem(site));
    const emptyContent = renderSites.length === 0 && this.viewModel?.searchTerm && (
      <div class={this.classes(CSS.esriWidgetContentEmpty)}>{messages.noResults}</div>
    );

    return (
      <ul
        key="filter-menu-items--sites"
        class={this.classes(CSS.filterMenuItems)}
        bind={this}
        afterCreate={storeNode}
        data-node-ref="_sitesListNode"
        data-id="sites"
        onkeydown={this._handleListKeydown}
        tabIndex={-1}
        aria-label={messages.selector.sitesLabel}
      >
        {renderSites}
        {emptyContent}
      </ul>
    );
  }

  protected renderSiteItem(site: Site): VNode {
    const { name, id: siteId } = site;
    const key = `filter-menu-site--${siteId}`;
    const selected = this.site === siteId;
    return (
      <li key={key}>
        <button
          data-id={siteId}
          data-list-id={"sites"}
          bind={this}
          class={this.classes(CSS.filterMenuSite)}
          onclick={this._siteSelected}
          onfocus={this._onItemFocus}
        >
          {selected && this.renderBlueCircle()}
          <span
            class={this.classes(selected ? CSS.filterMenuSelectedItem : CSS.filterMenuItemName)}
          >
            {name}
          </span>
          <span class={this.classes(isRTL() ? CSS.leftIcon : CSS.rightIcon)} />
        </button>
      </li>
    );
  }

  protected renderFacilityItems(): VNode {
    if (!this.viewModel?.filterFeatures?.facilities?.facilitiesInfo) {
      return null;
    }
    const { messages, site } = this;
    const activeSite = this.viewModel.getSite(site);
    const facilities = this.viewModel.filterFeatures.facilities.facilitiesInfo;
    const sortedFacilities = this.viewModel.filterFacilities(facilities);
    const renderFacilities = sortedFacilities.map((facility: Facility) =>
      this.renderFacilityItem(facility)
    );
    const emptyContent = renderFacilities.length === 0 && this.viewModel?.searchTerm && (
      <div class={this.classes(CSS.esriWidgetContentEmpty)}>{messages.noResults}</div>
    );
    const ariaLabel = activeSite
      ? substitute(messages.selector.siteFacilitiesLabel, {
          name: `"${activeSite.name}"`
        })
      : messages.selector.facilitiesLabel;

    return (
      <ul
        key="filter-menu-items--facilities"
        class={this.classes(CSS.filterMenuItems)}
        bind={this}
        afterCreate={storeNode}
        data-node-ref="_facilitiesListNode"
        data-id="facilities"
        onkeydown={this._handleListKeydown}
        tabIndex={-1}
        aria-label={ariaLabel}
      >
        {renderFacilities}
        {emptyContent}
      </ul>
    );
  }

  protected renderFacilityItem(facility: Facility): VNode {
    const { name, id: facilityId } = facility;
    const key = `filter-menu-facility--${facilityId}`;
    const selected = this.facility === facilityId;
    return (
      <li key={key}>
        <button
          data-id={facilityId}
          data-list-id={"facilities"}
          bind={this}
          class={this.classes(CSS.filterMenuFacility)}
          onclick={this._facilitySelected}
          onfocus={this._onItemFocus}
        >
          {selected && this.renderBlueCircle()}
          <span
            class={this.classes(selected ? CSS.filterMenuSelectedItem : CSS.filterMenuItemName)}
          >
            {name}
          </span>
        </button>
      </li>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _afterBaseNodeCreate(element: HTMLElement): void {
    if (this._baseNode) {
      this._resizeObserver?.unobserve(this._baseNode);
    }

    this._baseNode = element;
    this._resizeObserver?.observe(this._baseNode);
  }

  private _toggleCollapsed(): void {
    this.longNames = !this.longNames;
  }

  private _toggleFilterMenu(): void {
    const isMenuOpen = this.viewModel?.filterMenuOpen ?? false;
    this.viewModel.filterMenuOpen = !isMenuOpen;
  }

  private _setFilterMenuType(type: FilterMenuType): void {
    this.viewModel.filterMenuType = type;
  }

  private _zoomToClicked(): void {
    if (this.site && this.viewModel?.filterMenuType === "site" && this.viewModel?.filterMenuOpen) {
      const site = this.viewModel?.getSite(this.site);
      this.viewModel.goTo(site);
    } else if (this.facility) {
      const facility = this.viewModel?.getFacility(this.facility);
      this.viewModel.goTo(facility);
    } else if (this.site) {
      const site = this.viewModel?.getSite(this.site);
      this.viewModel.goTo(site);
    }
  }

  private _onSearchChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.value === "") {
      this.viewModel.searchTerm = null;
    } else if (input.value && this.viewModel?.searchTerm !== input.value) {
      this.viewModel.searchTerm = input.value.toLowerCase().trim();
    }
  }

  private _closeClicked(): void {
    this.viewModel.searchTerm = null;
    this.viewModel.filterMenuOpen = false;
  }

  private _backClicked(): void {
    this._setFilterMenuType("site");
    this.viewModel.searchTerm = null;
  }

  private _siteSelected(event: Event): void {
    const node = event.currentTarget as Element;
    const siteId = node.getAttribute("data-id");
    const site = this.viewModel.getSite(siteId);

    let updateFloors = false;
    if (this.site !== siteId) {
      this.facility = undefined;
      this.level = undefined;
      updateFloors = true;
      this.viewModel.levelsExpanded = false;
    }
    this.site = siteId;
    this.viewModel.searchTerm = null;
    this._setFilterMenuType("facility");
    this.viewModel.goTo(site);
    if (updateFloors) {
      this.viewModel.setFloors(null);
    }
  }

  private _facilitySelected(event: Event): void {
    const node = event.currentTarget as Element;
    const facilityId = node.getAttribute("data-id");
    const facility = this.viewModel.getFacility(facilityId);

    let updateFloors = false;
    if (this.facility !== facilityId) {
      if (this.viewModel.filterMode === "base-floors") {
        const baseLevel = this.viewModel?.getBaseLevel(facility);
        if (baseLevel) {
          this.level = baseLevel.id;
        } else {
          this.level = undefined;
        }
      } else {
        this.level = undefined;
      }
      updateFloors = true;
      this.viewModel.levelsExpanded = false;
    }
    this.facility = facilityId;
    this.viewModel.goTo(facility);

    if (updateFloors) {
      const level = this.viewModel.getLevel(this.level);
      this.viewModel.setFloors(level);
    }

    if (!this.viewModel.isNormalMode) {
      const levels = this.viewModel.getFacilityLevels(facilityId);
      if (levels?.length > 1) {
        this.viewModel.levelsExpanded = true;
      }
    }

    setTimeout(() => {
      this._focusActiveLevel();
    }, 50);
  }

  private _levelSelected(event: Event): void {
    const node = event.currentTarget as Element;
    const levelId = node.getAttribute("data-id");
    this.level = levelId;
  }

  private _closeLevels(): void {
    this.viewModel.levelsExpanded = false;
  }

  private _isWebScene(document: IMap | WebMap | WebScene): document is WebScene {
    return document.declaredClass === "esri.WebScene";
  }

  private _getComponentPosition(): Maybe<UIPosition> {
    return this.view?.ui?.getPosition(this.container);
  }

  private _getPosition(corner: Maybe<UIPosition>): Position {
    switch (corner) {
      case "bottom-right":
      case "bottom-left":
        return "bottom";
      default:
        return "top";
    }
  }

  private _handleListKeydown(event: KeyboardEvent): void {
    const node = event.currentTarget as Element;
    const dataId = node.getAttribute("data-id");
    let indexProperty: ActiveMenuType = null;

    if (dataId === "sites" || dataId === "facilities") {
      if (this._activeMenu !== dataId) {
        this._activeMenuIndex["menuItems"] = -1;
      }
      this._activeMenu = dataId;
      indexProperty = "menuItems";
    } else if (dataId === "levels") {
      indexProperty = "levels";
    }

    const listNode =
      dataId === "sites"
        ? this._sitesListNode
        : dataId === "facilities"
        ? this._facilitiesListNode
        : dataId === "levels"
        ? this._levelsListNode
        : null;

    const key = eventKey(event);

    const isTabKey = key === "Tab";
    const isNavigationKey = navigationKeys.includes(key as NavigationKey);

    if (isNavigationKey) {
      event.preventDefault();
    }

    const list = listNode?.getElementsByTagName("li");

    if (!list || list.length === 0) {
      return;
    }

    if (isNavigationKey || isTabKey) {
      this.handleItemNavigation(key, event.shiftKey, list, isTabKey, indexProperty);
      return;
    }
  }

  private handleItemNavigation(
    key: string,
    shiftKey: boolean,
    items: HTMLCollectionOf<HTMLLIElement>,
    isTab: boolean,
    indexProperty: ActiveMenuType
  ): void {
    if (!indexProperty) {
      return;
    }

    if (this._activeMenuIndex[indexProperty] === items.length) {
      this._activeMenuIndex[indexProperty]--;
    }
    if (this._activeMenuIndex[indexProperty] === -1) {
      this._activeMenuIndex[indexProperty]++;
    }
    const originalIndex = this._activeMenuIndex[indexProperty];

    switch (key as NavigationKey) {
      case "Home":
        this._activeMenuIndex[indexProperty] = 0;
        break;
      case "End":
        this._activeMenuIndex[indexProperty] = items.length - 1;
        break;
      case "ArrowUp":
        this._activeMenuIndex[indexProperty] =
          this._activeMenuIndex[indexProperty] <= 0
            ? items.length - 1
            : this._activeMenuIndex[indexProperty] - 1;
        break;
      case "ArrowDown":
        this._activeMenuIndex[indexProperty] =
          this._activeMenuIndex[indexProperty] === items.length - 1
            ? 0
            : this._activeMenuIndex[indexProperty] + 1;
        break;
    }

    if (key === "Tab" && shiftKey && this._activeMenuIndex[indexProperty] >= 0) {
      this._activeMenuIndex[indexProperty]--;
    }

    if (key === "Tab" && !shiftKey && this._activeMenuIndex[indexProperty] < items.length) {
      this._activeMenuIndex[indexProperty]++;
    }

    if (
      originalIndex !== this._activeMenuIndex[indexProperty] &&
      this._activeMenuIndex[indexProperty] > -1 &&
      this._activeMenuIndex[indexProperty] < items.length &&
      !isTab
    ) {
      const elements = items[this._activeMenuIndex[indexProperty]].getElementsByTagName("button");
      const button = elements?.length === 1 && elements[0];
      button?.focus();
    }
  }

  private _focusSearch(): void {
    this._searchInput?.focus();
  }

  private _focusActiveLevel(): void {
    const { level } = this;
    const listNode = this._levelsListNode;
    const items = listNode?.getElementsByTagName("li");
    if (!level || !listNode || !items) {
      return;
    }
    const tag = this._facilitiesListNode?.getElementsByTagName("li");
    this._activeMenuIndex["menuItems"] = tag ? tag.length - 1 : -1;

    const buttons = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const elements = item.getElementsByTagName("button");
      if (elements?.length === 1) {
        buttons.push(elements[0]);
      }
    }

    buttons.forEach((button, index) => {
      const id = button.getAttribute("data-id");
      if (id === level) {
        button.focus();
        this._activeMenuIndex["levels"] = index;
      }
    });
  }

  private _onItemFocus(event: FocusEvent): void {
    const node = event.currentTarget as Element;
    const listId = node.getAttribute("data-list-id");
    const dataId = node.getAttribute("data-id");

    const listNode =
      listId === "sites"
        ? this._sitesListNode
        : listId === "facilities"
        ? this._facilitiesListNode
        : listId === "levels"
        ? this._levelsListNode
        : null;

    if (!listNode) {
      return;
    }

    const list = listNode?.getElementsByTagName("li");
    if (!list) {
      return;
    }

    const buttons: HTMLButtonElement[] = [];
    Array.from(list).forEach((item) => {
      const elements = item.getElementsByTagName("button");
      if (elements?.length === 1) {
        buttons.push(elements[0]);
      }
    });

    let menuType: ActiveMenuType = null;
    switch (listId) {
      case "sites":
      case "facilities":
        menuType = "menuItems";
        break;
      case "levels":
        menuType = "levels";
        break;
    }

    if (!menuType) {
      return;
    }

    buttons.forEach((button, index) => {
      const id = button.getAttribute("data-id");
      if (id === dataId && this._activeMenuIndex[menuType] !== index) {
        this._activeMenuIndex[menuType] = index;
      }
    });
  }
}

export default FloorFilter;
