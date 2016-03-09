/* beautify ignore:start */
import {Component} from 'angular2/core';
import {Observable} from 'rxjs';
import {UserService} from '../../services/user-service/user-service.service';
require('./ngux/main.js');
/* beautify ignore:end */

@Component({
    selector: 'Main',
    template: require('./main.ngux'),
    providers: [UserService]
})
export class Main {
    users: Observable<any>;
    constructor(private userService: UserService) {
        this.users = this.userService.get();
    }
}
