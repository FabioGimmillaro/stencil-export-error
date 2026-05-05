import { Component, h } from '@stencil/core';
import { AbstractComponent } from './shared/abstract-component';

@Component({
  tag: 'sub-component',
  shadow: true,
})
export class SubComponent extends AbstractComponent {
  render() {
    return <div>sub-component</div>;
  }
}
