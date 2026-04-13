import apiBaseUrl from "./apiBaseUrl";

export default async function fetchPostReview(data, token) {
    const url = `${apiBaseUrl}/reviews/`
    try {
      const res = await fetch(url, {
        method: 'POST', 
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + token
        },
        body: data,
      });
      const responseData = await res.json();
      return [res, responseData];

    } catch (err) {
      console.log(err)
      return err
    }
  }
