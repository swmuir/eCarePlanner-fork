import { Component, OnInit } from '@angular/core';
import { Constants } from '../common/constants';
import { Effective, GenericType } from '../generated-data-api';
import { DataService } from '../services/data.service';
import { formatEffectiveDate, getDisplayValue } from '../util/utility-functions';
declare var window: any;
@Component({
  selector: 'app-clinical-imaging-results',
  templateUrl: './clinical-imaging-results.component.html',
  styleUrls: ['./clinical-imaging-results.component.css']
})
export class ClinicalImagingResultsComponent implements OnInit {

  constructor(public dataservice: DataService) {
  }

  ngOnInit(): void {
  }


  getWotIsLoaded(): boolean {
    return window[Constants.WotIsLoaded];
  }

  getBPisLoaded(): boolean {
    return window[Constants.BPisLoaded];
  }

 getDisplayValue(value: GenericType): any {
    return getDisplayValue(value);
   }


getEffectiveValue(value: Effective): any {
    return formatEffectiveDate(value);
   }
}