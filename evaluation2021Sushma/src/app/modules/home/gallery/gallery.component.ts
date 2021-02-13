import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiHandlerService } from 'src/app/Services/api-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  selectedTab = 0
  images: any;
  photos: any;
  videos = [];
  favouriteVideoList = [];
  favouriteImageList = [];
  pageNoImage: any = 1;
  pageNoVideo = 1
  @Output() favouriteTab = new EventEmitter<any>();
  constructor(private apiHandler: ApiHandlerService,
    private router:Router
    ) { }

  ngOnInit(): void {
    // window.onscroll = function (ev) {
    //   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    //     if (this.selectedTab == 1) {
    //       this.pageNoImage = this.pageNoImage + 1
    //       this.getImages()
    //     } else {
    //       this.pageNoVideo = this.pageNoVideo + 1
    //       this.getVideos()
    //     }

    //   }
    // };
    this.getImages()
    this.getVideos()
  }
  getImages() {
    this.apiHandler.get(this.pageNoImage).subscribe((data: any) => {
    localStorage.setItem('data', JSON.stringify(data))

    this.images = JSON.parse(localStorage.getItem('data'))
    console.log(this.images, "sush")
    this.photos = this.images.photos
    })

  }
  getVideos() {
    this.apiHandler.getvideos(this.pageNoVideo).subscribe((data: any) => {
    localStorage.setItem('videos', JSON.stringify(data))
    let videos = JSON.parse(localStorage.getItem('videos'))
    console.log(this.images, "sush")
    this.videos = videos.videos
    this.videos.forEach(element => {
      element.liked = false
    });
    })
  }
  tabChanged(index) {
    this.selectedTab = index;
    this.favouriteTab.emit(this.selectedTab)
  }
  clickLikeIcon(index, option) {
    if (option == 'image') {

      this.photos[index].liked = !this.photos[index].liked
    } else {
      this.videos[index].liked = !this.videos[index].liked
    }
  }
  getFavourites() {

    if (this.selectedTab != 2) {

      this.selectedTab = 2;
      this.favouriteTab.emit(this.selectedTab)

      let likedPhotos = this.photos.filter(data => data.liked == true)
      this.favouriteImageList = this.photos.filter(data => data.liked == true)
      this.favouriteVideoList = this.videos.filter(data => data.liked == true)
      console.log(this.favouriteImageList, "fv")
    }

  }
  selectImage(photo){

    this.router.navigate(['details'], {
      queryParams:
      {
        id: this.selectedTab,
        item:JSON.stringify(photo)
      }
    })
  }
}
