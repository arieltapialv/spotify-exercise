class CommentFeatureService {
  constructor($http) {
    'ngInject;';
    this.$http = $http;
  }
  createComment(comment) {
    console.log('comment',comment);
    return this.$http.post('/comments', comment);
  }
}
export default CommentFeatureService;
