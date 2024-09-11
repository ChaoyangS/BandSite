const apiKey = "d382aed6-ab86-4512-b7b3-d7ac239f30cf";
const show1 = [];

class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = `https://unit-2-project-api-25c1595833b2.herokuapp.com/`;
  }

  async postComment(comment) {
    const newComment = {
      comment: comment.comment.value,
      name: comment.name.value,
      timestamp: comment.timestamp.value,
    };
    try {
      await axios.post(`${this.baseUrl}comments?api_key=${apiKey}`, newComment);
      this.getComments();
    } catch (e) {
      console.log(e);
    }
  }

  async getShows() {
    const responseShow = await axios.get(
      `${this.baseUrl}showdates?api_key=${apiKey}`
    );
    console.log(responseShow);
    const showData = responseShow.data;
    return showData;
  }

  async getComments() {
    const response = await axios.get(
      `${this.baseUrl}comments?api_key=${apiKey}`
    );

    const commentsData = response.data;
    return commentsData;
  }
}

// const BandSiteShow = BandSite.getShows();
//const BandSitePostComment = BandSite.getComments();
