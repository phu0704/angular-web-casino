import { Injectable, OnInit } from '@angular/core';
import { optionApi, Bookie, User } from './types';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService implements OnInit {
  private urlBookieList = 'http://localhost:3000/bookieList';
  private urlUser: string = 'http://localhost:3000/users';
  private _sidebarStatus = false;

  get statusLogin(): boolean {
    return this._statusLogin;
  }

  set statusLogin(value: boolean) {
    this._statusLogin = value;
  }

  private _statusLogin: boolean = false;
  private _optionList: optionApi[] = [
    {
      img: '../assets/img/sidebar/cassino-add-chips.png',
      name: 'Online Casino',
      option: [
        'Top online casinos',
        'Newly opened casinos',
        'Big Brands',
        'All Casinos',
      ],
    },
    {
      img: '../assets/img/sidebar/casino-diamond-bag-1.png',
      name: 'Bonuses',
      option: [
        'No Deposit Bonuses',
        'Deposit Bonuses',
        'Reload Bonuses',
        'Cashback Bonuses',
        'All Bonuses',
      ],
    },
    {
      img: '../assets/img/sidebar/board-game.png',
      name: 'Games',
      option: [
        'Slots',
        'Roulette',
        'Video poker',
        'Blackjack',
        'Scratch cards',
        'All Games',
      ],
    },
    {
      img: '../assets/img/sidebar/blog-blogger.png',
      name: 'Blog',
      option: [''],
    },
  ];
  private _tab = [
    {
      name: 'Recommended',
      content:
        "We've thoroughly reviewed Wazamba Casino and gave it a good reputation rating. It's generally a good casino to play at, but there are some things worth noting. In our review, we've considered the casino's player complaints , estimated revenues, license, games genuineness, customer support quality, fairness of terms and conditions, withdrawal and win limits, and other factors. Because Wazamba Casino is related to other online casinos listed n limits, and other factors. Because Wazamba Casino is related to other online casinos listed below, its rating is also influenced by them. Read",
      status: true,
    },
    {
      name: 'Big Brands',
      content:
        "In our review, we've considered the casino's player complaints , estimated revenues, license, games genuineness, customer support quality, fairness of terms and conditions, withdrawal and win limits, and other factors. Because Wazamba Casino is related to other online casinos listed n limits, and other factors.",
      status: false,
    },
    {
      name: 'Newly Opened',
      content:
        "Because Wazamba Casino is related to other online casinos listed below. We've thoroughly reviewed Wazamba Casino and gave it a good reputation rating. It's generally a good casino to play at, but there are some things worth noting.We've thoroughly reviewed Wazamba Casino and gave it a good reputation rating. It's generally a good casino to play at, but there are some things worth noting.We've thoroughly reviewed Wazamba Casino and gave it a good reputation rating. It's generally a good casino to play at, but there are some things worth noting. In our review, we've considered the casino's player complaints , estimated revenues, license, games genuineness, customer support quality, fairness of terms and conditions, withdrawal and win limits, and other factors. Because Wazamba Casino is related to other online casinos listed n limits, and other factors. Because Wazamba Casino is related to other online casinos listed below",
      status: false,
    },
    {
      name: 'All',
      content: '',
      status: false,
    },
  ];
  private _bookieList: Bookie[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    console.log('OnInit appService');
  }
  private _itemsPerPage: number = 4;
  get itemsPerPage(): number {
    return this._itemsPerPage;
  }

  set itemsPerPage(value: number) {
    this._itemsPerPage = value;
  }

  private _p: number = 1;
  get p(): number {
    return this._p;
  }
  set p(value: number) {
    this._p = value;
  }
  get bookieList() {
    return this._bookieList;
  }
  get bookieListApi(): Observable<Bookie[]> {
    return this.http.get<Bookie[]>(this.urlBookieList).pipe(
      tap((receivedBookieList) => {
        console.log('get bookieListApi success');
      }),
      catchError((err) => of([]))
    );
  }
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.urlUser).pipe(
      tap((UserList: User[]) => {
        console.log('get UserListApi success');
      }),
      catchError((err) => of([]))
    );
  }
  setBookieListApi(bookie: Bookie): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put(
      `${this.urlBookieList}/${bookie.id}`,
      bookie,
      httpOptions
    );
  }
  set bookieList(value: Bookie[]) {
    this._bookieList = value;
  }
  get sidebarStatus(): boolean {
    return this._sidebarStatus;
  }
  set sidebarStatus(value: boolean) {
    this._sidebarStatus = value;
  }
  get optionList() {
    return this._optionList;
  }
  set optionlist(value: optionApi[]) {
    this._optionList = value;
  }
  get tab() {
    return this._tab;
  }
  set tab(value: { name: string; content: string; status: boolean }[]) {
    this._tab = value;
  }
}
