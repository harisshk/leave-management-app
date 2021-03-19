import { Component, OnInit } from '@angular/core';
import { LeaveService } from 'src/app/service/leave.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  current=0;
  max=0;
  radius: number = 125;
  semicircle: boolean = false;
  leave=Array();
  annualcurrent=0;  annualmax=0;
  sickcurrent=0 ;sickmax=0;
  compcurrent=0;compmax=0;
  casualcurrent=0;casualmax=0
  constructor(private leaveService:LeaveService) { }

  ngOnInit(): void {
    this.leaveService.getLeaveById().subscribe(res=>{
      this.leave.push(res)
      console.log("Leave array",this.leave)
      this.caluculateLeve();
    });
    
  }


  getOverlayStyle() {
    const isSemi = this.semicircle;
    const transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      top: isSemi ? 'auto' : '50%',
      bottom: isSemi ? '5%' : 'auto',
      left: '50%',
      transform,
      'font-size': this.radius / 3.5 + 'px',
    };
  }
  caluculateLeve(){
    this.annualcurrent=this.leave[0]['annualLeaveAlloted']-this.leave[0]['annualLeaveTaken']
      this.annualmax=this.leave[0]['annualLeaveAlloted'];
    this.sickcurrent=this.leave[0]['sickLeaveAlloted']-this.leave[0]['sickLeaveTaken']
    this.sickmax=this.leave[0]['sickLeaveAlloted']
    this.casualcurrent=this.leave[0]['casualLeaveAlloted']-this.leave[0]['casualLeaveTaken']
    this.casualmax=this.leave[0]['casualLeaveAlloted'];
    this.compcurrent=this.leave[0]['compensatoryLeaveAlloted']-this.leave[0]['compensatoryLeaveTaken']
    this.compmax=this.leave[0]['compensatoryLeaveAlloted']
    this.max=this.compmax+this.sickmax+this.casualmax+this.annualmax;
    this.current=this.compcurrent+this.annualcurrent+this.casualcurrent+this.sickcurrent
  }

}
