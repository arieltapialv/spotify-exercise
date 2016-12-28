class AlbumItemService {
  constructor($http) {
    'ngInject;';
    this.$http = $http;
  }
  getAlbums() {
    return this.$http.get('https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj');
  }
}
export default AlbumItemService;
