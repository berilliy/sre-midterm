import apiBaseUrl from "../apiBaseUrl";

export default async function fetchRecentReviewsAlbum(obj, setRecentReviews, setPageCount, currentPage, setTotal) {
    const url = `${apiBaseUrl}/reviews/album/?page=${currentPage}`
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj)
      });
      const responseData = await res.json();
      const data = [res, responseData]
      console.log([res, responseData])
      setRecentReviews(responseData.reviews)
      setPageCount(responseData.pages.page)
      setTotal(responseData.pages.total)
    } catch (err) {
      console.log(err)
      return err
    }
  }
