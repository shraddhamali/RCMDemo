import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { __values } from 'tslib';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private router: Router,
    private commonService: CommonService) { }

    showNavLabels: boolean = true;
  selectedFileChronicDieases: any = {
    chronicDieases: []
  };

  ngOnInit(): void {

  }

  public filePath: string = './assets/data/pdf/';
  selectedPdfFilePath: string = '';
  filenames = ['2080241762-50 (2).pdf', '2090008119-42.pdf', '2090009847-46.pdf', '2090010030-47.pdf', '2090010256-45.pdf'];
  onItemClick(index: number) {
    this.selectedPdfFilePath = this.filePath + this.filenames[index];
    this.commonService.getSelectedFileChronicDieases(this.filenames[index])
      .subscribe(res => {
        console.log(res);
        this.selectedFileChronicDieases = res;
      })
  }

  updateCode() {
    this.commonService.updateCode(this.selectedFileChronicDieases).subscribe(res => {
      console.log(res);
    })
  }

  toggle(sidenavbar: any, ev: any) {
    ev.stopImmediatePropagation();
    sidenavbar.toggle();
  }
}
