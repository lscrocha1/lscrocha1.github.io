import { Component, h } from "@stencil/core";

@Component({
    tag: 'app-footer',
    styleUrl: 'app-footer.scss'
})
export class AppFooter {

    currentYear = new Date().getFullYear();

    render() {
        return (
            <div class="footer-block">
                <div>
                    
                </div>
                <div class="copyright-bar">
                    Copyright © {this.currentYear} - Lucas Rocha.
                </div>
            </div>
        )
    }
}