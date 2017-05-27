"use strict";define([],function(){return[{parent:"workspace",name:"user",url:"/user",component:"userTable",authenticate:!0,resolve:{lazyload:["$ocLazyLoad",function($ocLazyLoad){return $ocLazyLoad.load({files:["user/user-table/user-table-component"],cache:!1}).then(function(){$ocLazyLoad.inject("workspace.module")})}]}},{parent:"workspace",name:"userprofile",url:"/userprofile/:userId",component:"userProfile",authenticate:!0,resolve:{lazyload:["$ocLazyLoad",function($ocLazyLoad){return $ocLazyLoad.load({files:["user/user-profile/user-profile-component"],cache:!1}).then(function(){$ocLazyLoad.inject("workspace.module")})}]}},{parent:"workspace",name:"post",url:"/post",component:"postTable",authenticate:!0,resolve:{lazyload:["$ocLazyLoad",function($ocLazyLoad){return $ocLazyLoad.load({files:["post/post-table/post-table-component"],cache:!1}).then(function(){$ocLazyLoad.inject("workspace.module")})}]}},{parent:"workspace",name:"writepost",url:"/writepost",component:"writePost",authenticate:!0,resolve:{lazyload:["$ocLazyLoad",function($ocLazyLoad){return $ocLazyLoad.load({files:["post/write-post/write-post-component"],cache:!1}).then(function(){$ocLazyLoad.inject("workspace.module")})}]}},{parent:"workspace",name:"comment",url:"/comment",component:"commentTable",authenticate:!0,resolve:{lazyload:["$ocLazyLoad",function($ocLazyLoad){return $ocLazyLoad.load({files:["comment/comment-table/comment-table-component"],cache:!1}).then(function(){$ocLazyLoad.inject("workspace.module")})}]}},{parent:"workspace",name:"org",url:"/org",component:"orgMng",authenticate:!0,resolve:{lazyload:["$ocLazyLoad",function($ocLazyLoad){return $ocLazyLoad.load({files:["org/org-component"],cache:!1}).then(function(){$ocLazyLoad.inject("workspace.module")})}]}},{parent:"workspace",name:"echarts",url:"/echarts",component:"echartsComp",authenticate:!0,resolve:{lazyload:["$ocLazyLoad",function($ocLazyLoad){return $ocLazyLoad.load({files:["echarts/echarts-component"],cache:!1}).then(function(){$ocLazyLoad.inject("workspace.module")})}]}}]});