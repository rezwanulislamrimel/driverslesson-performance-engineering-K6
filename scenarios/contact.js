import http from 'k6/http';
import { check } from 'k6';

export function contact() {

    const res = http.get('https://driverslesson.com/contact');

    check(res, {
        'contact status 200': (r) => r.status === 200,
    });
}
