import apiBaseUrl from "../apiBaseUrl";

export default async function fetchOneProfile(id, setOneProfileData) {
    const url = `${apiBaseUrl}/user/${id}`
    try {
      const res = await fetch(url, {
        method: 'GET'
      });
      const responseData = await res.json();
      const data = [res, responseData]
      setOneProfileData(data)
    } catch (err) {
      console.log(err)
      return err
    }
  }
