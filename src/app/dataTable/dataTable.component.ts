import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dataTable',
  imports: [
    NzFormModule,
    NzCardModule,
    NzInputModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzCheckboxModule,
    NzIconModule,
    NzDividerModule,
    NzTableModule,
    NzTagModule,
    NzProgressModule,
    CommonModule
  ],
  templateUrl: './dataTable.component.html',
  styleUrls: ['./dataTable.component.css'],
})
export class DataTableComponent {
  listOfData = [
    {
      id: 1,
      name: 'Server 1',
      status: 'Normal',
      location: '192.168.1.1',
      cpuUsage: 75,
      memoryUsage: 60,
      lastUpdated: new Date(),
    },
    {
      id: 2,
      name: 'Server 2',
      status: 'Warning',
      location: '192.168.1.2',
      cpuUsage: 50,
      memoryUsage: 80,
      lastUpdated: new Date(),
    },
    {
      id: 3,
      name: 'Server 3',
      status: 'Error',
      location: '192.168.1.3',
      cpuUsage: 90,
      memoryUsage: 70,
      lastUpdated: new Date(),
    },
  ];
  constructor() {}

  edit(id: number): void {
    console.log('Edit:', id);
  }

  delete(id: number): void {
    console.log('Delete:', id);
  }

  viewDetails(id: number): void {
    console.log('View Details:', id);
  }
}
