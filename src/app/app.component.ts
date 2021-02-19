import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlDateTimeComponent } from 'ng-pick-datetime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Hotel';
  public minDate = new Date( new Date().getFullYear(), new Date().getMonth(),  new Date().getDate());
  public maxDate = new Date( new Date().getFullYear(), new Date().getMonth() + 3,  new Date().getDate());


  isShowIn: boolean = false
  showOnPage: boolean = false
  keyword = 'name';

  public hotels = [
    {
      id: 1,
      name: 'Moree, Australia',
    },
    {
      id: 2,
      name: 'Mornington Island, Australia',
    },
    {
      id: 3,
      name: 'Morelia, Mexico',
    },
    {
      id: 4,
      name: 'Agadir, Morocco',
    },
    {
      id: 5,
      name: 'Casablanca, Morocco',
    },
    {
      id: 6,
      name: 'Sint-Denijs-Westrem, Belgium',
    },
    {
      id: 7,
      name: 'Singapore, Singapore',
    },
    {
      id: 8,
      name: 'Sinharaja, Sri Lanka',
    },
    {
      id: 9,
      name: 'Sault Ste Marie (CA), Canada',
    },
    {
      id: 10,
      name: 'Al Khobar, Saudi Arabia',
    },
    {
      id: 11,
      name: 'Hafr Albatin, Saudi Arabia',
    },
    {
      id: 12,
      name: 'Jeddah, Saudi Arabia',
    },
    {
    	id: 13,
    	name: 'Bangalore, India'
    },
    {
    	id: 14,
    	name: 'Dehra Dun, India'
    },
    {
    	id: 15,
    	name: 'Delano (US) CA, United States'
    }
  ];


  onFocused(e) {
    // do something
    this.showOnPage = false
  }
  searchData = {hotel: {}, arrv: '', dest: '', nm: 0};

  onChangeSearch(search: string) {
  	if (search.length == 3) {
  		this.isShowIn = true
  		// code...
  	}
  	else{
  		this.isShowIn = false
  	}
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  @ViewChild('arInp', { static: true }) arvInput: ElementRef;
  selectEvent(item) {
    // do something with selected item
    console.log(item, 'Item Selected')
    let el: HTMLElement = this.arvInput.nativeElement
    this.searchData.hotel = item;
    el.click()
  }
  @ViewChild('desInp', { static: true }) destInput: ElementRef;
  onInputArival(eventSent){
    console.log(eventSent, 'Event Pushed')
    let el: HTMLElement = this.destInput.nativeElement
    this.searchData.arrv = eventSent.value;
    el.click()
  }
  @ViewChild('numPers', { static: true }) persUnit: ElementRef;
  onInputDest(eventSent){
    console.log(eventSent, 'Event Pushed Dest')
    let el: HTMLElement = this.persUnit.nativeElement
    this.searchData.dest = eventSent.value;
    el.focus()
  }
  numberChanged(eventSent){
    this.searchData.nm = eventSent;
    console.log(eventSent, 'Event Pushed Final', this.searchData)
  }
  showTheData(){this.showOnPage = true}

  ngOnInit(){
	  // console.log(this.minDate)
	  // console.log(this.maxDate)
  }
}
