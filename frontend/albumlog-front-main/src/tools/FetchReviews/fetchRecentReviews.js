import apiBaseUrl from "../apiBaseUrl";

export default async function fetchRecentReviews(setRecentReviews, setPageCount, currentPage) {
    const url = `${apiBaseUrl}/reviews?page=${currentPage}`
    try {
      const res = await fetch(url, {
        method: 'GET'
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
