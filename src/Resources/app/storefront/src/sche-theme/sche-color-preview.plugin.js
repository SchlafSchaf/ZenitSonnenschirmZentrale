//import Plugin from 'src/plugin-system/plugin.class';

export default class ScheColorPreviewPlugin extends window.PluginBaseClass {
    static options = {
        title: '',
        alt: '',
        url: ''
    };

    init() {
        this.el.addEventListener('mouseover', this.onEnter.bind(this));
        this.el.addEventListener('mouseout', this.onLeave.bind(this));
    }

    onEnter() {
        let anchor = this.el.closest('.product-detail-configurator');
        let colorPreview = document.createElement('div');
        colorPreview.setAttribute('class', 'sche-color-preview');
        colorPreview.style.top = this.el.offsetTop + 'px';
        colorPreview.style.left = anchor.offsetLeft - 400 + 'px';

        let img = document.createElement("img");
        img.setAttribute('alt', this.options.alt);
        img.setAttribute('title', this.options.title);
        img.setAttribute('src', this.options.url);
        colorPreview.append(img);

        anchor.append(colorPreview);

    }

    onLeave() {
        let colorPreview = document.getElementsByClassName('sche-color-preview');
        for (let item of colorPreview) {
            item.remove();
        }
    }
}
