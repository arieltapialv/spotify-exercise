class searchFeatureController {
  constructor( $rootScope, SearchFeatureService) {
    'ngInject';
    this.SearchFeatureService = SearchFeatureService;
  }

  $onInit() {
    this.albums = [];
  }

  search(param){
    this.SearchFeatureService.getAlbumsByName(param).then((response) =>
    {
      this.albums = response.data.albums.items;

      this.onSearch({
        $event:{albums: this.albums}
      });

    });
  }
}

export default searchFeatureController;
