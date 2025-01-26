import {
  BaseHarnessFilters,
  ComponentHarness,
  HarnessLoader,
  HarnessPredicate,
} from '@angular/cdk/testing';

export interface MenuItemHarnessFilters extends BaseHarnessFilters {
  /** Filters based on the text of the menu item. */
  text?: string | RegExp;
}

export class MenuItemHarness extends ComponentHarness {
  static hostSelector = '.cdk-menu-item';

  static with(
    options: MenuItemHarnessFilters
  ): HarnessPredicate<MenuItemHarness> {
    return new HarnessPredicate(MenuItemHarness, options).addOption(
      'text',
      options.text,
      (harness, text) => HarnessPredicate.stringMatches(harness.getText(), text)
    );
  }

  async getText(): Promise<string> {
    const host = await this.host();
    return host.text();
  }

  async click() {
    const host = await this.host();
    return host.click();
  }
}
