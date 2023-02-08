import { ActivatedRoute } from '@angular/router';
import { ContentService } from './../content.service';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { Content } from '../content';
import { licenseService } from './../license.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { license } from '../license';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-updatecontent',
  templateUrl: './updatecontent.component.html',
  styleUrls: ['./updatecontent.component.scss'],
})
export class UpdatecontentComponent implements OnInit {
  constructor(
    public licenseService: licenseService,
    private fb: FormBuilder,
    private contentService: ContentService,
    private route: ActivatedRoute,
  ) {}

  licenseList: license[] = [];

  licenseForm: any;
  contentForm!: FormGroup;
  id: number | undefined;
  content: Content | undefined;
  selectForm!: FormGroup;

  ngOnInit(): void {
    this.getLicense();
    this.selectForm = this.fb.group({
      license: ['qwe', [Validators.required]],
    });
    this.licenseForm = this.fb.group({
      name: ['', [Validators.maxLength(50)]],
      startTime: ['', [Validators.maxLength(50)]],
      endTime: ['', [Validators.maxLength(50)]],
    });


    /* public getLicense(): void {
      this.licenseService.getLicense().subscribe({
        next: (response: license[]) => {
          this.Licenses = response;
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      });
    }*/
    /*this.licenseForm = this.fbb.group({
      name: ['', [Validators.maxLength(50)]],
      startTime: ['', [Validators.maxLength(50)]],
      endTime: ['', [Validators.maxLength(50)]],
    });
    this.getLicense();

    /*this.id = this.route.snapshot.params['id']

    this.contentService.getContentById(this.id).subscribe(data =>{
      this.content = data;
    },
    error => console.log(error));*/
  }


  addContentLic():void{
    console.log("calıştıı");

    const id:number = this.route.snapshot.params["id"];
    this.contentService.addContentLicense(id,this.selectForm.value);
  }

  public getLicense(): void {
    this.licenseService.getLicense().subscribe({
      next: (response: license[]) => {
        this.licenseList = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}
