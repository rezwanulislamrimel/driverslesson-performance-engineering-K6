import http from 'k6/http';
import { sleep } from 'k6';

export function userJourney() {

    http.get('https://driverslesson.com/');

    sleep(3);

    http.get('https://driverslesson.com/contact');

    sleep(2);
}
