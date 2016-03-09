/* beautify ignore:start */
import {it, inject, beforeEachProviders} from 'angular2/testing';
import {UserService} from './user-service.service';
/* beautify ignore:end */

describe('Service: UserService', () => {

    beforeEachProviders(() => [UserService]);

    it('should be defined', inject([UserService], (service: UserService) => {
        expect(service).toBeDefined();
    }));

});