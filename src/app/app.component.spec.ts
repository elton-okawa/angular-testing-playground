import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

import { HarnessLoader } from '@angular/cdk/testing';
import { MenuTriggerHarness } from './menu/menu-trigger-harness.component';
import { MenuHarness } from './menu/menu-harness.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let loader: HarnessLoader;
  let rootLoader: HarnessLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent],
    });

    fixture = TestBed.createComponent(AppComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);

    rootLoader = TestbedHarnessEnvironment.documentRootLoader(fixture);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('Menu', () => {
    let consoleSpy: jest.SpyInstance;

    beforeEach(() => {
      consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    it('should open and click menu', async () => {
      const triggerHarness = await loader.getHarness(MenuTriggerHarness);
      await triggerHarness.toggle();

      const menuHarness = await rootLoader.getHarness(MenuHarness);

      expect(await menuHarness.isOpen()).toBe(true);

      const refresh = await menuHarness.getItem({ text: 'Refresh' });
      await refresh.click();

      expect(consoleSpy).toHaveBeenCalledWith('refresh');
    });
  });
});
