class searchFeatureController {
  constructor( $rootScope, AlbumItemService) {
    'ngInject';
    this.AlbumItemService = AlbumItemService;
  }

  $onInit() {
    this.albums = [];
  }

  search(param){
    this.AlbumItemService.getAlbumsByName(param).then((response) =>
    {
      this.albums = response.data.albums.items;
    }
    );
  }

}

export default searchFeatureController;
