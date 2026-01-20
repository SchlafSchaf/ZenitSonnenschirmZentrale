// Import all necessary Storefront plugins
const PluginManager = window.PluginManager;
PluginManager.register('ScheColorPreviewPlugin', () => import('./sche-theme/sche-color-preview.plugin'), '.product-detail-configurator-option-label.is-display-color');
/*
hot reload
*/
if (module.hot) {
    module.hot.accept();
}
