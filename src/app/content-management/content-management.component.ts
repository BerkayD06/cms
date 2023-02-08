import { Router } from '@angular/router';
import { licenseService } from './../license.service';
import { license } from './../license';
import { ContentService } from './../content.service';
import { Content } from './../content';
/*import { ContentistekComponent } from './../contentistek/contentistek.component';*/
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-content-management',
  templateUrl: './content-management.component.html',
  styleUrls: ['./content-management.component.scss'],
})
export class ContentManagementComponent implements OnInit {



  nextStep() {
  throw new Error('Method not implemented.');
  }
  addLicenses() {
  throw new Error('Method not implemented.');
  }
  contentForm!: FormGroup;
  licenseForm: any;
  public contentDeger(lisans: license): void {
    if (this.content != null) {
      this.content!.licenses.fill(lisans);
    }
  }

  public Contents: Content[] | undefined;
  content?: Content;
  public Licenses: license[] | undefined;
  license?: license;

  constructor(
    private contentService: ContentService,
    private fb: FormBuilder,
    private licenseService: licenseService,
    private fbb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit() {

    this.contentForm = this.fb.group({
      name: ['', [Validators.maxLength(50)]],
      posterUrl: ['', [Validators.maxLength(50)]],
      videoUrl: ['', [Validators.maxLength(50)]],
      status: [!this.content?.licenses ? 'InProgress' : 'Published'],
    });
    this.getContent();

    this.licenseForm = this.fbb.group({
      name: ['', [Validators.maxLength(50)]],
      startTime: ['', [Validators.maxLength(50)]],
      endTime: ['', [Validators.maxLength(50)]],
    });
    this.getLicense();

  }

  public getContent(): void {
    this.contentService.getContent().subscribe({
      next: (response: Content[]) => {
        this.Contents = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
  public getLicense(): void {
    this.licenseService.getLicense().subscribe({
      next: (response: license[]) => {
        this.Licenses = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }


  addContent(): void {
    this.contentService.addContent(this.contentForm?.value).subscribe(
      (res: any) => {
        this.getContent();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  tarihAta(): void {
    let timeArray1 = this.licenseForm.value.endTime.split('-');
    let year = timeArray1[0];
    let month = timeArray1[1];
    let day = timeArray1[2];
    let selectedDate: Date = new Date(year, month, day);
    this.licenseForm.value.endTime = selectedDate.getTime();
    let timeArray2 = this.licenseForm.value.startTime.split('-');
    let year2 = timeArray2[0];
    let month2 = timeArray2[1];
    let day2 = timeArray2[2];
    let selectedDate2: Date = new Date(year2, month2, day2);
    this.licenseForm.value.startTime = selectedDate2.getTime();
  }
  addLicense(): void {
    this.tarihAta();
    this.licenseService.addLicense(this.licenseForm?.value).subscribe(
      (res: any) => {
        this.getLicense();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  deleteContent(id: number){
    this.contentService.deleteContent(id).subscribe( data => {
      console.log(data);
      this.getContent();
    })
  }

  deleteLicense(id: number){
    this.licenseService.deleteLicense(id).subscribe( data => {
      console.log(data);
      this.getLicense();
    })
  }

  updatecontent(id: number){
    this.router.navigate(['updatecontent', id]);

  }

}
