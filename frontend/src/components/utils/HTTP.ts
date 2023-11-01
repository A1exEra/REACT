/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { defer, json, redirect } from 'react-router-dom';
import { EVENT_DATA } from '../../types';
import { getItemFromLocalStorage } from './auth';

export const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    // return { isError: true, message: 'error while fetching the data...' };
    // throw new Error('error while fetching the data...');
    // throw new Response(JSON.stringify({ message: 'Could not fetch events!' }), {
    //   status: 500,
    //   statusText: 'Could not fetch events!',
    // });
    //this is a better way to rcreate erro handling
    throw json({ message: 'Could not fetch events!' }, { status: 500 });
  } else {
    const data = await response.json();
    return data.events;
  }
};
export const getEvents = () => {
  return defer({ events: loadEvents() });
};

export const getEventById = async ({ params }: any) => {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`
  );
  if (!response.ok) {
    throw json(
      { message: `Could not fetch event with id: ${params.eventId}` },
      { status: 500 }
    );
  } else {
    const data = await response.json();
    return data.event;
  }
};

export const patchOrPostEventActions = async ({ request, params }: any) => {
  const data = await request.formData();
  console.log('request', request);
  const eventData: EVENT_DATA = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  };
  const error = {
    status: 500,
    message: 'Could not save event!',
  };
  let url = `http://localhost:8080/events`;
  if (request.method === 'PATCH') {
    url = `http://localhost:8080/events/${params.eventId}`;
    error.message = `Could not fetch event with id: ${params.eventId}`;
  }
  const token = getItemFromLocalStorage();
  const response = await fetch(url, {
    method: request.method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(eventData),
  });
  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: error.message }, { status: 500 });
  }
  return redirect('/events');
};

export const deleteEvent = async ({ request, params }: any) => {
  const token = getItemFromLocalStorage();
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`,
    {
      method: request.method,
      headers: { Authorization: 'Bearer ' + token },
    }
  );
  if (!response.ok) {
    throw json(
      { message: `Could not delete event with id: ${params.eventId}` },
      { status: 500 }
    );
  }
  return redirect('/events');
};
export const authentication = async ({ request }: any) => {
  console.log(request);
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';
  console.log({ MODE: mode });
  if (mode !== 'login' && mode !== 'signup') {
    throw json({ message: `Unsupported mode: ${mode}` }, { status: 422 });
  }
  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };
  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(authData),
  });
  if (response.status === 422 || response.status === 401) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: 'could not authenticate user!' }, { status: 500 });
  }
  //if all isgood we have to managethetoken here
  const resData = await response.json();
  console.log('RESPONSE_DATA', resData);
  const token = resData.token;
  localStorage.setItem('token', token);
  //set token expiration date
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expiration', expiration.toISOString());
  return redirect('/');
};
