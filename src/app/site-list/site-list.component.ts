import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';

import { PasswordManagerService } from '../password-manager.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss'],
})
export class SiteListComponent {
  constructor(
    private passwordManager: PasswordManagerService,
    public firestore: Firestore
  ) {
    this.loadData();
  }
  ngOnInit(): void {
    console.log('onInit invoked');
    this.formData();
  }
  isAdding: boolean = false;
  isEditing: boolean = false;
  addingData!: FormGroup;
  sitesList!: Observable<Array<any>>;
  visiblePassword: boolean = false;
  toggleShow: string = 'Show Password';
  siteName!: string;
  siteURL!: string;
  sitePassword!: string;
  siteImage!: string;
  siteId!: string;
  siteUsername!: string;
  siteEmail!: string;
  toggleEdit: string = 'Add Password';
  toggleCredentials: boolean = false;

  seeCredentials(
    siteEmail: string,
    siteUsername: string,
    sitePassword: string
  ) {
    this.siteEmail = siteEmail;
    this.siteUsername = siteUsername;
    this.sitePassword = sitePassword;
    this.toggleCredentials = !this.toggleCredentials;
    if (this.isAdding == true) this.isAdding = false;
    if (this.isEditing == true) this.isEditing = false;
  }

  hideCredentials() {
    this.toggleCredentials = !this.toggleCredentials;
  }

  toggleAdd(): void {
    this.isAdding = !this.isAdding;
    if (this.isEditing == true) this.isEditing = false;
    if (this.toggleCredentials == true) this.toggleCredentials = false;
  }

  onSubmit(values: any) {
    if (this.isAdding == true) {
      // this.passwordManager
      //   .storeData(values)
      //   .then(() => {
      //     console.log('Data Sent');
      //   })
      //   .catch((err: any) => {
      //     console.log('error', err.message);
      //   });
    } else if (this.isEditing) {
      // this.passwordManager
      //   .updateForm(this.siteId, values)
      //   .then(() => {
      //     console.log('Data Sent');
      //   })
      //   .catch((err: any) => {
      //     console.log('error', err.message);
      //   });
    }
  }

  deleteData(id: string) {
    // this.passwordManager
    //   .deleteForm(id)
    //   .then(() => {
    //     console.log('Data deleted');
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
  }

  loadData() {
    // this.sitesList = this.passwordManager.loadForm();
  }

  showPassword() {
    this.visiblePassword = !this.visiblePassword;
    this.toggleShow = 'Hide Password';
    if (this.visiblePassword == false) {
      this.toggleShow = 'Show Password';
    }
  }

  editSite(
    siteName: string,
    siteURL: string,
    sitePassword: string,
    siteImage: string,
    siteId: string,
    siteUsername: string,
    siteEmail: string
  ) {
    this.siteName = siteName;
    this.siteURL = siteURL;
    this.sitePassword = sitePassword;
    this.siteImage = siteImage;
    this.siteId = siteId;
    this.siteUsername = siteUsername;
    this.siteEmail = siteEmail;

    this.isEditing = !this.isEditing;
    if (this.isAdding == true) this.isAdding = false;
    if (this.toggleCredentials == true) this.toggleCredentials = false;
  }

  formData(): void {
    this.addingData = new FormGroup({
      siteName: new FormControl('', Validators.required),
      siteURL: new FormControl('', Validators.required),
      sitePassword: new FormControl('', Validators.required),
      siteImage: new FormControl('', Validators.required),
      siteEmail: new FormControl('', Validators.required),
      siteUsername: new FormControl('', Validators.required),
    });
  }
}
