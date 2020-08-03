import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';
import * as $ from 'jquery';
window["$"] = $;
window["jQuery"] = $;
enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
//if(window){
 //   window.console.log=function(){};
//} 

