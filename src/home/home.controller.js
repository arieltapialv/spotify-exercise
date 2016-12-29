class homeController {
  constructor( ) {
    'ngInject';

    this.showresults = function(res){
      this.albums = res.albums;
    };
  }

}

export default homeController;
