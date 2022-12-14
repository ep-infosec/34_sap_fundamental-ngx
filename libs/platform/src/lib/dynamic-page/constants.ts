export const CLASS_NAME = {
    dynamicPage: 'fd-dynamic-page',
    dynamicPageTitleArea: 'fd-dynamic-page__title-area',
    dynamicPageMainContainer: 'fd-dynamic-page__main-container',
    dynamicPageBreadcrumbTitleContainer: 'fd-dynamic-page__breadcrumb-title-container',
    dynamicPageTitleAreaTransparentBg: 'fd-dynamic-page__title-area--transparent-bg',
    dynamicPageTitleAreaCollapsed: 'fd-dynamic-page__title-area--collapsed', // need to use thiis TODO
    dynamicPageTitleContainer: 'fd-dynamic-page__title-container',
    dynamicPageTitle: 'fd-dynamic-page__title',
    dynamicPageTitleMedium: 'fd-dynamic-page__title--md',
    dynamicPageBreadcrumb: 'fd-dynamic-page__breadcrumb',
    dynamicPageKeyInfo: 'fd-dynamic-page__title-content',
    dynamicPageGlobalActions: 'fd-dynamic-page__toolbar',
    dynamicPageLayoutActions: 'fd-dynamic-page__toolbar-actions',
    dynamicPageActionsContainer: 'fd-dynamic-page__actions-container',
    dynamicPageHeader: 'fd-dynamic-page__header',
    dynamicPageCollapsibleHeader: 'fd-dynamic-page__collapsible-header',
    dynamicPageCollapsibleHeaderTransparentBg: 'fd-dynamic-page__collapsible-header--transparent-bg',
    dynamicPageCollapsibleHeaderSmall: 'fd-dynamic-page__collapsible-header--sm',
    dynamicPageCollapsibleHeaderMedium: 'fd-dynamic-page__collapsible-header--md',
    dynamicPageCollapsibleHeaderLarge: 'fd-dynamic-page__collapsible-header--lg',
    dynamicPageCollapsibleHeaderExtraLarge: 'fd-dynamic-page__collapsible-header--xl',
    dynamicPageCollapsibleHeaderPinCollapseNoShadow:
        'fd-dynamic-page__collapsible-header-visibility-container--no-shadow',
    dynamicPageTabs: 'fd-dynamic-page__tabs',
    dynamicPageTabsAddShadow: 'fd-dynamic-page__tabs--add-shadow',
    dynamicPageTabsSmall: 'fd-dynamic-page__tabs--sm',
    dynamicPageTabsMedium: 'fd-dynamic-page__tabs--md',
    dynamicPageTabsLarge: 'fd-dynamic-page__tabs--lg',
    dynamicPageTabsExtraLarge: 'fd-dynamic-page__tabs--xl',
    dynamicPageContent: 'fd-dynamic-page__content',
    dynamicPageContentAreaSmall: 'fd-dynamic-page__content--sm',
    dynamicPageContentAreaMedium: 'fd-dynamic-page__content--md',
    dynamicPageContentAreaLarge: 'fd-dynamic-page__content--lg',
    dynamicPageContentAreaExtraLarge: 'fd-dynamic-page__content--xl',
    dynamicPageContentListBg: 'fd-dynamic-page__content--list-bg',
    dynamicPageContentTransparentBg: 'fd-dynamic-page__content--transparent-bg',
    dynamicPageSummarizedTitleArea: 'fd-dynamic-page__summarized-title-area',
    dynamicPageSummarizedTitleAreaSmall: 'fd-dynamic-page__summarized-title-area--sm',
    dynamicPageSummarizedTitleAreaMedium: 'fd-dynamic-page__summarized-title-area--md',
    dynamicPageSummarizedTitleAreaLarge: 'fd-dynamic-page__summarized-title-area--lg',
    dynamicPageSummarizedTitleAreaExtraLarge: 'fd-dynamic-page__summarized-title-area',
    dynamicPageSummarizedTitleAreaNoShadow: 'fd-dynamic-page__summarized-title-area--no-shadow',
    dynamicPageSummarizedTitle: 'fd-dynamic-page__summarized-title',
    dynamicPageSummarizedTitleCollapsed: 'fd-dynamic-page__summarized-title-area--collapsed'
} as const;

export type DynamicPageBackgroundType = 'solid' | 'list' | 'transparent';

export type DynamicPageResponsiveSize = 'small' | 'medium' | 'large' | 'extra-large';
