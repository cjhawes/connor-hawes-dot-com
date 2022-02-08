import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/contact/email.service';

@Component({
  selector: 'email-modal',
  templateUrl: './email-modal.component.html',
  styleUrls: ['./email-modal.component.scss']
})
export class EmailModalComponent implements OnInit {

  public formData!: FormGroup;

  @ViewChild('closebutton') closebutton: any;

  constructor(private builder: FormBuilder, private emailService: EmailService) { }

  ngOnInit(): void {
    this.formData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Comment: new FormControl('', [Validators.required])
    });
  }

  onSubmit(formData: FormGroup) {
    console.log(formData)
    this.emailService.sendMail(formData);
    this.closebutton.nativeElement.click();
  }

}
