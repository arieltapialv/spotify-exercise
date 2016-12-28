class AlbumItemService {
  constructor($http) {
    'ngInject;';
    this.$http = $http;
  }
  getAlbumsByName(name) {
    return this.$http.get('/search', {
      params: {q: name}
    });
  }
}
export default AlbumItemService;
