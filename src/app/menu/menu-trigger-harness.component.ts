import { ComponentHarness, HarnessLoader } from '@angular/cdk/testing';
import {
  MenuItemHarness,
  MenuItemHarnessFilters,
} from './menu-item-harness.component';
import { MenuHarness } from './menu-harness.component';

export class MenuTriggerHarness extends ComponentHarness {
  static hostSelector = '.cdk-menu-trigger';

  async getHarnessLoaderForContent(): Promise<HarnessLoader> {
    const rootLocator = this.documentRootLocatorFactory();
    return rootLocator.harnessLoaderFor('.cdk-menu');
  }

  async getContent() {
    const loader = await this.getHarnessLoaderForContent();
    return loader.getHarness(MenuHarness);
  }

  async toggle() {
    const trigger = await this.host();
    return trigger.click();
  }
}
