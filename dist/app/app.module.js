"use strict";define(["app.routers","workspace/workspace.routers","workspace/workspace.module"],function(appRouters,workspaceRouters){function configRouter(ngModule,routersConfig){ngModule.config(["$stateProvider","$locationProvider","$ocLazyLoadProvider",function($stateProvider,$locationProvider,$ocLazyLoadProvider){$locationProvider.hashPrefix(""),$ocLazyLoadProvider.config({debug:!0,events:!0});for(var i=0;i<routersConfig.length;i++)$stateProvider.state(routersConfig[i])}])}var rootModule=angular.module("myRootModule",["ui.router","oc.lazyLoad","workspace.module"]);return configRouter(rootModule,appRouters),configRouter(rootModule,workspaceRouters),rootModule.run(["$transitions","$ocLazyLoad",function($transitions,$ocLazyLoad){$transitions.onStart({},function(trans){trans.router.stateService.target("workspace")})}]),rootModule});