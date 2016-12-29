class albumItemController {
  constructor(albumItemService) {
    'ngInject';
    this.albumItemService = albumItemService;

  }
  $onInit(){
    this.album = this.albumData;
  }

  viewComments(id){
    this.showComment({
      $event:{albumid: id}
    });
    /*
    this.albumItemService.getCommentById(id).then((res) => {
      this.commentRes = res;
    });*/
  }
}

export default albumItemController;
