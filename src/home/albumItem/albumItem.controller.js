class albumItemController {
  constructor(albumItemService) {
    'ngInject';
    this.albumItemService = albumItemService;

  }
  $onInit(){
    console.log(this.albumData);
    this.album = this.albumData;
  }
  viewComments(id){
    console.log('hi');
    this.albumItemService.getCommentById(id).then((res) => {
      console.log('res',res);
    });
  }
}

export default albumItemController;
