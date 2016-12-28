class albumItemController {
  constructor( $rootScope, AlbumItemService) {
    'ngInject';
    this.AlbumItemService = AlbumItemService;
  }

  $onInit() {
    this.albums = [];
  }

  search(param){
    this.AlbumItemService.getAlbumsByName(param).then((response) =>
      this.albums = response.data);

    console.log(this.albums);
  }

}

export default albumItemController;
