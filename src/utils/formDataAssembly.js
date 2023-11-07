import FormData from 'form-data';
import { individualInfo, careerInfo } from '../stores';

function assembleFormData() {
  const formData = new FormData();
  formData.append('individualInfo', JSON.stringify(individualInfo.state.item));
  formData.append('careerInfo', JSON.stringify(careerInfo.state.items));
  return formData;
}

export default assembleFormData;