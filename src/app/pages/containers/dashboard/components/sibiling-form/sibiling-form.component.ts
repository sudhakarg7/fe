import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ISiblingDetails,
  siblingDetailsModel,
} from '@shared/models/siblingDeatils';
import { IStudentDetails } from '@shared/models/studentDetails';

@Component({
  selector: 'app-sibiling-form',
  templateUrl: './sibiling-form.component.html',
  styleUrls: ['./sibiling-form.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class SibilingFormComponent implements OnInit {
  sibilingDetailsForm!: FormGroup;
  @Input() _studentDetails: IStudentDetails[] = [];

  classStud = new Array(10)
    .fill(0)
    .map((i, ind) => ({ label: `class ${ind + 1}`, value: `${ind + 1}` }));
  gender = ['Male', 'Female', 'Other'].map((i) => ({ label: i, value: i }));
  sibling = ['Brother', 'Sister'].map((i) => ({ label: i, value: i }));

  sibilingDetailModel!: ISiblingDetails;
  constructor(private fb: FormBuilder) {
    this.sibilingDetailModel = { ...siblingDetailsModel };
  }

  ngOnInit(): void {
    this.initSibilingDetailsForm();
  }

  initSibilingDetailsForm() {
    let sibilingDetail: ISiblingDetails = { ...this.sibilingDetailModel };
    this.sibilingDetailsForm = this.fb.group({
      // ID: ['',[Validators.required]],
      ADMN_NO: [sibilingDetail.ADMN_NO, []],
      SBLN_RELA: [sibilingDetail.SBLN_RELA, []],
      SBLN_NAME: [sibilingDetail.SBLN_NAME, []],
      SBLN_ADMN_NO: [sibilingDetail.SBLN_ADMN_NO, []],
      SBLN_DISCO: [sibilingDetail.SBLN_DISCO, []],
      SBLN_DOB: [sibilingDetail.SBLN_DOB, []],
      SBLN_CLASS: [sibilingDetail.SBLN_CLASS, []],
      SBLN_COMMENTS: [sibilingDetail.SBLN_COMMENTS, []],
    });
  }
  captureAdmissionNo(e: any) {
    if (e.ADMN_NO) this.sibilingDetailsForm.patchValue({ ADMN_NO: e.ADMN_NO });
  }
}
