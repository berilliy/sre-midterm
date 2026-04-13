import apiBaseUrl from "../apiBaseUrl";

export default async function fetchRecentReviewsUser(obj, setRecentReviews, setPageCount, currentPage) {
    const url = `${apiBaseUrl}/reviews/user/?page=${currentPage}`
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
      setPageCount(responseData.pages)
    } catch (err) {
      console.log(err)
      return err
    }
  }
