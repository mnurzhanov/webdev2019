import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { ProviderService } from '../shared/services/provider.service';
import { CompileNgModuleSummary } from '@angular/compiler';
import { TaskList, Tasks } from '../shared/models/models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public taskLists: TaskList[] = [];
  public tasks: Tasks[] = [];

  constructor(private provider: ProviderService) { }

  ngOnInit() {
    this.provider.getTaskLists().then(res => {
      this.taskLists = res;
    });
  }
  getTaskOfTaskList(taskList: TaskList) {
    this.provider.getTasks(taskList.id).then(res => {this.tasks = res; });
  }
}
