import { client, checkError } from './client';

export async function getToDos() {
  const resp = await client.from('todos').select('*').order('id');
  return checkError(resp);
}

export async function setComplete(id, complete) {
  const resp = await client.from('todos').update({ complete: complete }).eq('id', id);
  return checkError(resp);
}

export async function createToDo(desc) {
  const resp = await client.from('todos').insert({ description: desc, complete: false }).single();
  return checkError(resp);
}
