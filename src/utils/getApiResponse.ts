import Expense from "../types/Expenses";

export default async function getApiResponse( url: string, config: object): Promise<Expense[]> {
    const response = await fetch(url, config);

    if(!response.ok) throw new Error('Network response not ok' + response.statusText);
    const data = await response.json();

    if(!data) throw new Error('Data object is empty');

    return data;
}
