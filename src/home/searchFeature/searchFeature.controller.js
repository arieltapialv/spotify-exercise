class searchFeatureController {
  constructor( $rootScope, SearchFeatureService) {
    'ngInject';
    this.SearchFeatureService = SearchFeatureService;
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
