import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-songvoting',
  templateUrl: './songvoting.component.html',
  styleUrls: ['./songvoting.component.css']
})
export class SongvotingComponent implements OnInit {

  items :any;
  catName: string = '';
  loading: boolean = true;
  closeResult: string = '';
  modalVote: string = '';
  modalyoutubeID: string = '';
  voteResponse: string = '';
  voted: boolean = false;

  constructor(private route: ActivatedRoute,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private http: HttpClient) { }

    voteForm = this.formBuilder.group({
      name: '',
      email: '',
      province: '',
    });

  ngOnInit() {
    this.getParams();
    this.voteForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      province: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  open(content:any, title:any, ytID:any) {
    this.modalVote = title;
    this.modalyoutubeID = ytID;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  voteSubmit(): void {
    // Process checkout data here
    this.castVote(this.voteForm.value, this.modalVote);
  
    //console.warn('Your order has been submitted', this.voteForm.value);
    this.voteForm.reset();
  }

  castVote(player:any, vote:any) {
    this.http
      .post(`http://137.220.53.124:4000/vote`, { player, vote })
      .subscribe((res: any) => {
        this.voteResponse = res.player;
        this.voted = true;
        console.log(this.voteResponse);
      });
  }

  getParams() {
    let paramType;
    this.route.params
    .subscribe((params) => {
      paramType = params['category']
    })
    let type :string = String(paramType);
    this.catName = type;
    let bhojSongs = [
      {
        title: "Chaka Chak",
        artist: "Atrangi Re",
        image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-1-Atrangi-Re-Chaka-Chak.jpg',
        youtubeID: 'Vzlq8JFwhb8'
      },
      {
        title: "Lambiyan",
        artist: "Raataan Lambiyan",
        image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-2-Raataan-Lambiyan-Lambiyan.jpg',
        youtubeID: 'gvyUuxdRdR4'
      },
      {
        title: "Satyameva Jayate",
        artist: "Kusu Kusu",
        image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-3-.Kusu-Kusu-Satyameva-Jayate.jpg',
        youtubeID: 'RgzLnmTaCAU'
      },
      {
        title: "Chehre",
        artist: "Rang Dariya",
        image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-4-Rang-Dariya-chehre.jpg',
        youtubeID: 'Jrrs2izNSL4'
      },
      {
        title: "Badshah",
        artist: "Paani Paani",
        image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-5-Paani-Paani-Badshah.jpg',
        youtubeID: 'j9J7cjGU_jM'
      },
      {
        title: "Mimi",
        artist: "Param Sundari",
        image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-6-Param-Sundari-Mimi.jpg',
        youtubeID: 'w4ClQO0FFQg'
      },
      {
        title: "Satyameva Jayate",
        artist: "Tenu Lehenga",
        image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-7-Tenu-Lehenga-Satyameva-Jayate.jpg',
        youtubeID: 'eZRpNmSgVOg'
      },
      {
        title: "Mere Yaara",
        artist: "Sooryavanshi",
        image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-8-Mere-Yaara-Sooryavanshi.jpg',
        youtubeID: 'iTAj46KJZtM'
      },
      {
        title: "Tip Tip Barsa",
        artist: "Sooryavanshi",
        image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-9-Tip-Tip-Barsa-Sooryavanshi.jpg',
        youtubeID: 'l9u8Zb4fY1c'
      },
      {
        title: "Najaa",
        artist: "Sooryavanshi",
        image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-10-.Najaa-Sooryavanshi.jpg',
        youtubeID: 'cX6g4cbVBwI'
      },
      {
        title: "Zaalima Coca Cola",
        artist: "",
        image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-11-.Zaalima-Coca-Cola.jpg',
        youtubeID: 't6n-BVCelnU'
      },
      {
        title: "Dil Ko karaar Aaaya",
        artist: "",
        image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-12-Dil-Ko-karaar-Aaaya.jpg',
        youtubeID: 'lX3vT_Gm_HE'
      },
      {
        title: "Yo Yo honey Singh",
        artist: "Saiyaan ji",
        image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-13-Saiyaan-ji-Yo-Yo-honey-Singh.jpg',
        youtubeID: 'VEkj2sanAeU'
      },
      {
        title: "Tumse Bhi Zyada",
        artist: "Tadap",
        image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-14-Tumse-Bhi-Zyada-Tadap.jpg',
        youtubeID: '7JaQPqf-X4Y'
      },
      {
        title: "Tu mera Hogaya Hai",
        artist: "Tadap",
        image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-15-.Tu-mera-Hogaya-Hai-tadap.jpg',
        youtubeID: 'cZkYaSk2ZMk'
      },
      {
        title: "Aashiqui Aa gayi",
        artist: "Radhe Shyam",
        image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-16-Aashiqui-Aa-gayi-song-Radhe-Shyam.jpg',
        youtubeID: 'c-NaCU2n8jg'
      },
      {
        title: "Hum Do hamare Do",
        artist: "Bansuri",
        image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-17-Bansuri-Hum-Do-hamare-Do.jpg',
        youtubeID: 'jpQ9Rs5ZFNE'
      },
      {
        title: "Vaaste",
        artist: "",
        image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-18-Vaaste.jpg',
        youtubeID: 'BBAyRBTfsOU'
      },
      {
        title: "Khairiyat",
        artist: "Chichorre",
        image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-19-Khairiyat-Chichorre.jpg',
        youtubeID: '9-AKLAfpjrI'
      },
      {
        title: "Garmi",
        artist: "Street Dancer 3D",
        image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-20-garmi-Street-Dancer-3D.jpg',
        youtubeID: 'IE8OD5FbU-c'
      },
    ];

    let segaSongs = [
      {
        title: "Danzere",
        artist: "Anonnym",
        image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-1-Danzere-Anonnym.jpg',
        youtubeID: '5k_302jQWxU'
      },
      {
          title: "Cherie Coco", 
          artist: "Solda Nast",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-2-Cherie-Coco-Solda-Nast.jpg',
          youtubeID: 'IIS2XFege6c'
      },
      {
          title: "Mwen Ti Zilwa",
          artist: "Allan Dupuy",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-3-Mwen-Ti-Zilwa-Allan-Dupuy.jpg',
          youtubeID: '6aPmviZQEE4'
      },
      {
          title: "Sega Ar Pwa",
          artist: "sky to be",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-4-Sega-Ar-Pwa-sky-to-be.jpg',
          youtubeID: 'Hp9S_4TiY4A'
      },
      {
          title: "Madame Marga",
          artist: "Alain Ramanisum",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-5-Madame-Marga-–-Alain-Ramanisum.jpg',
          youtubeID: 'CyZiSdpHk1c'
      },
      {
          title: "Monn Love",
          artist: "Cindia Amerally",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-6-Monn-Love-Cindia-Amerally.jpg',
          youtubeID: 'XOap7vxlByc'
      },
      {
          title: "BONNTO",
          artist: "Bigg Frankii",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-7-BONNTO-Bigg-Frankii.jpg',
          youtubeID: 'Jnl8jggcKro'
      },
      {
          title: "Mootia",
          artist: "Elijah & Linzy Bacbotte",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/NO-8-Mootia-Elijah-_-Linzy-Bacbotte.jpg',
          youtubeID: '0UV49yKVtqM'
      },
      {
          title: "Janvier",
          artist: "Andy Janvier",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-9-janvier-–-Andy-Janvier.jpg',
          youtubeID: 'zpX6mHPaRgg'
      },
      {
          title: "Ingra",
          artist: "Jason Heerah & Otentik Groove",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-10-Ingra-Jason-Heerah-_-Otentik-Groove.jpg',
          youtubeID: 'HEFGsYg9-Tg'
      },
      {
          title: "MARYE LI",
          artist: "JïoN feat Sista Sophie & LovemanBeat",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-11-MARYE-LI-JioN-feat-Sista-Sophie-_-LovemanBeat.jpg',
          youtubeID: 'JE5vtES-VWk'
      },
      {
          title: "Natcho",
          artist: "Bigg Frankii",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-12-Natcho-Bigg-Frankii.jpg',
          youtubeID: '0vVtqC2pC3w'
      },
      {
          title: "Toujours la pu toi",
          artist: "Avi S , Paskal Feat",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-13-Toujours-la-pu-toi-Avi-S-Paskal-Feat.jpg',
          youtubeID: 'bfhf-8TiKuI'
      },
      {
          title: "Ti lipié fer rozet",
          artist: "JSB MORNING GAME",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-14-Ti-lipie-fer-rozet-JSB-MORNING-GAME.jpg',
          youtubeID: 'Vvw9i9HDiv8'
      },
      {
          title: "Kouler mo Lapo",
          artist: "Zulu feat",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-15-Kouler-mo-Lapo-Zulu-feat..jpg',
          youtubeID: 'ubuYGrt0RoM'
      },
      {
          title: "Move Por",
          artist: "Blakkayo",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-16-Move-Por-–-Blakkayo.jpg',
          youtubeID: 'L4iuiNWeOkc'
      },
      {
          title: "Nanier Napa Pou Nou",
          artist: "Ten Mooken ft. Nitish Joganah",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-17-Nanier-Napa-Pou-Nou-Ten-Mooken-ft.-Nitish-Joganah.jpg',
          youtubeID: '15VGaY0RW4o'
      },
      {
          title: "Soley Pou Leve",
          artist: "Justice Lecoq",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-18-Soley-Pou-Leve-Justice-Lecoq.jpg',
          youtubeID: 'ARbA29LoW2w'
      },
      {
          title: "The Prophecy",
          artist: "Lamour Paternel",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-19-The-Prophecy-Lamour-Paternel.jpg',
          youtubeID: 'zXMFT02iTgU'
      },
      {
          title: "Lorda",
          artist: "Elpassi ft. Lom Jey",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-20-Lorda-Elpassi-ft-lom-jey.jpg',
          youtubeID: 'R2TTiVDvrQc'
      },
      {
          title: "loner nou folklore",
          artist: "Ricardo Amadis",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-21-loner-nou-folklore-Ricardo-Amadis.jpg ',
          youtubeID: 'gLxgUazI2i8'
      },
      {
          title: "Avoy li doww",
          artist: "JAH MIKE ft DJ TEPHEN",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-22-Avoy-li-doww-jah-mike.jpg',
          youtubeID: 'dhvPAzg_xkQ'
      },
      {
          title: "Bas Tere",
          artist: "Vanessa Mathews feat Nikhil Shibnauth",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-23-Vanessa-Mathews-feat-Nihil.jpg',
          youtubeID: 'X9pPljIzfR8'
      },
      {
          title: "Eliza",
          artist: "Christopher Warren Permal",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-24-Eliza-christopher-warren-permal.jpg',
          youtubeID: 'Nv5QR8uiiXo'
      },
      {
          title: "Mama",
          artist: "Rusina Lacruche",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-25-Mama-Rusina-Lacruche.jpg',
          youtubeID: ''
      },
      {
          title: "DIBIEN FAMI",
          artist: "Clarel Armel",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-26-Dibien-clarel-armel.jpg',
          youtubeID: 'zl8zIMoogDM'
      },
    ];

    let euroSongs = [
      {
        title: "Easy on me",
        artist: "Adel",
        image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/no-1-Easy-on-me.jpg',
        youtubeID: 'X-yIEMduRXk'
      },
      {
          title: "Ma sœur",
          artist: "Amele, Camelia Jordana",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-2-Ma-soeur.jpg',
          youtubeID: '9ASkKTTTOXc'
      },
      {
          title: "Low",
          artist: "Blaiz Fayah x Dj Glad",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-3-Low.jpg',
          youtubeID: '3lfnR7OhZY8'
      },
      {    
          title: "Higher power",
          artist: "cold play",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-4-Higher-power.jpg',
          youtubeID: '3lfnR7OhZY8'
      },
      {    
          title: "if you really love me", 
          artist: "David Guetta x MistaJam x John Newman",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-5-if-you-really-love-me.jpg',
          youtubeID: '2aJfC8JR2No'
      },
      {
          title: "shivers",
          artist: "Ed Sheeran",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-6-Shivers.jpg',
          youtubeID: 'Il0S8BoucSA'
      },
      {
          title: "3SEX", 
          artist: "Indochine & Christine and the Queens",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-7-3Sex.jpg',
          youtubeID: 'PJ7H-INlclg'
      },
      {
          title: "Jalebi Baby", 
          artist: "Tesher x Jason Derulo",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-8-Jalebi-Baby.jpg',
          youtubeID: 'CTmKrwFu7wg'
      },
      {
          title: "Go Down Deh", 
          artist: "Spice, Sean Paul, Shaggy",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-9-Go-down-deh.jpg',
          youtubeID: 'lZizLbWxr_E'
      },
      {
          title: "Love Nwantiti", 
          artist: "CKay joeboy & Kuami Eugene",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-10-Love-Nwantiti.jpg',
          youtubeID: 'D-YDEyuDxWU'
      },
      {
          title: "TI CHOU", 
          artist: "Lya Sherley",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-11-Ti-chou.jpg',
          youtubeID: 'SUKkIh0XlVY'
      },
      {
          title: "Bed", 
          artist: "Joel Corry x RAYE x David Guetta",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-12-Bed.jpg',
          youtubeID: 'mD2a9YzKV3w'
      },
      {
          title: "Peaches", 
          artist: "Justin Bieber",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-13-peaches.jpg',
          youtubeID: 'tQ0yjYUFKAE'
      },
      {
          title: "Où sera le monde", 
          artist: "Marc Dupré",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-14-Ou-sera-le-monde.jpg',
          youtubeID: 'mHRNXB4FCG8'
      },
      {
          title: "Jerusalema", 
          artist: "Master KG",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-15-Jerusalema.jpg',
          youtubeID: 'fCZVL_8D048'
      },
      {
          title: "Elle est partie", 
          artist: "Sarahmée",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-16-elle-est-partie.jpg',
          youtubeID: 'as0gFY8F4ps'
      },
      {
          title: "By Your Side", 
          artist: "Calvin Harris",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-17-by-your-side.jpg',
          youtubeID: '4hu5iCqQVcM'
      },
      {
          title: "Mon soleil",
          artist: "DADJU, ANITTA",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-18-mon-soleil.jpg',
          youtubeID: 'mmc2sCXrTws'
      },
      {
          title: "We are good",
          artist: "Dua Lipa",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-19-we-are-good.jpg',
          youtubeID: 'jr47YisIsz8'
      },
      {
          title: "Cold Heart",
          artist: "Elton John & Dua Lipa",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-20-cold-heart.jpg',
          youtubeID: 'tswzRsyxL3c'
      },
      {
          title: "Up",
          artist: "Inna",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-21-up.jpg',
          youtubeID: 'AtVPsPct4KM'
      },
      {
          title: "Early in the morning",
          artist: "Kris Kross Amsterdam, Shaggy, Conor Maynard",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-22-Early-in-the-morning.jpg',
          youtubeID: 'GlJ-fMjqhwk'
      },
      {
          title: "Where are you now",
          artist: "Lost Frequencies",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-23-where-are-you-now.jpg', 
          youtubeID: 'PoP2Sa7wYNQ'
      },
      {
          title: "Better Days",
          artist: "Neiked",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-24-Better-days.jpg',
          youtubeID: 'GQAOrCOknCY'
      },
      {
          title: "Girlz Wanna Have Fun",
          artist: "MATTN , Stavros Martina & Kevin D",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-25-Girl-wana-have-fun.jpg',
          youtubeID: 'BJzbjsQlBMo'
      }
    ];

    let catSongs = [
      {
        title: "Zot Destin",
        artist: "Mike B sony",
        image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-1-Zot-Destin.jpg',
        youtubeID: '6Eo4P8EyRro'
      },
      {
          title: "ZUBEIDA", 
          artist: "BLUE BAY BAND",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-3-Zubeida.jpg',
          youtubeID: 'vto81DxLtDc'
      },
      {
          title: "Ambalaba", 
          artist:  "Claudia Veeraragoo Featuring Jp Mootoo et Melanie",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-2-Ambalaba.png',
          youtubeID: 'KKYzUSBbyOg'
      },
      {
          title: "Exotic Girl",
          artist: "Ty Carter",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/No-6-Exotic-Girl.jpg',
          youtubeID: '-UVHlUoHGJw'
      },
      {
          title: "Tamam sa", 
          artist:  "ShattaBoyz",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/263403625_1032574224249655_7725271274789303453_n.jpg',
          youtubeID: '3DhtnuQJnYQ'
      },
      {
          title: "Maman o Maman",
          artist: "Selvina Periana",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/Maman-o-Maman.jpg',
          youtubeID: 'zBgg2OYe0H0'
      },
    ];

    switch (type) {
      case "Séga":
        this.items = segaSongs;
        break;
      case "Bollywood":
        this.items = bhojSongs;
        break;
      case "Internationale":
        this.items = euroSongs;
        break;
      case "Choix Du Public-Canada":
        this.items = catSongs;
        break;
    }

    return this.loading = false;
  }

}
