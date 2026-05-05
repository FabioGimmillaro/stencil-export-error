import { Event, EventEmitter } from '@stencil/core';
import { UtilType } from '../util-types';

export abstract class AbstractComponent {
  @Event() someEvent!: EventEmitter<UtilType>;
}
