
import { Component, OnInit } from '@angular/core';
import { perks } from 'src/app/interfaces/perks';
import { InfoServService } from 'src/app/service/info-serv.service';

@Component({
  selector: 'app-perks',
  templateUrl: './perks.component.html',
  styleUrls: ['./perks.component.sass']
})
export class PerksComponent implements OnInit {

  perks!: perks[];
  constructor(
    private dbdService: InfoServService
  ) { }

  ngOnInit(): void {
    this.getPerks()
   console.log(this.getImg())
  }
  
  getPerks(){
   this.dbdService.getPerks().subscribe(resp =>{
      this.perks = Object.values(resp)
      console.log(this.perks)
    })
  }

 convertPlayerRole(role:string){
    switch(role) {
      case "EPlayerRole::VE_Slasher":
        return "Killer";
      case "EPlayerRole::VE_Camper":
        return "Survivor";
      default:
        return "";
    }
  }

  getImg(){
  const formated = this.perks[2].displayName.replace(/\s+/g, '')
  const formated2 = formated.replace(/[^a-zA-Zs]/g, "")
    
  return "https://github.com/larasouzabr/dbd/tree/master/Perks/"+formated2+".png"
  }
}
