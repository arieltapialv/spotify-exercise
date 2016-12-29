class commentFeatureController {
  constructor(CommentFeatureService ) {
    'ngInject';
    this.CommentFeatureService = CommentFeatureService;
  }

  $onInit() {
    this.albumId = this.albumId;
    console.log(this.comment);

  }

  sendComment(user){
    user.albumId = this.albumId;
    this.CommentFeatureService.createComment(user).then((response) =>
    {
      console.log(response);

    });
  }
}

export default commentFeatureController;
