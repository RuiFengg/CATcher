import { Component, OnInit, Input } from '@angular/core';
import { LabelService } from '../../core/services/label.service';
import {FormGroup, AbstractControl} from '@angular/forms';
import { Label } from '../../core/models/label.model';

@Component({
  selector: 'app-label-dropdown',
  templateUrl: './label-dropdown.component.html',
  styleUrls: ['./label-dropdown.component.css']
})
export class LabelDropdownComponent implements OnInit {
  @Input() dropdownControl: AbstractControl;
  @Input() attributeName: string;
  @Input() dropdownForm: FormGroup;

  selectedColor: string;
  labelValues: Label[];

  constructor(private labelService: LabelService) { }

  ngOnInit() {
    this.selectedColor = this.labelService.getColorOfLabel('');
    this.labelValues = this.labelService.getLabelList(this.attributeName);
  }

  setSelectedLabelColor(labelValue: string) {
    this.selectedColor = this.labelService.getColorOfLabel(labelValue);
  }

  get dropdownTextColor() {
    return this.labelService.isDarkColor(this.selectedColor) ? 'white-text' : 'black-text';
  }

}
