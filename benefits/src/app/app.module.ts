import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DeductionsModule } from './deductions/deductions.module';
import { appRoutes } from './app.routes';
import { IAppState, INITIAL_STATE } from './redux/app.state';
import { rootReducer } from './redux/root.reducer';
import { SharedModule } from './shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgReduxRouterModule } from '@angular-redux/router';
import { DeductionsEpics } from './deductions/redux/deductions.epics';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    DeductionsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    NgReduxModule,
    NgReduxRouterModule,
    RouterModule.forRoot(appRoutes),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    ngRedux: NgRedux<IAppState>,
    devTools: DevToolsExtension,
    deductionsEpics: DeductionsEpics
  ) {
    const storeEnhancers = devTools.isEnabled() ? [devTools.enhancer()] : [];

    const rootEpic = combineEpics(
      deductionsEpics.addEmployee,
      deductionsEpics.editEmployee,
      deductionsEpics.employeeCostReceived,
      deductionsEpics.saveEmployee
    );
    const epicMiddleware = createEpicMiddleware();

    ngRedux.configureStore(rootReducer, INITIAL_STATE, [epicMiddleware], storeEnhancers);
    epicMiddleware.run(rootEpic);
  }
}
