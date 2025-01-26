import { ComponentHarness, HarnessLoader } from '@angular/cdk/testing';
import {
  MenuItemHarness,
  MenuItemHarnessFilters,
} from './menu-item-harness.component';

export class MenuHarness extends ComponentHarness {
  static hostSelector = '.cdk-menu';

  protected getMenuItemsElement = this.locatorForAll(MenuItemHarness);

  async isOpen() {
    const items = await this.getMenuItemsElement();
    return items.length > 0;
  }

  async getItem(
    filters: MenuItemHarnessFilters = {}
  ): Promise<MenuItemHarness> {
    const getItem = this.locatorFor(MenuItemHarness.with(filters));
    return getItem();
  }
}
