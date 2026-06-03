import { homepage } from '../scenarios/homepage.js';

export const options = {

    vus: 50,

    duration: '30m'
};

export default function () {
    homepage();
}
