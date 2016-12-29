class HomeService {
  constructor($http) {
    'ngInject;';
    this.$http = $http;
  }
  getCommentById(id) {
    return this.$http.get('/comments/' + id);
  }
}
export default HomeService;
