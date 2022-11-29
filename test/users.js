import { describe } from "mocha";
import supertest from "supertest";
const request = supertest('https://gorest.co.in/public/');

import { expect } from "chai";

const TOKEN ='ad9727c2064575a2a2498c73021f3aa2b5076348a1ce6b5fcb3edb068c5aa544'
describe ('Users',()=>{
    it('GET /users',()=>{
        /*
        request
        .get('v2/users?access-token=${TOKEN}').end((err,res)=>{
            //console.log(res.body);
            expect(res.body).to.not.be.empty;
            done();
        });
         */
       return request
        .get('v2/users?access-token=${TOKEN}').then((res)=>{
           // console.log(res.body);
            expect(res.body).to.not.be.empty;
        });
    });
 
    it('GET /users/:id',()=>{
        return request
        .get('v2/users/5509?access-token=${TOKEN}').then((res)=>{
            //console.log(res.body.id);
            expect(res.body.id).to.be.eq(5509);
        });
    });
    
});