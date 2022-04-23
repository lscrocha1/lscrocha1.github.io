import { Component, h } from '@stencil/core';
import translationService from '../../base/translation-service';

@Component({
  tag: 'app-root'
})
export class AppRoot {
  componentWillLoad() {
      translationService.init();
  }

  render() {
    return (
      <div>
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
