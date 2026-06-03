import { sleep } from 'k6';
import { homepage } from '../scenarios/homepage.js';
import { thresholds } from '../utils/thresholds.js';

export const options = {
    vus: 100,
    duration: '5m',
    thresholds
};

export default function () {
    homepage();

    sleep(2);
}
