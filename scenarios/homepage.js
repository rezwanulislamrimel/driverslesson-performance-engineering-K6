import http from 'k6/http';
import { check } from 'k6';

export function homepage() {

    const res = http.get('https://driverslesson.com/');

    console.log(
        `Status: ${res.status}, Duration: ${res.timings.duration}ms`
    );

    check(res, {
        'homepage status 200': (r) => r.status === 200,
    });
}
