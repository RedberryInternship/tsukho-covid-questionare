import { SendUserData } from '~/types';
import instance from './axios';

export const sendUserData = (data: SendUserData) => {
  return instance.post('/', data);
};
