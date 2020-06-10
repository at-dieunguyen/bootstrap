import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  show= false;
  constructor() { }

  ngOnInit(): void {
  }
  showModal() {
    this.show = true;
  }
  closeModal() {
    this.show = false;
    console.log(this.show)
  }
}
