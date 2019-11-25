import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  formData = {
    id: '',
    name: '',
    job: ''
  }


  constructor(private apiService: ApiService, private alertController: AlertController, private route: ActivatedRoute, private router: Router) {

    this.route.queryParams.subscribe(params => {
      console.log(this.router.getCurrentNavigation().extras.state);
      if (this.router.getCurrentNavigation().extras.state) {
        this.formData.id = this.router.getCurrentNavigation().extras.state.formDataParams.id;
        this.formData.name = this.router.getCurrentNavigation().extras.state.formDataParams.name;
        this.formData.job = this.router.getCurrentNavigation().extras.state.formDataParams.model;
      }
    });

   }

  ngOnInit() {
  }

  async formSubmit(){

    if(this.formData.id){ 

      await this.apiService.sendPutRequest(this.formData.id, this.formData).subscribe((results)=>{
        console.log(results);
      }, error => {
        console.log(error);
      });

    }
    else{ 

      await this.apiService.sendPostRequest(this.formData).subscribe((results)=>{
        console.log(results);
      }, error => {
        console.log(error);
      });

    }

    const alert = await this.alertController.create({
      header: 'Alerta!',
      subHeader: 'Formulário',
      message: 'Dados enviados',
      buttons: ['OK']
    });

    await alert.present();

  }

}
