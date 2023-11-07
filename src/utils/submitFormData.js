import axios from 'axios';
import verifyFormData from './verifyFormData';

async function submitFormData(url) {
  const formData = verifyFormData();
  try {
    const response = await axios.post(url, formData);
    return response.data;
  } catch (error) {
    throw new Error(`Error submitting FormData: ${error.message}`);
  }
}

export default submitFormData;