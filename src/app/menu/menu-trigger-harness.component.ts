import { ComponentHarness, HarnessLoader } from '@angular/cdk/testing';
import {
  MenuItemHarness,
  MenuItemHarnessFilters,
} from './menu-item-harness.component';
import { MenuHarness } from './menu-harness.component';

export class MenuTriggerHarness extends ComponentHarness {
  static hostSelector = '.cdk-menu-trigger';

  async toggle() {
    const trigger = await this.host();
    return trigger.click();
  }
}
