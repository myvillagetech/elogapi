"use strict";(self.webpackChunkelog_web=self.webpackChunkelog_web||[]).push([[905],{1905:(T,s,e)=>{e.r(s),e.d(s,{DashboardModule:()=>p});var d=e(6895),r=e(3060),l=e(7030),o=e(4650),g=e(5938),c=e(7199),u=e(9690),v=e(9642),Z=e(8552);const h=[{path:"",component:(()=>{class t{constructor(a,n,f,A,U,b){this.matDialog=a,this.organizationService=n,this.storageService=f,this.confirmationDialogService=A,this.router=U,this.addNewUserService=b}ngOnInit(){}openDialog(){this.organizationService.openCreateOrganizatioPopup()}openAddUser(){this.addNewUserService.openAddUser()}createOrganization(){this.organizationService.openCreateOrganizatioPopup()}logout(){this.confirmationDialogService.open({message:"Are you Sure to Logout!!"}).afterClosed().subscribe(a=>{a&&(this.storageService.clearLocalStorage(),this.router.navigate([l.p.HOME]))})}}return t.\u0275fac=function(a){return new(a||t)(o.Y36(g.uw),o.Y36(c.M),o.Y36(u.V),o.Y36(v.O),o.Y36(r.F0),o.Y36(Z.E))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-dashboard"]],decls:66,vars:0,consts:[[1,"section","dashboard"],[1,"row"],[1,"col-md-6"],[1,"card","dashboard-card"],[1,"col-md-6","col-sm-6"],[1,"widget","stats-widget"],[1,"widget-body","clearfix"],[1,"pull-left"],[1,"widget-title","text-primary"],["data-plugin","counterUp",1,"counter"],[1,"text-color"],[1,"pull-right","big-icon","watermark"],[1,"fa","fa-paperclip"],[1,"widget-footer","bg-primary"],[1,"widget-title","text-danger"],[1,"fa","fa-ban"],[1,"widget-footer","bg-danger"],[1,"widget-title","text-success"],[1,"fa","fa-unlock-alt"],[1,"widget-footer","bg-success"],[1,"widget-title","text-warning"],[1,"fa","fa-file-text-o"],[1,"widget-footer","bg-warning"]],template:function(a,n){1&a&&(o.TgZ(0,"h2"),o._uU(1,"Hi, Welcome to Dashboard"),o.qZA(),o.TgZ(2,"section",0)(3,"div",1)(4,"div",2)(5,"div",3)(6,"h2"),o._uU(7,"Activity"),o.qZA(),o.TgZ(8,"div",1)(9,"div",4)(10,"div",5)(11,"div",6)(12,"div",7)(13,"h3",8)(14,"span",9),o._uU(15,"1"),o.qZA()(),o.TgZ(16,"small",10),o._uU(17,"New"),o.qZA()(),o.TgZ(18,"span",11),o._UZ(19,"i",12),o.qZA()(),o.TgZ(20,"footer",13)(21,"small"),o._uU(22,"20% "),o.qZA()()()(),o.TgZ(23,"div",4)(24,"div",5)(25,"div",6)(26,"div",7)(27,"h3",14)(28,"span",9),o._uU(29,"0"),o.qZA()(),o.TgZ(30,"small",10),o._uU(31,"Not Admissible"),o.qZA()(),o.TgZ(32,"span",11),o._UZ(33,"i",15),o.qZA()(),o.TgZ(34,"footer",16)(35,"small"),o._uU(36,"0% "),o.qZA()()()(),o.TgZ(37,"div",4)(38,"div",5)(39,"div",6)(40,"div",7)(41,"h3",17)(42,"span",9),o._uU(43,"1"),o.qZA()(),o.TgZ(44,"small",10),o._uU(45,"Resolved"),o.qZA()(),o.TgZ(46,"span",11),o._UZ(47,"i",18),o.qZA()(),o.TgZ(48,"footer",19)(49,"small"),o._uU(50,"20% "),o.qZA()()()(),o.TgZ(51,"div",4)(52,"div",5)(53,"div",6)(54,"div",7)(55,"h3",20)(56,"span",9),o._uU(57,"3"),o.qZA()(),o.TgZ(58,"small",10),o._uU(59,"In-Progress"),o.qZA()(),o.TgZ(60,"span",11),o._UZ(61,"i",21),o.qZA()(),o.TgZ(62,"footer",22)(63,"small"),o._uU(64,"60% "),o.qZA()()()()()()(),o._UZ(65,"div",2),o.qZA()())}}),t})()}];let m=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[r.Bz.forChild(h),r.Bz]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[d.ez,m]}),t})()}}]);