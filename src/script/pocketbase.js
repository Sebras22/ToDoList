import PocketBase from 'pocketbase';

export const pb = new PocketBase('https://louisrvl.fr/pocketbase');
pb.autoCancellation(false)
