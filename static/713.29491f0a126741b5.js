"use strict";(self.webpackChunkelog_web=self.webpackChunkelog_web||[]).push([[713],{713:(L,g,o)=>{o.r(g),o.d(g,{ArchiveModule:()=>Q});var m=o(6895),u=o(3060),p=o(5017),a=o(3626),v=o(7030),t=o(4650),_=o(3248);let f=(()=>{class n{constructor(e){this.httpDataService=e}getArchiveActivities(){return this.httpDataService.get("activity/archive/activities")}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(_.L))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var A=o(4859),C=o(6709),T=o(7392),d=o(8255),h=o(3848);function x(n,c){1&n&&(t.TgZ(0,"div",16)(1,"mat-icon"),t._uU(2,"assignment"),t.qZA(),t._uU(3," Tasks "),t.qZA())}function b(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"th",17)(1,"mat-checkbox",18),t.NdJ("change",function(l){t.CHM(e);const r=t.oxw();return t.KtG(l?r.masterToggle():null)}),t.qZA(),t.TgZ(2,"button",19)(3,"mat-icon"),t._uU(4,"arrow_drop_down"),t.qZA()()()}if(2&n){const e=t.oxw(),i=t.MAs(24);t.xp6(1),t.Q6J("checked",e.selection.hasValue()&&e.isAllSelected())("indeterminate",e.selection.hasValue()&&!e.isAllSelected()),t.xp6(1),t.Q6J("disabled",0===e.selection.selected.length)("matMenuTriggerFor",i)}}function Z(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"td",20)(1,"mat-checkbox",21),t.NdJ("click",function(l){return l.stopPropagation()})("change",function(l){const s=t.CHM(e).$implicit,R=t.oxw();return t.KtG(l?R.selection.toggle(s):null)}),t.qZA()()}if(2&n){const e=c.$implicit,i=t.oxw();t.xp6(1),t.Q6J("checked",i.selection.isSelected(e))}}function k(n,c){1&n&&(t.TgZ(0,"th",17),t._uU(1," Activity "),t.qZA())}function y(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"td",22),t.NdJ("click",function(){const r=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.navigateToActivityDetails(r._id))}),t._uU(1),t.qZA()}if(2&n){const e=c.$implicit;t.xp6(1),t.hij(" ",e.uniqIdentity?e.uniqIdentity:e.createdByOrganizationData[0].shortName," ")}}function S(n,c){1&n&&(t.TgZ(0,"th",17),t._uU(1," Title "),t.qZA())}function w(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"td",22),t.NdJ("click",function(){const r=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.navigateToActivityDetails(r._id))}),t._uU(1),t.qZA()}if(2&n){const e=c.$implicit;t.xp6(1),t.hij(" ",e.title," ")}}function D(n,c){1&n&&(t.TgZ(0,"th",23),t._uU(1," Status "),t.qZA())}const M=function(n,c,e,i){return{"badge-not-admissible":n,"badge-resolved":c,"badge-in-progress":e,"badge-new":i}};function N(n,c){if(1&n&&(t.TgZ(0,"td",24)(1,"span",25),t._uU(2),t.ALo(3,"titlecase"),t.qZA()()),2&n){const e=c.$implicit;t.xp6(1),t.Q6J("ngClass",t.l5B(4,M,"rejected"==(null==e?null:e.status.toLowerCase()),"resolved"==(null==e?null:e.status.toLowerCase()),"inprogress"==(null==e?null:e.status.toLowerCase()),"new"==(null==e?null:e.status.toLowerCase()))),t.xp6(1),t.hij(" ",t.lcZ(3,2,e.status)," ")}}function O(n,c){1&n&&(t.TgZ(0,"th",17),t._uU(1," Organisation "),t.qZA())}function U(n,c){if(1&n&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&n){const e=c.$implicit;t.xp6(1),t.hij("",e.createdByOrganizationData[0].organization," ")}}function Y(n,c){1&n&&t._UZ(0,"tr",26)}function J(n,c){1&n&&t._UZ(0,"tr",27)}function P(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"div",28),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.logSelection())}),t.TgZ(1,"mat-icon"),t._uU(2,"attachment"),t.qZA(),t._uU(3," Files "),t.qZA()}}const F=[{path:"",component:(()=>{class n{constructor(e,i){this.archiveService=e,this.router=i,this.archiveActivitiesList=[],this.taskDisplayedColumns=["checkbox","Activity","Title","Status","Organisation"],this.fileDisplayedColumns=["Activity","FileName","Size","Organization"],this.dataSource=new a.by(this.archiveActivitiesList),this.selection=new p.Ov(!0,[])}ngOnInit(){this.getArchiveActivities()}getArchiveActivities(){this.archiveService.getArchiveActivities().subscribe(e=>{this.archiveActivitiesList=e.data,this.dataSource=new a.by(this.archiveActivitiesList)})}isAllSelected(){return this.selection.selected.length===this.dataSource.data.length}masterToggle(){this.isAllSelected()?this.selection.clear():this.dataSource.data.forEach(e=>this.selection.select(e))}logSelection(){this.selection.selected.forEach(e=>console.log(e.title))}navigateToActivityDetails(e){this.router.navigate([v.p.ACTIVITY_DETAILS],{queryParams:{aId:e}})}archiveActionClick(e){console.log(e,this.selection.selected)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f),t.Y36(u.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-archive"]],decls:35,vars:3,consts:[["mat-tab-label",""],["mat-table","",1,"mat-elevation-z8","archiveTable",3,"dataSource"],["matColumnDef","checkbox"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Activity"],["mat-cell","","class","cursor",3,"click",4,"matCellDef"],["matColumnDef","Title"],["matColumnDef","Status"],["mat-header-cell","","class","status-badge",4,"matHeaderCellDef"],["mat-cell","","class","status-badge",4,"matCellDef"],["matColumnDef","Organisation"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"d-flex","align-items-center","gap-1"],["mat-header-cell",""],[3,"checked","indeterminate","change"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"disabled","matMenuTriggerFor"],["mat-cell",""],[3,"checked","click","change"],["mat-cell","",1,"cursor",3,"click"],["mat-header-cell","",1,"status-badge"],["mat-cell","",1,"status-badge"],[1,"badge",3,"ngClass"],["mat-header-row",""],["mat-row",""],[1,"d-flex","align-items-center","gap-1",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"mat-tab-group")(1,"mat-tab"),t.YNc(2,x,4,0,"ng-template",0),t.TgZ(3,"table",1),t.ynx(4,2),t.YNc(5,b,5,4,"th",3),t.YNc(6,Z,2,1,"td",4),t.BQk(),t.ynx(7,5),t.YNc(8,k,2,0,"th",3),t.YNc(9,y,2,1,"td",6),t.BQk(),t.ynx(10,7),t.YNc(11,S,2,0,"th",3),t.YNc(12,w,2,1,"td",6),t.BQk(),t.ynx(13,8),t.YNc(14,D,2,0,"th",9),t.YNc(15,N,4,9,"td",10),t.BQk(),t.ynx(16,11),t.YNc(17,O,2,0,"th",3),t.YNc(18,U,2,1,"td",4),t.BQk(),t.YNc(19,Y,1,0,"tr",12),t.YNc(20,J,1,0,"tr",13),t.qZA()(),t.TgZ(21,"mat-tab"),t.YNc(22,P,4,0,"ng-template",0),t.qZA()(),t.TgZ(23,"mat-menu",null,14)(25,"button",15),t.NdJ("click",function(){return i.archiveActionClick("Restore")}),t.TgZ(26,"mat-icon"),t._uU(27,"refresh"),t.qZA(),t.TgZ(28,"span"),t._uU(29,"Restore"),t.qZA()(),t.TgZ(30,"button",15),t.NdJ("click",function(){return i.archiveActionClick("Remove")}),t.TgZ(31,"mat-icon"),t._uU(32,"delete"),t.qZA(),t.TgZ(33,"span"),t._uU(34,"Remove"),t.qZA()()()),2&e&&(t.xp6(3),t.Q6J("dataSource",i.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",i.taskDisplayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.taskDisplayedColumns))},dependencies:[m.mk,A.lW,C.oG,T.Hw,d.VK,d.OP,d.p6,a.BZ,a.fO,a.as,a.w1,a.Dz,a.nj,a.ge,a.ev,a.XQ,a.Gk,h.SP,h.uD,h.uX,m.rS],styles:[".archiveTable[_ngcontent-%COMP%]{width:100%}th[_ngcontent-%COMP%]{background-color:#818dcf;color:#fff}.badge[_ngcontent-%COMP%], .badge-resolved[_ngcontent-%COMP%], .badge-not-admissible[_ngcontent-%COMP%], .badge-in-progress[_ngcontent-%COMP%], .badge-new[_ngcontent-%COMP%]{width:100px;color:#fff;text-align:center;padding:5px 9px;letter-spacing:.1em;font-weight:500;font-size:12px;border-radius:0;text-transform:capitalize}.badge-new[_ngcontent-%COMP%]{background-color:#ffae3ee0}.badge-in-progress[_ngcontent-%COMP%]{background-color:#012970c2}.badge-not-admissible[_ngcontent-%COMP%]{background-color:#ff4b3edb}.badge-resolved[_ngcontent-%COMP%]{background-color:#4bec81}.cursor[_ngcontent-%COMP%]{cursor:pointer}"]}),n})()}];let z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.Bz.forChild(F),u.Bz]}),n})();var B=o(4660);let Q=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[m.ez,z,B.m]}),n})()}}]);