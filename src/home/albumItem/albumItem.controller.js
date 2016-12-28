class albumItemController {
  constructor( $rootScope, albumItemService) {
    'ngInject';
    albumItemService;

    let albums = function(){
      albumItemService.getAlbums().then(response =>
      this.albums = response.data).then(error => console.log(error));
      console.log(this.albums);
    };

  }
}

export default albumItemController;
