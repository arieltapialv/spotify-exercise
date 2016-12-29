class homeController {
  constructor(HomeService ) {
    'ngInject';
    this.HomeService = HomeService;

    this.showresults = function(res){
      this.albums = res.albums;
    };
  }

  showComment(album){
    this.commentId = album.albumid;
    this.HomeService.getCommentById(this.commentId).then(response => {
      this.comment = response;
    });

  }

}

export default homeController;
