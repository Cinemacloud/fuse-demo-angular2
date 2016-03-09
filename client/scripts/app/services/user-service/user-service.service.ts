/* beautify ignore:start */
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
/* beautify ignore:end */

@Injectable()
export class UserService {
    constructor(private http: Http) {

    }

    get() {

       return this.http.get('http://api.randomuser.me/?results=10&nat=us')
            .map(res => res.json())
            .map(res => res.results.map(item => {
                return {
                    fullname: item.user.name.first + ' ' + item.user.name.last,
                    picture: item.user.picture.large,
                    rotation: -4 + 8 * Math.random()
                };
            }));

    }
}
