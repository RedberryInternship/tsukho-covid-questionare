import { SendUserData } from '~/types';
import instance from './axios';

const sendUserData = (data: SendUserData) => {
  return instance.post('/', data);
};

export default sendUserData;
