export const getApiUrl = () => import.meta.env.VITE_API_URL;

export async function Get(uri: string, token?: string){
  const headers : HeadersInit = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }

  return await fetch(uri, {
    headers: headers
  });
}

export async function Post<T>(uri: string,  data: T, token?:string,) {
  const headers : HeadersInit = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }

  return await fetch(uri, {
    method: "POST",
    body: JSON.stringify(data),
    headers: headers
  });
}
