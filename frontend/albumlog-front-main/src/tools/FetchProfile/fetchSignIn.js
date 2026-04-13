import apiBaseUrl from "../apiBaseUrl";

export default async function fetchSignIn(data, authType) {
    const url = `${apiBaseUrl}/auth/${authType}`
    try {
      const res = await fetch(url, {
        method: 'POST', 
        headers: {
            "Content-Type": "application/json",
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
