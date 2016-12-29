class AlbumItemService {
  constructor($http) {
    'ngInject;';
    this.$http = $http;
  }
  getCommentById(id) {
    return this.$http.get('/comments/' + id);
  }
}
export default AlbumItemService;
