import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ApiContactFormService } from "../services/api-contact-form.service";

@Component({
  selector: 'vtl-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  /*p*/
  isTesting!: boolean;
  contactCompany!: string;
  contactLastname!: string;
  contactFirstname!: string;
  contactEmail!: string;
  contactSubject!: string;
  contactDescription!: string;
  validateForm!: boolean;

  constructor(private apiContactFormService: ApiContactFormService) {
  }

  ngOnInit(): void {
    this.isTesting = false;
  }

  onSubmitForm(form: NgForm) {
    // TODO : fonction à implémenter via ApiContactFormService
    if(form.valueChanges) {

    }
    this.apiContactFormService.submitForm(form.value);

    ///// TODO : pour TEST uniquement
                console.log(form.value);
    ///// FIN TEST
  }
}


