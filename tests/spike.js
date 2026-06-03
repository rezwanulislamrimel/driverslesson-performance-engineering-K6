import { homepage } from '../scenarios/homepage.js';

export const options = {

    stages: [
        { duration: '1m', target: 50 },
        { duration: '30s', target: 500 },
        { duration: '1m', target: 50 }
    ]
};

export default function () {
    homepage();
}
