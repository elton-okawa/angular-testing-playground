import { ComponentHarness } from '@angular/cdk/testing';

export class MenuTriggerHarness extends ComponentHarness {
  static hostSelector = '.cdk-menu-trigger';

  async toggle() {
    const trigger = await this.host();
    return trigger.click();
  }
}
